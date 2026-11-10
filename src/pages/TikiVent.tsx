// @ts-nocheck
/* eslint-disable */
import * as React from 'react'
import { DCLogic, createDCPage, __css, __style, __dv, __dc, __arr, __t } from '../lib/dc'

// ───────────────────────────── Logika ─────────────────────────────
const RED = '#ed1c24', MONO = "'JetBrains Mono',monospace";
const pad = n => String(n).padStart(2, '0');
const B = {
  amc: ['AMC', 'brand-01.png'], nural: ['Nüral', 'brand-02.png'], corteco: ['Corteco', 'brand-03.png'], ks: ['Kolbenschmidt', 'brand-04.png'], ruville: ['Ruville', 'brand-05.png'],
  freccia: ['Freccia', 'brand-06.png'], graf: ['Graf', 'brand-07.png'], metelli: ['Metelli', 'brand-08.png'], goetze: ['Goetze', 'brand-10.png'], elring: ['Elring', 'brand-11.png'],
  vernet: ['Calorstat by Vernet', 'brand-12.png'], ne: ['NE', 'brand-13.png'], fai: ['FAI', 'brand-14.png'], mahle: ['Mahle', 'brand-15.png'], autoventil: ['AutoVentil', 'brand-16.png'],
  reinz: ['Victor Reinz', 'brand-17.png'], king: ['King', 'brand-18.png'], mec: ['MEC Diesel', 'brand-19.png'], arco: ['Arco', 'brand-20.png'], pierburg: ['Pierburg', 'brand-21.png'],
};
const PARTS = [
  { id: 'glave', short: 'Glave motora', name: 'Glave motora, vođice i sedišta', desc: 'Nove glave motora, vođice i sedišta ventila za putnički, teretni i industrijski program.', brands: ['amc', 'freccia', 'metelli'], dot: [39.3, 25], zone: [41.7, 16.2, 26.7, 18.8] },
  { id: 'bregaste', short: 'Bregaste i podizači', name: 'Bregaste, podizači i klackalice', desc: 'Bregaste osovine, hidraulični podizači, klackalice i osovinice klackalica.', brands: ['fai', 'freccia', 'metelli'], dot: [66.3, 19.2], zone: [46.7, 13.5, 16.7, 9.2] },
  { id: 'ventili', short: 'Ventili', name: 'Ventili', desc: 'Usisni i izduvni ventili, standardne i pojačane izvedbe, za benzinske i dizel motore.', brands: ['autoventil', 'freccia', 'mahle', 'amc'], dot: [55, 28.1], zone: [47.7, 18.5, 14.7, 16.5] },
  { id: 'dihtunzi', short: 'Dihtunzi', name: 'Dihtunzi i garniture', desc: 'Dihtunzi glave, kompletne garniture motora, dihtunzi poklopca ventila, usisa i izduva.', brands: ['reinz', 'elring', 'corteco'], dot: [71.3, 35.4], zone: [41, 34.2, 28, 2.7] },
  { id: 'klipovi', short: 'Klipovi', name: 'Klipovi', desc: 'Klipovi sa osovinicama i osiguračima, standardne i reparaturne mere, putnički i industrijski program.', brands: ['ks', 'mahle', 'nural', 'mec', 'arco'], dot: [55, 50.4], zone: [49.3, 35.4, 11.3, 25] },
  { id: 'karike', short: 'Karike', name: 'Karike', desc: 'Kompleti karika po cilindru i po motoru, standardne i reparaturne mere.', brands: ['goetze', 'ne', 'mahle', 'ks'], dot: [48, 38.5], zone: [49.3, 36.3, 11.3, 4.4] },
  { id: 'kosuljice', short: 'Košuljice', name: 'Košuljice cilindra', desc: 'Mokre i suve košuljice za putnička, teretna vozila i radne mašine.', brands: ['goetze', 'ks', 'mahle', 'mec', 'arco'], dot: [62, 57.7], zone: [48.2, 36, 13.7, 29] },
  { id: 'lezajevi', short: 'Ležajevi', name: 'Ležajevi radilice i klipnjače', desc: 'Glavni i leteći ležajevi, aksijalni ležajevi, standardne mere i podmere.', brands: ['king', 'ks', 'mahle'], dot: [55, 76.9], zone: [49.7, 63.8, 10.7, 14.2] },
  { id: 'semerinzi', short: 'Semerinzi', name: 'Semerinzi i zaptivke', desc: 'Semerinzi radilice i bregaste, zaptivke ventila (gumice), zaptivke poklopaca.', brands: ['corteco', 'elring', 'reinz'], dot: [38.3, 73.1], zone: [38.3, 69.6, 5, 7.3] },
  { id: 'razvod', short: 'Razvod', name: 'Razvod: lanci, kaiševi, zatezači', desc: 'Kompleti lanaca i kaiševa razvoda, zatezači, vođice, zupčanici i remenice.', brands: ['fai', 'ruville', 'metelli'], dot: [14.3, 46.2], zone: [7.3, 13.5, 14, 67.3] },
  { id: 'hladjenje', short: 'Pumpe za vodu', name: 'Pumpe za vodu i termostati', desc: 'Pumpe za vodu, termostati i kućišta termostata, senzori temperature.', brands: ['graf', 'metelli', 'vernet', 'ruville', 'pierburg'], dot: [81, 50.4], zone: [68, 38.5, 13.3, 17.7] },
  { id: 'ulje', short: 'Pumpe za ulje', name: 'Pumpe za ulje i vakuum pumpe', desc: 'Pumpe za ulje, vakuum pumpe, EGR ventili i klapne usisa.', brands: ['pierburg', 'metelli', 'fai'], dot: [43.7, 85.4], zone: [42, 78.5, 13, 8.5] },
];
const OTHER = ['Trap i upravljački mehanizam', 'Filteri', 'Delovi šasije', 'Ležajevi točka i homokinetički zglobovi', 'Diskovi, pločice i paknovi'];
const SCHED = [
  ['Gradski', 'do kraja prethodnog dana', '08:00', null],
  ['Novi Beograd i Zemun', '09:30', '10:00', 570],
  ['Gradski', '10:30', '11:00', 630],
  ['Smederevski put - Leštane', '11:30', '12:00', 690],
  ['Novi Beograd i Zemun', '14:15', '14:45', 855],
  ['Gradski', '14:15', '14:45', 855],
];
const LOCS = [
  { name: 'Beograd', tag: 'Veleprodaja i maloprodaja', addr: 'Prešernova 15, Beograd', hours: [['pon - pet', '08:00 - 16:00']], open: { 1: [8, 16], 2: [8, 16], 3: [8, 16], 4: [8, 16], 5: [8, 16] }, tels: ['011 3979 636', '011 3979 606'], maps: 'https://maps.google.com/?q=Pre%C5%A1ernova+15,+Beograd' },
  { name: 'Niš', tag: 'Franšiza', addr: 'Bulevar 12. februar 48, Niš', hours: [['pon - pet', '09:00 - 17:00'], ['subota', '09:00 - 14:00']], open: { 1: [9, 17], 2: [9, 17], 3: [9, 17], 4: [9, 17], 5: [9, 17], 6: [9, 14] }, tels: [], maps: 'https://maps.google.com/?q=Bulevar+12.+februar+48,+Ni%C5%A1' },
  { name: 'Čačak', tag: 'Franšiza', addr: 'Danila Mitrovića Avrama 12, Čačak', hours: [['pon - pet', '08:00 - 17:00'], ['subota', '08:00 - 14:00']], open: { 1: [8, 17], 2: [8, 17], 3: [8, 17], 4: [8, 17], 5: [8, 17], 6: [8, 14] }, tels: [], maps: 'https://maps.google.com/?q=Danila+Mitrovi%C4%87a+Avrama+12,+%C4%8Ca%C4%8Dak' },
];
const TIMELINE = [
  ['1992', 'Osnivanje', 'Rezervni delovi za motore za rastuće domaće tržište.'],
  ['1997', 'Specijalizacija', 'Reorganizacija: uvoz i prodaja delova motorne grupe postaju jedina delatnost.'],
  ['2010', 'Šira ponuda', 'Trap i upravljanje, filteri, šasija, ležajevi točka, homokinetički zglobovi, kočnice.'],
  ['Niš · Čačak', 'Franšize', 'Direktno prisustvo na jugu i zapadu Srbije uz veleprodaju i maloprodaju u Beogradu.'],
  ['2025', 'Deo MR Engines', 'Remont motora i delovi pod jednim krovom sa liderom u mašinskoj obradi.'],
];
const KEY = 'tikivent.content';
function tvDefaults() {
  return {
    hero: { video: '/assets/tikivent-hero.mp4', poster: '', items: 50000 },
    catalogUrl: 'http://tiki.bavariahosting.com/orders/', email: 'office@tikivent.co.rs', phones: ['011 3979 636', '011 3979 606'], messaging: '',
    brands: Object.keys(B).map(id => ({ id, name: B[id][0], logo: '/assets/brands/' + B[id][1], parts: PARTS.filter(p => p.brands.includes(id)).map(p => p.id) })),
    parts: PARTS.map(p => ({ id: p.id, short: p.short, name: p.name, desc: p.desc })),
    deals: DEALS_DEFAULT.map(d => ({ ...d, image: '' })),
    delivery: { freeBg: 3000, feeBg: 320, freeRs: 12000, hours: 'pon - pet 08:00 - 16:00', sched: SCHED.map(r => ({ zone: r[0], cutoff: r[1], time: r[2] })) },
    locs: LOCS.map(l => ({ name: l.name, tag: l.tag, addr: l.addr, wd: l.hours[0][1], sat: l.hours[1] ? l.hours[1][1] : '', tels: l.tels, maps: l.maps })),
    timeline: TIMELINE.map(t => ({ y: t[0], t: t[1], d: t[2] })),
    texts: { heroEyebrow: 'Ovlašćeni distributer · od 1992', heroL1: 'Delovi motorne grupe.', heroL2: 'Spremno za razvoz.', heroSub: 'Preko 50.000 artikala vodećih svetskih proizvođača na lageru u Beogradu - za putnička i teretna vozila, plovila, poljoprivredne i radne mašine.', stat1: 'Artikala na lageru', stat2: 'Brendova', stat3: 'Razvoz dnevno · Beograd', stat4: 'Objekta u Srbiji', partsTitle: 'Dodirni deo. Vidi ko ga pravi.', partsSub: 'Presek motora - izaberi grupu delova i vidi brendove koje držimo na lageru. Zatim pošalji upit ili otvori katalog.', brandsSub: 'Dodirni logo i vidi koje grupe delova brend pokriva kod nas.', delivTitle: 'Beograd šest puta dnevno. Srbija kurirom.', delivSub: 'Sopstveni razvoz po Beogradu, AKS i City Express za ostatak Srbije. Porudžbine za kurira primamo radnim danima do 15:00.', dealsTitle: 'Ovog meseca.', catTitle: 'Lager, cene i porudžbine - za registrovane kupce veleprodaje.', aboutTitle: 'Od 1992. Deo MR Engines od 2025.', aboutBody: 'Tiki Vent je osnovan 1992. sa jasnim ciljem - kvalitetni rezervni delovi za motore na domaćem tržištu. Od 1997. specijalizovani smo za uvoz i prodaju delova motorne grupe, a lagerom od preko 50.000 artikala pokrivamo kompletnu potražnju Srbije.', mrTitle: 'Remont motora i delovi pod jednim krovom.', mrBody: 'Od 2025. Tiki Vent posluje u okviru MR Engines - lidera u mašinskoj obradi i remontu motora u Srbiji. Isti delovi koje ugrađujemo u remontovane motore, na lageru za vaš servis.', contactTitle: 'Pošaljite upit. Odgovaramo u toku radnog dana.' },
  };
}
const DEALS_DEFAULT = [
  { brand: 'mahle', off: '-10%', title: 'Klipovi i karike', note: 'Putnički program, kompleti po motoru', until: '31.10.' },
  { brand: 'elring', off: '-15%', title: 'Garniture dihtunga glave', note: 'Na lageru za najtraženije motore', until: '31.10.' },
  { brand: 'graf', off: '2+1', title: 'Pumpe za vodu', note: 'Za servise sa veleprodajnim nalogom', until: '15.11.' },
];
const DAYS = ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'];
const NAV = [['delovi', 'Delovi'], ['brendovi', 'Brendovi'], ['dostava', 'Dostava'], ['akcije', 'Akcije'], ['katalog', 'Katalog'], ['lokacije', 'Lokacije'], ['o-nama', 'O nama'], ['kontakt', 'Kontakt']];

function bgTime() {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Belgrade', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    const g = t => (parts.find(p => p.type === t) || {}).value || '';
    const map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { d: map[g('weekday')] ?? new Date().getDay(), min: (parseInt(g('hour'), 10) % 24) * 60 + parseInt(g('minute'), 10) };
  } catch (e) { const n = new Date(); return { d: n.getDay(), min: n.getHours() * 60 + n.getMinutes() }; }
}
const fmtLeft = m => m >= 60 ? `${Math.floor(m / 60)} h ${pad(m % 60)} min` : `${m} min`;
const fmtRsd = n => n.toLocaleString('de-DE');

