// @ts-nocheck
/* eslint-disable */
import * as React from 'react'
import { DCLogic, createDCPage, __css, __style, __dv, __dc, __arr, __t } from '../lib/dc'

// ───────────────────────────── Logika ─────────────────────────────
const KEYS = { mr: 'mrpromo.content', tv: 'tikivent.content' };
const RED = '#ed1c24';
const pad = n => String(n).padStart(2, '0');
const clone = o => JSON.parse(JSON.stringify(o));
const eng = (mfr, brand, name, code, fuel, cc, timing, apps, price, photos) => ({ mfr, brand, name, code, fuel, cc, timing, apps, price, photos: photos || [], parts: { sr: [], en: [] } });
const MR_DEF = {
  engines: [
    eng('renault', 'Renault', '1.2 TCe', 'H5F', 'petrol', 1197, 'chain', ['Renault Clio IV', 'Captur', 'Mégane IV', 'Dacia Duster', 'Nissan Juke'], 1700, ['/assets/engine-d.png', '/assets/engine-a.png', '/assets/engine-c.png', '/assets/engine-b.png']),
    eng('renault', 'Renault', '0.9 TCe', 'H4B', 'petrol', 898, 'chain', ['Renault Clio IV', 'Twingo III', 'Dacia Sandero', 'Logan'], 1450),
    eng('renault', 'Renault', '1.5 dCi', 'K9K', 'diesel', 1461, 'belt', ['Renault Clio', 'Mégane', 'Kadjar', 'Dacia Duster', 'Nissan Qashqai'], 1650),
    eng('renault', 'Renault', '1.6 dCi', 'R9M', 'diesel', 1598, 'chain', ['Renault Mégane', 'Scénic', 'Talisman', 'Nissan Qashqai', 'X-Trail'], 2100),
    eng('vag', 'VW', '1.2 TSI', 'CJZA', 'petrol', 1197, 'belt', ['VW Golf VII', 'Polo', 'Škoda Octavia III', 'Seat Leon'], 1750),
    eng('vag', 'VW', '1.4 TSI', 'CAXA', 'petrol', 1390, 'chain', ['VW Golf VI', 'Passat B7', 'Škoda Octavia II', 'Seat Leon'], 1850),
    eng('vag', 'VW', '1.6 TDI', 'CAYC', 'diesel', 1598, 'belt', ['VW Golf VI', 'Polo', 'Škoda Octavia II', 'Fabia'], 1600),
    eng('vag', 'VW', '2.0 TDI', 'CFFB', 'diesel', 1968, 'belt', ['VW Golf VI', 'Passat B7', 'Tiguan', 'Škoda Superb'], 1900),
    eng('psa', 'Peugeot', '1.2 PureTech', 'EB2DT', 'petrol', 1199, 'belt', ['Peugeot 208', '308', '3008', 'Citroën C3', 'C4'], 1800),
    eng('psa', 'Peugeot', '1.6 HDi', 'DV6C', 'diesel', 1560, 'belt', ['Peugeot 308', 'Partner', 'Citroën C4', 'Berlingo'], 1550),
    eng('ford', 'Ford', '1.0 EcoBoost', 'M1DA', 'petrol', 999, 'belt', ['Ford Fiesta', 'Focus', 'B-Max', 'C-Max'], 1700),
    eng('ford', 'Ford', '1.5 TDCi', 'XWDB', 'diesel', 1499, 'belt', ['Ford Focus', 'Fiesta', 'Transit Connect'], null),
    eng('fiat', 'Fiat', '1.3 Multijet', '199A2.000', 'diesel', 1248, 'chain', ['Fiat Punto', 'Doblò', 'Opel Corsa D 1.3 CDTI'], null),
    eng('mercedes', 'Mercedes-Benz', '2.2 CDI', 'OM651', 'diesel', 2143, 'chain', ['Mercedes C W204', 'E W212', 'Sprinter', 'Vito'], null),
  ],
  steps: [
    ['Prijem i evidencija', 'Svaki motor dobija MR broj i prolazi ulaznu kontrolu.', 'Intake and registration', 'Every engine gets an MR number and passes intake inspection.'],
    ['Rasklapanje i pranje', 'Kompletno rasklapanje, industrijsko pranje i sortiranje delova.', 'Disassembly and cleaning', 'Complete disassembly, industrial cleaning and parts sorting.'],
    ['Merenje i dijagnostika', 'Merenje svih vitalnih mera i odluka o obradi i zameni delova.', 'Measuring and diagnostics', 'All vital dimensions measured; decisions on machining and replacement.'],
    ['Mašinska obrada', 'Blokovi, glave, radilice i klipnjače na DMG MORI, Rottler i laserskoj opremi.', 'Machining', 'Blocks, heads, crankshafts and rods on DMG MORI, Rottler and laser equipment.'],
    ['Sklapanje', 'Po fabričkim standardima, isključivo sa novim zamenskim delovima.', 'Assembly', 'To factory standards, exclusively with new replacement parts.'],
    ['Test i završna kontrola', 'Provera pritisaka, zaptivenosti i funkcija pre otpreme.', 'Testing and final inspection', 'Pressure, sealing and function checks before dispatch.'],
    ['Pakovanje', 'Zaštitno pakovanje na paleti, spremno za transport.', 'Packing', 'Protective packing on a pallet, ready for transport.'],
    ['Isporuka i izvoz', 'Utovar u kamion - isporuka u Srbiji, regionu i EU.', 'Delivery and export', 'Loaded onto the truck - delivered across Serbia, the region and the EU.'],
  ].map(([t, d, te, de]) => ({ sr: { t, d }, en: { t: te, d: de }, photo: '', clip: '' })),
  chapters: [['00:00', 'Prijem motora', 'Engine intake'], ['00:15', 'Rasklapanje i pranje', 'Disassembly and cleaning'], ['00:35', 'Merenje i dijagnostika', 'Measuring and diagnostics'], ['00:55', 'Mašinska obrada', 'Machining'], ['01:25', 'Sklapanje', 'Assembly'], ['01:50', 'Test i završna kontrola', 'Testing and final inspection'], ['02:10', 'Pakovanje', 'Packing'], ['02:25', 'Utovar i transport', 'Loading and transport']].map(([time, sr, en]) => ({ time, sr, en })),
  videoUrl: '/media/life-of-an-engine.mp4', heroVideo: '/media/life-of-an-engine.mp4', videoPoster: '', brands: '', booksUrl: 'https://mrengines-app.rs/kontrolna-tabla', pin: '1968', yearly: 1200, aboutPhoto: '', tikiPhoto: '',
  certs: [{ url: '' }, { url: '' }, { url: '' }, { url: '' }],
  texts: { sr: {}, en: {} },
  gallery: ['hall', 'machines', 'engines', 'team', 'hall', 'machines', 'engines', 'shipping', 'machines', 'team', 'engines', 'shipping'].map((cat, i) => ({ id: 'g' + pad(i + 1), cat, src: '' })),
};
const MR_TEXTS = [
  ['heroL1', 'Hero · red 1', 'Novi život', 'New life', 22], ['heroL2', 'Hero · red 2', 'za stari motor.', 'for an old engine.', 22], ['heroSub', 'Hero · podnaslov', 'Remont motora po fabričkim standardima…', 'Engine rebuilding to factory standards…', 170, 'area'],
  ['catTitle', 'Katalog · naslov', 'Nađi motor. Vidi šta dobijaš.', 'Find the engine. See what you get.', 44], ['catSub', 'Katalog · opis', 'Izaberi proizvođača…', 'Pick a manufacturer…', 180, 'area'],
  ['procTitle', 'Procesi · naslov', 'Od prijema do isporuke.', 'From intake to delivery.', 44], ['procSub', 'Procesi · opis', 'Svaki motor prolazi isti put…', 'Every engine follows the same path…', 180, 'area'],
  ['videoTitle', 'Video · naslov', 'Pogledaj kako nastaje remontovan motor.', 'Watch how a rebuilt engine is made.', 48], ['videoSub', 'Video · opis', 'Svi procesi za 2,5 minuta…', 'All processes in 2.5 minutes…', 180, 'area'],
  ['aboutL1', 'O nama · red 1', 'Tri generacije.', 'Three generations.', 20], ['aboutL2', 'O nama · red 2', 'Jedna porodica.', 'One family.', 20], ['aboutL3', 'O nama · red 3', 'Od 1968.', 'Since 1968.', 20],
  ['aboutLead', 'O nama · uvod', 'MR Group je osnovan 1968…', 'MR Group was founded in 1968…', 320, 'area'], ['aboutStory', 'O nama · priča', 'Priča o MR je priča o porodici…', 'The story of MR…', 260, 'area'],
  ['booksTitle', 'Knjige · naslov', 'Tehnička dokumentacija motora, na dodir.', 'Engine technical documentation, one tap away.', 48], ['booksBody', 'Knjige · opis', 'Aplikacija se otvara u novom prozoru…', 'The app opens in a new window…', 200, 'area'],
  ['photosTitle', 'Galerija · naslov', 'Hala, mašine, motori, tim.', 'Hall, machines, engines, team.', 44], ['photosSub', 'Galerija · opis', 'Fotografije iz proizvodnje…', 'Photos from production…', 180, 'area'],
];
const MFRS = [['renault', 'Renault · Dacia · Nissan'], ['vag', 'VW · Škoda · Seat · Audi'], ['psa', 'Peugeot · Citroën'], ['ford', 'Ford'], ['fiat', 'Fiat · Opel'], ['mercedes', 'Mercedes-Benz']];
const CATS = [['hall', 'Hala'], ['machines', 'Mašine'], ['engines', 'Motori'], ['team', 'Tim'], ['shipping', 'Isporuka']];
const TV_BRANDS = [['amc', 'AMC', 1, 'glave ventili'], ['nural', 'Nüral', 2, 'klipovi'], ['corteco', 'Corteco', 3, 'dihtunzi semerinzi'], ['ks', 'Kolbenschmidt', 4, 'klipovi karike kosuljice lezajevi'], ['ruville', 'Ruville', 5, 'razvod hladjenje'], ['freccia', 'Freccia', 6, 'glave bregaste ventili'], ['graf', 'Graf', 7, 'hladjenje'], ['metelli', 'Metelli', 8, 'glave bregaste razvod hladjenje ulje'], ['goetze', 'Goetze', 10, 'karike kosuljice'], ['elring', 'Elring', 11, 'dihtunzi semerinzi'], ['vernet', 'Calorstat by Vernet', 12, 'hladjenje'], ['ne', 'NE', 13, 'karike'], ['fai', 'FAI', 14, 'bregaste razvod ulje'], ['mahle', 'Mahle', 15, 'ventili klipovi karike kosuljice lezajevi'], ['autoventil', 'AutoVentil', 16, 'ventili'], ['reinz', 'Victor Reinz', 17, 'dihtunzi semerinzi'], ['king', 'King', 18, 'lezajevi'], ['mec', 'MEC Diesel', 19, 'klipovi kosuljice'], ['arco', 'Arco', 20, 'klipovi kosuljice'], ['pierburg', 'Pierburg', 21, 'hladjenje ulje']];
const TV_PARTS = [['glave', 'Glave motora', 'Glave motora, vođice i sedišta', 'Nove glave motora, vođice i sedišta ventila za putnički, teretni i industrijski program.'], ['bregaste', 'Bregaste i podizači', 'Bregaste, podizači i klackalice', 'Bregaste osovine, hidraulični podizači, klackalice i osovinice klackalica.'], ['ventili', 'Ventili', 'Ventili', 'Usisni i izduvni ventili, standardne i pojačane izvedbe, za benzinske i dizel motore.'], ['dihtunzi', 'Dihtunzi', 'Dihtunzi i garniture', 'Dihtunzi glave, kompletne garniture motora, dihtunzi poklopca ventila, usisa i izduva.'], ['klipovi', 'Klipovi', 'Klipovi', 'Klipovi sa osovinicama i osiguračima, standardne i reparaturne mere, putnički i industrijski program.'], ['karike', 'Karike', 'Karike', 'Kompleti karika po cilindru i po motoru, standardne i reparaturne mere.'], ['kosuljice', 'Košuljice', 'Košuljice cilindra', 'Mokre i suve košuljice za putnička, teretna vozila i radne mašine.'], ['lezajevi', 'Ležajevi', 'Ležajevi radilice i klipnjače', 'Glavni i leteći ležajevi, aksijalni ležajevi, standardne mere i podmere.'], ['semerinzi', 'Semerinzi', 'Semerinzi i zaptivke', 'Semerinzi radilice i bregaste, zaptivke ventila (gumice), zaptivke poklopaca.'], ['razvod', 'Razvod', 'Razvod: lanci, kaiševi, zatezači', 'Kompleti lanaca i kaiševa razvoda, zatezači, vođice, zupčanici i remenice.'], ['hladjenje', 'Pumpe za vodu', 'Pumpe za vodu i termostati', 'Pumpe za vodu, termostati i kućišta termostata, senzori temperature.'], ['ulje', 'Pumpe za ulje', 'Pumpe za ulje i vakuum pumpe', 'Pumpe za ulje, vakuum pumpe, EGR ventili i klapne usisa.']];
const TV_DEF = {
  pin: '1968',
  hero: { video: '/assets/tikivent-hero.mp4', poster: '', items: 50000 },
  catalogUrl: 'http://tiki.bavariahosting.com/orders/', email: 'office@tikivent.co.rs', phones: ['011 3979 636', '011 3979 606'], messaging: '',
  brands: TV_BRANDS.map(([id, name, n, parts]) => ({ id, name, logo: '/assets/brands/brand-' + pad(n) + '.png', parts: parts.split(' ') })),
  parts: TV_PARTS.map(([id, short, name, desc]) => ({ id, short, name, desc })),
  deals: [{ brand: 'mahle', off: '-10%', title: 'Klipovi i karike', note: 'Putnički program, kompleti po motoru', until: '31.10.', image: '' }, { brand: 'elring', off: '-15%', title: 'Garniture dihtunga glave', note: 'Na lageru za najtraženije motore', until: '31.10.', image: '' }, { brand: 'graf', off: '2+1', title: 'Pumpe za vodu', note: 'Za servise sa veleprodajnim nalogom', until: '15.11.', image: '' }],
  delivery: { freeBg: 3000, feeBg: 320, freeRs: 12000, hours: 'pon - pet 08:00 - 16:00', sched: [['Gradski', 'do kraja prethodnog dana', '08:00'], ['Novi Beograd i Zemun', '09:30', '10:00'], ['Gradski', '10:30', '11:00'], ['Smederevski put - Leštane', '11:30', '12:00'], ['Novi Beograd i Zemun', '14:15', '14:45'], ['Gradski', '14:15', '14:45']].map(([zone, cutoff, time]) => ({ zone, cutoff, time })) },
  locs: [{ name: 'Beograd', tag: 'Veleprodaja i maloprodaja', addr: 'Prešernova 15, Beograd', wd: '08:00 - 16:00', sat: '', tels: ['011 3979 636', '011 3979 606'], maps: 'https://maps.google.com/?q=Pre%C5%A1ernova+15,+Beograd' }, { name: 'Niš', tag: 'Franšiza', addr: 'Bulevar 12. februar 48, Niš', wd: '09:00 - 17:00', sat: '09:00 - 14:00', tels: ['', ''], maps: 'https://maps.google.com/?q=Bulevar+12.+februar+48,+Ni%C5%A1' }, { name: 'Čačak', tag: 'Franšiza', addr: 'Danila Mitrovića Avrama 12, Čačak', wd: '08:00 - 17:00', sat: '08:00 - 14:00', tels: ['', ''], maps: 'https://maps.google.com/?q=Danila+Mitrovi%C4%87a+Avrama+12,+%C4%8Ca%C4%8Dak' }],
  timeline: [['1992', 'Osnivanje', 'Rezervni delovi za motore za rastuće domaće tržište.'], ['1997', 'Specijalizacija', 'Reorganizacija: uvoz i prodaja delova motorne grupe postaju jedina delatnost.'], ['2010', 'Šira ponuda', 'Trap i upravljanje, filteri, šasija, ležajevi točka, homokinetički zglobovi, kočnice.'], ['Niš · Čačak', 'Franšize', 'Direktno prisustvo na jugu i zapadu Srbije uz veleprodaju i maloprodaju u Beogradu.'], ['2025', 'Deo MR Engines', 'Remont motora i delovi pod jednim krovom sa liderom u mašinskoj obradi.']].map(([y, t, d]) => ({ y, t, d })),
  texts: { heroEyebrow: 'Ovlašćeni distributer · od 1992', heroL1: 'Delovi motorne grupe.', heroL2: 'Spremno za razvoz.', heroSub: 'Preko 50.000 artikala vodećih svetskih proizvođača na lageru u Beogradu - za putnička i teretna vozila, plovila, poljoprivredne i radne mašine.', stat1: 'Artikala na lageru', stat2: 'Brendova', stat3: 'Razvoz dnevno · Beograd', stat4: 'Objekta u Srbiji', partsTitle: 'Dodirni deo. Vidi ko ga pravi.', partsSub: 'Presek motora - izaberi grupu delova i vidi brendove koje držimo na lageru. Zatim pošalji upit ili otvori katalog.', brandsSub: 'Dodirni logo i vidi koje grupe delova brend pokriva kod nas.', delivTitle: 'Beograd šest puta dnevno. Srbija kurirom.', delivSub: 'Sopstveni razvoz po Beogradu, AKS i City Express za ostatak Srbije. Porudžbine za kurira primamo radnim danima do 15:00.', dealsTitle: 'Ovog meseca.', catTitle: 'Lager, cene i porudžbine - za registrovane kupce veleprodaje.', aboutTitle: 'Od 1992. Deo MR Engines od 2025.', aboutBody: 'Tiki Vent je osnovan 1992. sa jasnim ciljem - kvalitetni rezervni delovi za motore na domaćem tržištu. Od 1997. specijalizovani smo za uvoz i prodaju delova motorne grupe, a lagerom od preko 50.000 artikala pokrivamo kompletnu potražnju Srbije.', mrTitle: 'Remont motora i delovi pod jednim krovom.', mrBody: 'Od 2025. Tiki Vent posluje u okviru MR Engines - lidera u mašinskoj obradi i remontu motora u Srbiji. Isti delovi koje ugrađujemo u remontovane motore, na lageru za vaš servis.', contactTitle: 'Pošaljite upit. Odgovaramo u toku radnog dana.' },
};
const TABS = {
  mr: [['engines', 'Motori'], ['steps', 'Procesi'], ['video', 'Video'], ['texts', 'Tekstovi'], ['gallery', 'Galerija'], ['settings', 'Podešavanja']],
  tv: [['hero', 'Hero'], ['brands', 'Brendovi'], ['parts', 'Delovi'], ['deals', 'Akcije'], ['delivery', 'Dostava'], ['locs', 'Lokacije'], ['about', 'O nama'], ['contact', 'Kontakt']],
};
const PAGES = { mr: '/', tv: '/tikivent' };
const NAMES = { mr: 'MR Engines', tv: 'Tiki Vent' };
const slug = s => String(s || '').toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g, '').slice(0, 24) || 'b' + Date.now().toString(36);

