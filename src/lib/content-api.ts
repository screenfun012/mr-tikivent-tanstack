// @ts-nocheck
/*
 * MR Engines · Tiki Vent — sloj za sadržaj (jedino mesto koje backend povezuje).
 * Adresa API-ja dolazi iz .env:  VITE_API_BASE  (prazno = lokalni režim, sadržaj u browseru).
 * Stranice i admin koriste window.MRContent: load(site), save(site, data), login(pin), logout(), upload(file, kind).
 * Ugovor sa serverom (endpointi i formati): README.md → "Backend".
 */
if (typeof window !== 'undefined') {
  (function () {
    var CONFIG = { apiBase: import.meta.env.VITE_API_BASE || '', withCredentials: String(import.meta.env.VITE_API_WITH_CREDENTIALS) === 'true' };
  
    var SITES = { mr: { key: 'mrpromo.content', path: 'mrengines' }, tv: { key: 'tikivent.content', path: 'tikivent' } };
    var TOKEN_KEY = 'mr.admin.token';
    function cfg() { var o = window.MR_CONFIG || {}; return { apiBase: o.apiBase != null ? o.apiBase : CONFIG.apiBase, withCredentials: o.withCredentials != null ? o.withCredentials : CONFIG.withCredentials }; }
    function base() { return String(cfg().apiBase || '').replace(/\/+$/, ''); }
    function isRemote() { return !!base(); }
    // Stare putanje iz prototipa (sadržaj sačuvan pre pakovanja) -> putanje u ovom paketu
    var LEGACY = [['uploads/Life_of_an_engine_-_MR_Engines_20MB.mp4', 'media/life-of-an-engine.mp4'], ['uploads/assets-1790152784922-gvhc.html', 'media/mr-engines-presentation.html']];
    function fixPaths(v) {
      if (typeof v === 'string') { for (var i = 0; i < LEGACY.length; i++) if (v === LEGACY[i][0]) return LEGACY[i][1]; return v; }
      if (Array.isArray(v)) return v.map(fixPaths);
      if (v && typeof v === 'object') { var o = {}; for (var k in v) if (Object.prototype.hasOwnProperty.call(v, k)) o[k] = fixPaths(v[k]); return o; }
      return v;
    }
    function readCache(site) { try { return fixPaths(JSON.parse(localStorage.getItem(SITES[site].key) || 'null')); } catch (e) { return null; } }
    function writeCache(site, data) { try { localStorage.setItem(SITES[site].key, JSON.stringify(data)); return true; } catch (e) { return false; } }
    function token() { try { return sessionStorage.getItem(TOKEN_KEY) || ''; } catch (e) { return ''; } }
    function request(method, url, body, headers) {
      headers = headers || {};
      var t = token(); if (t) headers.Authorization = 'Bearer ' + t;
      return fetch(base() + url, { method: method, headers: headers, body: body, cache: 'no-store', credentials: cfg().withCredentials ? 'include' : 'same-origin' })
        .then(function (r) {
          if (r.status === 404) return null;
          if (!r.ok) { var e = new Error('HTTP ' + r.status); e.status = r.status; throw e; }
          var ct = r.headers.get('content-type') || '';
          return ct.indexOf('json') >= 0 ? r.json() : r.text();
        });
    }
  
    var api = {
      version: 1,
      sites: SITES,
      get remote() { return isRemote(); },
      cached: readCache,
      load: function (site) {
        if (!isRemote()) return Promise.resolve(readCache(site));
        return request('GET', '/content/' + SITES[site].path).then(function (data) { data = fixPaths(data); if (data && typeof data === 'object') writeCache(site, data); return data; });
      },
      save: function (site, data) {
        if (!isRemote()) return writeCache(site, data) ? Promise.resolve(true) : Promise.reject(new Error('quota'));
        return request('PUT', '/content/' + SITES[site].path, JSON.stringify(data), { 'Content-Type': 'application/json' }).then(function () { writeCache(site, data); return true; });
      },
      login: function (pin) {
        return request('POST', '/auth/login', JSON.stringify({ pin: pin }), { 'Content-Type': 'application/json' })
          .then(function (r) { if (r && r.token) { try { sessionStorage.setItem(TOKEN_KEY, r.token); } catch (e) {} return true; } return false; })
          .catch(function (e) { if (e && (e.status === 401 || e.status === 403)) return false; throw e; });
      },
      logout: function () { try { sessionStorage.removeItem(TOKEN_KEY); } catch (e) {} },
      upload: function (fileOrDataUrl, kind, name) {
        if (!isRemote()) return typeof fileOrDataUrl === 'string' ? Promise.resolve(fileOrDataUrl) : Promise.reject(new Error('local mode'));
        var blobP = typeof fileOrDataUrl === 'string' ? fetch(fileOrDataUrl).then(function (r) { return r.blob(); }) : Promise.resolve(fileOrDataUrl);
        return blobP.then(function (blob) {
          var fd = new FormData();
          fd.append('file', blob, name || blob.name || ('upload.' + ((blob.type || 'application/octet-stream').split('/')[1] || 'bin')));
          fd.append('kind', kind || 'image');
          return request('POST', '/upload', fd);
        }).then(function (r) { if (!r || !r.url) throw new Error('upload: odgovor nema "url"'); return r.url; });
      }
    };
  
    window.MRContent = api;
    try { window.dispatchEvent(new Event('mrcontent:ready')); } catch (e) {}
  })();
}

export {}