const logo = (k, style) => React.createElement('img', { src: '/assets/brands/' + B[k][1], alt: B[k][0], style });
function svg(tag, attrs, children) { return React.createElement(tag, attrs, ...(children || [])); }
function buildDiagram(refs) {
  const INK = 'rgba(23,23,26,.82)', THIN = 'rgba(23,23,26,.5)';
  const S = (tag, attrs, kids) => React.createElement(tag, attrs, ...(kids || []));
  const L = (x1, y1, x2, y2, o) => S('line', { x1, y1, x2, y2, style: Object.assign({ stroke: INK, strokeWidth: 1.4, strokeLinecap: 'round' }, o || {}) });
  const R = (x, y, w, h, o, rx) => S('rect', { x, y, width: w, height: h, rx: rx || 0, style: Object.assign({ fill: 'url(#tvHatch)', stroke: INK, strokeWidth: 1.4 }, o || {}) });
  const C = (cx, cy, r, o) => S('circle', { cx, cy, r, style: Object.assign({ fill: '#fff', stroke: INK, strokeWidth: 1.4 }, o || {}) });
  const P = (d, o) => S('path', { d, style: Object.assign({ fill: '#fff', stroke: INK, strokeWidth: 1.4, strokeLinejoin: 'round' }, o || {}) });
  const T = (x, y, txt, o) => S('text', { x, y, style: Object.assign({ fontFamily: MONO, fontSize: 8, fontWeight: 700, letterSpacing: '.12em', fill: INK }, o || {}) }, [txt]);
  const spinAt = (x, y, dur, extra) => Object.assign({ transformBox: 'view-box', transformOrigin: x + 'px ' + y + 'px', animation: 'spin ' + dur + 's linear infinite' }, extra || {});
  const thin = { stroke: THIN, strokeWidth: .9 }, white = { fill: '#fff' }, hatch2 = { fill: 'url(#tvHatch2)' }, cav = { fill: '#fff', stroke: THIN, strokeWidth: .9 };
  const spring = (x, y1, y2, a) => { const n = 7, pts = []; for (let i = 0; i <= n; i++) pts.push((x + (i % 2 ? a : -a)) + ',' + (y1 + (y2 - y1) * i / n)); return pts.join(' '); };
  const k = [];
  k.push(S('defs', {}, [
    S('pattern', { id: 'tvHatch', patternUnits: 'userSpaceOnUse', width: 6, height: 6, patternTransform: 'rotate(45)' }, [S('line', { x1: 0, y1: 0, x2: 0, y2: 6, style: { stroke: 'rgba(23,23,26,.36)', strokeWidth: .8 } })]),
    S('pattern', { id: 'tvHatch2', patternUnits: 'userSpaceOnUse', width: 4, height: 4, patternTransform: 'rotate(-45)' }, [S('line', { x1: 0, y1: 0, x2: 0, y2: 4, style: { stroke: 'rgba(23,23,26,.5)', strokeWidth: .8 } })]),
  ]));
  // sheet frame, title block, centerlines, dimensions
  k.push(R(24, 20, 552, 480, { fill: 'none', strokeWidth: 1.1 }), R(400, 462, 176, 38, { fill: '#fff', strokeWidth: 1.1 }), L(470, 462, 470, 500, thin), L(400, 481, 576, 481, thin));
  k.push(T(408, 475, 'TIKI VENT'), T(408, 494, 'MR ENGINES', { fontWeight: 500, fill: THIN }), T(478, 475, 'PRESEK A-A'), T(478, 494, 'MOTOR 4 CIL · DOHC', { fontWeight: 500, fill: THIN }));
  const cl = { stroke: 'rgba(23,23,26,.4)', strokeWidth: .8, strokeDasharray: '14 4 2 4' };
  k.push(L(330, 34, 330, 458, cl), L(60, 380, 500, 380, cl));
  const dim = { stroke: THIN, strokeWidth: .8 };
  k.push(L(297, 36, 363, 36, dim), L(297, 32, 297, 40, dim), L(363, 32, 363, 40, dim), T(321, 30, 'Ø B', { fontSize: 7, fontWeight: 500, fill: THIN }));
  k.push(L(410, 186, 500, 186, { stroke: THIN, strokeWidth: .6, strokeDasharray: '2 3' }), L(500, 186, 500, 254, dim), L(496, 186, 504, 186, dim), L(496, 254, 504, 254, dim), T(505, 223, 'S', { fontSize: 7, fontWeight: 500, fill: THIN }));
  // timing drive (cover removed)
  k.push(P('M 62 74 H 110 Q 124 74 124 88 V 402 Q 124 416 110 416 H 62 Q 48 416 48 402 V 88 Q 48 74 62 74 Z', { fill: 'none', stroke: THIN, strokeWidth: 1, strokeDasharray: '5 4' }));
  const sprocket = (x, y, r, dur) => S('g', { style: spinAt(x, y, dur) }, [C(x, y, r, { strokeWidth: 3, strokeDasharray: '2.6 2.6' }), C(x, y, r - 5, thin), L(x - r + 6, y, x + r - 6, y, thin), L(x, y - r + 6, x, y + r - 6, thin), C(x, y, 3.5, { fill: INK, stroke: 'none' })]);
  k.push(sprocket(68, 100, 15, 3.2), sprocket(104, 100, 15, 3.2), sprocket(86, 380, 16, 1.6));
  k.push(L(123, 116, 108, 366, { stroke: THIN, strokeWidth: 3 }), L(49, 116, 64, 366, { stroke: THIN, strokeWidth: 3 }), R(40, 234, 14, 12, { fill: '#fff', strokeWidth: 1.1 }, 2));
  const chainD = 'M 53 100 A 15 15 0 0 1 68 85 L 104 85 A 15 15 0 0 1 119 100 L 102 380 A 16 16 0 0 1 70 380 Z';
  k.push(S('path', { d: chainD, style: { fill: 'none', stroke: 'rgba(23,23,26,.22)', strokeWidth: 4.6, strokeLinejoin: 'round' } }), S('path', { d: chainD, style: { fill: 'none', stroke: INK, strokeWidth: 2.6, strokeDasharray: '4.5 4.5', strokeLinejoin: 'round', animation: 'chain 2.2s linear infinite' } }));
  // cam cover + head
  k.push(P('M 258 84 V 60 Q 258 46 272 46 H 388 Q 402 46 402 60 V 84 Z', { fill: 'url(#tvHatch)' }), P('M 265 84 V 62 Q 265 53 274 53 H 386 Q 395 53 395 62 V 84 Z', cav));
  k.push(R(250, 84, 160, 98), P('M 262 84 V 118 Q 262 130 274 130 H 386 Q 398 130 398 118 V 84 Z', cav));
  ['M 250 150 C 285 147 302 156 312 172', 'M 410 150 C 375 147 358 156 348 172'].forEach(d => k.push(P(d, { fill: 'none', stroke: THIN, strokeWidth: 19 }), P(d, { fill: 'none', stroke: '#fff', strokeWidth: 17 })));
  k.push(P('M 294 182 Q 298 166 330 164 Q 362 166 366 182 Z', cav));
  const valve = (hx, hy, ang, delay) => S('g', { transform: 'rotate(' + ang + ' ' + hx + ' ' + hy + ')' }, [
    R(hx - 11, hy - 72, 22, 52, cav, 2), R(hx - 3, hy - 20, 6, 16, { fill: '#fff', stroke: 'none' }), R(hx - 5, hy - 22, 10, 4, hatch2),
    S('g', { style: { animation: 'valve 3.2s ease-in-out infinite', animationDelay: delay } }, [
      L(hx, hy - 2, hx, hy - 70, { strokeWidth: 3 }),
      P('M ' + (hx - 13) + ' ' + hy + ' L ' + (hx + 13) + ' ' + hy + ' L ' + (hx + 9) + ' ' + (hy - 6) + ' L ' + (hx - 9) + ' ' + (hy - 6) + ' Z', { fill: INK, stroke: 'none' }),
      S('polyline', { points: spring(hx, hy - 60, hy - 22, 7), style: { fill: 'none', stroke: THIN, strokeWidth: 1.1, strokeLinejoin: 'round' } }),
      R(hx - 8, hy - 66, 16, 4, { fill: INK, stroke: 'none' }), R(hx - 9, hy - 78, 18, 9, white, 2),
    ]),
  ]);
  k.push(valve(313, 176, -12, '0s'), valve(347, 176, 12, '-1.6s'));
  const cam = (x, y, delay) => S('g', { style: spinAt(x, y, 3.2, { animationDelay: delay }) }, [P('M ' + (x - 11) + ' ' + y + ' A 11 11 0 0 1 ' + (x + 11) + ' ' + y + ' L ' + (x + 5) + ' ' + (y + 13) + ' Q ' + x + ' ' + (y + 16) + ' ' + (x - 5) + ' ' + (y + 13) + ' Z'), C(x, y, 3, { fill: INK, stroke: 'none' })]);
  k.push(cam(297, 86, '0s'), cam(363, 86, '-1.6s'));
  // spark plug
  k.push(R(322, 62, 16, 22, white, 1), L(322, 70, 338, 70, thin), L(322, 78, 338, 78, thin), R(325, 84, 10, 82, white));
  [150, 154, 158, 162].forEach(y => k.push(L(325, y, 335, y, thin)));
  k.push(L(330, 166, 330, 175, { strokeWidth: 1.6 }), L(330, 175, 336, 175, { strokeWidth: 1.6 }), L(336, 175, 336, 171, { strokeWidth: 1.6 }));
  // head gasket
  k.push(R(250, 182, 47, 5, hatch2), R(363, 182, 47, 5, hatch2));
  // block, jackets, liner
  k.push(R(250, 187, 160, 153), R(297, 181, 66, 161, { fill: '#fff', stroke: 'none' }));
  k.push(R(264, 196, 27, 120, { fill: 'rgba(23,23,26,.05)', stroke: THIN, strokeWidth: .9 }), R(369, 196, 27, 120, { fill: 'rgba(23,23,26,.05)', stroke: THIN, strokeWidth: .9 }));
  [214, 244, 274, 304].forEach(y => k.push(L(269, y, 286, y, { stroke: THIN, strokeWidth: .7, strokeDasharray: '3 2' }), L(374, y, 391, y, { stroke: THIN, strokeWidth: .7, strokeDasharray: '3 2' })));
  k.push(R(291, 187, 6, 149, hatch2), R(363, 187, 6, 149, hatch2));
  // crankcase, sump, oil pump
  k.push(P('M 250 340 V 372 L 236 392 V 404 H 424 V 392 L 410 372 V 340 Z', { fill: 'url(#tvHatch)' }), P('M 264 340 V 372 L 250 392 V 404 H 410 V 392 L 396 372 V 340 Z', cav), R(297, 336, 66, 6, { fill: '#fff', stroke: 'none' }));
  k.push(P('M 236 404 V 440 Q 236 454 250 454 H 410 Q 424 454 424 440 V 404 Z', { fill: 'url(#tvHatch)' }), P('M 244 404 V 438 Q 244 446 252 446 H 408 Q 416 446 416 438 V 404 Z', cav), L(236, 404, 424, 404, {}), L(248, 428, 412, 428, { stroke: THIN, strokeWidth: .9, strokeDasharray: '6 3' }));
  k.push(R(256, 414, 30, 22, white, 3), S('g', { style: spinAt(265, 425, 1.2) }, [C(265, 425, 6, { strokeWidth: 2.2, strokeDasharray: '2 2' })]), S('g', { style: spinAt(277, 425, 1.2, { animationDirection: 'reverse' }) }, [C(277, 425, 6, { strokeWidth: 2.2, strokeDasharray: '2 2' })]));
  k.push(P('M 286 430 H 296 V 441 H 306', { fill: 'none', strokeWidth: 2.4 }), R(304, 438, 22, 6, { fill: '#fff', strokeWidth: 1, strokeDasharray: '1.5 1.5' }, 1));
  // main bearing cap + shell, front seal
  k.push(R(300, 384, 60, 20), L(310, 388, 310, 404, thin), L(350, 388, 350, 404, thin), C(330, 380, 20, { fill: 'rgba(23,23,26,.16)', strokeWidth: 1.2 }));
  k.push(R(238, 371, 12, 18, hatch2, 1));
  // crank (rotates), piston (translates), rod (follows both)
  k.push(S('g', { ref: refs.crank }, [P('M 318 340 H 342 L 350 380 L 372 396 Q 366 430 330 432 Q 294 430 288 396 L 310 380 Z'), C(330, 380, 17), C(330, 380, 2.5, { fill: INK, stroke: 'none' })]));
  k.push(S('g', { ref: refs.piston }, [P('M 299 244 V 188 Q 299 186 301 186 H 359 Q 361 186 361 188 V 244', { fill: 'url(#tvHatch)' }), P('M 305 244 V 204 H 355 V 244', cav), L(299, 194, 361, 194, { strokeWidth: 1.6 }), L(299, 200, 361, 200, { strokeWidth: 1.6 }), L(299, 206, 361, 206, { strokeWidth: 1 }), L(299, 208.5, 361, 208.5, { strokeWidth: 1 })]));
  const Lr = 124;
  k.push(S('g', { ref: refs.rod, transform: 'translate(330 222)' }, [C(0, 0, 10), P('M -6 8 L 6 8 L 9 ' + (Lr - 16) + ' L -9 ' + (Lr - 16) + ' Z'), L(-3, 12, -4.5, Lr - 20, thin), L(3, 12, 4.5, Lr - 20, thin), C(0, Lr, 16), L(-16, Lr, 16, Lr, thin), L(-11, Lr - 6, -11, Lr + 13, thin), L(11, Lr - 6, 11, Lr + 13, thin), C(0, Lr, 13, { fill: 'rgba(23,23,26,.16)', stroke: 'none' }), C(0, Lr, 11), C(0, 0, 6)]));
  // water pump + thermostat
  k.push(R(410, 246, 16, 32), R(396, 254, 30, 16, cav), C(450, 262, 24, { strokeWidth: 1.5 }), C(450, 262, 18, thin));
  k.push(S('g', { style: spinAt(450, 262, 1.2) }, [0, 1, 2, 3, 4, 5].map(i => S('path', { d: 'M 450 262 Q 458 258 462 250', transform: 'rotate(' + (i * 60) + ' 450 262)', style: { fill: 'none', stroke: INK, strokeWidth: 1.6 } })).concat([C(450, 262, 4, { fill: INK, stroke: 'none' })])));
  k.push(R(458, 232, 24, 12, white, 2), R(414, 206, 32, 20, white, 3), C(430, 216, 5, thin), L(430, 226, 430, 249, { stroke: THIN, strokeWidth: 3 }), R(446, 210, 24, 12, white, 2));
  return S('svg', { ref: refs.svg, viewBox: '0 0 600 520', preserveAspectRatio: 'xMidYMid meet', style: { position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' } }, k);
}

class Counter extends React.Component {
  state = { v: 0 };
  componentDidMount() { const t0 = performance.now(), dur = this.props.dur || 1600, to = this.props.to; const step = n => { const p = Math.min(1, (n - t0) / dur), e = 1 - Math.pow(1 - p, 3); this.setState({ v: Math.round(to * e) }); if (p < 1) this.raf = requestAnimationFrame(step); }; this.raf = requestAnimationFrame(step); }
  componentWillUnmount() { cancelAnimationFrame(this.raf); }
  render() { return this.state.v.toLocaleString('de-DE') + (this.props.suffix || ''); }
}
class LoopVideo extends React.Component {
  refs2 = [React.createRef(), React.createRef()];
  active = 0; fading = false; raf = 0;
  style(i) { return { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '72% 50%', opacity: 0, transition: 'opacity .9s ease', filter: 'saturate(.9) contrast(1.05)', pointerEvents: 'none' }; }
  v(i) { return this.refs2[i].current; }
  prep(el) { if (!el) return; el.muted = true; el.defaultMuted = true; el.volume = 0; el.loop = false; el.playsInline = true; el.playbackRate = this.props.rate || 1; }
  componentDidMount() {
    const a = this.v(0), b = this.v(1); this.prep(a); this.prep(b);
    a.style.opacity = .6; a.play().catch(() => {});
    const FADE = 0.9;
    const tick = () => {
      const cur = this.v(this.active), nxt = this.v(1 - this.active);
      if (cur && nxt && cur.duration && !this.fading && cur.currentTime >= cur.duration - FADE) {
        this.fading = true; nxt.currentTime = 0;
        nxt.play().then(() => { nxt.style.opacity = .6; cur.style.opacity = 0; }).catch(() => { nxt.style.opacity = .6; cur.style.opacity = 0; });
        setTimeout(() => { cur.pause(); cur.currentTime = 0; this.active = 1 - this.active; this.fading = false; }, FADE * 1000 / (this.props.rate || 1) + 50);
      }
      this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }
  componentWillUnmount() { cancelAnimationFrame(this.raf); }
  render() {
    const p = { src: this.props.src, poster: this.props.poster, muted: true, playsInline: true, preload: 'auto', disablePictureInPicture: true, 'aria-hidden': true };
    return React.createElement('div', { style: { position: 'absolute', inset: 0, background: '#0b0b0d' } },
      React.createElement('video', Object.assign({ key: 'a', ref: this.refs2[0], autoPlay: true, style: this.style(0) }, p)),
      React.createElement('video', Object.assign({ key: 'b', ref: this.refs2[1], style: this.style(1) }, p)));
  }
}
class Component extends DCLogic {
  state = { content: null, theme: (function () { try { return localStorage.getItem('mr-theme') || 'light'; } catch (e) { return 'light'; } })(), active: '', part: 'klipovi', brand: '', city: 'bg', amt: '', name: '', contact: '', msg: '', deals: null, touched: false, sent: false };
  headerRef = React.createRef();
  navRef = React.createRef();
  barRef = React.createRef();
  topRef = React.createRef();
  glowRef = React.createRef();
  drefs = { piston: React.createRef(), rod: React.createRef(), crank: React.createRef(), svg: React.createRef() };
  diagram = buildDiagram(this.drefs);
  toggleTheme() { const theme = this.state.theme === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', theme); try { localStorage.setItem('mr-theme', theme); } catch (e) {} this.setState({ theme }); }
  componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
    this.loadContent(); window.addEventListener('storage', e => { if (e.key === KEY) this.loadContent(); });
    this.onApiReady = () => this.loadContent(); window.addEventListener('mrcontent:ready', this.onApiReady);
    this.onVis = () => { if (!document.hidden && window.MRContent && window.MRContent.remote) this.loadContent(); }; document.addEventListener('visibilitychange', this.onVis);
    this.onScroll = () => {
      const y = window.scrollY;
      const h = this.headerRef.current;
      if (h) { h.style.background = y > 40 ? 'var(--glass)' : 'transparent'; h.style.backdropFilter = y > 40 ? 'blur(14px)' : 'none'; h.style.borderColor = y > 40 ? 'var(--line)' : 'transparent'; if (y > 40) h.removeAttribute('data-tone'); else h.setAttribute('data-tone', 'ink'); }
      const bar = this.barRef.current, max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
      const tb = this.topRef.current; if (tb) { const on = y > window.innerHeight * .9; tb.style.opacity = on ? '1' : '0'; tb.style.transform = on ? 'none' : 'translateY(12px)'; tb.style.pointerEvents = on ? 'auto' : 'none'; }
      let cur = '';
      NAV.forEach(([id]) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= 140) cur = id; });
      if (cur !== this.state.active) this.setState({ active: cur });
    };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
    this.io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.setAttribute('data-rv', 'in'); this.io.unobserve(e.target); } }), { threshold: .12 });
    this.observeAll();
    this.startEngine();
    this.tick = setInterval(() => this.forceUpdate(), 30000);
    this.cycle = setInterval(() => {
      if (this.state.touched) return;
      const el = document.getElementById('delovi'); if (!el) return;
      const r = el.getBoundingClientRect(), vh = window.innerHeight;
      if (r.top < vh * .6 && r.bottom > vh * .4) this.setState(s => ({ part: PARTS[(PARTS.findIndex(p => p.id === s.part) + 1) % PARTS.length].id }));
    }, 3800);
  }
  componentDidUpdate(prevProps, prevState) {
    this.observeAll();
    if (prevState && prevState.active !== this.state.active && this.state.active) {
      const nav = this.navRef.current, btn = nav && nav.querySelector('[data-nav="' + this.state.active + '"]');
      if (nav && btn && nav.scrollWidth > nav.clientWidth + 4) nav.scrollTo({ left: Math.max(0, btn.offsetLeft - (nav.clientWidth - btn.offsetWidth) / 2), behavior: 'smooth' });
    }
  }
  componentWillUnmount() { window.removeEventListener('scroll', this.onScroll); if (this.io) this.io.disconnect(); clearInterval(this.tick); clearInterval(this.cycle); cancelAnimationFrame(this.engineRaf); if (this.eio) this.eio.disconnect(); }
  startEngine() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const D = this.drefs, cx = 330, cy = 380, r = 34, Lr = 124, pin0 = cy - r - Lr;
    this.engineOn = true;
    if (D.svg.current && 'IntersectionObserver' in window) { this.eio = new IntersectionObserver(es => es.forEach(e => { this.engineOn = e.isIntersecting; })); this.eio.observe(D.svg.current); }
    const t0 = performance.now();
    const step = now => {
      this.engineRaf = requestAnimationFrame(step);
      if (!this.engineOn || document.hidden) return;
      const th = (now - t0) / 1600 * Math.PI * 2, s = Math.sin(th), c = Math.cos(th);
      const px = cx + r * s, py = cy - r * c, yp = py - Math.sqrt(Lr * Lr - r * r * s * s);
      if (D.piston.current) D.piston.current.setAttribute('transform', 'translate(0 ' + (yp - pin0).toFixed(2) + ')');
      if (D.rod.current) D.rod.current.setAttribute('transform', 'translate(' + cx + ' ' + yp.toFixed(2) + ') rotate(' + (Math.atan2(cx - px, py - yp) * 180 / Math.PI).toFixed(2) + ')');
      if (D.crank.current) D.crank.current.setAttribute('transform', 'rotate(' + ((th * 180 / Math.PI) % 360).toFixed(2) + ' ' + cx + ' ' + cy + ')');
    };
    this.engineRaf = requestAnimationFrame(step);
  }
  loadContent() {
    const api = window.MRContent;
    let cached = null; try { cached = api ? api.cached('tv') : JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
    this.setState({ content: cached });
    if (api && api.remote) api.load('tv').then(c => { if (c) this.setState({ content: c }); }, () => {});
  }
  content() {
    const D = tvDefaults(), c = this.state.content || {};
    const m = { ...D, ...c, hero: { ...D.hero, ...(c.hero || {}) }, delivery: { ...D.delivery, ...(c.delivery || {}) }, texts: { ...D.texts, ...(c.texts || {}) } };
    ['brands', 'locs', 'timeline'].forEach(k => { if (!Array.isArray(m[k]) || !m[k].length) m[k] = D[k]; });
    if (!Array.isArray(m.deals)) m.deals = D.deals;
    if (!Array.isArray(m.delivery.sched) || !m.delivery.sched.length) m.delivery.sched = D.delivery.sched;
    if (!Array.isArray(m.phones) || !m.phones.filter(Boolean).length) m.phones = D.phones;
    Object.keys(D.texts).forEach(k => { if (!m.texts[k]) m.texts[k] = D.texts[k]; });
    return m;
  }
  pick(part) { this.setState({ part, touched: true }); }
  onHeroMove(e) { const g = this.glowRef.current; if (!g) return; const r = e.currentTarget.getBoundingClientRect(); g.style.left = (e.clientX - r.left - 350) + 'px'; g.style.top = (e.clientY - r.top - 350) + 'px'; }
  observeAll() { if (!this.io) return; document.querySelectorAll('[data-rv]:not([data-rv="in"])').forEach(el => this.io.observe(el)); }
  goTo(id) { const el = document.getElementById(id); if (!el) return; window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' }); }
  ask(text) { this.setState({ msg: text }, () => this.goTo('kontakt')); }
  nextDispatch(now, S) {
    const wk = now.d >= 1 && now.d <= 5;
    if (wk) { const row = S.find(r => r[3] != null && r[3] > now.min); if (row) return { zone: row[0], time: row[2], when: 'danas', idx: S.indexOf(row), cutoffLine: `do ${row[1]} · još ${fmtLeft(row[3] - now.min)}` }; }
    const when = wk && now.d < 5 ? 'sutra' : 'u ponedeljak', first = S[0] || ['Gradski', '', '08:00'];
    return { zone: first[0], time: first[2], when, idx: 0, cutoffLine: wk && now.min < 960 ? 'do kraja današnjeg radnog dana' : 'do kraja prethodnog radnog dana' };
  }
  openStatus(loc, now) {
    const rng = d => d >= 1 && d <= 5 ? loc.wd : d === 6 ? loc.sat : '';
    const parse = s => { const m = /(\d{1,2})[:.]?(\d{2})?\s*-\s*(\d{1,2})[:.]?(\d{2})?/.exec(s || ''); return m ? [(+m[1]) * 60 + (+(m[2] || 0)), (+m[3]) * 60 + (+(m[4] || 0))] : null; };
    const fmt = m => pad(Math.floor(m / 60)) + ':' + pad(m % 60);
    const hh0 = parse(rng(now.d));
    if (hh0 && now.min >= hh0[0] && now.min < hh0[1]) return { status: 'Otvoreno · do ' + fmt(hh0[1]), stColor: '#1fa971' };
    for (let i = 0; i < 8; i++) { const d = (now.d + i) % 7, hh = parse(rng(d)); if (hh && (i > 0 || now.min < hh[0])) return { status: 'Zatvoreno · ' + (i === 0 ? 'otvara u ' : i === 1 ? 'sutra ' : DAYS[d] + ' ') + fmt(hh[0]), stColor: 'var(--muted)' }; }
    return { status: 'Zatvoreno', stColor: 'var(--muted)' };
  }
  renderVals() {
    const st = this.state, now = bgTime(), C = this.content(), tx = C.texts, DV = C.delivery;
    const B = {}; C.brands.forEach(b => { if (b && b.id) B[b.id] = [b.name || '', b.logo || '']; });
    const logo = (k, style) => React.createElement('img', { src: (B[k] || [])[1] || '', alt: (B[k] || [])[0] || '', style });
    const PARTS_L = PARTS.map(p => { const o = (C.parts || []).find(x => x && x.id === p.id) || {}; return { ...p, short: o.short || p.short, name: o.name || p.name, desc: o.desc || p.desc, brands: C.brands.filter(b => (b.parts || []).includes(p.id)).map(b => b.id) }; });
    const S = DV.sched.map(r => { const m = /(\d{1,2}):(\d{2})/.exec(r.cutoff || ''); return [r.zone || '', r.cutoff || '', r.time || '', m ? (+m[1]) * 60 + (+m[2]) : null]; });
    const LC = C.locs.map(l => ({ ...l, tels: (l.tels || []).filter(Boolean), maps: l.maps || 'https://maps.google.com/?q=' + encodeURIComponent(l.addr || l.name), hours: [['pon - pet', l.wd || '-']].concat(l.sat ? [['subota', l.sat]] : []) }));
    const catalogUrl = C.catalogUrl || this.props.catalogUrl || 'http://tiki.bavariahosting.com/orders/';
    const fmtRsd = n => (+n || 0).toLocaleString('de-DE');
    const phone1 = C.phones[0] || '', phone2 = C.phones[1] || '', telHref = p => 'tel:' + (p.replace(/\D/g, '').replace(/^0/, '+381') || '');
    const nav = NAV.map(([id, label]) => { const a = st.active === id; return { id, label, color: a ? 'var(--fg)' : 'var(--muted)', line: a ? RED : 'transparent', go: () => this.goTo(id) }; });

    const P = PARTS_L.find(p => p.id === st.part) || PARTS_L[0];
    const parts = PARTS_L.map((p, i) => { const a = p.id === st.part; return { id: p.id, idx: pad(i + 1), name: p.name, short: p.short, x: p.dot[0], y: p.dot[1], dotBg: a ? RED : '#ffffff', dotFg: a ? '#ffffff' : '#17171a', dotBd: a ? RED : 'rgba(20,20,25,.18)', chipBg: a ? RED : 'var(--bg2)', chipBd: a ? RED : 'var(--line2)', chipFg: a ? '#ffffff' : 'var(--muted2)', on: () => this.pick(p.id) }; });
    const sel = { idx: pad(PARTS_L.indexOf(P) + 1), name: P.name, desc: P.desc, count: P.brands.length, brands: P.brands.map(k => ({ k, name: B[k][0], img: logo(k, { height: 18, width: 'auto', display: 'block' }), on: () => { this.setState({ brand: k }); this.goTo('brendovi'); } })), ask: () => this.ask(`Poštovani,\n\ntražim: ${P.name.toLowerCase()}\nza motor: (kod motora / vozilo, godište, zapremina)\nkoličina: \n\nMolim ponudu i rok isporuke.`) };
    const hl = { x: P.zone[0], y: P.zone[1], w: P.zone[2], h: P.zone[3], o: 1 };
    const pingEl = React.createElement('span', { key: P.id, style: { position: 'absolute', left: P.dot[0] + '%', top: P.dot[1] + '%', width: 44, height: 44, marginLeft: -22, marginTop: -22, borderRadius: '50%', border: '2px solid ' + RED, pointerEvents: 'none', animation: 'ping 1.6s cubic-bezier(.22,1,.36,1) infinite' } });

    const wallKeys = Object.keys(B);
    const wall = wallKeys.map(k => { const a = st.brand === k; return { k, name: B[k][0], img: logo(k, { maxHeight: 34, maxWidth: '100%', width: 'auto', display: 'block' }), bg: a ? 'rgba(237,28,36,.14)' : '#131316', bd: a ? RED : 'rgba(255,255,255,.09)', op: st.brand && !a ? .55 : 1, on: () => this.setState({ brand: a ? '' : k }) }; });
    const bk = st.brand && B[st.brand] ? st.brand : '';
    const bsel = bk ? { name: B[bk][0], img: logo(bk, { height: 40, width: 'auto', alignSelf: 'flex-start' }), parts: PARTS_L.filter(p => p.brands.includes(bk)).map(p => ({ name: p.short, on: () => { this.pick(p.id); this.goTo('delovi'); } })), ask: () => this.ask(`Poštovani,\n\ntražim delove brenda ${B[bk][0]}\nza motor: (kod motora / vozilo, godište, zapremina)\n\nMolim ponudu i rok isporuke.`) } : {};

    const nx = this.nextDispatch(now, S);
    const sched = S.map((r, i) => { const a = nx.when === 'danas' && i === nx.idx; const past = nx.when === 'danas' && r[3] != null && r[3] <= now.min; return { zone: r[0], cutoff: r[1], time: r[2], bg: a ? 'rgba(237,28,36,.07)' : 'transparent', dot: a ? RED : past ? 'var(--line2)' : 'var(--muted)', timeColor: a ? 'var(--red2)' : past ? 'var(--faint)' : 'var(--fg)' }; });
    const nowLine = `Sada u Beogradu ${DAYS[now.d]} ${pad(Math.floor(now.min / 60))}:${pad(now.min % 60)} · sledeći razvoz ${nx.when} u ${nx.time}`;

    const amt = parseInt(String(st.amt).replace(/\D/g, ''), 10);
    const has = !isNaN(amt) && amt > 0;
    const bg = st.city === 'bg';
    const free = bg ? (+DV.freeBg || 3000) : (+DV.freeRs || 12000);
    let calc;
    if (!has) calc = { title: bg ? 'Beograd · sopstveni razvoz' : 'Srbija · AKS / City Express', sub: bg ? 'Unesite iznos porudžbine sa PDV-om. Besplatno preko ' + fmtRsd(DV.freeBg) + ' RSD.' : 'Unesite iznos porudžbine sa PDV-om. Besplatna poštarina preko ' + fmtRsd(DV.freeRs) + ' RSD.', resColor: '#f2f2f3', resBg: 'rgba(255,255,255,.04)', resBd: 'rgba(255,255,255,.1)' };
    else if (amt >= free) calc = { title: bg ? 'Besplatna dostava' : 'Besplatna poštarina', sub: bg ? `Sopstveni razvoz · sledeći kreće ${nx.when} u ${nx.time}.` : 'AKS ili City Express · porudžbine radnim danima do 15:00 šaljemo istog dana.', resColor: '#2fd08a', resBg: 'rgba(31,169,113,.12)', resBd: 'rgba(31,169,113,.4)' };
    else calc = { title: bg ? fmtRsd(DV.feeBg) + ' RSD dostava' : 'Poštarina po cenovniku kurira', sub: `Još ${fmtRsd(free - amt)} RSD do besplatne ${bg ? 'dostave' : 'poštarine'}.`, resColor: '#ff4b52', resBg: 'rgba(237,28,36,.1)', resBd: 'rgba(237,28,36,.35)' };
    Object.assign(calc, { bgBg: bg ? RED : 'transparent', bgFg: bg ? '#fff' : 'var(--muted)', rsBg: bg ? 'transparent' : RED, rsFg: bg ? 'var(--muted)' : '#fff' });

    const dealsSrc = C.deals;
    const deals = dealsSrc.map(d => ({ brand: (B[d.brand] || [d.brand])[0], img: logo(B[d.brand] ? d.brand : Object.keys(B)[0], { height: 22, width: 'auto' }), imgEl: d.image ? React.createElement('img', { src: d.image, alt: '', style: { position: 'absolute', right: '-4%', bottom: '-6%', width: '58%', height: '72%', objectFit: 'contain', objectPosition: 'right bottom', opacity: .92, pointerEvents: 'none', filter: 'drop-shadow(0 18px 30px rgba(0,0,0,.55))', maskImage: 'linear-gradient(90deg,transparent,#000 35%)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 35%)' } }) : null, off: d.off, title: d.title, note: d.note || '', until: d.until || '', ask: () => this.ask(`Poštovani,\n\nzanima me akcija: ${d.title} (${(B[d.brand] || [d.brand])[0]}, ${d.off})\nza motor: (kod motora / vozilo, godište, zapremina)\nkoličina: \n\nMolim ponudu i rok isporuke.`) }));

    const locs = LC.map(l => Object.assign({ name: l.name, tag: l.tag, addr: l.addr, maps: l.maps, hours: l.hours.map(h => ({ d: h[0], t: h[1] })), hasTel: l.tels.length > 0, tels: l.tels.map(t => ({ label: t, href: telHref(t) })) }, this.openStatus(l, now)));

    const marqueeEl = React.createElement('div', { style: { overflow: 'hidden', whiteSpace: 'nowrap', maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)' } },
      React.createElement('div', { style: { display: 'inline-flex', width: 'max-content', animation: 'marquee 60s linear infinite' } },
        ...[0, 1].map(k => React.createElement('span', { key: k, style: { display: 'inline-flex', alignItems: 'center' } }, ...wallKeys.map(key => React.createElement('img', { key: key, src: B[key][1], alt: B[key][0], style: { height: 26, width: 'auto', margin: '0 32px', opacity: .8 } }))))));
    const liveDot = React.createElement('span', { style: { position: 'relative', width: 8, height: 8, display: 'inline-block' } }, React.createElement('span', { style: { position: 'absolute', inset: 0, borderRadius: '50%', background: RED } }), React.createElement('span', { style: { position: 'absolute', inset: 0, borderRadius: '50%', background: RED, animation: 'pulse 1.8s ease-out infinite' } }));
    const heroSrc = C.hero.video || this.props.heroVideoUrl || '/assets/tikivent-hero.mp4';
    const heroVideoEl = React.createElement(LoopVideo, { key: heroSrc, src: heroSrc, poster: C.hero.poster || '/assets/tikivent-hero-poster.png' });
    const glowEl = React.createElement('div', { ref: this.glowRef, style: { position: 'absolute', left: '60%', top: '-10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle,rgba(237,28,36,.16),transparent 60%)', pointerEvents: 'none', mixBlendMode: 'screen', transition: 'left 1.2s cubic-bezier(.22,1,.36,1),top 1.2s cubic-bezier(.22,1,.36,1)', willChange: 'left,top' } });

    const num = String(this.props.messagingNumber || C.messaging || '').replace(/\D/g, '');
    const body = `${st.msg || ''}\n\n${st.name || ''}\n${st.contact || ''}`.trim();
    const mailHref = 'mailto:' + C.email + '?subject=' + encodeURIComponent('Upit - ' + (st.msg ? P.short : 'delovi')) + '&body=' + encodeURIComponent(body);

    const themeIcon = this.state.theme === 'dark'
      ? React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, React.createElement('circle', { cx: 12, cy: 12, r: 4 }), React.createElement('path', { d: 'M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' }))
      : React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, React.createElement('path', { d: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z' }));
    return {
      toggleTheme: () => this.toggleTheme(), themeIcon,
      nav, catalogUrl, goTop: () => window.scrollTo({ top: 0, behavior: 'smooth' }), goParts: () => this.goTo('delovi'), goDelivery: () => this.goTo('dostava'),
      headerRef: this.headerRef, navRef: this.navRef, barRef: this.barRef, topRef: this.topRef, heroVideoEl, glowEl, liveDot, marqueeEl, diagramEl: this.diagram, pingEl, onHeroMove: e => this.onHeroMove(e),
      stat50: React.createElement(Counter, { key: 'i' + C.hero.items, to: +C.hero.items || 50000, suffix: '+' }), stat20: React.createElement(Counter, { key: 'b' + C.brands.length, to: C.brands.length, dur: 1200 }), stat6: React.createElement(Counter, { key: 's' + S.length, to: S.length, suffix: '×', dur: 1000 }), stat3: React.createElement(Counter, { key: 'l' + LC.length, to: LC.length, dur: 900 }),
      tx, phone1, phone2, tel1Href: telHref(phone1), tel2Href: telHref(phone2), email: C.email, mailtoHref: 'mailto:' + C.email, catalogHost: catalogUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, ''), brandsTitle: C.brands.length + ' proizvođača. Jedan lager.', locsTitle: LC.map(l => l.name).join(', ') + '.', hasDeals: deals.length > 0,
      delivNote: 'Besplatno preko ' + fmtRsd(DV.freeBg) + ' RSD · inače ' + fmtRsd(DV.feeBg) + ' RSD', delivBgLine: 'Sopstveni razvoz. Besplatno za porudžbine preko ' + fmtRsd(DV.freeBg) + ' RSD sa PDV-om, inače ' + fmtRsd(DV.feeBg) + ' RSD.', delivRsLine: 'AKS ili City Express - kurira birate u napomeni. Besplatna poštarina preko ' + fmtRsd(DV.freeRs) + ' RSD sa PDV-om.', delivHours: 'Radno vreme ' + (DV.hours || ''),
      next: nx, parts, sel, hl, other: OTHER.map(t => ({ t })),
      wall, wallMeta: bk ? B[bk][0] + ' · ' + bsel.parts.length + ' grupe' : wallKeys.length + ' brendova · dodirni za detalje', hasBrand: !!bk, bsel,
      sched, nowLine, amt: st.amt, onAmt: e => this.setState({ amt: e.target.value }), setBg: () => this.setState({ city: 'bg' }), setRs: () => this.setState({ city: 'rs' }), calc,
      deals, dealsDemo: !(st.content && st.content.deals), locs, timeline: C.timeline.map(t => ({ y: t.y || '', t: t.t || '', d: t.d || '' })),
      fName: st.name, fContact: st.contact, fMsg: st.msg, onName: e => this.setState({ name: e.target.value }), onContact: e => this.setState({ contact: e.target.value }), onMsg: e => this.setState({ msg: e.target.value }),
      mailHref, onSend: () => this.setState({ sent: true }), sentLine: st.sent ? 'Otvoren je vaš e-mail sa popunjenim upitom - samo pošaljite.' : 'Otvara vaš e-mail sa popunjenom porukom.', sentColor: st.sent ? '#2fd08a' : '#6b6c72', hasMsg: !!num, msgHref: num ? 'https://wa.me/' + num + '?text=' + encodeURIComponent(st.msg || 'Poštovani, tražim deo za motor ') : '#',
    };
  }
}

// ───────────────────────────── Prikaz ─────────────────────────────
export const pageHead = {
  "meta": [
    {
      "title": "Tiki Vent · Delovi motorne grupe"
    },
    {
      "name": "description",
      "content": "Tiki Vent - delovi motorne grupe vodećih svetskih proizvođača. Preko 50.000 artikala na lageru u Beogradu, razvoz šest puta dnevno. Deo MR Engines."
    },
    {
      "property": "og:type",
      "content": "website"
    },
    {
      "property": "og:title",
      "content": "Tiki Vent · Delovi motorne grupe"
    },
    {
      "property": "og:description",
      "content": "Preko 50.000 artikala na lageru. Beograd šest puta dnevno, Srbija kurirom."
    },
    {
      "name": "theme-color",
      "content": "#0b0b0d"
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

const PSEUDO_CSS = ".tvp0:hover{color:#ffffff !important}\n.tvp1:hover{border-color:#ed1c24 !important;color:var(--red2) !important}\n.tvp2:hover{background:var(--red2) !important;transform:skewX(-15deg) translateY(-1px) !important}\n.tvp3:hover{color:#fff !important}\n.tvp4:hover{transform:translate(-50%,-50%) scale(1.08) !important}\n.tvp5:hover{border-color:#ed1c24 !important}\n.tvp6:hover{background:var(--red2) !important}\n.tvp7:hover{border-color:rgba(237,28,36,.6) !important;transform:translateY(-2px) !important}\n.tvp8:hover{background:var(--red2) !important;color:#fff !important;transform:translateY(-2px) !important}\n.tvp9:hover{color:var(--red2) !important}\n.tvpa:hover{background:#ed1c24 !important;color:#fff !important}\n.tvpb:hover{border-color:#ed1c24 !important;color:var(--fg) !important}\n.tvpc:hover{background:var(--red2) !important;color:#fff !important}"

const PAGE_CSS = "\n:root{--bg:#f4f4f5;--bg2:#ffffff;--bg3:#ebebed;--fg:#17171a;--muted:#5c5d63;--muted2:#3c3d41;--faint:#8a8b90;--line:rgba(20,20,25,.1);--line2:rgba(20,20,25,.22);--fill:rgba(20,20,25,.045);--grid:rgba(20,20,25,.05);--red2:#c8141b;--glass:rgba(244,244,245,.86);--on-dark:none;--on-light:block;color-scheme:light}\n:root[data-theme=\"dark\"],[data-tone=\"ink\"]{--bg:#0b0b0d;--bg2:#131316;--bg3:#1a1a1f;--fg:#f2f2f3;--muted:#9c9da3;--muted2:#c8c9cc;--faint:#6b6c72;--line:rgba(255,255,255,.09);--line2:rgba(255,255,255,.18);--fill:rgba(255,255,255,.05);--grid:rgba(255,255,255,.035);--red2:#ff4b52;--glass:rgba(11,11,13,.84);--on-dark:block;--on-light:none}\n:root[data-theme=\"dark\"]{color-scheme:dark}\n[data-tone]{color:var(--fg)}\n[data-tone=\"paper\"]{--bg:#ffffff;--bg2:#f4f4f5}\n[data-tone=\"paper3\"]{--bg:#ebebed;--bg2:#ffffff}\n:root[data-theme=\"dark\"] [data-tone=\"paper\"]{--bg:#101014;--bg2:#17171c;--bg3:#1e1e24}\n:root[data-theme=\"dark\"] [data-tone=\"paper3\"]{--bg:#0e0e11;--bg2:#15151a}\n*{box-sizing:border-box}\nhtml{scroll-behavior:smooth}\nbody{margin:0;background:var(--bg);color:var(--fg);font-family:Figtree,system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na{color:#ed1c24;text-decoration:none}a:hover{color:var(--red2)}\nbutton,input,textarea{font-family:inherit}\ninput::placeholder,textarea::placeholder{color:rgba(120,121,128,.7)}\ninput:focus,textarea:focus{outline:none;border-color:#ed1c24 !important;box-shadow:0 0 0 3px rgba(237,28,36,.18)}\n::selection{background:rgba(237,28,36,.4)}\n[data-rv]{opacity:0;transform:translateY(26px);transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1)}\n[data-rv=\"in\"]{opacity:1;transform:none}\n@keyframes marquee{to{transform:translateX(-50%)}}\n@keyframes pulse{0%{transform:scale(1);opacity:.75}100%{transform:scale(2.2);opacity:0}}\n@keyframes ping{0%{transform:scale(1);opacity:.6}100%{transform:scale(2.6);opacity:0}}\n@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}\n@keyframes valve{0%{transform:translateY(7px)}22%{transform:translateY(0)}78%{transform:translateY(0)}100%{transform:translateY(7px)}}\n@keyframes chain{to{stroke-dashoffset:-90}}\n@keyframes spin{to{transform:rotate(360deg)}}\n@keyframes lineUp{from{transform:translateY(110%);opacity:0}to{transform:none;opacity:1}}\n@keyframes drift{0%{transform:translate(0,0)}50%{transform:translate(-24px,18px)}100%{transform:translate(0,0)}}\n[data-clamp]{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}[data-clamp=\"1\"]{-webkit-line-clamp:1}[data-clamp=\"2\"]{-webkit-line-clamp:2}[data-clamp=\"3\"]{-webkit-line-clamp:3}h1,h2,h3{overflow-wrap:anywhere}\n@media (max-width:820px){[data-grid]{grid-template-columns:minmax(0,1fr) !important}[data-chips]{flex-wrap:nowrap !important;overflow-x:auto;scrollbar-width:none;margin:0 -16px;padding:0 16px 4px}[data-dots] button{width:38px !important;height:38px !important;font-size:10px !important}[data-cal]{flex-direction:column}[data-grid=\"hero\"]{align-items:stretch !important}[data-sched]{grid-template-columns:minmax(0,1fr) auto !important;row-gap:4px !important}[data-sched] [data-sched-cut]{grid-column:1 / -1;order:3}}\n@media (prefers-reduced-motion:reduce){[data-rv]{opacity:1;transform:none;transition:none}*{animation-duration:.01ms !important;animation-iteration-count:1 !important}}\n"

function view(v) {
  return (
    <>
      <style>{PSEUDO_CSS}</style>
      <style>{PAGE_CSS}</style>
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)", fontFamily: "Figtree,system-ui,sans-serif", overflowX: "clip" }}>
        {" "}
        <header data-tone={"ink"} ref={v.headerRef} style={{ position: "sticky", top: "0", zIndex: "60", marginBottom: "-72px", background: "transparent", borderBottom: "1px solid transparent", transition: "background .35s,border-color .35s" }}>
          {" "}
          <div ref={v.barRef} style={{ position: "absolute", left: "0", bottom: "-1px", height: "2px", width: "100%", background: "#ed1c24", transformOrigin: "0 50%", transform: "scaleX(0)", pointerEvents: "none" }}></div>
          {" "}
          <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(16px,3vw,32px)", height: "72px", display: "flex", alignItems: "center", gap: "18px" }}>
            {" "}
            <button onClick={v.goTop} style={{ display: "flex", alignItems: "center", background: "transparent", border: "0", padding: "0", cursor: "pointer", flex: "none" }}>
              {" "}
              <img src={"/assets/tikivent-white.svg"} alt={"Tiki Vent - powered by MR Engines"} style={{ height: "38px", width: "auto", display: "var(--on-dark)" }} />
              <img src={"/assets/tikivent-dark.svg"} alt={"Tiki Vent - powered by MR Engines"} style={{ height: "38px", width: "auto", display: "var(--on-light)" }} />
              {" "}
            </button>
            {" "}
            <nav ref={v.navRef} style={{ display: "flex", gap: "2px", flex: "1", minWidth: "0", overflowX: "auto", scrollbarWidth: "none", justifyContent: "safe center", padding: "0 18px", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 18px,#000 calc(100% - 28px),transparent)", maskImage: "linear-gradient(90deg,transparent,#000 18px,#000 calc(100% - 28px),transparent)" }}>
              {" "}
              {__arr(v.nav).map(($n, $i0) => (
                <React.Fragment key={$i0}>
                  {" "}
                  <button onClick={$n?.go} data-nav={$n?.id} style={__css(`height:44px;padding:0 clamp(9px,1.2vw,14px);background:transparent;border:0;cursor:pointer;white-space:nowrap;font-family:Figtree,system-ui,sans-serif;font-size:12px;font-weight:700;letter-spacing:.11em;text-transform:uppercase;color:${$n?.color ?? ""};box-shadow:inset 0 -2px 0 ${$n?.line ?? ""};transition:color .15s`)} className={"tvp0"}>
                    {__t($n?.label)}
                  </button>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
            </nav>
            {" "}
            <a href={v.tel1Href} style={{ flex: "none", display: "inline-flex", alignItems: "center", gap: "8px", height: "38px", padding: "0 14px", border: "1px solid var(--line2)", borderRadius: "8px", color: "var(--fg)", fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", fontWeight: "600", letterSpacing: ".06em", transition: "border-color .15s,color .15s" }} className={"tvp1"}>
              {__t(v.phone1)}
            </a>
            {" "}
            <button onClick={v.toggleTheme} aria-label={"Tema"} style={{ flex: "none", width: "38px", height: "38px", borderRadius: "8px", border: "1px solid var(--line2)", background: "transparent", color: "var(--fg)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color .15s,color .15s" }} className={"tvp1"}>
              {__t(v.themeIcon)}
            </button>
            {" "}
          </div>
          {" "}
        </header>
        {" "}
        <main>
          {" "}
          <section data-tone={"ink"} data-screen-label={"Hero"} onMouseMove={v.onHeroMove} style={{ position: "relative", overflow: "hidden", background: "#0b0b0d", color: "var(--fg)" }}>
            {" "}
            {__t(v.heroVideoEl)}
            {" "}
            <div style={{ position: "absolute", inset: "0", pointerEvents: "none", background: "linear-gradient(90deg,rgba(11,11,13,.94) 0%,rgba(11,11,13,.78) 42%,rgba(11,11,13,.3) 100%),linear-gradient(180deg,rgba(11,11,13,.6) 0%,rgba(11,11,13,0) 28%,rgba(11,11,13,0) 62%,#0b0b0d 100%)" }}></div>
            {" "}
            <div style={{ position: "absolute", inset: "0", pointerEvents: "none", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "56px 56px", WebkitMaskImage: "radial-gradient(ellipse at 30% 40%,#000 20%,transparent 70%)", maskImage: "radial-gradient(ellipse at 30% 40%,#000 20%,transparent 70%)" }}></div>
            {" "}
            {__t(v.glowEl)}
            {" "}
            <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", padding: "clamp(120px,14vw,168px) clamp(16px,3vw,32px) 0", display: "grid", gridTemplateColumns: "minmax(0,1.25fr) minmax(min(100%,340px),1fr)", gap: "clamp(28px,4vw,56px)", alignItems: "center" }} data-grid={"hero"}>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "22px", minWidth: "0" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--red2)", animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) both" }}>
                  <span style={{ width: "26px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                  {__t(v.tx?.heroEyebrow)}
                </div>
                {" "}
                <h1 style={{ margin: "0", maxWidth: "16ch", fontSize: "clamp(40px,6.2vw,84px)", fontWeight: "800", lineHeight: ".98", letterSpacing: "-.035em", display: "flex", flexDirection: "column" }}>
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em", marginBottom: "-.08em" }}>
                    <span style={{ display: "block", animation: "lineUp .9s cubic-bezier(.22,1,.36,1) .1s both" }}>
                      {__t(v.tx?.heroL1)}
                    </span>
                  </span>
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em", marginBottom: "-.08em" }}>
                    <span style={{ display: "block", color: "#ed1c24", animation: "lineUp .9s cubic-bezier(.22,1,.36,1) .28s both" }}>
                      {__t(v.tx?.heroL2)}
                    </span>
                  </span>
                </h1>
                {" "}
                <p style={{ margin: "0", maxWidth: "54ch", fontSize: "clamp(16px,1.35vw,19px)", lineHeight: "1.55", color: "var(--muted2)", textWrap: "pretty", animation: "fadeUp .9s cubic-bezier(.22,1,.36,1) .45s both" }}>
                  {__t(v.tx?.heroSub)}
                </p>
                {" "}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", paddingLeft: "6px", marginTop: "4px", animation: "fadeUp .9s cubic-bezier(.22,1,.36,1) .6s both" }}>
                  {" "}
                  <button onClick={v.goParts} style={{ height: "52px", padding: "0 26px", border: "0", cursor: "pointer", background: "#ed1c24", color: "#fff", transform: "skewX(-15deg)", boxShadow: "0 12px 30px rgba(237,28,36,.32)", transition: "background .15s,transform .15s" }} className={"tvp2"}>
                    <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "13px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                      Pronađi deo
                    </span>
                  </button>
                  {" "}
                  <a href={v.catalogUrl} target={"_blank"} rel={"noopener"} style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 24px", border: "1px solid var(--line2)", color: "var(--fg)", transform: "skewX(-15deg)", transition: "border-color .15s,color .15s" }} className={"tvp1"}>
                    <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "13px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                      Online katalog
                    </span>
                  </a>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 40px", marginTop: "10px", animation: "fadeUp .9s cubic-bezier(.22,1,.36,1) .75s both" }}>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "28px", fontWeight: "700", lineHeight: "1", letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums" }}>
                      {__t(v.stat50)}
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                      {__t(v.tx?.stat1)}
                    </span>
                  </div>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "28px", fontWeight: "700", lineHeight: "1", letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums" }}>
                      {__t(v.stat20)}
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                      {__t(v.tx?.stat2)}
                    </span>
                  </div>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "28px", fontWeight: "700", lineHeight: "1", letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums" }}>
                      {__t(v.stat6)}
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                      {__t(v.tx?.stat3)}
                    </span>
                  </div>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "28px", fontWeight: "700", lineHeight: "1", letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums" }}>
                      {__t(v.stat3)}
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                      {__t(v.tx?.stat4)}
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-tone={"ink"} style={{ position: "relative", padding: "26px 28px 24px", background: "rgba(19,19,22,.86)", border: "1px solid var(--line)", borderRadius: "18px", backdropFilter: "blur(10px)", display: "flex", flexDirection: "column", gap: "18px", boxShadow: "0 30px 80px rgba(0,0,0,.45)", animation: "fadeUp 1s cubic-bezier(.22,1,.36,1) .5s both" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--muted)" }}>
                    {__t(v.liveDot)}
                    Sledeći razvoz · Beograd
                  </div>
                  {" "}
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--red2)" }}>
                    {__t(v.next?.when)}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", alignItems: "flex-end", gap: "16px", flexWrap: "wrap" }}>
                  {" "}
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(56px,6vw,76px)", fontWeight: "700", lineHeight: ".9", letterSpacing: "-.04em", fontVariantNumeric: "tabular-nums" }}>
                    {__t(v.next?.time)}
                  </span>
                  {" "}
                  <span style={{ fontSize: "18px", fontWeight: "700", lineHeight: "1.2", paddingBottom: "6px", color: "var(--fg)" }}>
                    {__t(v.next?.zone)}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "14px 16px", background: "rgba(237,28,36,.1)", border: "1px solid rgba(237,28,36,.35)", borderRadius: "12px" }}>
                  {" "}
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--red2)" }}>
                    Primanje porudžbina
                  </span>
                  {" "}
                  <span style={{ fontSize: "16px", fontWeight: "700" }}>
                    {__t(v.next?.cutoffLine)}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap", fontSize: "13px", color: "var(--muted)" }}>
                  {" "}
                  <span>
                    {__t(v.delivNote)}
                  </span>
                  {" "}
                  <button onClick={v.goDelivery} style={{ background: "transparent", border: "0", padding: "0", cursor: "pointer", color: "var(--red2)", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase" }} className={"tvp3"}>
                    Raspored →
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ position: "relative", maxWidth: "1320px", margin: "56px auto 0", padding: "0 clamp(16px,3vw,32px) 28px" }}>
              {" "}
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "22px" }}>
                {__t(v.marqueeEl)}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section id={"delovi"} data-screen-label={"Delovi"} style={{ position: "relative", background: "var(--bg)", color: "var(--fg)" }}>
            {" "}
            <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(16px,3vw,32px)", display: "flex", flexDirection: "column", gap: "32px" }}>
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--red2)" }}>
                  <span style={{ width: "26px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                  01 · Delovi motorne grupe
                </div>
                {" "}
                <h2 style={{ margin: "0", fontSize: "clamp(32px,4.2vw,56px)", fontWeight: "800", letterSpacing: "-.03em", lineHeight: "1.02", textWrap: "balance" }}>
                  {__t(v.tx?.partsTitle)}
                </h2>
                {" "}
                <p style={{ margin: "0", maxWidth: "60ch", fontSize: "16.5px", lineHeight: "1.55", color: "var(--muted)", textWrap: "pretty" }}>
                  {__t(v.tx?.partsSub)}
                </p>
                {" "}
              </div>
              {" "}
              <div data-rv={"1"} data-grid={"1"} style={{ display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(min(100%,320px),.85fr)", gap: "24px", alignItems: "start" }}>
                {" "}
                <div data-dots={"1"} style={{ position: "relative", aspectRatio: "600/520", background: "#fefefe", border: "1px solid var(--line)", borderRadius: "18px", overflow: "hidden", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "20px 20px" }}>
                  {" "}
                  {__t(v.diagramEl)}
                  {" "}
                  <div style={__css(`position:absolute;pointer-events:none;border:1.5px solid #ed1c24;background:rgba(237,28,36,.09);border-radius:8px;transition:all .45s cubic-bezier(.22,1,.36,1);left:${v.hl?.x ?? ""}%;top:${v.hl?.y ?? ""}%;width:${v.hl?.w ?? ""}%;height:${v.hl?.h ?? ""}%;opacity:${v.hl?.o ?? ""}`)}></div>
                  {" "}
                  {__arr(v.parts).map(($p, $i0) => (
                    <React.Fragment key={$i0}>
                      {" "}
                      <button onClick={$p?.on} title={$p?.name} style={__css(`position:absolute;left:${$p?.x ?? ""}%;top:${$p?.y ?? ""}%;transform:translate(-50%,-50%);width:44px;height:44px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.04em;background:${$p?.dotBg ?? ""};color:${$p?.dotFg ?? ""};border:2px solid ${$p?.dotBd ?? ""};box-shadow:0 6px 18px var(--line2);transition:background .2s,color .2s,transform .2s`)} className={"tvp4"}>
                        {__t($p?.idx)}
                      </button>
                      {" "}
                    </React.Fragment>
                  ))}
                  {" "}
                  {__t(v.pingEl)}
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: "0" }}>
                  {" "}
                  <div style={{ padding: "26px 28px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "18px", display: "flex", flexDirection: "column", gap: "16px", backgroundImage: "linear-gradient(90deg,transparent,#ed1c24 50%,transparent)", backgroundSize: "100% 3px", backgroundRepeat: "no-repeat" }}>
                    {" "}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                      {" "}
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--red2)" }}>
                        {__t(v.sel?.idx)}
                        {" / 12"}
                      </span>
                      {" "}
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)" }}>
                        {__t(v.sel?.count)}
                        {" brendova"}
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <h3 data-clamp={"2"} style={{ margin: "0", fontSize: "clamp(24px,2.4vw,32px)", fontWeight: "800", letterSpacing: "-.025em", lineHeight: "1.08" }}>
                      {__t(v.sel?.name)}
                    </h3>
                    {" "}
                    <p data-clamp={"3"} style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "var(--muted)", textWrap: "pretty" }}>
                      {__t(v.sel?.desc)}
                    </p>
                    {" "}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {" "}
                      {__arr(v.sel?.brands).map(($b, $i0) => (
                        <React.Fragment key={$i0}>
                          {" "}
                          <button onClick={$b?.on} title={$b?.name} data-tone={"ink"} style={{ display: "inline-flex", alignItems: "center", height: "40px", padding: "0 14px", borderRadius: "999px", background: "#131316", border: "1px solid #131316", cursor: "pointer", transition: "border-color .15s" }} className={"tvp5"}>
                            {__t($b?.img)}
                          </button>
                          {" "}
                        </React.Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", paddingLeft: "6px", marginTop: "4px" }}>
                      {" "}
                      <button onClick={v.sel?.ask} style={{ height: "48px", padding: "0 22px", border: "0", cursor: "pointer", background: "#ed1c24", color: "#fff", transform: "skewX(-15deg)", boxShadow: "0 10px 24px rgba(237,28,36,.26)", transition: "background .15s" }} className={"tvp6"}>
                        <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "12.5px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                          Pošalji upit
                        </span>
                      </button>
                      {" "}
                      <a href={v.tel1Href} style={{ display: "inline-flex", alignItems: "center", height: "48px", padding: "0 20px", border: "1px solid var(--line2)", color: "var(--fg)", transform: "skewX(-15deg)", transition: "border-color .15s,color .15s" }} className={"tvp1"}>
                        <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "12.5px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                          Pozovi
                        </span>
                      </a>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }} data-chips={"1"}>
                    {" "}
                    {__arr(v.parts).map(($p, $i0) => (
                      <React.Fragment key={$i0}>
                        {" "}
                        <button onClick={$p?.on} style={__css(`height:38px;flex:none;padding:0 14px;border-radius:999px;cursor:pointer;font-family:Figtree,system-ui,sans-serif;font-size:13px;font-weight:600;background:${$p?.chipBg ?? ""};border:1px solid ${$p?.chipBd ?? ""};color:${$p?.chipFg ?? ""};transition:all .15s`)} className={"tvp5"}>
                          {__t($p?.short)}
                        </button>
                        {" "}
                      </React.Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 14px", paddingTop: "24px", borderTop: "1px solid var(--line)" }}>
                {" "}
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted)", marginRight: "6px" }}>
                  Od 2010. i van motora
                </span>
                {" "}
                {__arr(v.other).map(($o, $i0) => (
                  <React.Fragment key={$i0}>
                    {" "}
                    <span style={{ height: "34px", display: "inline-flex", alignItems: "center", padding: "0 12px", borderRadius: "999px", background: "var(--bg2)", border: "1px solid var(--line)", fontSize: "13px", fontWeight: "600", color: "var(--muted2)" }}>
                      {__t($o?.t)}
                    </span>
                    {" "}
                  </React.Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section data-tone={"ink"} id={"brendovi"} data-screen-label={"Brendovi"} style={{ position: "relative", overflow: "hidden", background: "var(--bg)", color: "var(--fg)" }}>
            {" "}
            <div style={{ position: "absolute", inset: "0", pointerEvents: "none", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "56px 56px", WebkitMaskImage: "linear-gradient(#000,transparent 60%)", maskImage: "linear-gradient(#000,transparent 60%)" }}></div>
            {" "}
            <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(16px,3vw,32px)", display: "flex", flexDirection: "column", gap: "32px" }}>
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--red2)" }}>
                    <span style={{ width: "26px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                    02 · Brendovi
                  </div>
                  {" "}
                  <h2 style={{ margin: "0", fontSize: "clamp(32px,4.2vw,56px)", fontWeight: "800", letterSpacing: "-.03em", lineHeight: "1.02", textWrap: "balance" }}>
                    {__t(v.brandsTitle)}
                  </h2>
                  {" "}
                  <p style={{ margin: "0", maxWidth: "58ch", fontSize: "16.5px", lineHeight: "1.55", color: "var(--muted)", textWrap: "pretty" }}>
                    {__t(v.tx?.brandsSub)}
                  </p>
                  {" "}
                </div>
                {" "}
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--faint)" }}>
                  {__t(v.wallMeta)}
                </span>
                {" "}
              </div>
              {" "}
              <div data-rv={"1"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,150px),1fr))", gap: "10px" }}>
                {" "}
                {__arr(v.wall).map(($w, $i0) => (
                  <React.Fragment key={$i0}>
                    {" "}
                    <button onClick={$w?.on} title={$w?.name} style={__css(`height:88px;display:flex;align-items:center;justify-content:center;padding:0 18px;border-radius:14px;cursor:pointer;background:${$w?.bg ?? ""};border:1px solid ${$w?.bd ?? ""};opacity:${$w?.op ?? ""};transition:all .2s cubic-bezier(.22,1,.36,1)`)} className={"tvp7"}>
                      {__t($w?.img)}
                    </button>
                    {" "}
                  </React.Fragment>
                ))}
                {" "}
              </div>
              {" "}
              {v.hasBrand ? (
                <>
                  {" "}
                  <div data-grid={"1"} data-tone={"ink"} style={{ display: "grid", gridTemplateColumns: "minmax(min(100%,260px),.7fr) minmax(0,1.3fr)", gap: "20px", padding: "26px 28px", background: "#131316", border: "1px solid var(--line)", borderRadius: "18px", backgroundImage: "linear-gradient(90deg,transparent,#ed1c24 50%,transparent)", backgroundSize: "100% 3px", backgroundRepeat: "no-repeat", animation: "fadeUp .5s cubic-bezier(.22,1,.36,1) both" }}>
                    {" "}
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                      {" "}
                      {__t(v.bsel?.img)}
                      {" "}
                      <div style={{ fontSize: "26px", fontWeight: "800", letterSpacing: "-.02em" }}>
                        {__t(v.bsel?.name)}
                      </div>
                      {" "}
                      <button onClick={v.bsel?.ask} style={{ alignSelf: "flex-start", height: "46px", padding: "0 20px", border: "0", cursor: "pointer", background: "#ed1c24", color: "#fff", transform: "skewX(-15deg)", transition: "background .15s" }} className={"tvp6"}>
                        <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "12px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                          Pošalji upit
                        </span>
                      </button>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {" "}
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--muted)" }}>
                        Pokriva kod nas
                      </span>
                      {" "}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {" "}
                        {__arr(v.bsel?.parts).map(($p, $i0) => (
                          <React.Fragment key={$i0}>
                            {" "}
                            <button onClick={$p?.on} style={{ height: "40px", padding: "0 16px", borderRadius: "999px", cursor: "pointer", background: "var(--fill)", border: "1px solid var(--line)", color: "var(--fg)", fontFamily: "Figtree,system-ui,sans-serif", fontSize: "13.5px", fontWeight: "600", transition: "border-color .15s" }} className={"tvp5"}>
                              {__t($p?.name)}
                              {" →"}
                            </button>
                            {" "}
                          </React.Fragment>
                        ))}
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </>
              ) : null}
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section id={"dostava"} data-screen-label={"Dostava"} style={{ background: "var(--bg)", color: "var(--fg)" }}>
            {" "}
            <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(16px,3vw,32px)", display: "flex", flexDirection: "column", gap: "32px" }}>
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--red2)" }}>
                  <span style={{ width: "26px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                  03 · Dostava
                </div>
                {" "}
                <h2 style={{ margin: "0", fontSize: "clamp(32px,4.2vw,56px)", fontWeight: "800", letterSpacing: "-.03em", lineHeight: "1.02", textWrap: "balance" }}>
                  {__t(v.tx?.delivTitle)}
                </h2>
                {" "}
                <p style={{ margin: "0", maxWidth: "60ch", fontSize: "16.5px", lineHeight: "1.55", color: "var(--muted)", textWrap: "pretty" }}>
                  {__t(v.tx?.delivSub)}
                </p>
                {" "}
              </div>
              {" "}
              <div data-rv={"1"} data-grid={"1"} style={{ display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(min(100%,320px),.8fr)", gap: "20px", alignItems: "start" }}>
                {" "}
                <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "18px", overflow: "hidden" }}>
                  {" "}
                  <div data-sched={"1"} style={{ display: "grid", gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr) minmax(0,.8fr)", gap: "12px", padding: "14px 24px", borderBottom: "1px solid var(--line)", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                    {" "}
                    <span>
                      Teritorija
                    </span>
                    <span data-sched-cut={"1"}>
                      Porudžbine do
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Razvoz kreće
                    </span>
                    {" "}
                  </div>
                  {" "}
                  {__arr(v.sched).map(($r, $i0) => (
                    <React.Fragment key={$i0}>
                      {" "}
                      <div data-sched={"1"} style={__css(`display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr) minmax(0,.8fr);gap:12px;align-items:center;padding:16px 24px;border-bottom:1px solid var(--line);background:${$r?.bg ?? ""};transition:background .3s`)}>
                        {" "}
                        <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: "700", minWidth: "0" }}>
                          <span style={__css(`width:8px;height:8px;border-radius:50%;background:${$r?.dot ?? ""};flex:none`)}></span>
                          <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                            {__t($r?.zone)}
                          </span>
                        </span>
                        {" "}
                        <span data-sched-cut={"1"} style={{ fontSize: "14px", color: "var(--muted)" }}>
                          {"Porudžbine "}
                          {__t($r?.cutoff)}
                        </span>
                        {" "}
                        <span style={__css(`text-align:right;font-family:'JetBrains Mono',monospace;font-size:20px;font-weight:700;letter-spacing:-.02em;color:${$r?.timeColor ?? ""};font-variant-numeric:tabular-nums`)}>
                          {__t($r?.time)}
                        </span>
                        {" "}
                      </div>
                      {" "}
                    </React.Fragment>
                  ))}
                  {" "}
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 20px", padding: "14px 24px", fontSize: "13px", color: "var(--muted)" }}>
                    {" "}
                    <span>
                      {__t(v.nowLine)}
                    </span>
                    {" "}
                    <span>
                      {__t(v.delivHours)}
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {" "}
                  <div data-tone={"ink"} style={{ padding: "24px 26px", background: "#131316", color: "var(--fg)", borderRadius: "18px", display: "flex", flexDirection: "column", gap: "16px", backgroundImage: "linear-gradient(90deg,transparent,#ed1c24 50%,transparent)", backgroundSize: "100% 3px", backgroundRepeat: "no-repeat" }}>
                    {" "}
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--muted)" }}>
                      Kalkulator dostave
                    </span>
                    {" "}
                    <div style={{ display: "flex", border: "1px solid var(--line2)", borderRadius: "10px", overflow: "hidden" }}>
                      {" "}
                      <button onClick={v.setBg} style={__css(`flex:1;height:42px;border:0;cursor:pointer;font-family:Figtree,system-ui,sans-serif;font-size:13px;font-weight:700;background:${v.calc?.bgBg ?? ""};color:${v.calc?.bgFg ?? ""};transition:background .15s,color .15s`)}>
                        Beograd
                      </button>
                      {" "}
                      <button onClick={v.setRs} style={__css(`flex:1;height:42px;border:0;border-left:1px solid var(--line);cursor:pointer;font-family:Figtree,system-ui,sans-serif;font-size:13px;font-weight:700;background:${v.calc?.rsBg ?? ""};color:${v.calc?.rsFg ?? ""};transition:background .15s,color .15s`)}>
                        Ostala Srbija
                      </button>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                      {" "}
                      <input value={__dv(v.amt)} onChange={v.onAmt} inputMode={"numeric"} placeholder={"Iznos porudžbine"} style={{ width: "100%", height: "52px", padding: "0 64px 0 16px", borderRadius: "12px", background: "var(--fill)", border: "1px solid var(--line2)", color: "var(--fg)", fontSize: "20px", fontFamily: "'JetBrains Mono',monospace", fontWeight: "700", letterSpacing: "-.01em" }} />
                      {" "}
                      <span style={{ position: "absolute", right: "16px", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", fontWeight: "600", letterSpacing: ".1em", color: "var(--muted)" }}>
                        RSD
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={__css(`display:flex;flex-direction:column;gap:6px;padding:16px 18px;border-radius:12px;background:${v.calc?.resBg ?? ""};border:1px solid ${v.calc?.resBd ?? ""};transition:background .3s`)}>
                      {" "}
                      <span style={__css(`font-family:'JetBrains Mono',monospace;font-size:22px;font-weight:700;letter-spacing:-.02em;color:${v.calc?.resColor ?? ""}`)}>
                        {__t(v.calc?.title)}
                      </span>
                      {" "}
                      <span style={{ fontSize: "13.5px", lineHeight: "1.5", color: "var(--muted2)" }}>
                        {__t(v.calc?.sub)}
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ padding: "20px 24px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "18px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", lineHeight: "1.5", color: "var(--muted2)" }}>
                    {" "}
                    <div style={{ display: "flex", gap: "12px" }}>
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", fontWeight: "700", color: "var(--red2)", flex: "none", minWidth: "52px" }}>
                        BG
                      </span>
                      <span>
                        {__t(v.delivBgLine)}
                      </span>
                    </div>
                    {" "}
                    <div style={{ display: "flex", gap: "12px" }}>
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", fontWeight: "700", color: "var(--red2)", flex: "none", minWidth: "52px" }}>
                        SRB
                      </span>
                      <span>
                        {__t(v.delivRsLine)}
                      </span>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          {v.hasDeals ? (
            <>
              <section data-tone={"paper3"} id={"akcije"} data-screen-label={"Akcije"} style={{ background: "var(--bg)", color: "var(--fg)" }}>
                {" "}
                <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(16px,3vw,32px)", display: "flex", flexDirection: "column", gap: "28px" }}>
                  {" "}
                  <div data-rv={"1"} style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
                    {" "}
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {" "}
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--red2)" }}>
                        <span style={{ width: "26px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                        04 · Akcije
                      </div>
                      {" "}
                      <h2 style={{ margin: "0", fontSize: "clamp(32px,4.2vw,56px)", fontWeight: "800", letterSpacing: "-.03em", lineHeight: "1.02" }}>
                        {__t(v.tx?.dealsTitle)}
                      </h2>
                      {" "}
                    </div>
                    {" "}
                    {v.dealsDemo ? (
                      <>
                        {" "}
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)", padding: "6px 12px", border: "1px dashed var(--line2)", borderRadius: "999px" }}>
                          Primer sadržaja · menja se u adminu
                        </span>
                        {" "}
                      </>
                    ) : null}
                    {" "}
                  </div>
                  {" "}
                  <div data-rv={"1"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "16px" }}>
                    {" "}
                    {__arr(v.deals).map(($d, $i0) => (
                      <React.Fragment key={$i0}>
                        {" "}
                        <div data-tone={"ink"} style={{ display: "flex", flexDirection: "column", gap: "18px", padding: "26px 28px", background: "#131316", color: "var(--fg)", borderRadius: "18px", minHeight: "220px", position: "relative", overflow: "hidden" }}>
                          {" "}
                          <div style={{ position: "absolute", right: "-30px", top: "-30px", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle,rgba(237,28,36,.35),transparent 70%)", pointerEvents: "none" }}></div>
                          {__t($d?.imgEl)}
                          {" "}
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                            {" "}
                            {__t($d?.img)}
                            {" "}
                            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)" }}>
                              {"važi do "}
                              {__t($d?.until)}
                            </span>
                            {" "}
                          </div>
                          {" "}
                          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(44px,4vw,56px)", fontWeight: "700", lineHeight: ".9", letterSpacing: "-.04em", color: "var(--red2)" }}>
                            {__t($d?.off)}
                          </span>
                          {" "}
                          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "12px", marginTop: "auto" }}>
                            {" "}
                            <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                              {" "}
                              <span data-clamp={"2"} style={{ fontSize: "19px", fontWeight: "800", letterSpacing: "-.01em", lineHeight: "1.15" }}>
                                {__t($d?.title)}
                              </span>
                              {" "}
                              <span data-clamp={"1"} style={{ fontSize: "13.5px", color: "var(--muted)" }}>
                                {__t($d?.note)}
                              </span>
                              {" "}
                            </div>
                            {" "}
                            <button onClick={$d?.ask} style={{ flex: "none", height: "40px", padding: "0 16px", border: "0", cursor: "pointer", background: "#ed1c24", color: "#fff", transform: "skewX(-15deg)", transition: "background .15s" }} className={"tvp6"}>
                              <span style={{ display: "inline-block", transform: "skewX(15deg)", fontFamily: "Figtree,system-ui,sans-serif", fontSize: "11.5px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                                Upit
                              </span>
                            </button>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </React.Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </section>
              {" "}
            </>
          ) : null}
          {" "}
          <section id={"katalog"} data-screen-label={"Katalog"} style={{ background: "var(--bg)", color: "var(--fg)" }}>
            {" "}
            <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(16px,3vw,32px)" }}>
              {" "}
              <div data-rv={"1"} data-grid={"1"} style={{ display: "grid", gridTemplateColumns: "minmax(0,1.3fr) minmax(min(100%,300px),.7fr)", gap: "24px", alignItems: "center", padding: "clamp(28px,4vw,48px)", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "22px" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--red2)" }}>
                    <span style={{ width: "26px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                    05 · Online katalog · B2B
                  </div>
                  {" "}
                  <h2 style={{ margin: "0", fontSize: "clamp(28px,3.4vw,44px)", fontWeight: "800", letterSpacing: "-.03em", lineHeight: "1.05", textWrap: "balance" }}>
                    {__t(v.tx?.catTitle)}
                  </h2>
                  {" "}
                  <p style={{ margin: "0", maxWidth: "56ch", fontSize: "15.5px", lineHeight: "1.55", color: "var(--muted)", textWrap: "pretty" }}>
                    {"Katalog se otvara u novom prozoru. Nemate nalog? Pozovite "}
                    {__t(v.phone1)}
                    {" ili pišite na "}
                    <a href={v.mailtoHref} style={{ color: "var(--red2)", fontWeight: "700" }}>
                      {__t(v.email)}
                    </a>
                    {" - otvaramo ga za servise i prodavnice."}
                  </p>
                  {" "}
                </div>
                {" "}
                <a href={v.catalogUrl} target={"_blank"} rel={"noopener"} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", minHeight: "200px", padding: "26px 28px", borderRadius: "18px", background: "#ed1c24", color: "#fff", boxShadow: "0 14px 36px rgba(237,28,36,.28)", transition: "transform .2s,background .2s" }} className={"tvp8"}>
                  {" "}
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".2em", textTransform: "uppercase", opacity: ".85" }}>
                    {__t(v.catalogHost)}
                  </span>
                  {" "}
                  <span style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
                    <span style={{ fontSize: "clamp(24px,2.4vw,30px)", fontWeight: "800", letterSpacing: "-.02em", lineHeight: "1.05" }}>
                      Otvori katalog
                    </span>
                    <span style={{ fontSize: "34px", lineHeight: "1" }}>
                      →
                    </span>
                  </span>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section id={"lokacije"} data-screen-label={"Lokacije"} style={{ background: "var(--bg)", color: "var(--fg)" }}>
            {" "}
            <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(16px,3vw,32px) clamp(56px,7vw,96px)", display: "flex", flexDirection: "column", gap: "28px" }}>
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--red2)" }}>
                  <span style={{ width: "26px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                  06 · Lokacije
                </div>
                {" "}
                <h2 style={{ margin: "0", fontSize: "clamp(32px,4.2vw,56px)", fontWeight: "800", letterSpacing: "-.03em", lineHeight: "1.02" }}>
                  {__t(v.locsTitle)}
                </h2>
                {" "}
              </div>
              {" "}
              <div data-rv={"1"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,290px),1fr))", gap: "16px" }}>
                {" "}
                {__arr(v.locs).map(($l, $i0) => (
                  <React.Fragment key={$i0}>
                    {" "}
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "26px 28px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "18px" }}>
                      {" "}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                        {" "}
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                          {__t($l?.tag)}
                        </span>
                        {" "}
                        <span style={__css(`display:inline-flex;align-items:center;gap:7px;font-family:'JetBrains Mono',monospace;font-size:10.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${$l?.stColor ?? ""}`)}>
                          <span style={__css(`width:7px;height:7px;border-radius:50%;background:${$l?.stColor ?? ""}`)}></span>
                          {__t($l?.status)}
                        </span>
                        {" "}
                      </div>
                      {" "}
                      <div style={{ fontSize: "30px", fontWeight: "800", letterSpacing: "-.025em", lineHeight: "1" }}>
                        {__t($l?.name)}
                      </div>
                      {" "}
                      <a href={$l?.maps} target={"_blank"} rel={"noopener"} style={{ fontSize: "15px", color: "var(--muted2)", lineHeight: "1.5" }} className={"tvp9"}>
                        {__t($l?.addr)}
                        {" ↗"}
                      </a>
                      {" "}
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "14px", borderTop: "1px solid var(--line)" }}>
                        {" "}
                        {__arr($l?.hours).map(($h, $i1) => (
                          <React.Fragment key={$i1}>
                            {" "}
                            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "14px" }}>
                              <span style={{ color: "var(--muted)" }}>
                                {__t($h?.d)}
                              </span>
                              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: "600", fontVariantNumeric: "tabular-nums" }}>
                                {__t($h?.t)}
                              </span>
                            </div>
                            {" "}
                          </React.Fragment>
                        ))}
                        {" "}
                      </div>
                      {" "}
                      {$l?.hasTel ? (
                        <>
                          {" "}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
                            {" "}
                            {__arr($l?.tels).map(($t, $i1) => (
                              <React.Fragment key={$i1}>
                                {" "}
                                <a href={$t?.href} data-tone={"ink"} style={{ display: "inline-flex", alignItems: "center", height: "40px", padding: "0 14px", borderRadius: "10px", background: "#131316", color: "var(--fg)", fontFamily: "'JetBrains Mono',monospace", fontSize: "12.5px", fontWeight: "600", letterSpacing: ".04em", transition: "background .15s" }} className={"tvpa"}>
                                  {__t($t?.label)}
                                </a>
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
                  </React.Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section data-tone={"paper"} id={"o-nama"} data-screen-label={"O nama"} style={{ borderTop: "1px solid var(--line)", background: "var(--bg)", color: "var(--fg)" }}>
            {" "}
            <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(16px,3vw,32px)", display: "flex", flexDirection: "column", gap: "40px" }}>
              {" "}
              <div data-rv={"1"} data-grid={"1"} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(min(100%,300px),1fr)", gap: "clamp(24px,4vw,64px)", alignItems: "end" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--red2)" }}>
                    <span style={{ width: "26px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                    07 · O nama
                  </div>
                  {" "}
                  <h2 style={{ margin: "0", fontSize: "clamp(32px,4.2vw,56px)", fontWeight: "800", letterSpacing: "-.03em", lineHeight: "1.02", textWrap: "balance" }}>
                    {__t(v.tx?.aboutTitle)}
                  </h2>
                  {" "}
                </div>
                {" "}
                <p style={{ margin: "0", fontSize: "16.5px", lineHeight: "1.6", color: "var(--muted)", textWrap: "pretty" }}>
                  {__t(v.tx?.aboutBody)}
                </p>
                {" "}
              </div>
              {" "}
              <div data-rv={"1"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "0", borderTop: "2px solid var(--line)" }}>
                {" "}
                {__arr(v.timeline).map(($t, $i0) => (
                  <React.Fragment key={$i0}>
                    {" "}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "22px 20px 8px 0", position: "relative" }}>
                      {" "}
                      <span style={{ position: "absolute", top: "-2px", left: "0", width: "34px", height: "2px", background: "#ed1c24" }}></span>
                      {" "}
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "26px", fontWeight: "700", letterSpacing: "-.02em", color: "var(--red2)" }}>
                        {__t($t?.y)}
                      </span>
                      {" "}
                      <span data-clamp={"1"} style={{ fontSize: "17px", fontWeight: "800", letterSpacing: "-.01em" }}>
                        {__t($t?.t)}
                      </span>
                      {" "}
                      <span style={{ fontSize: "14px", lineHeight: "1.5", color: "var(--muted)", textWrap: "pretty" }}>
                        {__t($t?.d)}
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </React.Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section data-tone={"ink"} data-screen-label={"Deo MR Engines"} style={{ position: "relative", background: "#0b0b0d", color: "var(--fg)", overflow: "hidden" }}>
            {" "}
            <img src={"/assets/bg-workshop.png"} alt={""} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 45%", opacity: ".28" }} />
            {" "}
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(11,11,13,.96) 0%,rgba(11,11,13,.75) 55%,rgba(11,11,13,.4) 100%)" }}></div>
            {" "}
            <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(16px,3vw,32px)", display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "clamp(20px,4vw,48px)", alignItems: "center" }} data-grid={"1"}>
              {" "}
              <img data-rv={"1"} src={"/assets/logo-crest-white-1200.png"} alt={"MR Engines - Made in Serbia"} style={{ height: "clamp(84px,10vw,140px)", width: "auto" }} />
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexDirection: "column", gap: "14px", minWidth: "0" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--red2)" }}>
                  <span style={{ width: "26px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                  Deo MR Engines
                </div>
                {" "}
                <h2 style={{ margin: "0", fontSize: "clamp(28px,3.6vw,48px)", fontWeight: "800", letterSpacing: "-.03em", lineHeight: "1.05", textWrap: "balance" }}>
                  {__t(v.tx?.mrTitle)}
                </h2>
                {" "}
                <p style={{ margin: "0", maxWidth: "56ch", fontSize: "16px", lineHeight: "1.55", color: "var(--muted2)", textWrap: "pretty" }}>
                  {__t(v.tx?.mrBody)}
                </p>
                {" "}
                <a href={"/"} style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "48px", padding: "0 22px", border: "1px solid var(--line2)", color: "var(--fg)", transform: "skewX(-15deg)", marginLeft: "6px", transition: "border-color .15s,color .15s" }} className={"tvp1"}>
                  <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "12.5px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                    MR Engines stranica →
                  </span>
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section data-tone={"ink"} id={"kontakt"} data-screen-label={"Kontakt"} style={{ borderTop: "1px solid var(--line)", background: "var(--bg)", color: "var(--fg)" }}>
            {" "}
            <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(16px,3vw,32px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(min(100%,320px),1.1fr)", gap: "clamp(28px,4vw,64px)", alignItems: "start" }} data-grid={"1"}>
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--red2)" }}>
                  <span style={{ width: "26px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                  08 · Kontakt
                </div>
                {" "}
                <h2 style={{ margin: "0", fontSize: "clamp(32px,4.2vw,56px)", fontWeight: "800", letterSpacing: "-.03em", lineHeight: "1.02", textWrap: "balance" }}>
                  {__t(v.tx?.contactTitle)}
                </h2>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {" "}
                  <a href={v.tel1Href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 20px", border: "1px solid var(--line)", borderRadius: "14px", color: "var(--fg)", transition: "border-color .15s" }} className={"tvpb"}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                      Telefon
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "18px", fontWeight: "700" }}>
                      {__t(v.phone1)}
                    </span>
                  </a>
                  {" "}
                  <a href={v.tel2Href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 20px", border: "1px solid var(--line)", borderRadius: "14px", color: "var(--fg)", transition: "border-color .15s" }} className={"tvpb"}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                      Telefon
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "18px", fontWeight: "700" }}>
                      {__t(v.phone2)}
                    </span>
                  </a>
                  {" "}
                  <a href={v.mailtoHref} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 20px", border: "1px solid var(--line)", borderRadius: "14px", color: "var(--fg)", transition: "border-color .15s" }} className={"tvpb"}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                      E-mail
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "15px", fontWeight: "700", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {__t(v.email)}
                    </span>
                  </a>
                  {" "}
                  {v.hasMsg ? (
                    <>
                      {" "}
                      <a href={v.msgHref} target={"_blank"} rel={"noopener"} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "16px 20px", border: "1px solid var(--line)", borderRadius: "14px", color: "var(--fg)", transition: "border-color .15s" }} className={"tvpb"}>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                          Viber / WhatsApp
                        </span>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "15px", fontWeight: "700" }}>
                          Pošalji poruku →
                        </span>
                      </a>
                      {" "}
                    </>
                  ) : null}
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-rv={"1"} data-tone={"ink"} style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "26px 28px", background: "#131316", border: "1px solid var(--line)", borderRadius: "18px", backgroundImage: "linear-gradient(90deg,transparent,#ed1c24 50%,transparent)", backgroundSize: "100% 3px", backgroundRepeat: "no-repeat" }}>
                {" "}
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--muted)" }}>
                  Upit
                </span>
                {" "}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "10px" }}>
                  {" "}
                  <input value={__dv(v.fName)} onChange={v.onName} placeholder={"Ime / servis"} style={{ height: "50px", padding: "0 16px", borderRadius: "12px", background: "var(--fill)", border: "1px solid var(--line2)", color: "var(--fg)", fontSize: "15px" }} />
                  {" "}
                  <input value={__dv(v.fContact)} onChange={v.onContact} placeholder={"Telefon ili e-mail"} style={{ height: "50px", padding: "0 16px", borderRadius: "12px", background: "var(--fill)", border: "1px solid var(--line2)", color: "var(--fg)", fontSize: "15px" }} />
                  {" "}
                </div>
                {" "}
                <textarea value={__dv(v.fMsg)} onChange={v.onMsg} rows={"5"} placeholder={"Koji deo tražite, za koji motor (kod motora, godište, zapremina)?"} style={{ padding: "14px 16px", borderRadius: "12px", background: "var(--fill)", border: "1px solid var(--line2)", color: "var(--fg)", fontSize: "15px", lineHeight: "1.5", resize: "vertical", minHeight: "130px" }}></textarea>
                {" "}
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 16px", paddingLeft: "6px", marginTop: "4px" }}>
                  {" "}
                  <a href={v.mailHref} onClick={v.onSend} style={{ display: "inline-flex", alignItems: "center", height: "50px", padding: "0 24px", background: "#ed1c24", color: "#fff", transform: "skewX(-15deg)", boxShadow: "0 10px 26px rgba(237,28,36,.28)", transition: "background .15s" }} className={"tvpc"}>
                    <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "12.5px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                      Pošalji upit
                    </span>
                  </a>
                  {" "}
                  <span style={__css(`font-size:12.5px;color:${v.sentColor ?? ""}`)}>
                    {__t(v.sentLine)}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
        </main>
        {" "}
        <button ref={v.topRef} onClick={v.goTop} aria-label={"Na vrh"} data-tone={"ink"} style={{ position: "fixed", right: "20px", bottom: "20px", zIndex: "55", width: "46px", height: "46px", borderRadius: "12px", border: "1px solid var(--line)", background: "rgba(19,19,22,.9)", color: "var(--fg)", cursor: "pointer", fontSize: "16px", backdropFilter: "blur(10px)", opacity: "0", transform: "translateY(12px)", pointerEvents: "none", transition: "opacity .3s,transform .3s,border-color .15s" }} className={"tvp1"}>
          ↑
        </button>
        {" "}
        <footer data-tone={"ink"} style={{ borderTop: "1px solid var(--line)", background: "var(--bg)", color: "var(--fg)" }}>
          {" "}
          <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "36px clamp(16px,3vw,32px) 40px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
              {" "}
              <img src={"/assets/tikivent-white.svg"} alt={"Tiki Vent"} style={{ height: "44px", width: "auto" }} />
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {" "}
                <span style={{ fontSize: "14px", fontWeight: "700" }}>
                  Tiki Vent d.o.o. · Prešernova 15, Beograd
                </span>
                {" "}
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>
                  {__t(v.phone1)}
                  {" · "}
                  {__t(v.phone2)}
                  {" · "}
                  {__t(v.email)}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 22px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", fontWeight: "600", letterSpacing: ".06em" }}>
              {" "}
              <a href={v.catalogUrl} target={"_blank"} rel={"noopener"}>
                Online katalog
              </a>
              {" "}
              <a href={"https://www.enginesmr.com"} target={"_blank"} rel={"noopener"}>
                enginesmr.com
              </a>
              {" "}
              <a href={"https://www.mrgroup.rs"} target={"_blank"} rel={"noopener"}>
                mrgroup.rs
              </a>
              {" "}
              <a href={"/"}>
                MR Engines
              </a>
              {" "}
            </div>
            {" "}
            <div style={{ width: "100%", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", letterSpacing: ".08em", color: "var(--faint)" }}>
              © 2026 Tiki Vent d.o.o. · powered by MR Engines. Sva prava zadržana.
            </div>
            {" "}
          </div>
          {" "}
        </footer>
      </div>
    </>
  )
}

export const defaultProps = {
  "catalogUrl": "http://tiki.bavariahosting.com/orders/",
  "heroVideoUrl": "/assets/tikivent-hero.mp4",
  "messagingNumber": ""
}

export default createDCPage(Component, view, defaultProps, "TikiVentPage")