class Component extends DCLogic {
  state = { authed: false, pin: '', pinError: false, site: 'mr', tab: { mr: 'engines', tv: 'hero' }, sel: {}, content: { mr: null, tv: null }, dirty: { mr: false, tv: false }, toast: '' };
  componentDidMount() {
    const load = k => { if (window.MRContent) return window.MRContent.cached(k); try { return JSON.parse(localStorage.getItem(KEYS[k]) || 'null'); } catch (e) { return null; } };
    this.setState({ content: { mr: this.normMr(load('mr')), tv: this.normTv(load('tv')) }, authed: sessionStorage.getItem('mrpromo.admin') === '1' }, () => this.pullRemote());
    this.onApiReady = () => this.pullRemote(); window.addEventListener('mrcontent:ready', this.onApiReady);
  }
  normMr(c) {
    c = c || {}; const d = clone(MR_DEF);
    const out = { ...d, ...c, texts: { sr: { ...((c.texts || {}).sr || {}) }, en: { ...((c.texts || {}).en || {}) } } };
    out.engines = (c.engines || d.engines).map(e => ({ ...e, apps: Array.isArray(e.apps) ? e.apps.join(', ') : (e.apps || ''), photos: (e.photos || []).slice(0, 4), partsSr: ((e.parts || {}).sr || []).join('\n'), partsEn: ((e.parts || {}).en || []).join('\n') }));
    out.steps = d.steps.map((s, i) => ({ ...s, ...((c.steps || [])[i] || {}), sr: { ...s.sr, ...(((c.steps || [])[i] || {}).sr || {}) }, en: { ...s.en, ...(((c.steps || [])[i] || {}).en || {}) } }));
    out.chapters = d.chapters.map((ch, i) => ({ ...ch, ...((c.chapters || [])[i] || {}) }));
    out.gallery = d.gallery.map((g, i) => ({ ...g, ...((c.gallery || [])[i] || {}) }));
    out.certs = d.certs.map((x, i) => ({ ...x, ...((c.certs || [])[i] || {}) }));
    return out;
  }
  normTv(c) {
    c = c || {}; const d = clone(TV_DEF);
    const out = { ...d, ...c, hero: { ...d.hero, ...(c.hero || {}) }, delivery: { ...d.delivery, ...(c.delivery || {}) }, texts: { ...d.texts, ...(c.texts || {}) } };
    ['brands', 'deals', 'locs', 'timeline', 'parts'].forEach(k => { if (!Array.isArray(out[k])) out[k] = d[k]; });
    if (!Array.isArray(out.delivery.sched)) out.delivery.sched = d.delivery.sched;
    out.parts = d.parts.map(p => ({ ...p, ...((c.parts || []).find(x => x.id === p.id) || {}) }));
    out.locs = out.locs.map(l => ({ ...l, tels: [(l.tels || [])[0] || '', (l.tels || [])[1] || ''] }));
    out.phones = [(out.phones || [])[0] || '', (out.phones || [])[1] || ''];
    return out;
  }
  pullRemote() {
    const api = window.MRContent; if (!api || !api.remote || !this.state.authed) return;
    ['mr', 'tv'].forEach(k => api.load(k).then(c => { if (c && !this.state.dirty[k]) this.setState(s => ({ content: { ...s.content, [k]: k === 'mr' ? this.normMr(c) : this.normTv(c) } })); }, () => this.flash('Server nije dostupan - prikazan je poslednji sačuvani sadržaj')));
  }
  uploadFile(file, kind, cb) {
    if (!file) return; const api = window.MRContent;
    if (!api || !api.remote) { this.flash('Otpremanje fajlova radi kada je povezan server - za sada upišite adresu (URL)'); return; }
    this.flash('Otpremam ' + (kind === 'pdf' ? 'PDF' : 'video') + '…');
    api.upload(file, kind, file.name).then(url => { cb(url); this.flash('Otpremljeno - kliknite „Sačuvaj“'); }, () => this.flash('Greška pri otpremanju fajla'));
  }
  get c() { return this.state.content[this.state.site]; }
  upd(fn) { this.setState(s => { const site = s.site, c = clone(s.content[site]); fn(c); return { content: { ...s.content, [site]: c }, dirty: { ...s.dirty, [site]: true } }; }); }
  save() {
    const site = this.state.site, c = clone(this.c);
    const out = site === 'mr' ? { ...c, engines: c.engines.map(({ partsSr, partsEn, ...e }) => ({ ...e, apps: String(e.apps || '').split(',').map(x => x.trim()).filter(Boolean), cc: +e.cc || 0, price: e.price === '' || e.price == null ? null : +e.price, photos: (e.photos || []).filter(Boolean), parts: { sr: String(partsSr || '').split('\n').map(x => x.trim()).filter(Boolean), en: String(partsEn || '').split('\n').map(x => x.trim()).filter(Boolean) } })) } : { ...c, locs: c.locs.map(l => ({ ...l, tels: l.tels.filter(Boolean) })) };
    const api = window.MRContent, remote = !!(api && api.remote);
    if (remote) delete out.pin;
    const done = () => { this.setState(s => ({ dirty: { ...s.dirty, [site]: false } })); this.flash('Sačuvano - ' + NAMES[site] + ' stranica je ažurirana'); };
    const fail = e => { if (e && (e.status === 401 || e.status === 403)) { if (api) api.logout(); sessionStorage.removeItem('mrpromo.admin'); this.setState({ authed: false }); this.flash('Sesija je istekla - prijavite se ponovo'); } else this.flash(remote ? 'Greška pri čuvanju na serveru - pokušajte ponovo' : 'Greška: memorija je puna - smanjite broj ili veličinu slika'); };
    if (api) { api.save(site, out).then(done, fail); return; }
    try { localStorage.setItem(KEYS[site], JSON.stringify(out)); done(); } catch (e) { fail(e); }
  }
  flash(m) { this.setState({ toast: m }); clearTimeout(this.tt); this.tt = setTimeout(() => this.setState({ toast: '' }), 2800); }
  login() {
    const pins = [this.state.content.mr && this.state.content.mr.pin, this.state.content.tv && this.state.content.tv.pin, '1968'].filter(Boolean), api = window.MRContent;
    const ok = () => { sessionStorage.setItem('mrpromo.admin', '1'); this.setState({ authed: true, pinError: false }, () => this.pullRemote()); };
    if (api && api.remote) { api.login(this.state.pin).then(r => r ? ok() : this.setState({ pinError: true }), () => this.flash('Server nije dostupan - pokušajte ponovo')); return; }
    if (pins.includes(this.state.pin)) ok(); else this.setState({ pinError: true });
  }
  readImage(file, maxW, cb) {
    if (!file) return;
    const r = new FileReader();
    r.onload = () => { const img = new Image(); img.onload = () => { const s = Math.min(1, maxW / img.width), cv = document.createElement('canvas'); cv.width = Math.round(img.width * s); cv.height = Math.round(img.height * s); cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height); const png = /png|svg|webp/i.test(file.type) && file.size < 400000; const d = png ? r.result : cv.toDataURL('image/jpeg', .82), api = window.MRContent; if (api && api.remote) { this.flash('Otpremam sliku…'); api.upload(d, 'image', file.name).then(cb, () => this.flash('Greška pri otpremanju slike')); } else cb(d); }; img.src = r.result; };
    r.readAsDataURL(file);
  }
  f(label, value, set, max, o) {
    o = o || {}; const v = value == null ? '' : String(value), kind = o.kind || 'text';
    return { label, value: v, max: max || 60, count: kind === 'select' ? '' : v.length + ' / ' + (max || 60), countColor: v.length >= (max || 60) ? '#ff4b52' : '#6b6c72', span: o.span || 1, ph: o.ph || '', hint: o.hint || '', hasHint: !!o.hint,
      isText: kind === 'text', isArea: kind === 'area', isSelect: kind === 'select', options: (o.options || []).map(([v2, l]) => ({ v: v2, l })),
      hasUpload: !!o.upload, accept: o.upload === 'pdf' ? 'application/pdf' : 'video/mp4,video/webm', uploadOn: e => this.uploadFile(e.target.files[0], o.upload, url => this.upd(c => set(c, url))),
      on: e => this.upd(c => set(c, e.target.value.slice(0, max || 60))) };
  }
  img(label, src, set, hint, maxW) { return { label, has: !!src, hint: hint || '', preview: src ? React.createElement('img', { src, alt: '', style: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: /brand|logo/i.test(label) ? 'contain' : 'cover', padding: /brand|logo/i.test(label) ? '14%' : 0 } }) : React.createElement('span', { style: { fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: '#6b6c72' } }, 'nema slike'), upload: e => this.readImage(e.target.files[0], maxW || 1600, d => this.upd(c => set(c, d))), clear: () => this.upd(c => set(c, '')) }; }
  renderVals() {
    const st = this.state, site = st.site, c = this.c, authed = !!st.authed, tab = st.tab[site], remote = !!(window.MRContent && window.MRContent.remote);
    const selIdx = st.sel[site + tab] || 0;
    const setSel = i => this.setState(s => ({ sel: { ...s.sel, [site + tab]: i } }));
    const R = { title: '', hint: '', top: [], fields: [], list: [], images: [], checks: [], listLabel: '', checksLabel: '', itemTitle: '', canAdd: false, canRemove: false, canMove: false, add: null, remove: null, moveUp: null, moveDown: null };
    const listOf = (arr, label, labelFn, opts) => {
      const i = Math.min(selIdx, Math.max(0, arr.length - 1));
      R.listLabel = label; R.list = arr.map((x, k) => { const a = k === i; return { idx: pad(k + 1), label: labelFn(x, k), bg: a ? RED : 'rgba(255,255,255,.04)', bd: a ? RED : 'rgba(255,255,255,.14)', fg: a ? '#fff' : '#c8c9cc', idxColor: a ? '#fff' : '#ff4b52', on: () => setSel(k) }; });
      if (opts && opts.add && arr.length < (opts.max || 99)) { R.canAdd = true; R.add = () => { this.upd(cc => { opts.get(cc).push(opts.add()); }); setSel(arr.length); }; }
      if (opts && opts.removable && arr.length > (opts.min || 1)) { R.canRemove = true; R.remove = () => { this.upd(cc => { opts.get(cc).splice(i, 1); }); setSel(Math.max(0, i - 1)); }; }
      if (opts && opts.move && arr.length > 1) { R.canMove = true; const mv = d => { const j = i + d; if (j < 0 || j >= arr.length) return; this.upd(cc => { const a = opts.get(cc), t = a[i]; a[i] = a[j]; a[j] = t; }); setSel(j); }; R.moveUp = () => mv(-1); R.moveDown = () => mv(1); }
      return i;
    };
    if (c && authed) {
      if (site === 'mr') {
        if (tab === 'engines') {
          R.title = 'Katalog motora'; R.hint = 'Oznaka i kod su kratki jer stoje na kartici; modeli vozila se pišu odvojeni zarezom. Cena se prikazuje tek na dodir.';
          const i = listOf(c.engines, c.engines.length + ' motora', e => (e.brand + ' ' + e.name + ' · ' + e.code).trim(), { add: () => eng('renault', 'Renault', '', 'NOVI', 'petrol', 0, 'chain', '', null), get: cc => cc.engines, removable: true, move: true, max: 60 });
          const E = c.engines[i] || {};
          R.itemTitle = (E.brand + ' ' + E.name + ' - ' + E.code).trim();
          R.fields = [this.f('Grupa', E.mfr, (cc, v) => { cc.engines[i].mfr = v; }, 20, { kind: 'select', options: MFRS }), this.f('Marka', E.brand, (cc, v) => { cc.engines[i].brand = v; }, 16), this.f('Oznaka motora', E.name, (cc, v) => { cc.engines[i].name = v; }, 14, { ph: '1.2 TCe' }), this.f('Kod motora', E.code, (cc, v) => { cc.engines[i].code = v; }, 12, { ph: 'H5F' }),
            this.f('Gorivo', E.fuel, (cc, v) => { cc.engines[i].fuel = v; }, 10, { kind: 'select', options: [['petrol', 'Benzin'], ['diesel', 'Dizel']] }), this.f('Razvod', E.timing, (cc, v) => { cc.engines[i].timing = v; }, 10, { kind: 'select', options: [['chain', 'Lanac'], ['belt', 'Kaiš']] }), this.f('Zapremina (cm³)', E.cc, (cc, v) => { cc.engines[i].cc = v.replace(/\D/g, ''); }, 5), this.f('Cena (€) - prazno = na upit', E.price, (cc, v) => { cc.engines[i].price = v.replace(/\D/g, ''); }, 6),
            this.f('Modeli vozila (zarezom)', E.apps, (cc, v) => { cc.engines[i].apps = v; }, 120, { span: 2, kind: 'area', ph: 'Renault Clio IV, Captur, Dacia Duster' }),
            this.f('Delovi u remontu (SR) - jedan po redu', E.partsSr, (cc, v) => { cc.engines[i].partsSr = v; }, 400, { kind: 'area', ph: 'Prazno = standardna lista', hint: 'Prazno = standardna lista (dihtunzi, karike, ventili, razvod, zatezač, pumpa za vodu, termostat, brtve, senzori).' }),
            this.f('Parts in rebuild (EN) - one per line', E.partsEn, (cc, v) => { cc.engines[i].partsEn = v; }, 400, { kind: 'area', ph: 'Empty = standard list' })];
          R.images = ['Spreda', 'Usis', 'Razvod', 'Zamajac'].map((l, k) => this.img('Foto · ' + l, (E.photos || [])[k], (cc, v) => { cc.engines[i].photos = cc.engines[i].photos || []; cc.engines[i].photos[k] = v; }, 'Isti ugao za sve motore · popunjavati redom', 1400));
        } else if (tab === 'steps') {
          R.title = 'Procesi - od prijema do isporuke'; R.hint = 'Osam koraka na vremenskoj liniji. Klip je kratak (10-20 s, mp4): prelaz mišem pušta pregled, klik otvara ceo klip. Fotografija se vidi dok klip ne postoji.';
          const i = listOf(c.steps, '8 koraka', s => s.sr.t);
          const S = c.steps[i];
          R.itemTitle = pad(i + 1) + ' · ' + S.sr.t;
          R.fields = [this.f('Naslov (SR)', S.sr.t, (cc, v) => { cc.steps[i].sr.t = v; }, 30), this.f('Title (EN)', S.en.t, (cc, v) => { cc.steps[i].en.t = v; }, 30), this.f('Opis (SR)', S.sr.d, (cc, v) => { cc.steps[i].sr.d = v; }, 90, { kind: 'area' }), this.f('Description (EN)', S.en.d, (cc, v) => { cc.steps[i].en.d = v; }, 90, { kind: 'area' }), this.f('Klip (URL, mp4)', S.clip, (cc, v) => { cc.steps[i].clip = v; }, 300, { span: 2, upload: 'video', ph: 'https://…/korak-01.mp4', hint: '10-20 s, mp4, bez zvuka. Upišite adresu ili otpremite fajl (otpremanje radi kada je povezan server).' })];
          R.images = [this.img('Fotografija koraka', S.photo, (cc, v) => { cc.steps[i].photo = v; }, '4:3, vodoravna')];
        } else if (tab === 'video') {
          R.title = 'Video'; R.hint = 'Glavni film i pozadinski klip u hero delu. Poglavlja su vremenske oznake u glavnom filmu (mm:ss).';
          R.top = [this.f('Glavni film (URL ili YouTube)', c.videoUrl, (cc, v) => { cc.videoUrl = v; }, 300, { span: 2, upload: 'video' }), this.f('Hero pozadinski klip (URL, mp4, bez zvuka)', c.heroVideo, (cc, v) => { cc.heroVideo = v; }, 300, { span: 2, upload: 'video' })];
          const i = listOf(c.chapters, '8 poglavlja', ch => ch.time + ' ' + ch.sr);
          const CH = c.chapters[i];
          R.itemTitle = 'Poglavlje ' + pad(i + 1);
          R.fields = [this.f('Vreme (mm:ss)', CH.time, (cc, v) => { cc.chapters[i].time = v; }, 5, { ph: '01:25' }), this.f('Naziv (SR)', CH.sr, (cc, v) => { cc.chapters[i].sr = v; }, 30), this.f('Name (EN)', CH.en, (cc, v) => { cc.chapters[i].en = v; }, 30)];
          R.images = [this.img('Poster filma', c.videoPoster, (cc, v) => { cc.videoPoster = v; }, '16:9, kadar iz filma')];
        } else if (tab === 'texts') {
          R.title = 'Tekstovi'; R.hint = 'Naslovi i opisi sekcija, srpski i engleski. Prazno polje = podrazumevani tekst.';
          R.fields = MR_TEXTS.flatMap(([k, label, phSr, phEn, max, kind]) => [this.f(label + ' (SR)', c.texts.sr[k], (cc, v) => { cc.texts.sr[k] = v; }, max, { kind: kind || 'text', ph: phSr }), this.f(label + ' (EN)', c.texts.en[k], (cc, v) => { cc.texts.en[k] = v; }, max, { kind: kind || 'text', ph: phEn })]);
        } else if (tab === 'gallery') {
          R.title = 'Galerija'; R.hint = '12 fotografija sa kategorijom. Vodoravne, 4:3 - slika se automatski smanjuje.';
          const i = listOf(c.gallery, '12 polja', g => (CATS.find(x => x[0] === g.cat) || [])[1] + (g.src ? ' ●' : ' ○'));
          const G = c.gallery[i];
          R.itemTitle = 'Fotografija ' + pad(i + 1);
          R.fields = [this.f('Kategorija', G.cat, (cc, v) => { cc.gallery[i].cat = v; }, 12, { kind: 'select', options: CATS })];
          R.images = [this.img('Fotografija', G.src, (cc, v) => { cc.gallery[i].src = v; }, '')];
        } else {
          R.title = 'Podešavanja'; R.hint = 'PIN, linkovi, brojke i fotografije sekcija O nama / Tiki Vent, sertifikati.';
          R.fields = [...(remote ? [] : [this.f('PIN za admin', c.pin, (cc, v) => { cc.pin = v.replace(/\D/g, ''); }, 8)]), this.f('Tehničke knjige (URL)', c.booksUrl, (cc, v) => { cc.booksUrl = v; }, 300), this.f('Motora godišnje (živi brojač)', c.yearly, (cc, v) => { cc.yearly = v.replace(/\D/g, ''); }, 6, { hint: 'Stranica računa koliko je do danas remontovano.' }),
            this.f('Brendovi u traci (URL slika ili nazivi, po redu)', c.brands, (cc, v) => { cc.brands = v; }, 800, { span: 2, kind: 'area', ph: 'Prazno = logotipi Tiki Vent brendova' }),
            ...c.certs.map((x, k) => this.f(['ISO 9001', 'ISO 14001', 'ISO 45001', 'Company Wall'][k] + ' · PDF (URL)', x.url, (cc, v) => { cc.certs[k].url = v; }, 300, { upload: 'pdf' }))];
          R.images = [this.img('O nama · fotografija', c.aboutPhoto, (cc, v) => { cc.aboutPhoto = v; }, '4:3'), this.img('Tiki Vent · fotografija', c.tikiPhoto, (cc, v) => { cc.tikiPhoto = v; }, '4:3')];
        }
      } else {
        const T = c.texts;
        if (tab === 'hero') {
          R.title = 'Hero'; R.hint = 'Prvi ekran: natpis, dva reda naslova, podnaslov, brojke. Brojevi brendova, razvoza i objekata računaju se sami.';
          R.fields = [this.f('Natpis iznad naslova', T.heroEyebrow, (cc, v) => { cc.texts.heroEyebrow = v; }, 36), this.f('Naslov · red 1', T.heroL1, (cc, v) => { cc.texts.heroL1 = v; }, 26), this.f('Naslov · red 2 (crven)', T.heroL2, (cc, v) => { cc.texts.heroL2 = v; }, 26), this.f('Artikala na lageru (broj)', c.hero.items, (cc, v) => { cc.hero.items = v.replace(/\D/g, ''); }, 7),
            this.f('Podnaslov', T.heroSub, (cc, v) => { cc.texts.heroSub = v; }, 170, { span: 2, kind: 'area' }),
            this.f('Brojka 1 · oznaka', T.stat1, (cc, v) => { cc.texts.stat1 = v; }, 26), this.f('Brojka 2 · oznaka', T.stat2, (cc, v) => { cc.texts.stat2 = v; }, 26), this.f('Brojka 3 · oznaka', T.stat3, (cc, v) => { cc.texts.stat3 = v; }, 26), this.f('Brojka 4 · oznaka', T.stat4, (cc, v) => { cc.texts.stat4 = v; }, 26),
            this.f('Pozadinski klip (URL, mp4, bez zvuka, 6-15 s)', c.hero.video, (cc, v) => { cc.hero.video = v; }, 300, { span: 2, upload: 'video' })];
          R.images = [this.img('Poster klipa', c.hero.poster, (cc, v) => { cc.hero.poster = v; }, 'Kadar koji se vidi dok se klip učitava')];
        } else if (tab === 'brands') {
          R.title = 'Brendovi'; R.hint = 'Zid logotipa, traka u hero delu i brendovi po delu - sve iz ove liste. Označite koje grupe delova brend pokriva kod vas.';
          const i = listOf(c.brands, c.brands.length + ' brendova', b => b.name, { add: () => ({ id: slug('novi' + Date.now()), name: 'Novi brend', logo: '', parts: [] }), get: cc => cc.brands, removable: true, move: true, max: 40 });
          const Bn = c.brands[i] || {};
          R.itemTitle = Bn.name;
          R.fields = [this.f('Naziv brenda', Bn.name, (cc, v) => { cc.brands[i].name = v; }, 22)];
          R.images = [this.img('Logo (PNG/SVG, providna pozadina, svetao)', Bn.logo, (cc, v) => { cc.brands[i].logo = v; }, 'Na tamnoj podlozi - beli ili svetli logo', 600)];
          R.checksLabel = 'Pokriva grupe delova'; R.checks = c.parts.map(p => { const on = (Bn.parts || []).includes(p.id); return { label: p.short, checked: on, bg: on ? 'rgba(237,28,36,.14)' : 'rgba(255,255,255,.04)', bd: on ? RED : 'rgba(255,255,255,.14)', on: () => this.upd(cc => { const arr = cc.brands[i].parts || []; cc.brands[i].parts = on ? arr.filter(x => x !== p.id) : arr.concat(p.id); }) }; });
        } else if (tab === 'parts') {
          R.title = 'Delovi - presek motora'; R.hint = '12 grupa na preseku. Pozicije na crtežu su fiksne; menjaju se naziv, kratak naziv (čip) i opis.';
          R.top = [this.f('Naslov sekcije', T.partsTitle, (cc, v) => { cc.texts.partsTitle = v; }, 40), this.f('Opis sekcije', T.partsSub, (cc, v) => { cc.texts.partsSub = v; }, 180, { kind: 'area' })];
          const i = listOf(c.parts, '12 grupa', p => p.short);
          const P = c.parts[i];
          R.itemTitle = pad(i + 1) + ' · ' + P.name;
          R.fields = [this.f('Kratak naziv (čip)', P.short, (cc, v) => { cc.parts[i].short = v; }, 22), this.f('Pun naziv', P.name, (cc, v) => { cc.parts[i].name = v; }, 40), this.f('Opis', P.desc, (cc, v) => { cc.parts[i].desc = v; }, 140, { span: 2, kind: 'area' })];
        } else if (tab === 'deals') {
          R.title = 'Akcije'; R.hint = 'Do šest kartica. Slika dela stoji u pozadini kartice - najbolje PNG sa providnom pozadinom.';
          R.top = [this.f('Naslov sekcije', T.dealsTitle, (cc, v) => { cc.texts.dealsTitle = v; }, 24)];
          const i = listOf(c.deals, c.deals.length + ' akcije', d => d.title || 'Nova akcija', { add: () => ({ brand: (c.brands[0] || {}).id || '', off: '-10%', title: 'Nova akcija', note: '', until: '', image: '' }), get: cc => cc.deals, removable: true, move: true, max: 6, min: 0 });
          const D = c.deals[i];
          if (D) {
            R.itemTitle = D.title;
            R.fields = [this.f('Brend', D.brand, (cc, v) => { cc.deals[i].brand = v; }, 24, { kind: 'select', options: c.brands.map(b => [b.id, b.name]) }), this.f('Popust / ponuda', D.off, (cc, v) => { cc.deals[i].off = v; }, 6, { ph: '-15% ili 2+1' }), this.f('Naslov', D.title, (cc, v) => { cc.deals[i].title = v; }, 32), this.f('Napomena', D.note, (cc, v) => { cc.deals[i].note = v; }, 48), this.f('Važi do', D.until, (cc, v) => { cc.deals[i].until = v; }, 10, { ph: '31.10.' })];
            R.images = [this.img('Slika dela (pozadina kartice)', D.image, (cc, v) => { cc.deals[i].image = v; }, 'PNG sa providnom pozadinom', 900)];
          } else R.hint = 'Nema akcija - sekcija se ne prikazuje na stranici. Dodajte prvu.';
        } else if (tab === 'delivery') {
          R.title = 'Dostava'; R.hint = 'Pragovi za besplatnu dostavu i raspored razvoza. „Porudžbine do“ u obliku hh:mm pokreće odbrojavanje u hero delu; tekst bez vremena (npr. „do kraja prethodnog dana“) se samo ispisuje.';
          const DV = c.delivery;
          R.top = [this.f('Naslov sekcije', T.delivTitle, (cc, v) => { cc.texts.delivTitle = v; }, 48), this.f('Opis sekcije', T.delivSub, (cc, v) => { cc.texts.delivSub = v; }, 180, { kind: 'area' }), this.f('Beograd · besplatno preko (RSD)', DV.freeBg, (cc, v) => { cc.delivery.freeBg = v.replace(/\D/g, ''); }, 6), this.f('Beograd · cena dostave (RSD)', DV.feeBg, (cc, v) => { cc.delivery.feeBg = v.replace(/\D/g, ''); }, 5), this.f('Srbija · besplatno preko (RSD)', DV.freeRs, (cc, v) => { cc.delivery.freeRs = v.replace(/\D/g, ''); }, 6), this.f('Radno vreme (ispod rasporeda)', DV.hours, (cc, v) => { cc.delivery.hours = v; }, 32)];
          const i = listOf(DV.sched, DV.sched.length + ' termina', r => r.time + ' ' + r.zone, { add: () => ({ zone: 'Gradski', cutoff: '15:00', time: '15:30' }), get: cc => cc.delivery.sched, removable: true, move: true, max: 8 });
          const Rw = DV.sched[i];
          R.itemTitle = 'Termin ' + pad(i + 1);
          R.fields = [this.f('Teritorija', Rw.zone, (cc, v) => { cc.delivery.sched[i].zone = v; }, 28), this.f('Porudžbine do', Rw.cutoff, (cc, v) => { cc.delivery.sched[i].cutoff = v; }, 26, { ph: '09:30' }), this.f('Razvoz kreće', Rw.time, (cc, v) => { cc.delivery.sched[i].time = v; }, 5, { ph: '10:00' })];
        } else if (tab === 'locs') {
          R.title = 'Lokacije'; R.hint = 'Do četiri objekta. Radno vreme u obliku „08:00 - 16:00“ - stranica iz njega računa „otvoreno / otvara u“. Subota prazno = ne radi.';
          const i = listOf(c.locs, c.locs.length + ' objekta', l => l.name, { add: () => ({ name: 'Novi grad', tag: 'Franšiza', addr: '', wd: '08:00 - 16:00', sat: '', tels: ['', ''], maps: '' }), get: cc => cc.locs, removable: true, move: true, max: 4 });
          const Lc = c.locs[i];
          R.itemTitle = Lc.name;
          R.fields = [this.f('Grad', Lc.name, (cc, v) => { cc.locs[i].name = v; }, 14), this.f('Vrsta objekta', Lc.tag, (cc, v) => { cc.locs[i].tag = v; }, 28), this.f('Adresa', Lc.addr, (cc, v) => { cc.locs[i].addr = v; }, 44, { span: 2 }), this.f('Pon - pet', Lc.wd, (cc, v) => { cc.locs[i].wd = v; }, 13, { ph: '08:00 - 16:00' }), this.f('Subota', Lc.sat, (cc, v) => { cc.locs[i].sat = v; }, 13, { ph: 'prazno = ne radi' }), this.f('Telefon 1', Lc.tels[0], (cc, v) => { cc.locs[i].tels[0] = v; }, 16), this.f('Telefon 2', Lc.tels[1], (cc, v) => { cc.locs[i].tels[1] = v; }, 16), this.f('Google Maps link (prazno = iz adrese)', Lc.maps, (cc, v) => { cc.locs[i].maps = v; }, 300, { span: 2 })];
        } else if (tab === 'about') {
          R.title = 'O nama i MR Engines'; R.hint = 'Priča firme, vremenska linija i blok „Deo MR Engines“.';
          R.top = [this.f('O nama · naslov', T.aboutTitle, (cc, v) => { cc.texts.aboutTitle = v; }, 48), this.f('MR Engines · naslov', T.mrTitle, (cc, v) => { cc.texts.mrTitle = v; }, 48), this.f('O nama · tekst', T.aboutBody, (cc, v) => { cc.texts.aboutBody = v; }, 320, { kind: 'area' }), this.f('MR Engines · tekst', T.mrBody, (cc, v) => { cc.texts.mrBody = v; }, 260, { kind: 'area' })];
          const i = listOf(c.timeline, c.timeline.length + ' prekretnica', x => x.y, { add: () => ({ y: '2026', t: '', d: '' }), get: cc => cc.timeline, removable: true, move: true, max: 6 });
          const Tl = c.timeline[i];
          R.itemTitle = Tl.y + ' · ' + Tl.t;
          R.fields = [this.f('Godina / oznaka', Tl.y, (cc, v) => { cc.timeline[i].y = v; }, 12), this.f('Naslov', Tl.t, (cc, v) => { cc.timeline[i].t = v; }, 18), this.f('Opis', Tl.d, (cc, v) => { cc.timeline[i].d = v; }, 90, { span: 2, kind: 'area' })];
        } else {
          R.title = 'Kontakt, katalog, PIN'; R.hint = 'Telefoni i e-mail stoje u zaglavlju, podnožju i kontakt sekciji. Katalog je spoljna aplikacija - ovde se menja adresa.';
          R.fields = [this.f('Telefon 1', c.phones[0], (cc, v) => { cc.phones[0] = v; }, 16), this.f('Telefon 2', c.phones[1], (cc, v) => { cc.phones[1] = v; }, 16), this.f('E-mail', c.email, (cc, v) => { cc.email = v; }, 40), this.f('Viber / WhatsApp broj (prazno = sakriveno)', c.messaging, (cc, v) => { cc.messaging = v; }, 16, { ph: '+381 6x xxx xxxx' }), this.f('Online katalog (URL)', c.catalogUrl, (cc, v) => { cc.catalogUrl = v; }, 300, { span: 2 }), this.f('Katalog · naslov', T.catTitle, (cc, v) => { cc.texts.catTitle = v; }, 70, { span: 2 }), this.f('Brendovi · opis sekcije', T.brandsSub, (cc, v) => { cc.texts.brandsSub = v; }, 120, { span: 2 }), this.f('Kontakt · naslov', T.contactTitle, (cc, v) => { cc.texts.contactTitle = v; }, 60, { span: 2 })].concat(remote ? [] : [this.f('PIN za admin', c.pin, (cc, v) => { cc.pin = v.replace(/\D/g, ''); }, 8)]);
        }
      }
    }
    let size = 0; try { size = JSON.stringify(c || {}).length; } catch (e) {}
    const tabs = TABS[site].map(([id, label]) => { const a = tab === id; return { id, label, bg: a ? 'rgba(237,28,36,.12)' : 'transparent', bd: a ? 'rgba(237,28,36,.35)' : 'transparent', fg: a ? '#f2f2f3' : '#9c9da3', idx: a ? RED : 'transparent', on: () => this.setState(s => ({ tab: { ...s.tab, [site]: id } })) }; });
    const dirty = st.dirty[site];
    return {
      authed, locked: !authed, pin: st.pin, onPin: e => this.setState({ pin: e.target.value, pinError: false }), onPinKey: e => { if (e.key === 'Enter') this.login(); }, pinBorder: st.pinError ? RED : 'rgba(255,255,255,.14)',
      login: () => this.login(), logout: () => { if (window.MRContent) window.MRContent.logout(); sessionStorage.removeItem('mrpromo.admin'); this.setState({ authed: false, pin: '' }); },
      siteMr: () => this.setState({ site: 'mr' }), siteTv: () => this.setState({ site: 'tv' }), mrBg: site === 'mr' ? RED : 'transparent', mrFg: site === 'mr' ? '#fff' : '#9c9da3', tvBg: site === 'tv' ? RED : 'transparent', tvFg: site === 'tv' ? '#fff' : '#9c9da3',
      pageHref: PAGES[site], siteName: NAMES[site], tabs,
      dirtyText: dirty ? '● nesačuvane izmene' : 'sve sačuvano', dirtyColor: dirty ? '#f5a623' : '#6b6c72', save: () => this.save(),
      reset: () => { if (confirm('Vratiti podrazumevani sadržaj za ' + NAMES[site] + '? Trenutne izmene se gube.')) { this.setState(s => ({ content: { ...s.content, [site]: site === 'mr' ? this.normMr(null) : this.normTv(null) }, dirty: { ...s.dirty, [site]: true } })); } },
      title: R.title, hint: R.hint, top: R.top, hasTop: R.top.length > 0, fields: R.fields, hasFields: R.fields.length > 0 || R.images.length > 0, itemTitle: R.itemTitle, hasItemTitle: !!R.itemTitle,
      list: R.list, hasList: R.list.length > 0 || R.canAdd, listLabel: R.listLabel, canAdd: R.canAdd, canRemove: R.canRemove, canMove: R.canMove, add: R.add, remove: R.remove, moveUp: R.moveUp, moveDown: R.moveDown,
      images: R.images, hasImages: R.images.length > 0, checks: R.checks, hasChecks: R.checks.length > 0, checksLabel: R.checksLabel,
      sizeText: remote ? (size / 1024).toFixed(0) + ' KB · server' : (size / 1024).toFixed(0) + ' KB od ~4.800 KB (browser)', toast: st.toast, hasToast: !!st.toast,
    };
  }
}

// ───────────────────────────── Prikaz ─────────────────────────────
export const pageHead = {
  "meta": [
    {
      "title": "Admin · MR Engines & Tiki Vent"
    },
    {
      "name": "robots",
      "content": "noindex,nofollow"
    }
  ],
  "links": [
    {
      "rel": "preconnect",
      "href": "https://fonts.googleapis.com"
    },
    {
      "href": "https://fonts.googleapis.com/css2?family=Figtree:wght@300..900&family=JetBrains+Mono:wght@400..700&display=swap",
      "rel": "stylesheet"
    }
  ]
}

const PSEUDO_CSS = ".adp0:hover{background:#c8141b !important}\n.adp1:hover{border-color:#ed1c24 !important;color:#ff4b52 !important}\n.adp2:hover{color:#ff4b52 !important;border-color:#ed1c24 !important}\n.adp3:hover{color:#f2f2f3 !important;background:rgba(255,255,255,.04) !important}\n.adp4:hover{border-color:#ed1c24 !important}\n.adp5:hover{background:rgba(237,28,36,.12) !important}"

const PAGE_CSS = "\n*{box-sizing:border-box}\nbody{margin:0;background:#0b0b0d;color:#f2f2f3;font-family:Figtree,system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na{color:#ff4b52;text-decoration:none}a:hover{color:#fff}\nbutton,input,textarea,select{font-family:inherit}\ninput,textarea,select{width:100%;padding:0 14px;border-radius:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.14);color:#f2f2f3;font-size:14px;transition:border-color .15s,box-shadow .15s}\ninput{height:44px}textarea{padding:12px 14px;min-height:96px;resize:vertical;line-height:1.5}select{height:44px;appearance:none;-webkit-appearance:none;background-image:linear-gradient(45deg,transparent 50%,#9c9da3 50%),linear-gradient(135deg,#9c9da3 50%,transparent 50%);background-position:calc(100% - 18px) 50%,calc(100% - 13px) 50%;background-size:5px 5px;background-repeat:no-repeat}\ninput:hover,textarea:hover,select:hover{border-color:rgba(255,255,255,.28)}\ninput:focus,textarea:focus,select:focus{outline:none;border-color:#ed1c24;box-shadow:0 0 0 3px rgba(237,28,36,.18)}\ninput::placeholder,textarea::placeholder{color:rgba(242,242,243,.32)}\ninput[type=file]{padding:7px 10px;font-size:12px}\ninput[type=file]::file-selector-button{margin-right:10px;padding:5px 10px;border:1px solid rgba(255,255,255,.18);border-radius:7px;background:#1a1a1f;color:#f2f2f3;font:600 11px Figtree,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;cursor:pointer}\ninput[type=checkbox]{width:18px;height:18px;padding:0;accent-color:#ed1c24;cursor:pointer}\n@keyframes toast{from{opacity:0;transform:translate(-50%,10px)}to{opacity:1;transform:translate(-50%,0)}}\n@media (max-width:900px){[data-shell]{grid-template-columns:minmax(0,1fr) !important}[data-side]{position:static !important;display:flex;flex-wrap:wrap;gap:6px}[data-side] button{height:40px !important}}\n"

function view(v) {
  return (
    <>
      <style>{PSEUDO_CSS}</style>
      <style>{PAGE_CSS}</style>
      <div style={{ minHeight: "100vh", background: "#0b0b0d", color: "#f2f2f3", fontFamily: "Figtree,system-ui,sans-serif" }}>
        {" "}
        {v.locked ? (
          <>
            {" "}
            <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", background: "radial-gradient(ellipse at 50% 30%,rgba(237,28,36,.14),transparent 60%),#0b0b0d" }}>
              {" "}
              <div style={{ width: "min(420px,100%)", padding: "36px 32px", background: "#131316", border: "1px solid rgba(255,255,255,.1)", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "20px", backgroundImage: "linear-gradient(90deg,transparent,#ed1c24 50%,transparent)", backgroundSize: "100% 3px", backgroundRepeat: "no-repeat" }}>
                {" "}
                <img src={"/assets/logo-wordmark-white.png"} alt={"MR Engines"} style={{ height: "30px", width: "auto", alignSelf: "flex-start" }} />
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-.02em" }}>
                    Admin panel
                  </div>
                  <div style={{ fontSize: "14px", color: "#9c9da3" }}>
                    MR Engines i Tiki Vent - sadržaj obe stranice na jednom mestu.
                  </div>
                </div>
                {" "}
                <input value={__dv(v.pin)} onChange={v.onPin} onKeyDown={v.onPinKey} type={"password"} inputMode={"numeric"} placeholder={"PIN"} style={__css(`height:52px;font-family:'JetBrains Mono',monospace;font-size:20px;letter-spacing:.3em;text-align:center;border-color:${v.pinBorder ?? ""}`)} />
                {" "}
                <button onClick={v.login} style={{ height: "50px", border: "0", cursor: "pointer", background: "#ed1c24", color: "#fff", transform: "skewX(-15deg)", boxShadow: "0 12px 30px rgba(237,28,36,.3)" }} className={"adp0"}>
                  <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "12.5px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                    Prijavi se
                  </span>
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </>
        ) : null}
        {" "}
        {v.authed ? (
          <>
            {" "}
            <div style={{ position: "fixed", inset: "0", pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "56px 56px", WebkitMaskImage: "linear-gradient(#000,transparent 55%)", maskImage: "linear-gradient(#000,transparent 55%)" }}></div>
            {" "}
            <header style={{ position: "sticky", top: "0", zIndex: "50", background: "rgba(11,11,13,.86)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,.09)", backgroundImage: "linear-gradient(90deg,transparent,#ed1c24 50%,transparent)", backgroundSize: "100% 3px", backgroundRepeat: "no-repeat" }}>
              {" "}
              <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(14px,2.5vw,28px)", height: "66px", display: "flex", alignItems: "center", gap: "16px" }}>
                {" "}
                <img src={"/assets/logo-wordmark-white.png"} alt={"MR Engines"} style={{ height: "24px", width: "auto" }} />
                {" "}
                <div style={{ display: "flex", border: "1px solid rgba(255,255,255,.16)", borderRadius: "10px", overflow: "hidden", flex: "none" }}>
                  {" "}
                  <button onClick={v.siteMr} style={__css(`height:38px;padding:0 16px;border:0;cursor:pointer;font-family:Figtree,system-ui,sans-serif;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:${v.mrBg ?? ""};color:${v.mrFg ?? ""};transition:background .15s`)}>
                    MR Engines
                  </button>
                  {" "}
                  <button onClick={v.siteTv} style={__css(`height:38px;padding:0 16px;border:0;border-left:1px solid rgba(255,255,255,.1);cursor:pointer;font-family:Figtree,system-ui,sans-serif;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:${v.tvBg ?? ""};color:${v.tvFg ?? ""};transition:background .15s`)}>
                    Tiki Vent
                  </button>
                  {" "}
                </div>
                {" "}
                <span style={__css(`margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:${v.dirtyColor ?? ""};white-space:nowrap`)}>
                  {__t(v.dirtyText)}
                </span>
                {" "}
                <a href={v.pageHref} target={"_blank"} rel={"noopener"} style={{ flex: "none", height: "40px", display: "inline-flex", alignItems: "center", padding: "0 14px", border: "1px solid rgba(255,255,255,.16)", borderRadius: "10px", color: "#f2f2f3", fontSize: "12px", fontWeight: "700", letterSpacing: ".08em", textTransform: "uppercase" }} className={"adp1"}>
                  Stranica ↗
                </a>
                {" "}
                <button onClick={v.save} style={{ flex: "none", height: "40px", padding: "0 20px", border: "0", cursor: "pointer", background: "#ed1c24", color: "#fff", transform: "skewX(-15deg)", boxShadow: "0 10px 26px rgba(237,28,36,.28)", transition: "background .15s" }} className={"adp0"}>
                  <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "12px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                    ✓ Sačuvaj
                  </span>
                </button>
                {" "}
                <button onClick={v.logout} title={"Odjava"} style={{ flex: "none", width: "40px", height: "40px", border: "1px solid rgba(255,255,255,.16)", borderRadius: "10px", background: "transparent", color: "#9c9da3", cursor: "pointer", fontSize: "15px" }} className={"adp2"}>
                  ⏻
                </button>
                {" "}
              </div>
              {" "}
            </header>
            {" "}
            <div data-shell={"1"} style={{ maxWidth: "1440px", margin: "0 auto", padding: "28px clamp(14px,2.5vw,28px) 96px", display: "grid", gridTemplateColumns: "220px minmax(0,1fr)", gap: "24px", alignItems: "start" }}>
              {" "}
              <nav data-side={"1"} style={{ position: "sticky", top: "86px", display: "flex", flexDirection: "column", gap: "4px" }}>
                {" "}
                {__arr(v.tabs).map(($tb, $i0) => (
                  <React.Fragment key={$i0}>
                    {" "}
                    <button onClick={$tb?.on} style={__css(`display:flex;align-items:center;gap:12px;height:46px;padding:0 14px;border-radius:10px;cursor:pointer;text-align:left;background:${$tb?.bg ?? ""};border:1px solid ${$tb?.bd ?? ""};box-shadow:inset 3px 0 0 ${$tb?.idx ?? ""};color:${$tb?.fg ?? ""};font-family:Figtree,system-ui,sans-serif;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;transition:background .15s,color .15s`)} className={"adp3"}>
                      {__t($tb?.label)}
                    </button>
                    {" "}
                  </React.Fragment>
                ))}
                {" "}
                <div style={{ marginTop: "16px", padding: "14px 16px", border: "1px dashed rgba(255,255,255,.14)", borderRadius: "12px", fontSize: "12.5px", lineHeight: "1.5", color: "#9c9da3" }}>
                  Svako polje ima ograničenje dužine - toliko staje na stranicu bez lomljenja rasporeda. Brojač pored naziva polja pokazuje koliko je ostalo.
                </div>
                {" "}
              </nav>
              {" "}
              <main style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {" "}
                  <h2 style={{ margin: "0", display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", fontWeight: "800", letterSpacing: "-.025em" }}>
                    <span style={{ width: "26px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                    {__t(v.title)}
                  </h2>
                  {" "}
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.5", color: "#9c9da3", maxWidth: "72ch" }}>
                    {__t(v.hint)}
                  </p>
                  {" "}
                </div>
                {" "}
                {v.hasTop ? (
                  <>
                    {" "}
                    <div style={{ padding: "24px", background: "#131316", border: "1px solid rgba(255,255,255,.09)", borderRadius: "16px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "16px" }}>
                      {" "}
                      {__arr(v.top).map(($f, $i0) => (
                        <React.Fragment key={$i0}>
                          {" "}
                          <label style={__css(`display:flex;flex-direction:column;gap:7px;grid-column:span ${$f?.span ?? ""};min-width:0`)}>
                            {" "}
                            <span style={{ display: "flex", justifyContent: "space-between", gap: "10px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#9c9da3" }}>
                              <span>
                                {__t($f?.label)}
                              </span>
                              <span style={__css(`color:${$f?.countColor ?? ""}`)}>
                                {__t($f?.count)}
                              </span>
                            </span>
                            {" "}
                            {$f?.isText ? (
                              <>
                                <input value={__dv($f?.value)} onChange={$f?.on} maxLength={$f?.max} placeholder={$f?.ph} />
                              </>
                            ) : null}
                            {" "}
                            {$f?.isArea ? (
                              <>
                                <textarea value={__dv($f?.value)} onChange={$f?.on} maxLength={$f?.max} placeholder={$f?.ph}></textarea>
                              </>
                            ) : null}
                            {" "}
                            {$f?.isSelect ? (
                              <>
                                <select value={__dv($f?.value)} onChange={$f?.on}>
                                  {__arr($f?.options).map(($o, $i1) => (
                                    <React.Fragment key={$i1}>
                                      <option value={__dv($o?.v)}>
                                        {__t($o?.l)}
                                      </option>
                                    </React.Fragment>
                                  ))}
                                </select>
                              </>
                            ) : null}
                            {" "}
                            {$f?.hasUpload ? (
                              <>
                                <input type={"file"} accept={$f?.accept} onChange={$f?.uploadOn} />
                              </>
                            ) : null}
                            {" "}
                          </label>
                          {" "}
                        </React.Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                  </>
                ) : null}
                {" "}
                {v.hasList ? (
                  <>
                    {" "}
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {" "}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                        {" "}
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "#9c9da3" }}>
                          {__t(v.listLabel)}
                        </span>
                        {" "}
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                          {" "}
                          {v.canAdd ? (
                            <>
                              <button onClick={v.add} style={{ height: "36px", padding: "0 14px", borderRadius: "9px", border: "1px solid rgba(255,255,255,.16)", background: "transparent", color: "#f2f2f3", cursor: "pointer", fontSize: "12px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase" }} className={"adp1"}>
                                + Dodaj
                              </button>
                            </>
                          ) : null}
                          {" "}
                          {v.canMove ? (
                            <>
                              <button onClick={v.moveUp} style={{ height: "36px", width: "40px", borderRadius: "9px", border: "1px solid rgba(255,255,255,.16)", background: "transparent", color: "#f2f2f3", cursor: "pointer", fontSize: "13px" }} className={"adp4"}>
                                ↑
                              </button>
                              <button onClick={v.moveDown} style={{ height: "36px", width: "40px", borderRadius: "9px", border: "1px solid rgba(255,255,255,.16)", background: "transparent", color: "#f2f2f3", cursor: "pointer", fontSize: "13px" }} className={"adp4"}>
                                ↓
                              </button>
                            </>
                          ) : null}
                          {" "}
                          {v.canRemove ? (
                            <>
                              <button onClick={v.remove} style={{ height: "36px", padding: "0 14px", borderRadius: "9px", border: "1px solid rgba(237,28,36,.4)", background: "transparent", color: "#ff4b52", cursor: "pointer", fontSize: "12px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase" }} className={"adp5"}>
                                Ukloni
                              </button>
                            </>
                          ) : null}
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {" "}
                        {__arr(v.list).map(($it, $i0) => (
                          <React.Fragment key={$i0}>
                            {" "}
                            <button onClick={$it?.on} style={__css(`display:inline-flex;align-items:center;gap:10px;height:40px;padding:0 14px;border-radius:999px;cursor:pointer;font-family:Figtree,system-ui,sans-serif;font-size:13px;font-weight:600;background:${$it?.bg ?? ""};border:1px solid ${$it?.bd ?? ""};color:${$it?.fg ?? ""};transition:all .15s;max-width:100%`)} className={"adp4"}>
                              <span style={__css(`font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:700;color:${$it?.idxColor ?? ""}`)}>
                                {__t($it?.idx)}
                              </span>
                              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                {__t($it?.label)}
                              </span>
                            </button>
                            {" "}
                          </React.Fragment>
                        ))}
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </>
                ) : null}
                {" "}
                {v.hasFields ? (
                  <>
                    {" "}
                    <div style={{ padding: "24px", background: "#131316", border: "1px solid rgba(255,255,255,.09)", borderRadius: "16px", backgroundImage: "linear-gradient(90deg,transparent,#ed1c24 50%,transparent)", backgroundSize: "100% 3px", backgroundRepeat: "no-repeat", display: "flex", flexDirection: "column", gap: "18px" }}>
                      {" "}
                      {v.hasItemTitle ? (
                        <>
                          <div style={{ fontSize: "18px", fontWeight: "800", letterSpacing: "-.015em" }}>
                            {__t(v.itemTitle)}
                          </div>
                        </>
                      ) : null}
                      {" "}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "16px" }}>
                        {" "}
                        {__arr(v.fields).map(($f, $i0) => (
                          <React.Fragment key={$i0}>
                            {" "}
                            <label style={__css(`display:flex;flex-direction:column;gap:7px;grid-column:span ${$f?.span ?? ""};min-width:0`)}>
                              {" "}
                              <span style={{ display: "flex", justifyContent: "space-between", gap: "10px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#9c9da3" }}>
                                <span>
                                  {__t($f?.label)}
                                </span>
                                <span style={__css(`color:${$f?.countColor ?? ""}`)}>
                                  {__t($f?.count)}
                                </span>
                              </span>
                              {" "}
                              {$f?.isText ? (
                                <>
                                  <input value={__dv($f?.value)} onChange={$f?.on} maxLength={$f?.max} placeholder={$f?.ph} />
                                </>
                              ) : null}
                              {" "}
                              {$f?.isArea ? (
                                <>
                                  <textarea value={__dv($f?.value)} onChange={$f?.on} maxLength={$f?.max} placeholder={$f?.ph}></textarea>
                                </>
                              ) : null}
                              {" "}
                              {$f?.isSelect ? (
                                <>
                                  <select value={__dv($f?.value)} onChange={$f?.on}>
                                    {__arr($f?.options).map(($o, $i1) => (
                                      <React.Fragment key={$i1}>
                                        <option value={__dv($o?.v)}>
                                          {__t($o?.l)}
                                        </option>
                                      </React.Fragment>
                                    ))}
                                  </select>
                                </>
                              ) : null}
                              {" "}
                              {$f?.hasUpload ? (
                                <>
                                  <input type={"file"} accept={$f?.accept} onChange={$f?.uploadOn} />
                                </>
                              ) : null}
                              {" "}
                              {$f?.hasHint ? (
                                <>
                                  <span style={{ fontSize: "12px", color: "#6b6c72", lineHeight: "1.4" }}>
                                    {__t($f?.hint)}
                                  </span>
                                </>
                              ) : null}
                              {" "}
                            </label>
                            {" "}
                          </React.Fragment>
                        ))}
                        {" "}
                      </div>
                      {" "}
                      {v.hasChecks ? (
                        <>
                          {" "}
                          <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "6px", borderTop: "1px solid rgba(255,255,255,.08)" }}>
                            {" "}
                            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#9c9da3" }}>
                              {__t(v.checksLabel)}
                            </span>
                            {" "}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                              {" "}
                              {__arr(v.checks).map(($ck, $i0) => (
                                <React.Fragment key={$i0}>
                                  {" "}
                                  <label style={__css(`display:inline-flex;align-items:center;gap:9px;height:38px;padding:0 14px 0 10px;border-radius:999px;cursor:pointer;background:${$ck?.bg ?? ""};border:1px solid ${$ck?.bd ?? ""};font-size:13px;font-weight:600;transition:all .15s`)}>
                                    <input type={"checkbox"} checked={__dc($ck?.checked)} onChange={$ck?.on} />
                                    {__t($ck?.label)}
                                  </label>
                                  {" "}
                                </React.Fragment>
                              ))}
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </>
                      ) : null}
                      {" "}
                      {v.hasImages ? (
                        <>
                          {" "}
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,200px),1fr))", gap: "14px", paddingTop: "6px", borderTop: "1px solid rgba(255,255,255,.08)" }}>
                            {" "}
                            {__arr(v.images).map(($im, $i0) => (
                              <React.Fragment key={$i0}>
                                {" "}
                                <div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}>
                                  {" "}
                                  <span style={{ display: "flex", justifyContent: "space-between", gap: "8px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "#9c9da3" }}>
                                    <span>
                                      {__t($im?.label)}
                                    </span>
                                    {$im?.has ? (
                                      <>
                                        <button onClick={$im?.clear} style={{ background: "transparent", border: "0", padding: "0", cursor: "pointer", color: "#ff4b52", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase" }}>
                                          ukloni
                                        </button>
                                      </>
                                    ) : null}
                                  </span>
                                  {" "}
                                  <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "12px", overflow: "hidden", background: "radial-gradient(circle at 50% 60%,rgba(237,28,36,.12),transparent 60%),radial-gradient(circle,#1c1c21,#0d0d10)", border: "1px dashed rgba(255,255,255,.14)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {__t($im?.preview)}
                                  </div>
                                  {" "}
                                  <input type={"file"} accept={"image/*"} onChange={$im?.upload} />
                                  {" "}
                                  <span style={{ fontSize: "11.5px", color: "#6b6c72", lineHeight: "1.4" }}>
                                    {__t($im?.hint)}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                              </React.Fragment>
                            ))}
                            {" "}
                          </div>
                          {" "}
                        </>
                      ) : null}
                      {" "}
                    </div>
                    {" "}
                  </>
                ) : null}
                {" "}
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 20px", border: "1px solid rgba(255,255,255,.08)", borderRadius: "14px", fontSize: "12.5px", color: "#9c9da3" }}>
                  {" "}
                  <span>
                    {"Sadržaj: "}
                    <strong style={{ color: "#f2f2f3" }}>
                      {__t(v.sizeText)}
                    </strong>
                    {" · izmene se vide na stranici odmah posle „Sačuvaj“ (i u otvorenom tabu stranice)."}
                  </span>
                  {" "}
                  <button onClick={v.reset} style={{ height: "34px", padding: "0 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,.14)", background: "transparent", color: "#9c9da3", cursor: "pointer", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase" }} className={"adp1"}>
                    Vrati podrazumevano (
                    {__t(v.siteName)}
                    )
                  </button>
                  {" "}
                </div>
                {" "}
              </main>
              {" "}
            </div>
            {" "}
            {v.hasToast ? (
              <>
                {" "}
                <div style={{ position: "fixed", left: "50%", bottom: "28px", zIndex: "80", transform: "translateX(-50%)", padding: "14px 22px", borderRadius: "12px", background: "#131316", border: "1px solid rgba(255,255,255,.14)", boxShadow: "0 20px 60px rgba(0,0,0,.5)", fontSize: "14px", fontWeight: "600", animation: "toast .35s cubic-bezier(.22,1,.36,1) both", whiteSpace: "nowrap" }}>
                  {__t(v.toast)}
                </div>
                {" "}
              </>
            ) : null}
            {" "}
          </>
        ) : null}
      </div>
    </>
  )
}

export const defaultProps = {}

export default createDCPage(Component, view, defaultProps, "AdminPage")
