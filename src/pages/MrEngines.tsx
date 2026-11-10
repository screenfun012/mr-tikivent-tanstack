// @ts-nocheck
/* eslint-disable */
import * as React from 'react'
import { DCLogic, createDCPage, __css, __style, __dv, __dc, __arr, __t } from '../lib/dc'

// ───────────────────────────── Logika ─────────────────────────────
const RED = '#ed1c24';
const pad = n => String(n).padStart(2, '0');
const toSec = s => { const p = String(s || '').split(':').map(Number); return p.length > 1 ? p[0] * 60 + (p[1] || 0) : (p[0] || 0); };
const norm = s => String(s || '').toLowerCase().replace(/[\s.\-–_]/g, '');
const MFRS = [
  { id: 'all' },
  { id: 'renault', label: 'Renault · Dacia · Nissan' },
  { id: 'vag', label: 'VW · Škoda · Seat · Audi' },
  { id: 'psa', label: 'Peugeot · Citroën' },
  { id: 'ford', label: 'Ford' },
  { id: 'fiat', label: 'Fiat · Opel' },
  { id: 'mercedes', label: 'Mercedes-Benz' },
];
const ANGLE_KEYS = ['front', 'intake', 'timing', 'flywheel'];
const ANGLES = [{ src: '/assets/engine-d.png', k: 'front' }, { src: '/assets/engine-a.png', k: 'intake' }, { src: '/assets/engine-c.png', k: 'timing' }, { src: '/assets/engine-b.png', k: 'flywheel' }];
const ENGINES = [
  { mfr: 'renault', brand: 'Renault', name: '1.2 TCe', code: 'H5F', fuel: 'petrol', cc: 1197, timing: 'chain', apps: ['Renault Clio IV', 'Captur', 'Mégane IV', 'Dacia Duster', 'Nissan Juke'], price: 1700, photos: true },
  { mfr: 'renault', brand: 'Renault', name: '0.9 TCe', code: 'H4B', fuel: 'petrol', cc: 898, timing: 'chain', apps: ['Renault Clio IV', 'Twingo III', 'Dacia Sandero', 'Logan'], price: 1450 },
  { mfr: 'renault', brand: 'Renault', name: '1.5 dCi', code: 'K9K', fuel: 'diesel', cc: 1461, timing: 'belt', apps: ['Renault Clio', 'Mégane', 'Kadjar', 'Dacia Duster', 'Nissan Qashqai'], price: 1650 },
  { mfr: 'renault', brand: 'Renault', name: '1.6 dCi', code: 'R9M', fuel: 'diesel', cc: 1598, timing: 'chain', apps: ['Renault Mégane', 'Scénic', 'Talisman', 'Nissan Qashqai', 'X-Trail'], price: 2100 },
  { mfr: 'vag', brand: 'VW', name: '1.2 TSI', code: 'CJZA', fuel: 'petrol', cc: 1197, timing: 'belt', apps: ['VW Golf VII', 'Polo', 'Škoda Octavia III', 'Seat Leon'], price: 1750 },
  { mfr: 'vag', brand: 'VW', name: '1.4 TSI', code: 'CAXA', fuel: 'petrol', cc: 1390, timing: 'chain', apps: ['VW Golf VI', 'Passat B7', 'Škoda Octavia II', 'Seat Leon'], price: 1850 },
  { mfr: 'vag', brand: 'VW', name: '1.6 TDI', code: 'CAYC', fuel: 'diesel', cc: 1598, timing: 'belt', apps: ['VW Golf VI', 'Polo', 'Škoda Octavia II', 'Fabia'], price: 1600 },
  { mfr: 'vag', brand: 'VW', name: '2.0 TDI', code: 'CFFB', fuel: 'diesel', cc: 1968, timing: 'belt', apps: ['VW Golf VI', 'Passat B7', 'Tiguan', 'Škoda Superb'], price: 1900 },
  { mfr: 'psa', brand: 'Peugeot', name: '1.2 PureTech', code: 'EB2DT', fuel: 'petrol', cc: 1199, timing: 'belt', apps: ['Peugeot 208', '308', '3008', 'Citroën C3', 'C4'], price: 1800 },
  { mfr: 'psa', brand: 'Peugeot', name: '1.6 HDi', code: 'DV6C', fuel: 'diesel', cc: 1560, timing: 'belt', apps: ['Peugeot 308', 'Partner', 'Citroën C4', 'Berlingo'], price: 1550 },
  { mfr: 'ford', brand: 'Ford', name: '1.0 EcoBoost', code: 'M1DA', fuel: 'petrol', cc: 999, timing: 'belt', apps: ['Ford Fiesta', 'Focus', 'B-Max', 'C-Max'], price: 1700 },
  { mfr: 'ford', brand: 'Ford', name: '1.5 TDCi', code: 'XWDB', fuel: 'diesel', cc: 1499, timing: 'belt', apps: ['Ford Focus', 'Fiesta', 'Transit Connect'], price: null },
  { mfr: 'fiat', brand: 'Fiat', name: '1.3 Multijet', code: '199A2.000', fuel: 'diesel', cc: 1248, timing: 'chain', apps: ['Fiat Punto', 'Doblò', 'Opel Corsa D 1.3 CDTI'], price: null },
  { mfr: 'mercedes', brand: 'Mercedes-Benz', name: '2.2 CDI', code: 'OM651', fuel: 'diesel', cc: 2143, timing: 'chain', apps: ['Mercedes C W204', 'E W212', 'Sprinter', 'Vito'], price: null },
];
const PHOTOS = [['g01', 'hall'], ['g02', 'machines'], ['g03', 'engines'], ['g04', 'team'], ['g05', 'hall'], ['g06', 'machines'], ['g07', 'engines'], ['g08', 'shipping'], ['g09', 'machines'], ['g10', 'team'], ['g11', 'engines'], ['g12', 'shipping']];
const DEFAULT_GAL = [['d1', 'hall', '/assets/bg-workshop.png'], ['d2', 'engines', '/assets/engine-d.png'], ['d3', 'machines', '/assets/video-poster-b.jpg'], ['d4', 'engines', '/assets/engine-a.png'], ['d5', 'engines', '/assets/engine-c.png'], ['d6', 'engines', '/assets/engine-b.png']];
const TIMES = ['00:00', '00:15', '00:35', '00:55', '01:25', '01:50', '02:10', '02:25'];
const HOME = [807, 281];
const POINTS = [{ x: 236, y: 306, sr: 'SAD', en: 'USA' }, { x: 685, y: 310, sr: 'Portugal', en: 'Portugal' }, { x: 707, y: 304, sr: 'Španija', en: 'Spain' }, { x: 731, y: 272, sr: 'Francuska', en: 'France' }, { x: 769, y: 243, sr: 'Nemačka', en: 'Germany' }, { x: 775, y: 293, sr: 'Italija', en: 'Italy' }, { x: 1259, y: 596, sr: 'Australija', en: 'Australia' }];
const DEFAULT_VIDEO = '/media/life-of-an-engine.mp4';
const NAV = ['katalog', 'procesi', 'delovi', 'video', 'o-nama', 'knjige', 'galerija'];

const T = {
  sr: {
    nav: { katalog: 'Katalog', procesi: 'Procesi', delovi: 'Tiki Vent', video: 'Video', 'o-nama': 'O nama', knjige: 'Tehničke knjige', galerija: 'Galerija' },
    heroEyebrow: 'MR Engines · Beograd · od 1968', heroL1: 'Novi život', heroL2: 'za stari motor.',
    heroSub: 'Remont motora po fabričkim standardima, isključivo sa novim delovima. Garancija 12 meseci. Tri generacije iskustva - od 1968.',
    ctaCatalog: 'Katalog motora', ctaProcess: 'Kako radimo',
    trust: ['ISO 9001 · 14001 · 45001', 'Company Wall A+ 2025', '150+ zaposlenih'],
    tag1: 'Renault 1.2 TCe · H5F', tag2: 'Garancija 12 meseci', tag3: '100% novi delovi',
    marquee: ['Remont motora', 'Mašinska obrada', 'Remont turbina', 'Auto servis', 'Tiki Vent delovi', 'Beograd · Niš', 'Od 1968'],
    stats: [{ n: 1968, suf: '', text: '1968', l: 'Godina osnivanja' }, { n: 150, suf: '+', text: '150+', l: 'Zaposlenih' }, { n: 3, suf: '', text: '3', l: 'Lokacije' }, { n: 12, suf: '', text: '12', l: 'Meseci garancije' }],
    catEyebrow: 'Katalog motora', catTitle: 'Nađi motor. Vidi šta dobijaš.', catSub: 'Izaberi proizvođača, zatim traži po oznaci (1.2 TCe), fabričkom kodu (H5F) ili modelu automobila (Clio).',
    searchPh: 'Pretraga: 1.2 TCe, H5F, Clio…', all: 'Svi proizvođači', enginesWord: 'motora',
    noResults: 'Nema motora za ovu pretragu.', noResultsHint: 'Probaj drugu oznaku ili kod, npr. K9K ili 1.5 dCi.',
    onRequest: 'Cena na upit', back: 'Katalog', photoSoon: 'Fotografija u pripremi',
    petrol: 'Benzin', diesel: 'Dizel', chain: 'Lanac', belt: 'Kaiš',
    specFuel: 'Gorivo', specCc: 'Zapremina', specTiming: 'Razvod', specCode: 'Kod motora',
    angles: { front: 'Prednja strana', intake: 'Usisna strana', timing: 'Strana razvoda', flywheel: 'Strana zamajca' },
    remont: 'Remont motora', priceLbl: 'Cena', priceNote: 'Kompletan remont · garancija 12 meseci', priceHidden: 'Cena se prikazuje na zahtev.', showPrice: 'Prikaži cenu', priceTbd: 'Cena u pripremi',
    partsTitle: 'Delovi obuhvaćeni remontom', partsNote: 'Koristimo isključivo nove, zamenske delove pri svakom remontu motora.',
    partsBefore: ['Dihtunzi (komplet)', 'Karike (klipovi)', 'Ventili (usisni i izduvni)'], timingChain: 'Lanac (razvodni komplet)', timingBelt: 'Kaiš (razvodni komplet)',
    partsAfter: ['Zatezač', 'Pumpa za vodu', 'Termostat', 'Brtve i zaptivke', 'Senzori i ostali potrebni delovi'],
    warrantyTitle: 'Garancija - 12 meseci', warrantyCond: 'Uslovi garancije',
    warranty: ['Čišćenje hladnjaka pre ugradnje motora', 'Zamena ulja i filtera (ulje, uljni filter, filter vazduha)', 'Provera i dopuna rashladne tečnosti', 'Poštovanje propisanih uslova ugradnje i održavanja'],
    procEyebrow: 'Procesi', procTitle: 'Od prijema do isporuke.', procSub: 'Svaki motor prolazi isti put - osam koraka, bez skraćivanja.', stepPhoto: 'Fotografija koraka',
    steps: [
      { t: 'Prijem i evidencija', d: 'Svaki motor dobija MR broj i prolazi ulaznu kontrolu.' },
      { t: 'Rasklapanje i pranje', d: 'Kompletno rasklapanje, industrijsko pranje i sortiranje delova.' },
      { t: 'Merenje i dijagnostika', d: 'Merenje svih vitalnih mera i odluka o obradi i zameni delova.' },
      { t: 'Mašinska obrada', d: 'Blokovi, glave, radilice i klipnjače na DMG MORI, Rottler i laserskoj opremi.' },
      { t: 'Sklapanje', d: 'Po fabričkim standardima, isključivo sa novim zamenskim delovima.' },
      { t: 'Test i završna kontrola', d: 'Provera pritisaka, zaptivenosti i funkcija pre otpreme.' },
      { t: 'Pakovanje', d: 'Zaštitno pakovanje na paleti, spremno za transport.' },
      { t: 'Isporuka i izvoz', d: 'Utovar u kamion - isporuka u Srbiji, regionu i EU.' },
    ],
    machines: [{ t: 'DMG MORI', d: 'CNC obradni centri' }, { t: 'Rottler', d: 'Obrada blokova i glava motora' }, { t: 'Laser', d: 'Laserska oprema' }],
    warrantyCardT: 'Garancija 12 meseci', warrantyCardD: 'Na svaki remontovani motor, uz jasne uslove ugradnje i održavanja.',
    exportT: 'Izvoz', exportD: 'Motori se isporučuju partnerima u regionu i EU - pakovani na paleti, spremni za transport.',
    videoEyebrow: 'Video', videoTitle: 'Pogledaj kako nastaje remontovan motor.', videoSub: 'Svi procesi za 2,5 minuta - od trenutka kada motor stigne do pakovanja u kamion.',
    videoPh: 'Video u pripremi', videoMeta: '2–2,5 min · 1080p', chaptersTitle: 'Poglavlja',
    chapters: ['Prijem motora', 'Rasklapanje i pranje', 'Merenje i dijagnostika', 'Mašinska obrada', 'Sklapanje', 'Test i završna kontrola', 'Pakovanje', 'Utovar i transport'],
    aboutEyebrow: 'O nama', aboutL1: 'Tri generacije.', aboutL2: 'Jedna porodica.', aboutL3: 'Od 1968.',
    aboutLead: 'MR Group je osnovan 1968. godine, kada je Radomir Bata Rajković otvorio svoju radionicu u Beogradu. Od 2018. MR Engines posluje kao potpuno samostalna divizija - danas vodeća kompanija u Srbiji za remont motora i precizne mašinske usluge.',
    aboutStory: 'Priča o MR je priča o porodici, prijateljima, kolegama i časti da stojiš iza svojih reči i dela. Porodično jedinstvo je formula našeg uspeha.',
    presOpen: 'Puna prezentacija (EN)', filmOpen: 'Film „Mašina sa dušom“', aboutPhoto: 'Fotografija: hala ili tim',
    whatTitle: 'Čime se bavimo',
    services4: [
      { idx: '01', t: 'Remont motora', d: 'Kompletan remont svih tipova motora po fabričkim standardima: putnički, teretni, poljoprivredni i industrijski program.' },
      { idx: '02', t: 'Mašinska obrada', d: 'Obrada glava motora, radilica, blokova i klipnjača na najsavremenijim mašinama - temelj naše reputacije.' },
      { idx: '03', t: 'Auto servis', d: 'Skidanje i ugradnja motora, generalni remont motora na vozilu i ostale mehaničarske usluge.' },
      { idx: '04', t: 'Turbo remont', d: 'Kompletna reparacija turbina za putnička, teretna, poljoprivredna i industrijska vozila.' },
    ],
    tikiEyebrow: 'Rezervni delovi', tikiTitle: 'Tiki Vent - powered by MR Engines',
    tikiBody: 'Ovlašćeni distributer vodećih svetskih proizvođača rezervnih delova. Deo MR Engines od 2025, sa veleprodajom i maloprodajom u Beogradu i franšizom u Nišu.',
    tikiCells: [{ v: '50.000+', l: 'Artikala' }, { v: '2', l: 'Grada' }, { v: '2025', l: 'Deo MR' }], tikiPhoto: 'Fotografija: Tiki Vent prodavnica ili magacin',
    rebEyebrow: 'Šta se menja', rebTitle: 'Rasklopimo. Zamenimo. Sklopimo.', rebSub: 'Svaki motor se kompletno rasklapa. Delovi koji se troše ne popravljaju se - menjaju se novim. Ovo je standard za svaki remont.',
    rebList: ['Dihtunzi - komplet', 'Karike i klipovi po potrebi', 'Ventili, vođice i semerinzi ventila', 'Ležajevi radilice i klipnjače', 'Razvod: lanac ili kaiš sa zatezačem', 'Pumpa za vodu i termostat'], explode: 'Rasklopi', assemble: 'Sklopi',
    liveLbl: 'Motora remontovano u {y}.', clipHint: 'Klip', clipHover: 'Pređi mišem za pregled · klik za ceo klip', certPdf: 'Sertifikat · PDF ↗', certLbl: 'Sertifikat',
    certsEyebrow: 'Sertifikati i priznanja', certs: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'Company Wall A+ 2025'],
    booksEyebrow: 'Tehničke knjige', booksTitle: 'Tehnička dokumentacija motora, na dodir.', booksBody: 'Aplikacija se otvara u novom prozoru. Nalog na tabletu ima pristup samo za pregled - bez izmena podataka.',
    booksOpen: 'Otvori aplikaciju', booksCells: [{ l: 'Pristup', v: 'Pregled' }, { l: 'Nalog', v: 'Tablet' }, { l: 'Izmene', v: 'Ne' }],
    photosEyebrow: 'Galerija', photosTitle: 'Hala, mašine, motori, tim.', photosSub: 'Fotografije iz proizvodnje - dodirni sliku za uvećanje.', noPhotosCat: 'Nema fotografija u ovoj kategoriji.',
    cats: { all: 'Sve', hall: 'Hala', machines: 'Mašine', engines: 'Motori', team: 'Tim', shipping: 'Isporuka' },
    mapEyebrow: 'Izvoz', mapTitle: 'Iz Srbije za ceo svet.', mapSub: 'Remontovani motori iz Beograda putuju partnerima širom Evrope, u Ameriku i Australiju.', qrTitle: 'Skeniraj i ponesi ponudu', qrBody: 'QR kod otvara ovaj motor na tvom telefonu - specifikacija, delovi i garancija.', brandsEyebrow: 'Brendovi delova sa kojima radimo',
    footTag: 'Remont motora i mašinska obrada', footAddr: 'Beograd · Niš · Srbija', phoneRebuild: 'Remont motora', phoneMach: 'Mašinska obrada', footRights: '© 2026 MR Engines. Sva prava zadržana.',
  },
  en: {
    nav: { katalog: 'Catalogue', procesi: 'Processes', delovi: 'Tiki Vent', video: 'Video', 'o-nama': 'About', knjige: 'Technical manuals', galerija: 'Gallery' },
    heroEyebrow: 'MR Engines · Belgrade · since 1968', heroL1: 'New life', heroL2: 'for an old engine.',
    heroSub: 'Engine rebuilding to factory standards, exclusively with new parts. 12-month warranty. Three generations of experience - since 1968.',
    ctaCatalog: 'Engine catalogue', ctaProcess: 'How we work',
    trust: ['ISO 9001 · 14001 · 45001', 'Company Wall A+ 2025', '150+ employees'],
    tag1: 'Renault 1.2 TCe · H5F', tag2: '12-month warranty', tag3: '100% new parts',
    marquee: ['Engine rebuilding', 'Machining', 'Turbo rebuild', 'Auto service', 'Tiki Vent parts', 'Belgrade · Niš', 'Since 1968'],
    stats: [{ n: 1968, suf: '', text: '1968', l: 'Founded' }, { n: 150, suf: '+', text: '150+', l: 'Employees' }, { n: 3, suf: '', text: '3', l: 'Locations' }, { n: 12, suf: '', text: '12', l: 'Months warranty' }],
    catEyebrow: 'Engine catalogue', catTitle: 'Find the engine. See what you get.', catSub: 'Pick a manufacturer, then search by designation (1.2 TCe), factory code (H5F) or car model (Clio).',
    searchPh: 'Search: 1.2 TCe, H5F, Clio…', all: 'All manufacturers', enginesWord: 'engines',
    noResults: 'No engines match this search.', noResultsHint: 'Try another designation or code, e.g. K9K or 1.5 dCi.',
    onRequest: 'Price on request', back: 'Catalogue', photoSoon: 'Photo coming soon',
    petrol: 'Petrol', diesel: 'Diesel', chain: 'Chain', belt: 'Belt',
    specFuel: 'Fuel', specCc: 'Displacement', specTiming: 'Timing', specCode: 'Engine code',
    angles: { front: 'Front view', intake: 'Intake side', timing: 'Timing side', flywheel: 'Flywheel side' },
    remont: 'Engine rebuilding', priceLbl: 'Price', priceNote: 'Complete rebuild · 12-month warranty', priceHidden: 'Price is shown on request.', showPrice: 'Show price', priceTbd: 'Price to be confirmed',
    partsTitle: 'Parts included in the rebuild', partsNote: 'We use only new replacement parts in every engine rebuild.',
    partsBefore: ['Gasket set (complete)', 'Piston rings', 'Valves (intake and exhaust)'], timingChain: 'Timing chain kit', timingBelt: 'Timing belt kit',
    partsAfter: ['Tensioner', 'Water pump', 'Thermostat', 'Seals', 'Sensors and other required parts'],
    warrantyTitle: 'Warranty - 12 months', warrantyCond: 'Warranty conditions',
    warranty: ['Radiator cleaning before engine installation', 'Oil and filter change (oil, oil filter, air filter)', 'Coolant check and top-up', 'Compliance with prescribed installation and maintenance conditions'],
    procEyebrow: 'Processes', procTitle: 'From intake to delivery.', procSub: 'Every engine follows the same path - eight steps, no shortcuts.', stepPhoto: 'Step photo',
    steps: [
      { t: 'Intake and registration', d: 'Every engine gets an MR number and passes intake inspection.' },
      { t: 'Disassembly and cleaning', d: 'Complete disassembly, industrial cleaning and parts sorting.' },
      { t: 'Measuring and diagnostics', d: 'All vital dimensions measured; decisions on machining and replacement.' },
      { t: 'Machining', d: 'Blocks, heads, crankshafts and rods on DMG MORI, Rottler and laser equipment.' },
      { t: 'Assembly', d: 'To factory standards, exclusively with new replacement parts.' },
      { t: 'Testing and final inspection', d: 'Pressure, sealing and function checks before dispatch.' },
      { t: 'Packing', d: 'Protective packing on a pallet, ready for transport.' },
      { t: 'Delivery and export', d: 'Loaded onto the truck - delivered across Serbia, the region and the EU.' },
    ],
    machines: [{ t: 'DMG MORI', d: 'CNC machining centres' }, { t: 'Rottler', d: 'Block and head machining' }, { t: 'Laser', d: 'Laser equipment' }],
    warrantyCardT: '12-month warranty', warrantyCardD: 'On every rebuilt engine, with clear installation and maintenance conditions.',
    exportT: 'Export', exportD: 'Engines are delivered to partners across the region and the EU - palletised and ready for transport.',
    videoEyebrow: 'Video', videoTitle: 'Watch how a rebuilt engine is made.', videoSub: 'All processes in 2.5 minutes - from the moment an engine arrives to packing it into the truck.',
    videoPh: 'Video in production', videoMeta: '2–2.5 min · 1080p', chaptersTitle: 'Chapters',
    chapters: ['Engine intake', 'Disassembly and cleaning', 'Measuring and diagnostics', 'Machining', 'Assembly', 'Testing and final inspection', 'Packing', 'Loading and transport'],
    aboutEyebrow: 'About us', aboutL1: 'Three generations.', aboutL2: 'One family.', aboutL3: 'Since 1968.',
    aboutLead: 'MR Group was founded in 1968, when Radomir Bata Rajković opened his workshop in Belgrade. Since 2018 MR Engines has operated as a fully independent division - today Serbia\u2019s leading company for engine rebuilding and precision machining.',
    aboutStory: 'The story of MR is a story about family, friends, colleagues, and the honour of standing behind your words and actions. Family unity is the formula behind our success.',
    presOpen: 'Full presentation (EN)', filmOpen: 'Film \u201cMachine with a soul\u201d', aboutPhoto: 'Photo: hall or team',
    whatTitle: 'What we do',
    services4: [
      { idx: '01', t: 'Engine rebuilding', d: 'Complete rebuilding of all engine types to factory standards: automotive, freight, agricultural and industrial.' },
      { idx: '02', t: 'Parts machining', d: 'Machining of engine heads, crankshafts, blocks and connecting rods on state-of-the-art machines - the foundation of our reputation.' },
      { idx: '03', t: 'Auto service', d: 'Engine removal and installation, general engine overhaul on the vehicle and other mechanical services.' },
      { idx: '04', t: 'Turbo rebuild', d: 'Complete turbocharger repair for automotive, freight, agricultural and industrial vehicles.' },
    ],
    tikiEyebrow: 'Spare parts', tikiTitle: 'Tiki Vent - powered by MR Engines',
    tikiBody: 'Authorised distributor of leading global spare-parts manufacturers. Part of MR Engines since 2025, with wholesale and retail in Belgrade and a franchise in Niš.',
    tikiCells: [{ v: '50,000+', l: 'Items' }, { v: '2', l: 'Cities' }, { v: '2025', l: 'Part of MR' }], tikiPhoto: 'Photo: Tiki Vent store or warehouse',
    rebEyebrow: 'What gets replaced', rebTitle: 'Strip. Replace. Rebuild.', rebSub: 'Every engine is fully disassembled. Wear parts are not repaired - they are replaced with new ones. This is the standard for every rebuild.',
    rebList: ['Gaskets - complete set', 'Rings and pistons as required', 'Valves, guides and valve seals', 'Crank and rod bearings', 'Timing: chain or belt with tensioner', 'Water pump and thermostat'], explode: 'Exploded view', assemble: 'Assemble',
    liveLbl: 'Engines rebuilt in {y}', clipHint: 'Clip', clipHover: 'Hover to preview · click for the full clip', certPdf: 'Certificate · PDF ↗', certLbl: 'Certificate',
    certsEyebrow: 'Certificates and awards', certs: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'Company Wall A+ 2025'],
    booksEyebrow: 'Technical manuals', booksTitle: 'Engine technical documentation, one tap away.', booksBody: 'The app opens in a new window. The tablet account has view-only access - no data changes.',
    booksOpen: 'Open the app', booksCells: [{ l: 'Access', v: 'View' }, { l: 'Account', v: 'Tablet' }, { l: 'Editing', v: 'No' }],
    photosEyebrow: 'Gallery', photosTitle: 'Hall, machines, engines, team.', photosSub: 'Photos from production - tap a photo to enlarge.', noPhotosCat: 'No photos in this category yet.',
    cats: { all: 'All', hall: 'Hall', machines: 'Machines', engines: 'Engines', team: 'Team', shipping: 'Shipping' },
    mapEyebrow: 'Export', mapTitle: 'From Serbia to the world.', mapSub: 'Rebuilt engines from Belgrade travel to partners across Europe, the Americas and Australia.', qrTitle: 'Scan and take the offer with you', qrBody: 'The QR code opens this engine on your phone - specs, parts and warranty.', brandsEyebrow: 'Parts brands we work with',
    footTag: 'Engine rebuilding and machining', footAddr: 'Belgrade · Niš · Serbia', phoneRebuild: 'Engine rebuilding', phoneMach: 'Machining', footRights: '© 2026 MR Engines. All rights reserved.',
  },
};

class Component extends DCLogic {
  state = { theme: (function () { try { return localStorage.getItem('mr-theme') || 'light'; } catch (e) { return 'light'; } })(), lang: null, q: '', mfr: 'all', sel: null, angle: 0, heroIdx: 0, revealed: {}, revealing: null, priceAnim: 0, cat: 'all', active: '', started: false, chap: -1, ytStart: 0, lightbox: null };
  slabRef = React.createRef();
  headerRef = React.createRef();
  engineRef = React.createRef();
  navRef = React.createRef();
  tlRef = React.createRef();
  tlFillRef = React.createRef();
  nodeRefs = [];
  clipRefs = [];
  videoRef = React.createRef();
  glowRef = React.createRef();

  toggleTheme() { const theme = this.state.theme === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', theme); try { localStorage.setItem('mr-theme', theme); } catch (e) {} this.setState({ theme }); }
  componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
    try { const s = JSON.parse(localStorage.getItem('mrpromo2') || '{}'); if (s.lang) this.setState({ lang: s.lang }); } catch (e) {}
    this.loadContent();
    this.onApiReady = () => this.loadContent(); window.addEventListener('mrcontent:ready', this.onApiReady);
    this.onVis = () => { if (!document.hidden && window.MRContent && window.MRContent.remote) this.loadContent(); }; document.addEventListener('visibilitychange', this.onVis);
    const hm = (location.hash || '').match(/motor=([^&]+)/); if (hm) this.setState({ sel: decodeURIComponent(hm[1]) });
    this.onStorage = e => { if (!e.key || e.key === 'mrpromo.content') this.loadContent(); };
    window.addEventListener('storage', this.onStorage);
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver(es => es.forEach(en => {
        if (!en.isIntersecting) return;
        en.target.setAttribute('data-rv', 'in');
        this.io.unobserve(en.target);
        en.target.querySelectorAll('[data-count]').forEach(el => this.countUp(el));
      }), { threshold: 0.12 });
      this.spy = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) this.setState({ active: en.target.id }); }), { rootMargin: '-40% 0px -55% 0px' });
      document.querySelectorAll('[data-spy]').forEach(s => this.spy.observe(s));
      this.observeAll();
    } else {
      document.querySelectorAll('[data-rv]').forEach(el => el.setAttribute('data-rv', 'in'));
    }
    this.onScroll = () => {
      if (this.raf) return;
      this.raf = requestAnimationFrame(() => {
        this.raf = 0;
        const y = window.scrollY;
        if (y < 200 && this.state.active) this.setState({ active: '' });
        const hd = this.headerRef.current; if (hd) { const on = y > 40; hd.style.background = on ? 'var(--glass)' : 'transparent'; hd.style.backdropFilter = on ? 'blur(14px)' : 'none'; hd.style.webkitBackdropFilter = on ? 'blur(14px)' : 'none'; hd.style.borderBottomColor = on ? 'var(--line)' : 'transparent'; if (on) hd.removeAttribute('data-tone'); else hd.setAttribute('data-tone', 'ink'); }
        if (this.engineRef.current) this.engineRef.current.style.transform = `translate3d(0,${y * 0.1}px,0)`;
        if (this.slabRef.current) this.slabRef.current.style.transform = `translate3d(0,${y * -0.06}px,0) skewX(-15deg)`;
      });
    };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.startFx();
    this.onKey = e => {
      if (this.state.lightbox) { if (e.key === 'Escape') this.setState({ lightbox: null }); if (e.key === 'ArrowRight') this.lbStep(1); if (e.key === 'ArrowLeft') this.lbStep(-1); return; }
      if (!this.state.sel) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowRight') this.turn(1);
      if (e.key === 'ArrowLeft') this.turn(-1);
    };
    window.addEventListener('keydown', this.onKey);
    this.heroTimer = setInterval(() => this.setState(s => { const N = this._heroN || 1; if (N < 2) return null; let n = s.heroIdx; while (n === s.heroIdx) n = Math.floor(Math.random() * N); return { heroIdx: n }; }), 3800);
  }
  componentDidUpdate(prevProps, prevState) {
    this.observeAll();
    if (prevState && prevState.active !== this.state.active && this.state.active) { const nav = this.navRef.current; const btn = nav && nav.querySelector('[data-nav="' + this.state.active + '"]'); if (nav && btn && nav.scrollWidth > nav.clientWidth + 4) nav.scrollTo({ left: Math.max(0, btn.offsetLeft - (nav.clientWidth - btn.offsetWidth) / 2), behavior: 'smooth' }); }
    document.body.style.overflow = (this.state.sel || this.state.lightbox) ? 'hidden' : '';
  }
  componentWillUnmount() {
    if (this.io) this.io.disconnect();
    if (this.spy) this.spy.disconnect();
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('keydown', this.onKey);
    clearInterval(this.heroTimer);
    cancelAnimationFrame(this.fxRaf);
    window.removeEventListener('storage', this.onStorage);
    document.body.style.overflow = '';
  }
  observeAll() {
    if (!this.io) return;
    document.querySelectorAll('[data-rv]').forEach(el => { if (el.getAttribute('data-rv') !== 'in' && !el.__rv) { el.__rv = 1; this.io.observe(el); } });
  }
  countUp(el) {
    if (el.__done) return; el.__done = 1;
    const to = parseFloat(el.getAttribute('data-count')) || 0, suf = el.getAttribute('data-suffix') || '', t0 = performance.now(), dur = 1400;
    const tick = now => { const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(to * e) + suf; if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }
  loadContent() {
    const api = window.MRContent;
    let cached = null; try { cached = api ? api.cached('mr') : JSON.parse(localStorage.getItem('mrpromo.content') || 'null'); } catch (e) {}
    this.setState({ content: cached });
    if (api && api.remote) api.load('mr').then(c => { if (c) this.setState({ content: c }); }, () => {});
  }
  persist() { try { localStorage.setItem('mrpromo2', JSON.stringify({ lang: this.state.lang })); } catch (e) {} }
  setLang(lang) { this.setState({ lang }, () => this.persist()); }
  go(id) { const el = document.getElementById(id); if (!el) return; window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' }); }
  open(code) { this.setState({ sel: code, angle: 0, revealing: null }); }
  close() { this.setState({ sel: null, revealing: null }); }
  turn(d) { const n = this._selN || 1; this.setState(s => ({ angle: (s.angle + d + n) % n })); }
  startFx() {
    const step = () => {
      this.fxRaf = requestAnimationFrame(step);
      if (document.hidden) return;
      const vh = window.innerHeight;
      const tl = this.tlRef.current, fill = this.tlFillRef.current;
      if (tl && fill) {
        const r2 = tl.getBoundingClientRect();
        if (r2.bottom > 0 && r2.top < vh) {
          const p = Math.max(0, Math.min(1, (vh * 0.72 - r2.top) / r2.height));
          fill.style.height = (p * 100).toFixed(2) + '%';
          const yFill = r2.top + p * r2.height;
          this.nodeRefs.forEach(n => { const el = n.current; if (!el) return; const on = el.getBoundingClientRect().top + 15 <= yFill; if (el.__on !== on) { el.__on = on; el.style.color = on ? RED : 'var(--line2)'; el.style.transform = on ? 'rotate(360deg)' : 'rotate(0deg)'; el.style.filter = on ? 'drop-shadow(0 0 8px rgba(237,28,36,.7))' : 'none'; } });
        }
      }
    };
    this.fxRaf = requestAnimationFrame(step);
  }
  seek(sec) { const v = this.videoRef.current; if (v) { v.currentTime = sec; v.play().catch(() => {}); this.setState({ started: true }); } else this.setState({ ytStart: sec || 1 }); }
  playVideo() { const v = this.videoRef.current; if (v) v.play().catch(() => {}); }
  onTime(cur) { const s = this._chapSecs || []; let idx = -1; for (let i = 0; i < s.length; i++) if (cur >= s[i]) idx = i; if (idx !== this.state.chap) this.setState({ chap: idx }); }
  openLb(list, i) { this.setState({ lightbox: { list, i: Math.max(0, i) } }); }
  lbStep(d, e) { if (e && e.stopPropagation) e.stopPropagation(); this.setState(s => { if (!s.lightbox || !s.lightbox.list) return null; const n = s.lightbox.list.length; return { lightbox: { ...s.lightbox, i: (s.lightbox.i + d + n) % n } }; }); }
  onHeroMove(e) { const g = this.glowRef.current; if (!g) return; const r = e.currentTarget.getBoundingClientRect(); g.style.left = (e.clientX - r.left - 310) + 'px'; g.style.top = (e.clientY - r.top - 310) + 'px'; }
  reveal(code) {
    const e = (this._ENG || ENGINES).find(x => x.code === code); if (!e || e.price == null) return;
    const t0 = performance.now(), dur = 900;
    this.setState({ revealing: code, priceAnim: 0 });
    const tick = now => {
      const p = Math.min(1, (now - t0) / dur), ease = 1 - Math.pow(1 - p, 3);
      if (p < 1) { this.setState({ priceAnim: Math.round(e.price * ease) }); requestAnimationFrame(tick); }
      else this.setState(s => ({ revealed: { ...s.revealed, [code]: true }, revealing: null, priceAnim: e.price }));
    };
    requestAnimationFrame(tick);
  }
  fmtPrice(p) { return p == null ? '' : p.toLocaleString('de-DE') + ' €'; }

  renderVals() {
    const st = this.state;
    const lang = st.lang || this.props.defaultLang || 'sr';
    const C = st.content || {};
    const tBase = T[lang] || T.sr, ov = (C.texts || {})[lang] || {};
    const t = { ...tBase }; Object.keys(ov).forEach(k => { if (ov[k]) t[k] = ov[k]; });
    const showAll = !!this.props.showPrices;
    const ENG = C.engines ? C.engines.map(e => ({ ...e, apps: Array.isArray(e.apps) ? e.apps : String(e.apps || '').split(',').map(x => x.trim()).filter(Boolean), cc: +e.cc || 0, price: (e.price === '' || e.price == null) ? null : +e.price, photos: (e.photos || []).filter(Boolean) })) : ENGINES.map(e => ({ ...e, photos: e.photos ? ANGLES.map(a => a.src) : [] }));
    this._ENG = ENG;
    const heroPhotos = (ENG.find(e => e.photos.length) || { photos: ANGLES.map(a => a.src) }).photos;
    this._heroN = heroPhotos.length;
    const hi = heroPhotos.length ? st.heroIdx % heroPhotos.length : 0;
    const mkImg = (src, style) => React.createElement('img', { src, alt: '', style });
    const chip = a => ({ bg: a ? RED : 'transparent', bd: a ? RED : 'var(--line2)', fg: a ? '#fff' : 'var(--muted)' });
    const mono = "'JetBrains Mono',monospace";

    const nav = NAV.map(id => { const a = st.active === id; return { id, label: t.nav[id], color: a ? 'var(--fg)' : 'var(--muted)', line: a ? RED : 'transparent', go: () => this.go(id) }; });

    const hero = React.createElement('div', { ref: this.engineRef, style: { position: 'absolute', inset: 0, pointerEvents: 'none', willChange: 'transform' } },
      React.createElement('div', { style: { position: 'absolute', inset: 0, animation: 'float 7s ease-in-out infinite' } },
        ...heroPhotos.map((src, i) => React.createElement('img', { key: i, src, alt: 'MR Engines', style: { position: 'absolute', left: '50%', top: '50%', height: 'min(72vh,700px)', maxWidth: '94%', objectFit: 'contain', filter: 'drop-shadow(0 50px 70px rgba(0,0,0,.7))', opacity: i === hi ? 1 : 0, transform: 'translate(-50%,-50%) scale(' + (i === hi ? 1 : 0.96) + ')', transition: 'opacity .9s cubic-bezier(.22,1,.36,1), transform 1.1s cubic-bezier(.22,1,.36,1)' } }))));
    const ring = React.createElement('div', { style: { position: 'absolute', left: '50%', top: '50%', width: 'min(84vw,700px)', aspectRatio: '1', transform: 'translate(-50%,-50%)', pointerEvents: 'none' } },
      React.createElement('div', { style: { position: 'absolute', inset: 0, borderRadius: '50%', border: '1px dashed var(--line2)', animation: 'spin 90s linear infinite' } }),
      React.createElement('div', { style: { position: 'absolute', inset: '9%', borderRadius: '50%', border: '1px solid rgba(255,255,255,.07)' } }),
      React.createElement('div', { style: { position: 'absolute', inset: '9%', borderRadius: '50%', background: 'conic-gradient(from 0deg, rgba(237,28,36,0) 0 74%, rgba(237,28,36,.9) 100%)', WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))', mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))', animation: 'spin 16s linear infinite' } }),
      React.createElement('div', { style: { position: 'absolute', left: '50%', top: '-4px', width: '1px', height: '14px', background: 'rgba(255,255,255,.35)' } }),
      React.createElement('div', { style: { position: 'absolute', left: '50%', bottom: '-4px', width: '1px', height: '14px', background: 'rgba(255,255,255,.35)' } }),
      React.createElement('div', { style: { position: 'absolute', top: '50%', left: '-4px', height: '1px', width: '14px', background: 'rgba(255,255,255,.35)' } }),
      React.createElement('div', { style: { position: 'absolute', top: '50%', right: '-4px', height: '1px', width: '14px', background: 'rgba(255,255,255,.35)' } }));
    const mkRow = k => t.marquee.map((s, i) => React.createElement('span', { key: k + i, style: { display: 'inline-flex', alignItems: 'center', gap: '26px', paddingRight: '26px' } }, s, React.createElement('span', { style: { width: '9px', height: '9px', background: RED, transform: 'skewX(-15deg)', display: 'inline-block' } })));
    const fadeMask = { WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)' };
    const marquee = React.createElement('div', { style: { overflow: 'hidden', whiteSpace: 'nowrap', ...fadeMask } },
      React.createElement('div', { style: { display: 'inline-flex', width: 'max-content', animation: 'marquee 90s linear infinite', willChange: 'transform', fontFamily: mono, fontSize: '11px', fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)' } }, ...mkRow('a'), ...mkRow('b'), ...mkRow('c'), ...mkRow('d'), ...mkRow('e'), ...mkRow('f')));
    const playPulse = React.createElement('span', { style: { position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid rgba(237,28,36,.7)', animation: 'pulse 2.4s ease-out infinite' } });

    const mfrLabel = id => (MFRS.find(m => m.id === id) || {}).label || id || t.all;
    const nq = norm(st.q);
    const list = ENG.filter(e => (st.mfr === 'all' || e.mfr === st.mfr) && (!nq || [e.name, e.code, e.brand, mfrLabel(e.mfr), ...e.apps].some(x => norm(x).includes(nq))));
    const shown = e => e.price != null && (showAll || !!st.revealed[e.code]);
    const results = list.map(e => ({
      brand: e.brand, name: e.name, code: e.code, mfrLabel: mfrLabel(e.mfr), apps: e.apps.join(' · '), fuel: t[e.fuel], cc: e.cc + ' cm³', timing: t[e.timing],
      priceLabel: shown(e) ? this.fmtPrice(e.price) : (e.price == null && showAll ? t.priceTbd : t.onRequest),
      priceColor: shown(e) ? '#ed1c24' : 'var(--muted)',
      hasThumb: e.photos.length > 0, thumbEl: e.photos.length ? mkImg(e.photos[0], { position: 'absolute', right: '-4px', top: '52px', height: '150px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 18px 28px rgba(0,0,0,.6))', pointerEvents: 'none' }) : null,
      open: () => this.open(e.code),
    }));
    const mfrs = MFRS.map(m => ({ id: m.id, label: m.id === 'all' ? t.all : m.label, ...chip(st.mfr === m.id), on: () => this.setState({ mfr: m.id }) }));

    const se = st.sel ? ENG.find(e => e.code === st.sel) : null;
    let sel = {};
    if (se) {
      const revealing = st.revealing === se.code;
      const ai = se.photos.length ? st.angle % se.photos.length : 0;
      this._selN = se.photos.length;
      const isShown = shown(se) || revealing;
      sel = {
        title: `${se.brand} ${se.name} - ${se.code}`, apps: se.apps.join(' · '), code: se.code,
        fuel: t[se.fuel], cc: se.cc + ' cm³', timing: t[se.timing],
        hasPhotos: se.photos.length > 0, noPhotos: se.photos.length === 0,
        angles: se.photos.map((src, i) => ({ src, label: t.angles[ANGLE_KEYS[i]] || pad(i + 1), op: i === ai ? 1 : 0, sc: i === ai ? 1 : 0.94, bd: i === ai ? RED : 'var(--line)', on: () => this.setState({ angle: i }) })),
        angleLabel: `${pad(ai + 1)} / ${pad(se.photos.length)} · ${t.angles[ANGLE_KEYS[ai]] || ''}`,
        prev: () => this.turn(-1), next: () => this.turn(1),
        priceText: this.fmtPrice(revealing ? st.priceAnim : se.price),
        showPrice: isShown, showBtn: se.price != null && !isShown, noPrice: se.price == null,
        reveal: () => this.reveal(se.code),
        parts: ((se.parts && se.parts[lang] && se.parts[lang].length) ? se.parts[lang] : [...t.partsBefore, se.timing === 'chain' ? t.timingChain : t.timingBelt, ...t.partsAfter]).map(text => ({ text })),
      };
      sel.qrLink = location.origin + location.pathname + '#motor=' + encodeURIComponent(se.code);
      sel.qrEl = React.createElement('img', { src: 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=0&color=191919&data=' + encodeURIComponent(sel.qrLink), alt: 'QR', style: { width: '100%', height: '100%', display: 'block' } });
      sel.stageEl = React.createElement(React.Fragment, null, ...sel.angles.map((a, i) => React.createElement('img', { key: i, src: a.src, alt: a.label, style: { position: 'absolute', inset: '7%', width: '86%', height: '86%', objectFit: 'contain', filter: 'drop-shadow(0 34px 50px rgba(0,0,0,.65))', opacity: a.op, transform: 'scale(' + a.sc + ')', transition: 'opacity .5s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)' } })));
      sel.thumbsEl = React.createElement(React.Fragment, null, ...sel.angles.map((a, i) => React.createElement('button', { key: i, onClick: a.on, style: { width: '76px', height: '76px', borderRadius: '14px', padding: '8px', cursor: 'pointer', background: 'var(--bg2)', border: '1px solid ' + a.bd } }, React.createElement('img', { src: a.src, alt: a.label, style: { width: '100%', height: '100%', objectFit: 'contain', display: 'block' } }))));
    }

    const cover = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' };
    const mkZoom = (src, style, list) => React.createElement('img', { src, alt: '', onClick: e => { e.stopPropagation(); const l = list && list.length ? list : [src]; this.openLb(l, Math.max(0, l.indexOf(src))); }, style: { ...style, cursor: 'zoom-in' } });
    const galAll = (C.gallery && C.gallery.some(g => g && g.src)) ? C.gallery.filter(g => g && g.src).map(g => [g.id, g.cat, g.src]) : DEFAULT_GAL;
    const galF = galAll.filter(([, c]) => st.cat === 'all' || c === st.cat);
    const galList = galF.map(g => g[2]);
    const photos = galF.map(([id, c, src]) => ({ id, cat: t.cats[c] || c, photoEl: mkZoom(src, /engine-/.test(src) ? { ...cover, objectFit: 'contain', padding: '10%', background: 'radial-gradient(circle at 50% 55%,var(--bg3),var(--bg2) 72%)' } : cover, galList) }));
    const stepsRaw = C.steps ? C.steps.map(s => ({ t: (s[lang] || s.sr || {}).t || '', d: (s[lang] || s.sr || {}).d || '', photo: s.photo })) : t.steps;
    const stepList = stepsRaw.map(s => s.photo).filter(Boolean);
    const stepsArr = stepsRaw.map((s, i) => ({ id: 'step-' + pad(i + 1), idx: pad(i + 1), t: s.t, d: s.d, hasPhoto: !!s.photo, noPhoto: !s.photo, photoEl: s.photo ? mkZoom(s.photo, cover, stepList) : null }));
    while (this.nodeRefs.length < stepsArr.length) { this.nodeRefs.push(React.createRef()); this.clipRefs.push(React.createRef()); }
    const fmtLen = n => Math.floor(n / 60) + ':' + pad(Math.round(n % 60));
    const steps = stepsArr.map((s, i) => {
      const raw = stepsRaw[i] || {}, a = Math.max(1.5, toSec(TIMES[i] || '0:00')), b = Math.max(a + 4, TIMES[i + 1] ? toSec(TIMES[i + 1]) : a + 20);
      const own = !!raw.clip, clip = raw.clip || '', start = 0, end = Infinity;
      const vr = this.clipRefs[i];
      const clipEl = !own ? null : React.createElement('video', { ref: vr, src: clip, muted: true, playsInline: true, preload: 'metadata', 'aria-hidden': true, onTimeUpdate: e => { const v = e.target; if (end !== Infinity && v.currentTime >= end - 0.08) { v.currentTime = start; if (v.dataset.hover) v.play().catch(() => {}); } }, onPause: e => { const v = e.target; if (v.dataset.hover) setTimeout(() => { if (v.dataset.hover) { if (end !== Infinity && v.currentTime >= end - 0.2) v.currentTime = start; v.play().catch(() => {}); } }, 60); }, onEnded: e => { const v = e.target; v.currentTime = start; if (v.dataset.hover) v.play().catch(() => {}); }, style: { ...cover, pointerEvents: 'none', filter: 'saturate(.9)' } });
      return { ...s, mt: i % 2 ? '72px' : '0px', nl: i % 2 ? '-51px' : 'auto', nr: i % 2 ? 'auto' : '-51px', nodeRef: this.nodeRefs[i], clipEl, hasClip: own, len: t.clipHint, hint: own ? t.clipHover : '',
        hoverIn: () => { const v = vr.current; if (v) { v.dataset.hover = '1'; v.muted = true; v.play().catch(() => {}); } }, hoverOut: () => { const v = vr.current; if (v) { delete v.dataset.hover; v.pause(); try { v.currentTime = start; } catch (e) {} } },
        on: () => { if (own) this.setState({ lightbox: { video: clip } }); } };
    });
    const year = new Date().getFullYear(), yearly = +C.yearly || 1200, doy = (Date.now() - new Date(year, 0, 1).getTime()) / 31557600000, live = Math.max(1, Math.round(yearly * doy));
    const gearEl = React.createElement('svg', { viewBox: '0 0 30 30', width: 30, height: 30, style: { display: 'block' } }, React.createElement('circle', { cx: 15, cy: 15, r: 10, fill: 'none', stroke: 'currentColor', strokeWidth: 4, strokeDasharray: '3.6 3.6' }), React.createElement('circle', { cx: 15, cy: 15, r: 6.5, fill: 'none', stroke: 'currentColor', strokeWidth: 1.6 }), React.createElement('circle', { cx: 15, cy: 15, r: 2.2, fill: 'currentColor' }));
    const statsAll = [...t.stats, { n: live, suf: '', text: String(live), l: t.liveLbl.replace('{y}', year) }];
    const certs = t.certs.map((l, i) => { const url = (C.certs && C.certs[i] && C.certs[i].url) || ''; return { l, tag: /ISO/i.test(l) ? 'ISO' : 'A+', sub: url ? t.certPdf : t.certLbl, subColor: url ? RED : 'var(--faint)', href: url || undefined, target: url ? '_blank' : undefined, cursor: url ? 'pointer' : 'default' }; });
    const aboutSrc = C.aboutPhoto || '/assets/bg-workshop.png', tikiSrc = C.tikiPhoto || '/assets/tikivent-hero-poster.png';
    const aboutPhotoEl = mkZoom(aboutSrc, cover, [aboutSrc]), tikiPhotoEl = mkZoom(tikiSrc, cover, [tikiSrc]);
    const lb = st.lightbox, lbN = lb && lb.list ? lb.list.length : 0;
    const lightboxEl = lb && lb.video ? React.createElement('video', { key: lb.video, src: lb.video, controls: true, autoPlay: true, playsInline: true, onClick: e => e.stopPropagation(), style: { width: 'min(1200px,100%)', maxHeight: '100%', aspectRatio: '16/9', background: '#000', borderRadius: '14px', boxShadow: '0 40px 120px rgba(0,0,0,.7)', animation: 'sheetIn .45s cubic-bezier(.22,1,.36,1) both' } }) : lb ? React.createElement('img', { key: lb.i, src: lb.list[lb.i], alt: '', style: { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '14px', boxShadow: '0 40px 120px rgba(0,0,0,.7)', animation: 'sheetIn .45s cubic-bezier(.22,1,.36,1) both' } }) : null;
    const lbMulti = lbN > 1, lbCount = lb ? pad(lb.i + 1) + ' / ' + pad(lbN) : '';
    const glowEl = React.createElement('div', { ref: this.glowRef, style: { position: 'absolute', left: '55%', top: '5%', width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle,rgba(237,28,36,.16),transparent 60%)', pointerEvents: 'none', mixBlendMode: 'screen', transition: 'left 1.1s cubic-bezier(.22,1,.36,1),top 1.1s cubic-bezier(.22,1,.36,1)' } });
    const cats = Object.keys(t.cats).map(id => ({ id, label: t.cats[id], ...chip(st.cat === id), on: () => this.setState({ cat: id }) }));
    const videoUrl = this.props.videoUrl || (C.videoUrl === undefined ? DEFAULT_VIDEO : C.videoUrl) || '';
    const yt = videoUrl.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{6,})/);
    const poster = C.videoPoster || '/assets/video-poster-b.jpg';
    const chapsRaw = C.chapters ? C.chapters.map(c => ({ time: c.time, t: c[lang] || c.sr || '' })) : t.chapters.map((c, i) => ({ time: TIMES[i], t: c }));
    this._chapSecs = chapsRaw.map(c => toSec(c.time));
    const chapters = chapsRaw.map((c, i) => { const a = st.chap === i; return { time: c.time, t: c.t, on: () => this.seek(toSec(c.time)), bg: a ? RED : 'var(--bg2)', bd: a ? RED : 'var(--line)', fg: a ? '#fff' : 'var(--fg)', tc: a ? '#fff' : RED }; });
    const playBtn = React.createElement('span', { style: { position: 'relative', width: 104, height: 104, display: 'block' } }, playPulse, React.createElement('span', { style: { position: 'absolute', inset: 0, borderRadius: '50%', background: RED, boxShadow: '0 20px 50px rgba(237,28,36,.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 34, paddingLeft: 8 } }, '▶'));
    const videoEl = yt
      ? React.createElement('iframe', { key: 'yt' + st.ytStart, src: 'https://www.youtube.com/embed/' + yt[1] + '?rel=0' + (st.ytStart ? '&start=' + st.ytStart + '&autoplay=1' : ''), allow: 'autoplay; fullscreen; picture-in-picture', allowFullScreen: true, style: { display: 'block', width: '100%', aspectRatio: '16/9', border: 0, background: '#000' } })
      : React.createElement('div', { style: { position: 'relative', background: '#000' } },
        React.createElement('video', { ref: this.videoRef, controls: st.started, preload: 'metadata', src: videoUrl, poster, playsInline: true, onPlay: () => this.setState({ started: true }), onTimeUpdate: e => this.onTime(e.target.currentTime), style: { display: 'block', width: '100%', aspectRatio: '16/9', background: '#000' } }),
        st.started ? null : React.createElement('button', { onClick: () => this.playVideo(), 'aria-label': 'Play', style: { position: 'absolute', inset: 0, border: 0, cursor: 'pointer', background: 'linear-gradient(180deg,rgba(11,11,13,.05),rgba(11,11,13,.6))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22, color: '#fff' } },
          playBtn,
          React.createElement('span', { style: { fontFamily: mono, fontSize: 10.5, fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase' } }, t.videoMeta + ' · 8 ' + t.chaptersTitle)));
    const heroSrc = C.heroVideo === undefined ? DEFAULT_VIDEO : C.heroVideo;
    const heroVideo = heroSrc ? React.createElement('div', { style: { position: 'absolute', inset: 0, pointerEvents: 'none' } },
      React.createElement('video', { key: heroSrc, src: heroSrc, poster: C.videoPoster || '/assets/video-poster-b.jpg', autoPlay: true, muted: true, loop: true, playsInline: true, preload: 'auto', ref: el => { if (el) { el.muted = true; el.defaultMuted = true; if (el.paused) el.play().catch(() => {}); } }, style: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.72, filter: 'saturate(.85) contrast(1.05)' } }),
      React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(11,11,13,.82) 0%,rgba(11,11,13,.42) 50%,rgba(11,11,13,.15) 100%),linear-gradient(180deg,rgba(11,11,13,.12),rgba(11,11,13,.88))' } })) : null;
    const arc = p => { const [sx, sy] = HOME, dx = p.x - sx, dy = p.y - sy, dist = Math.hypot(dx, dy), cx = (sx + p.x) / 2, cy = Math.min(sy, p.y) - dist * 0.22; return 'M' + sx + ' ' + sy + ' Q' + cx + ' ' + cy + ' ' + p.x + ' ' + p.y; };
    const plate = (x, y, text, fs, anchor) => { const w = text.length * (fs * 0.6 + 3) + fs * 0.9, h = fs * 1.45; const rx = anchor === 'end' ? x - w : anchor === 'middle' ? x - w / 2 : x; return React.createElement('g', { key: 'pl' + x + y + text }, React.createElement('rect', { x: rx, y: y - h / 2, width: w, height: h, rx: fs * 0.32, ry: fs * 0.32, fill: 'rgba(237,28,36,.42)' }), React.createElement('text', { x: anchor === 'end' ? x - fs * 0.45 : anchor === 'middle' ? x : x + fs * 0.45, y: y + fs * 0.36, textAnchor: anchor, fill: '#fff', fontFamily: "'JetBrains Mono',monospace", fontSize: fs, fontWeight: 700, letterSpacing: 3 }, text)); };
    const mapEl = React.createElement('svg', { viewBox: '0 0 1538 768', preserveAspectRatio: 'xMidYMid meet', style: { position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' } },
      ...POINTS.map((p, i) => React.createElement('path', { key: 'g' + i, d: arc(p), fill: 'none', stroke: 'rgba(237,28,36,.18)', strokeWidth: 3, strokeLinecap: 'round' })),
      ...POINTS.map((p, i) => React.createElement('path', { key: 'a' + i, d: arc(p), fill: 'none', stroke: '#ed1c24', strokeWidth: 1.1, strokeLinecap: 'round', strokeDasharray: '8 12', style: { animation: 'dash ' + (5 + i * 0.7) + 's linear infinite' } })),
      ...POINTS.map((p, i) => React.createElement('circle', { key: 'c' + i, r: 5, fill: '#fff', style: { filter: 'drop-shadow(0 0 6px #ed1c24) drop-shadow(0 0 14px #ed1c24)' } }, React.createElement('animateMotion', { dur: (3.2 + i * 0.5) + 's', begin: (i * 0.45) + 's', repeatCount: 'indefinite', path: arc(p), keyPoints: '0;1', keyTimes: '0;1', calcMode: 'linear' }))),
      ...POINTS.map((p, i) => React.createElement('circle', { key: 'c2' + i, r: 3, fill: 'rgba(255,255,255,.7)' }, React.createElement('animateMotion', { dur: (3.2 + i * 0.5) + 's', begin: (i * 0.45 + 0.18) + 's', repeatCount: 'indefinite', path: arc(p) }))),
      ...POINTS.map((p, i) => React.createElement('g', { key: 'p' + i }, React.createElement('circle', { cx: p.x, cy: p.y, r: 7, fill: 'rgba(237,28,36,.55)', style: { transformBox: 'fill-box', transformOrigin: 'center', animation: 'ping 2.6s ease-out ' + (i * 0.35) + 's infinite' } }), React.createElement('circle', { cx: p.x, cy: p.y, r: 6, fill: '#ed1c24', stroke: 'var(--bg)', strokeWidth: 2 }), (Math.abs(p.x - HOME[0]) > 300 ? plate(p.x > 900 ? p.x - 22 : p.x + 22, p.y, (p[lang] || p.sr).toUpperCase(), 30, p.x > 900 ? 'end' : 'start') : null))),
      React.createElement('circle', { cx: HOME[0], cy: HOME[1], r: 16, fill: 'rgba(237,28,36,.35)', style: { transformBox: 'fill-box', transformOrigin: 'center', animation: 'ping 2.2s ease-out infinite' } }),
      React.createElement('circle', { cx: HOME[0], cy: HOME[1], r: 9, fill: '#fff', stroke: '#ed1c24', strokeWidth: 4 }),
      plate(HOME[0] + 30, HOME[1] - 30, lang === 'en' ? 'SERBIA · MR' : 'SRBIJA · MR', 32, 'start'),
      plate(700, 420, lang === 'en' ? 'PORTUGAL · SPAIN · FRANCE · GERMANY · ITALY' : 'PORTUGAL · ŠPANIJA · FRANCUSKA · NEMAČKA · ITALIJA', 24, 'middle'));
    const brandList = C.brands === undefined || C.brands === '' ? Array.from({ length: 21 }, (_, i) => '/assets/brands/brand-' + pad(i + 1) + '.png') : String(C.brands).split(/[\n,;]+/).map(s => s.trim()).filter(Boolean);
    const isImg = b => /\.(png|svg|jpe?g|webp)(\?|$)|^data:image/i.test(b);
    const brandRow = k => brandList.map((b, i) => React.createElement('span', { key: k + i, style: { display: 'inline-flex', alignItems: 'center', gap: '40px', paddingRight: '40px', fontFamily: 'Figtree,system-ui,sans-serif', fontSize: '26px', fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)' } }, isImg(b) ? React.createElement('img', { src: b, alt: '', style: { height: '44px', width: 'auto', maxWidth: '200px', objectFit: 'contain', display: 'block', opacity: .92 } }) : b, React.createElement('span', { style: { width: '8px', height: '8px', background: 'var(--line2)', transform: 'skewX(-15deg)', display: 'inline-block' } })));
    const brandsEl = brandList.length ? React.createElement('div', { style: { overflow: 'hidden', whiteSpace: 'nowrap', ...fadeMask } }, React.createElement('div', { style: { display: 'inline-flex', width: 'max-content', animation: 'marquee ' + Math.max(40, brandList.length * 5) + 's linear infinite', willChange: 'transform' } }, ...brandRow('a'), ...brandRow('b'), ...brandRow('c'), ...brandRow('d'))) : null;

    const themeIcon = this.state.theme === 'dark'
      ? React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, React.createElement('circle', { cx: 12, cy: 12, r: 4 }), React.createElement('path', { d: 'M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' }))
      : React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, React.createElement('path', { d: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z' }));
    return {
      toggleTheme: () => this.toggleTheme(), themeIcon,
      t, nav, hero, ring, marquee, playPulse,
      slabRef: this.slabRef, headerRef: this.headerRef, navRef: this.navRef, tlRef: this.tlRef, tlFillRef: this.tlFillRef,
      goTop: () => window.scrollTo({ top: 0, behavior: 'smooth' }), goCatalog: () => this.go('katalog'), goProcess: () => this.go('procesi'),
      setSr: () => this.setLang('sr'), setEn: () => this.setLang('en'),
      srBg: lang === 'sr' ? RED : 'transparent', srFg: lang === 'sr' ? '#fff' : 'var(--muted)', enBg: lang === 'en' ? RED : 'transparent', enFg: lang === 'en' ? '#fff' : 'var(--muted)',
      trust: t.trust.map(l => ({ l })), stats: statsAll, certs,
      q: st.q, onQuery: e => this.setState({ q: e.target.value }), clearQ: () => this.setState({ q: '' }), hasQ: !!st.q,
      mfrs, results, hasResults: results.length > 0, noResults: results.length === 0,
      meta: `${list.length} ${t.enginesWord} · ${st.mfr === 'all' ? t.all : mfrLabel(st.mfr)}`,
      hasSel: !!se, sel, closeSel: () => this.close(),
      heroVideo, videoEl, mapEl, mapPoints: POINTS.map(p => ({ l: p[lang] || p.sr })), hasBrands: brandList.length > 0, brandsEl,
      warranty: t.warranty.map(text => ({ text })),
      steps,
      hasLightbox: !!st.lightbox, lightboxEl, lbMulti, lbCount, lbPrev: e => this.lbStep(-1, e), lbNext: e => this.lbStep(1, e), closeLightbox: () => this.setState({ lightbox: null }),
      chapters,
      videoUrl, hasVideo: !!videoUrl, noVideo: !videoUrl,
      booksUrl: C.booksUrl || this.props.booksUrl || 'https://mrengines-app.rs/kontrolna-tabla',
      gearEl, photos, cats, galEmpty: photos.length === 0, aboutPhotoEl, tikiPhotoEl, glowEl, onHeroMove: e => this.onHeroMove(e),
    };
  }
}

// ───────────────────────────── Prikaz ─────────────────────────────
export const pageHead = {
  "meta": [
    {
      "title": "MR Engines · Remont motora"
    },
    {
      "name": "description",
      "content": "MR Engines - remont motora po fabričkim standardima, mašinska obrada, auto servis i turbo remont. Beograd, od 1968."
    },
    {
      "property": "og:type",
      "content": "website"
    },
    {
      "property": "og:title",
      "content": "MR Engines · Remont motora"
    },
    {
      "property": "og:description",
      "content": "Remont motora po fabričkim standardima. Tri generacije, jedna porodica. Od 1968."
    },
    {
      "name": "theme-color",
      "content": "#0b0b0d"
    }
  ],
  "links": [
    {
      "rel": "icon",
      "type": "image/png",
      "href": "/assets/mr-mark.png"
    },
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

const PSEUDO_CSS = ".mrp0:hover{color:var(--fg) !important}\n.mrp1:hover{border-color:#ed1c24 !important;color:var(--red2) !important}\n.mrp2:hover{background:#ed1c24 !important}\n.mrp3:active{transform:skewX(-15deg) scale(.96) !important}\n.mrp4:hover{border-color:#ed1c24 !important;color:#ed1c24 !important}\n.mrp5:hover{color:#ed1c24 !important}\n.mrp6:hover{border-color:#ed1c24 !important}\n.mrp7:active{transform:scale(.96) !important}\n.mrp8:hover{border-color:rgba(237,28,36,.6) !important;transform:translateY(-4px) !important;box-shadow:0 28px 60px -28px rgba(237,28,36,.45) !important}\n.mrp9:active{transform:scale(.98) !important}\n.mrpa:hover{border-color:rgba(237,28,36,.5) !important;transform:translateY(-4px) !important}\n.mrpb:hover{background:#c8141b !important;color:#fff !important}\n.mrpc:hover{border-color:rgba(237,28,36,.5) !important;transform:translateY(-3px) !important;color:var(--fg) !important}\n.mrpd:hover{background:var(--fg) !important;color:#191919 !important;transform:skewX(-15deg) translateY(-2px) !important}\n.mrpe:hover{transform:scale(1.02) !important;border-color:rgba(237,28,36,.5) !important}\n.mrpf:hover{border-color:#ed1c24 !important;color:var(--fg) !important}"

const PAGE_CSS = "\n:root{--bg:#f4f4f5;--bg2:#ffffff;--bg3:#ebebed;--fg:#17171a;--muted:#5c5d63;--muted2:#3c3d41;--faint:#8a8b90;--line:rgba(20,20,25,.1);--line2:rgba(20,20,25,.22);--fill:rgba(20,20,25,.045);--grid:rgba(20,20,25,.05);--red2:#c8141b;--glass:rgba(244,244,245,.86);--overlay:rgba(244,244,245,.94);--slab:.14;--on-dark:none;--on-light:block;color-scheme:light}\n:root[data-theme=\"dark\"],[data-tone=\"ink\"]{--bg:#0b0b0d;--bg2:#131316;--bg3:#1a1a1f;--fg:#f2f2f3;--muted:#9c9da3;--muted2:#c8c9cc;--faint:#6b6c72;--line:rgba(255,255,255,.09);--line2:rgba(255,255,255,.18);--fill:rgba(255,255,255,.05);--grid:rgba(255,255,255,.035);--red2:#ff4b52;--glass:rgba(11,11,13,.84);--overlay:rgba(8,8,10,.94);--slab:.35;--on-dark:block;--on-light:none}\n:root[data-theme=\"dark\"]{color-scheme:dark;--bg:#0f0f13;--bg2:#17171c}\n:root[data-theme=\"dark\"] [data-tone=\"ink\"]{--bg:#0b0b0d;--bg2:#131316}\n[data-tone]{color:var(--fg)}\n[data-tone=\"paper\"]{--bg:#ffffff;--bg2:#f4f4f5}\n[data-tone=\"paper3\"]{--bg:#ebebed;--bg2:#ffffff}\n:root[data-theme=\"dark\"] [data-tone=\"paper\"]{--bg:#15151a;--bg2:#1c1c22;--bg3:#23232a}\n:root[data-theme=\"dark\"] [data-tone=\"paper3\"]{--bg:#0c0c0f;--bg2:#141419;--bg3:#1b1b21}\n*{box-sizing:border-box}\nhtml{scroll-behavior:smooth}\nbody{margin:0;background:var(--bg);color:var(--fg);font-family:Figtree,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}\nbody::before{content:'';position:fixed;inset:0;z-index:9999;pointer-events:none;opacity:.055;mix-blend-mode:overlay;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E\")}\na{color:#ed1c24;text-decoration:none}a:hover{color:var(--fg)}\nbutton,input{font-family:inherit}\ninput::placeholder{color:var(--muted);opacity:.75}\ninput:focus{outline:none;border-color:#ed1c24 !important;box-shadow:0 0 0 3px rgba(237,28,36,.18)}\n::selection{background:rgba(237,28,36,.4)}\n[data-rv]{opacity:0;transform:translateY(28px);transition:opacity .9s cubic-bezier(.22,1,.36,1),transform .9s cubic-bezier(.22,1,.36,1)}\n[data-rv=\"in\"]{opacity:1;transform:none}\n@keyframes lineUp{from{transform:translateY(110%);opacity:0}to{transform:none;opacity:1}}\n@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}\n@keyframes tagIn{from{opacity:0;transform:translateY(14px) scale(.9)}to{opacity:1;transform:none}}\n@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}\n@keyframes spin{to{transform:rotate(360deg)}}\n@keyframes marquee{to{transform:translateX(-50%)}}\n@keyframes pulse{0%{transform:scale(1);opacity:.75}100%{transform:scale(1.8);opacity:0}}\n@keyframes sheetIn{from{opacity:0;transform:translateY(28px) scale(.985)}to{opacity:1;transform:none}}\n@keyframes fadeIn{from{opacity:0}to{opacity:1}}\n@keyframes dash{to{stroke-dashoffset:-320}}\n@keyframes ping{0%{transform:scale(1);opacity:.7}100%{transform:scale(3.6);opacity:0}}\n@media (min-width:1101px){[data-stats]{grid-template-columns:repeat(5,minmax(0,1fr)) !important}}\n@media (max-width:1100px) and (min-width:641px){[data-stats]{grid-template-columns:repeat(3,minmax(0,1fr)) !important}[data-stat]:last-child{grid-column:span 2}}\n@media (max-width:640px){[data-stats]{grid-template-columns:repeat(2,minmax(0,1fr)) !important}[data-stat]:last-child{grid-column:span 2}}\n[data-clamp]{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}[data-clamp=\"1\"]{-webkit-line-clamp:1}[data-clamp=\"2\"]{-webkit-line-clamp:2}[data-clamp=\"3\"]{-webkit-line-clamp:3}h1,h2,h3{overflow-wrap:anywhere}\n@media (max-width:820px){[data-tl-grid]{grid-template-columns:minmax(0,1fr) !important;padding-left:40px}[data-tl-line]{left:20px !important}[data-tl-card]{margin-top:0 !important}[data-tl-node]{left:-35px !important;right:auto !important}}\n@media (prefers-reduced-motion:reduce){[data-rv]{opacity:1;transform:none;transition:none}*{animation-duration:.01ms !important;animation-iteration-count:1 !important}}\n"

function view(v) {
  return (
    <>
      <style>{PSEUDO_CSS}</style>
      <style>{PAGE_CSS}</style>
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)", fontFamily: "Figtree,system-ui,sans-serif", overflowX: "clip" }}>
        {" "}
        <header data-tone={"ink"} ref={v.headerRef} style={{ position: "sticky", top: "0", zIndex: "60", marginBottom: "-72px", background: "transparent", borderBottom: "1px solid transparent", transition: "background .35s,border-color .35s,backdrop-filter .35s" }}>
          {" "}
          <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(16px,3vw,32px)", height: "72px", display: "flex", alignItems: "center", gap: "18px" }}>
            {" "}
            <button onClick={v.goTop} style={{ display: "flex", alignItems: "center", gap: "12px", background: "transparent", border: "0", padding: "0", cursor: "pointer", flex: "none" }}>
              {" "}
              <img src={"/assets/logo-crest-white-1200.png"} alt={"MR Engines"} style={{ height: "46px", width: "auto", display: "var(--on-dark)" }} />
              <img src={"/assets/logo-crest-dark-1200.png"} alt={"MR Engines"} style={{ height: "46px", width: "auto", display: "var(--on-light)" }} />
              {" "}
            </button>
            {" "}
            <nav ref={v.navRef} style={{ display: "flex", gap: "2px", flex: "1", minWidth: "0", overflowX: "auto", scrollbarWidth: "none", justifyContent: "safe center", padding: "0 18px", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 18px,#000 calc(100% - 28px),transparent)", maskImage: "linear-gradient(90deg,transparent,#000 18px,#000 calc(100% - 28px),transparent)" }}>
              {" "}
              {__arr(v.nav).map(($n, $i0) => (
                <React.Fragment key={$i0}>
                  {" "}
                  <button onClick={$n?.go} data-nav={$n?.id} style={__css(`height:44px;padding:0 clamp(9px,1.2vw,14px);background:transparent;border:0;cursor:pointer;white-space:nowrap;font-family:Figtree,system-ui,sans-serif;font-size:12px;font-weight:700;letter-spacing:.11em;text-transform:uppercase;color:${$n?.color ?? ""};box-shadow:inset 0 -2px 0 ${$n?.line ?? ""};transition:color .15s`)} className={"mrp0"}>
                    {__t($n?.label)}
                  </button>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
            </nav>
            {" "}
            <div style={{ display: "flex", border: "1px solid var(--line2)", borderRadius: "8px", overflow: "hidden", flex: "none" }}>
              {" "}
              <button onClick={v.setSr} style={__css(`height:36px;min-width:44px;padding:0 12px;border:0;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:600;letter-spacing:.08em;background:${v.srBg ?? ""};color:${v.srFg ?? ""};transition:background .15s,color .15s`)}>
                SR
              </button>
              {" "}
              <button onClick={v.setEn} style={__css(`height:36px;min-width:44px;padding:0 12px;border:0;border-left:1px solid var(--line);cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:600;letter-spacing:.08em;background:${v.enBg ?? ""};color:${v.enFg ?? ""};transition:background .15s,color .15s`)}>
                EN
              </button>
              {" "}
            </div>
            {" "}
            <button onClick={v.toggleTheme} aria-label={"Tema"} style={{ flex: "none", width: "38px", height: "38px", borderRadius: "8px", border: "1px solid var(--line2)", background: "transparent", color: "var(--fg)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color .15s,color .15s" }} className={"mrp1"}>
              {__t(v.themeIcon)}
            </button>
            {" "}
          </div>
          {" "}
        </header>
        {" "}
        <main>
          {" "}
          <section data-tone={"ink"} data-screen-label={"Hero"} onMouseMove={v.onHeroMove} style={{ position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 70% 40%,rgba(237,28,36,.14),transparent 55%),var(--bg)" }}>
            {" "}
            {__t(v.heroVideo)}
            {" "}
            {__t(v.glowEl)}
            {" "}
            <div style={{ position: "absolute", inset: "0", pointerEvents: "none", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "56px 56px", WebkitMaskImage: "radial-gradient(ellipse at 60% 50%,#000 30%,transparent 75%)", maskImage: "radial-gradient(ellipse at 60% 50%,#000 30%,transparent 75%)" }}></div>
            {" "}
            <div ref={v.slabRef} style={{ position: "absolute", top: "-12%", bottom: "-12%", right: "14%", width: "clamp(110px,13vw,210px)", background: "linear-gradient(180deg,#ed1c24 0%,#ed1c24 35%,#8e0f16 100%)", transform: "skewX(-15deg)", opacity: ".95", pointerEvents: "none", boxShadow: "0 0 120px rgba(237,28,36,.35)" }}></div>
            {" "}
            <div style={{ position: "absolute", top: "-12%", bottom: "-12%", right: "calc(14% + clamp(130px,15vw,240px))", width: "clamp(40px,4vw,70px)", background: "#17171b", transform: "skewX(-15deg)", pointerEvents: "none" }}></div>
            {" "}
            <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", padding: "calc(72px + clamp(24px,4vw,56px)) clamp(16px,3vw,32px) 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "24px", alignItems: "center", minHeight: "calc(100vh - 56px)" }}>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "26px", padding: "24px 0 48px" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#ed1c24", animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) .05s both" }}>
                  <span style={{ width: "30px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                  {__t(v.t?.heroEyebrow)}
                </div>
                {" "}
                <h1 style={{ margin: "0", fontSize: "clamp(46px,6.6vw,98px)", fontWeight: "800", lineHeight: ".96", letterSpacing: "-.04em", textWrap: "balance" }}>
                  {" "}
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".06em" }}>
                    <span style={{ display: "block", animation: "lineUp .9s cubic-bezier(.22,1,.36,1) .15s both" }}>
                      {__t(v.t?.heroL1)}
                    </span>
                  </span>
                  {" "}
                  <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
                    <span style={{ display: "block", color: "#ed1c24", animation: "lineUp .9s cubic-bezier(.22,1,.36,1) .3s both" }}>
                      {__t(v.t?.heroL2)}
                    </span>
                  </span>
                  {" "}
                </h1>
                {" "}
                <p style={{ margin: "0", maxWidth: "52ch", fontSize: "clamp(16px,1.35vw,19px)", lineHeight: "1.55", color: "var(--muted2)", textWrap: "pretty", animation: "fadeUp .9s cubic-bezier(.22,1,.36,1) .5s both" }}>
                  {__t(v.t?.heroSub)}
                </p>
                {" "}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", paddingLeft: "8px", animation: "fadeUp .9s cubic-bezier(.22,1,.36,1) .65s both" }}>
                  {" "}
                  <button onClick={v.goCatalog} style={{ height: "54px", padding: "0 28px", border: "0", cursor: "pointer", background: "#ed1c24", color: "#fff", transform: "skewX(-15deg)", boxShadow: "0 16px 40px rgba(237,28,36,.32)", transition: "background .15s,box-shadow .15s,transform .15s" }} className={"mrp2 mrp3"}>
                    <span style={{ display: "inline-block", transform: "skewX(15deg)", fontFamily: "Figtree,system-ui,sans-serif", fontSize: "13px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                      {__t(v.t?.ctaCatalog)}
                      {" →"}
                    </span>
                  </button>
                  {" "}
                  <button onClick={v.goProcess} data-tone={"ink"} style={{ height: "54px", padding: "0 26px", cursor: "pointer", background: "rgba(19,19,22,.7)", border: "1px solid var(--line2)", color: "var(--fg)", transform: "skewX(-15deg)", transition: "border-color .15s,color .15s,transform .15s" }} className={"mrp4 mrp3"}>
                    <span style={{ display: "inline-block", transform: "skewX(15deg)", fontFamily: "Figtree,system-ui,sans-serif", fontSize: "13px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                      {__t(v.t?.ctaProcess)}
                    </span>
                  </button>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 26px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)", animation: "fadeUp .9s cubic-bezier(.22,1,.36,1) .8s both" }}>
                  {" "}
                  {__arr(v.trust).map(($x, $i0) => (
                    <React.Fragment key={$i0}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ed1c24" }}></span>
                        {__t($x?.l)}
                      </span>
                    </React.Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ position: "relative", minHeight: "min(78vh,760px)", animation: "fadeIn 1.2s ease-out .2s both" }}>
                {" "}
                {__t(v.ring)}
                {" "}
                {__t(v.hero)}
                {" "}
                <div style={{ position: "absolute", left: "2%", top: "12%", animation: "tagIn .8s cubic-bezier(.22,1,.36,1) 1.1s both" }}>
                  <span data-tone={"ink"} style={{ display: "inline-block", padding: "11px 16px", background: "rgba(19,19,22,.9)", border: "1px solid var(--line)", transform: "skewX(-15deg)", backdropFilter: "blur(8px)" }}>
                    <span style={{ display: "inline-block", transform: "skewX(15deg)", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "#ed1c24" }}>
                      {__t(v.t?.tag1)}
                    </span>
                  </span>
                </div>
                {" "}
                <div style={{ position: "absolute", right: "0", top: "44%", animation: "tagIn .8s cubic-bezier(.22,1,.36,1) 1.3s both" }}>
                  <span data-tone={"ink"} style={{ display: "inline-block", padding: "11px 16px", background: "rgba(19,19,22,.9)", border: "1px solid var(--line)", transform: "skewX(-15deg)", backdropFilter: "blur(8px)" }}>
                    <span style={{ display: "inline-block", transform: "skewX(15deg)", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--fg)" }}>
                      {__t(v.t?.tag2)}
                    </span>
                  </span>
                </div>
                {" "}
                <div style={{ position: "absolute", left: "6%", bottom: "10%", animation: "tagIn .8s cubic-bezier(.22,1,.36,1) 1.5s both" }}>
                  <span data-tone={"ink"} style={{ display: "inline-block", padding: "11px 16px", background: "rgba(19,19,22,.9)", border: "1px solid var(--line)", transform: "skewX(-15deg)", backdropFilter: "blur(8px)" }}>
                    <span style={{ display: "inline-block", transform: "skewX(15deg)", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--fg)" }}>
                      {__t(v.t?.tag3)}
                    </span>
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div data-tone={"ink"} style={{ position: "relative", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "rgba(11,11,13,.6)", padding: "16px 0" }}>
              {__t(v.marquee)}
            </div>
            {" "}
          </section>
          {" "}
          <section style={{ position: "relative", zIndex: "2", marginTop: "-52px", padding: "0 clamp(16px,4vw,48px)" }}>
            {" "}
            <div data-tone={"ink"} data-rv={"1"} data-stats={"1"} style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", background: "#101013", boxShadow: "0 30px 60px -30px rgba(20,20,25,.45)", border: "1px solid rgba(255,255,255,.08)", borderRadius: "22px", overflow: "hidden" }}>
              {" "}
              {__arr(v.stats).map(($s, $i0) => (
                <React.Fragment key={$i0}>
                  {" "}
                  <div data-stat={"1"} style={{ padding: "32px 30px 30px", borderRight: "1px solid var(--fill)", borderBottom: "1px solid var(--fill)", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {" "}
                    <span data-count={$s?.n} data-suffix={$s?.suf} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(46px,5vw,68px)", fontWeight: "700", letterSpacing: "-.05em", lineHeight: "1", fontVariantNumeric: "tabular-nums" }}>
                      {__t($s?.text)}
                    </span>
                    {" "}
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted)" }}>
                      {__t($s?.l)}
                    </span>
                    {" "}
                  </div>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section id={"katalog"} data-spy={"1"} data-screen-label={"Katalog"} style={{ position: "relative", padding: "clamp(56px,7vw,96px) clamp(16px,4vw,48px) clamp(72px,9vw,128px)", scrollMarginTop: "76px", background: "var(--bg)", color: "var(--fg)", overflow: "hidden", isolation: "isolate" }}>
            {" "}
            <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px" }}>
              {" "}
              <div data-rv={"1"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "24px", alignItems: "end" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#ed1c24" }}>
                    <span style={{ width: "30px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                    {"01 · "}
                    {__t(v.t?.catEyebrow)}
                  </div>
                  {" "}
                  <h2 style={{ margin: "0", fontSize: "clamp(36px,4.8vw,64px)", fontWeight: "800", letterSpacing: "-.035em", lineHeight: ".98", textWrap: "balance" }}>
                    {__t(v.t?.catTitle)}
                  </h2>
                  {" "}
                </div>
                {" "}
                <p style={{ margin: "0", maxWidth: "52ch", fontSize: "16px", lineHeight: "1.55", color: "var(--muted)", textWrap: "pretty" }}>
                  {__t(v.t?.catSub)}
                </p>
                {" "}
              </div>
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexDirection: "column", gap: "14px", transitionDelay: ".1s" }}>
                {" "}
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  {" "}
                  <span style={{ position: "absolute", left: "18px", width: "10px", height: "10px", border: "2px solid #ed1c24", borderRadius: "50%", pointerEvents: "none" }}></span>
                  {" "}
                  <input value={__dv(v.q)} onChange={v.onQuery} placeholder={v.t?.searchPh} style={{ width: "100%", height: "60px", padding: "0 56px 0 44px", borderRadius: "14px", background: "var(--fill)", border: "1px solid var(--line2)", color: "var(--fg)", fontSize: "17px", fontFamily: "'JetBrains Mono',monospace", transition: "border-color .15s,box-shadow .15s" }} />
                  {" "}
                  {v.hasQ ? (
                    <>
                      {" "}
                      <button onClick={v.clearQ} style={{ position: "absolute", right: "10px", width: "40px", height: "40px", borderRadius: "10px", border: "0", background: "var(--fill)", color: "var(--muted)", cursor: "pointer", fontSize: "14px" }} className={"mrp5"}>
                        ✕
                      </button>
                      {" "}
                    </>
                  ) : null}
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {" "}
                  {__arr(v.mfrs).map(($m, $i0) => (
                    <React.Fragment key={$i0}>
                      {" "}
                      <button onClick={$m?.on} style={__css(`height:42px;padding:0 18px;border-radius:999px;cursor:pointer;font-family:Figtree,system-ui,sans-serif;font-size:13px;font-weight:600;background:${$m?.bg ?? ""};border:1px solid ${$m?.bd ?? ""};color:${$m?.fg ?? ""};transition:background .15s,border-color .15s,color .15s,transform .15s`)} className={"mrp6 mrp7"}>
                        {__t($m?.label)}
                      </button>
                      {" "}
                    </React.Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--faint)" }}>
                  {__t(v.meta)}
                </div>
                {" "}
              </div>
              {" "}
              {v.hasResults ? (
                <>
                  {" "}
                  <div data-rv={"1"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,300px),1fr))", gap: "16px", transitionDelay: ".15s" }}>
                    {" "}
                    {__arr(v.results).map(($e, $i0) => (
                      <React.Fragment key={$i0}>
                        {" "}
                        <button onClick={$e?.open} style={{ position: "relative", overflow: "hidden", textAlign: "left", display: "flex", flexDirection: "column", gap: "10px", minHeight: "264px", padding: "22px 22px 20px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "20px", cursor: "pointer", color: "var(--fg)", fontFamily: "Figtree,system-ui,sans-serif", transition: "transform .4s cubic-bezier(.22,1,.36,1),border-color .2s,background .2s" }} className={"mrp8 mrp9"}>
                          {" "}
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                            {" "}
                            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {__t($e?.mfrLabel)}
                            </span>
                            {" "}
                            <span style={{ flex: "none", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase", padding: "5px 10px", borderRadius: "999px", background: "var(--fill)", color: "var(--muted2)" }}>
                              {__t($e?.fuel)}
                            </span>
                            {" "}
                          </div>
                          {" "}
                          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(32px,3vw,42px)", fontWeight: "700", letterSpacing: "-.04em", lineHeight: "1", marginTop: "6px" }}>
                            {__t($e?.code)}
                          </div>
                          {" "}
                          <div style={{ fontSize: "20px", fontWeight: "800", letterSpacing: "-.015em", lineHeight: "1.1" }}>
                            {__t($e?.brand)}
                            {" "}
                            {__t($e?.name)}
                          </div>
                          {" "}
                          <div style={{ fontSize: "13px", lineHeight: "1.5", color: "var(--muted)", textWrap: "pretty", maxWidth: "62%" }}>
                            {__t($e?.apps)}
                          </div>
                          {" "}
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginTop: "auto", paddingTop: "14px", borderTop: "1px solid var(--line)" }}>
                            {" "}
                            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "var(--muted)" }}>
                              {__t($e?.cc)}
                              {" · "}
                              {__t($e?.timing)}
                            </span>
                            {" "}
                            <span style={__css(`font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${$e?.priceColor ?? ""}`)}>
                              {__t($e?.priceLabel)}
                            </span>
                            {" "}
                          </div>
                          {" "}
                          {$e?.hasThumb ? (
                            <>
                              {" "}
                              {__t($e?.thumbEl)}
                              {" "}
                            </>
                          ) : null}
                          {" "}
                        </button>
                        {" "}
                      </React.Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                </>
              ) : null}
              {" "}
              {v.noResults ? (
                <>
                  {" "}
                  <div style={{ padding: "56px 24px", border: "1px dashed var(--line2)", borderRadius: "20px", textAlign: "center", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {" "}
                    <div style={{ fontSize: "22px", fontWeight: "800" }}>
                      {__t(v.t?.noResults)}
                    </div>
                    {" "}
                    <div style={{ fontSize: "14px", color: "var(--muted)" }}>
                      {__t(v.t?.noResultsHint)}
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
          <section data-tone={"ink"} id={"procesi"} data-spy={"1"} data-screen-label={"Procesi"} style={{ position: "relative", padding: "clamp(72px,9vw,128px) 0", scrollMarginTop: "76px", background: "var(--bg)", color: "var(--fg)", overflow: "hidden", isolation: "isolate" }}>
            <div style={{ position: "absolute", inset: "0", zIndex: "-1", pointerEvents: "none", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "56px 56px", WebkitMaskImage: "linear-gradient(#000,transparent 60%)", maskImage: "linear-gradient(#000,transparent 60%)" }}></div>
            {" "}
            <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(16px,4vw,48px)", display: "flex", flexDirection: "column", gap: "28px" }}>
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: "24px" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#ed1c24" }}>
                    <span style={{ width: "30px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                    {"02 · "}
                    {__t(v.t?.procEyebrow)}
                  </div>
                  {" "}
                  <h2 style={{ margin: "0", fontSize: "clamp(36px,4.8vw,64px)", fontWeight: "800", letterSpacing: "-.035em", lineHeight: ".98", textWrap: "balance" }}>
                    {__t(v.t?.procTitle)}
                  </h2>
                  {" "}
                  <p style={{ margin: "0", maxWidth: "52ch", fontSize: "16px", lineHeight: "1.55", color: "var(--muted)", textWrap: "pretty" }}>
                    {__t(v.t?.procSub)}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div data-timeline={"1"} style={{ maxWidth: "1320px", margin: "0 auto", padding: "40px clamp(16px,4vw,48px) 0" }}>
              {" "}
              <div ref={v.tlRef} data-tl-grid={"1"} style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", columnGap: "72px", rowGap: "20px", alignItems: "start" }}>
                {" "}
                <div data-tl-line={"1"} style={{ position: "absolute", top: "0", bottom: "0", left: "50%", width: "2px", marginLeft: "-1px", background: "var(--line)", pointerEvents: "none" }}></div>
                {" "}
                <div ref={v.tlFillRef} data-tl-line={"1"} style={{ position: "absolute", top: "0", left: "50%", width: "2px", marginLeft: "-1px", height: "0%", background: "linear-gradient(180deg,#ed1c24,#ff4b52)", boxShadow: "0 0 18px rgba(237,28,36,.55)", pointerEvents: "none" }}></div>
                {" "}
                {__arr(v.steps).map(($s, $i0) => (
                  <React.Fragment key={$i0}>
                    {" "}
                    <button onClick={$s?.on} onPointerEnter={$s?.hoverIn} onPointerLeave={$s?.hoverOut} data-tl-card={"1"} data-rv={"1"} style={__css(`position:relative;margin-top:${$s?.mt ?? ""};text-align:left;display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);background:var(--bg2);border:1px solid var(--line);border-radius:20px;cursor:pointer;padding:0;color:var(--fg);font-family:Figtree,system-ui,sans-serif;transition:border-color .2s,transform .4s cubic-bezier(.22,1,.36,1)`)} className={"mrpa"}>
                      {" "}
                      <span ref={$s?.nodeRef} data-tl-node={"1"} style={__css(`position:absolute;top:18px;left:${$s?.nl ?? ""};right:${$s?.nr ?? ""};width:30px;height:30px;display:flex;color:var(--line2);background:var(--bg);border-radius:50%;z-index:1;transition:transform 1.2s cubic-bezier(.22,1,.36,1),color .35s,filter .35s`)}>
                        {__t(v.gearEl)}
                      </span>
                      {" "}
                      <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "19px 0 0 19px", overflow: "hidden", background: "var(--bg)", borderRight: "1px solid var(--line)" }}>
                        {" "}
                        {$s?.noPhoto ? (
                          <>
                            <div style={{ position: "absolute", inset: "0", background: "radial-gradient(ellipse at 50% 60%,rgba(237,28,36,.14),transparent 60%),linear-gradient(135deg,var(--bg3),var(--bg2))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <img src={"/assets/mr-mark.png"} alt={""} style={{ height: "40%", width: "auto", opacity: ".16", filter: "grayscale(1)" }} />
                            </div>
                          </>
                        ) : null}
                        {$s?.hasPhoto ? (
                          <>
                            {__t($s?.photoEl)}
                          </>
                        ) : null}
                        {" "}
                        {__t($s?.clipEl)}
                        {" "}
                        {$s?.hasClip ? (
                          <>
                            <span style={{ position: "absolute", right: "12px", bottom: "10px", pointerEvents: "none", display: "inline-flex", alignItems: "center", gap: "8px", height: "30px", padding: "0 12px", borderRadius: "999px", background: "rgba(11,11,13,.72)", color: "#fff", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".1em", backdropFilter: "blur(6px)" }}>
                              <span style={{ width: "0", height: "0", borderLeft: "8px solid #ed1c24", borderTop: "5px solid transparent", borderBottom: "5px solid transparent" }}></span>
                              {__t($s?.len)}
                            </span>
                          </>
                        ) : null}
                        {" "}
                        <span style={{ position: "absolute", left: "12px", top: "8px", pointerEvents: "none", fontFamily: "'JetBrains Mono',monospace", fontSize: "28px", fontWeight: "700", letterSpacing: "-.04em", color: "#ed1c24", textShadow: "0 2px 12px rgba(0,0,0,.35)" }}>
                          {__t($s?.idx)}
                        </span>
                        {" "}
                      </div>
                      {" "}
                      <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: "7px", minWidth: "0", alignSelf: "center" }}>
                        {" "}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
                          <span data-clamp={"2"} style={{ fontSize: "16px", fontWeight: "800", letterSpacing: "-.015em", lineHeight: "1.15" }}>
                            {__t($s?.t)}
                          </span>
                          <span style={{ flex: "none", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#ed1c24" }}>
                            {__t($s?.hint)}
                          </span>
                        </div>
                        {" "}
                        <div data-clamp={"3"} style={{ fontSize: "13.5px", lineHeight: "1.5", color: "var(--muted)", textWrap: "pretty" }}>
                          {__t($s?.d)}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </button>
                    {" "}
                  </React.Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "16px clamp(16px,4vw,48px) 0" }}>
              {" "}
              <div data-rv={"1"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,172px),1fr))", gap: "12px" }}>
                {" "}
                {__arr(v.t?.machines).map(($m, $i0) => (
                  <React.Fragment key={$i0}>
                    {" "}
                    <div style={{ padding: "22px 24px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {" "}
                      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "24px", fontWeight: "700", letterSpacing: "-.02em" }}>
                        {__t($m?.t)}
                      </div>
                      {" "}
                      <div style={{ fontSize: "13.5px", color: "var(--muted)" }}>
                        {__t($m?.d)}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </React.Fragment>
                ))}
                {" "}
                <div style={{ padding: "22px 24px", background: "linear-gradient(135deg,rgba(237,28,36,.18),rgba(237,28,36,.04))", border: "1px solid rgba(237,28,36,.4)", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {" "}
                  <div style={{ fontSize: "19px", fontWeight: "800", letterSpacing: "-.015em", color: "#ed1c24" }}>
                    {__t(v.t?.warrantyCardT)}
                  </div>
                  {" "}
                  <div style={{ fontSize: "13.5px", lineHeight: "1.5", color: "var(--muted2)", textWrap: "pretty" }}>
                    {__t(v.t?.warrantyCardD)}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ padding: "22px 24px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {" "}
                  <div style={{ fontSize: "19px", fontWeight: "800", letterSpacing: "-.015em" }}>
                    {__t(v.t?.exportT)}
                  </div>
                  {" "}
                  <div style={{ fontSize: "13.5px", lineHeight: "1.5", color: "var(--muted)", textWrap: "pretty" }}>
                    {__t(v.t?.exportD)}
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
          <section data-tone={"paper"} id={"delovi"} data-spy={"1"} data-screen-label={"Tiki Vent"} style={{ position: "relative", overflow: "hidden", padding: "clamp(72px,9vw,128px) clamp(16px,4vw,48px)", scrollMarginTop: "76px", background: "var(--bg)", color: "var(--fg)", isolation: "isolate" }}>
            {" "}
            <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
              {" "}
              <div data-rv={"1"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "32px", alignItems: "center" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#ed1c24" }}>
                    <span style={{ width: "30px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                    {"03 · "}
                    {__t(v.t?.tikiEyebrow)}
                  </div>
                  {" "}
                  <img src={"/assets/tikivent-white.svg"} alt={"Tiki Vent - powered by MR Engines"} style={{ display: "var(--on-dark)", width: "min(100%,440px)", height: "auto" }} />
                  <img src={"/assets/tikivent-dark.svg"} alt={"Tiki Vent - powered by MR Engines"} style={{ display: "var(--on-light)", width: "min(100%,440px)", height: "auto" }} />
                  {" "}
                  <p style={{ margin: "0", maxWidth: "52ch", fontSize: "17px", lineHeight: "1.6", color: "var(--muted2)", textWrap: "pretty" }}>
                    {__t(v.t?.tikiBody)}
                  </p>
                  {" "}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", paddingLeft: "6px" }}>
                    {" "}
                    <a href={"https://tikivent.rs"} target={"_blank"} rel={"noopener"} style={{ display: "inline-flex", alignItems: "center", height: "50px", padding: "0 24px", background: "#ed1c24", color: "#fff", transform: "skewX(-15deg)", boxShadow: "0 14px 34px rgba(237,28,36,.3)", transition: "background .15s" }} className={"mrpb"}>
                      <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "12.5px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                        tikivent.rs ↗
                      </span>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {" "}
                  <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "22px", overflow: "hidden", background: "var(--bg2)", border: "1px solid var(--line)", boxShadow: "0 40px 100px rgba(0,0,0,.5)" }}>
                    {" "}
                    {__t(v.tikiPhotoEl)}
                    {" "}
                  </div>
                  {" "}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "10px" }}>
                    {" "}
                    {__arr(v.t?.tikiCells).map(($c, $i0) => (
                      <React.Fragment key={$i0}>
                        {" "}
                        <div style={{ padding: "18px 16px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(20px,2vw,28px)", fontWeight: "700", lineHeight: "1", letterSpacing: "-.03em", color: "#ed1c24" }}>
                            {__t($c?.v)}
                          </span>
                          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "9.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)" }}>
                            {__t($c?.l)}
                          </span>
                        </div>
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
              {v.hasBrands ? (
                <>
                  {" "}
                  <div data-rv={"1"} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {" "}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#ed1c24" }}>
                      <span style={{ width: "30px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                      {__t(v.t?.brandsEyebrow)}
                    </div>
                    {" "}
                    <div data-tone={"ink"} style={{ padding: "22px 0", borderRadius: "18px", background: "#0b0b0d", border: "1px solid rgba(255,255,255,.08)" }}>
                      {__t(v.brandsEl)}
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
          <section data-tone={"ink"} id={"video"} data-spy={"1"} data-screen-label={"Video"} style={{ position: "relative", padding: "clamp(72px,9vw,128px) clamp(16px,4vw,48px)", scrollMarginTop: "76px", background: "var(--bg)", color: "var(--fg)", overflow: "hidden", isolation: "isolate" }}>
            <div style={{ position: "absolute", inset: "0", zIndex: "-1", pointerEvents: "none", backgroundImage: "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)", backgroundSize: "56px 56px", WebkitMaskImage: "linear-gradient(#000,transparent 60%)", maskImage: "linear-gradient(#000,transparent 60%)" }}></div>
            {" "}
            <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px" }}>
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#ed1c24" }}>
                  <span style={{ width: "30px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                  {"04 · "}
                  {__t(v.t?.videoEyebrow)}
                </div>
                {" "}
                <h2 style={{ margin: "0", fontSize: "clamp(36px,4.8vw,64px)", fontWeight: "800", letterSpacing: "-.035em", lineHeight: ".98", textWrap: "balance" }}>
                  {__t(v.t?.videoTitle)}
                </h2>
                {" "}
                <p style={{ margin: "0", maxWidth: "52ch", fontSize: "16px", lineHeight: "1.55", color: "var(--muted)", textWrap: "pretty" }}>
                  {__t(v.t?.videoSub)}
                </p>
                {" "}
              </div>
              {" "}
              <div data-rv={"1"} style={{ position: "relative", borderRadius: "26px", overflow: "hidden", border: "1px solid var(--line)", background: "var(--bg2)", boxShadow: "0 40px 100px rgba(0,0,0,.5)", transitionDelay: ".1s" }}>
                {" "}
                {v.hasVideo ? (
                  <>
                    {__t(v.videoEl)}
                  </>
                ) : null}
                {" "}
                {v.noVideo ? (
                  <>
                    {" "}
                    <div style={{ position: "relative", aspectRatio: "16/8", minHeight: "300px" }}>
                      {" "}
                      <img src={"/assets/bg-workshop.png"} alt={""} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.03)" }} />
                      {" "}
                      <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,11,13,.1),rgba(11,11,13,.55) 70%,rgba(11,11,13,.9))" }}></div>
                      {" "}
                      <div style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "22px" }}>
                        {" "}
                        <div style={{ position: "relative", width: "104px", height: "104px" }}>
                          {" "}
                          {__t(v.playPulse)}
                          {" "}
                          <div style={{ position: "absolute", inset: "0", borderRadius: "50%", background: "#ed1c24", boxShadow: "0 20px 50px rgba(237,28,36,.45)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "34px", paddingLeft: "8px" }}>
                            ▶
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--fg)" }}>
                          {__t(v.t?.videoPh)}
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div style={{ position: "absolute", left: "24px", bottom: "20px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                        {__t(v.t?.videoMeta)}
                      </div>
                      {" "}
                      <div style={{ position: "absolute", right: "24px", bottom: "20px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                        {"8 · "}
                        {__t(v.t?.chaptersTitle)}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </>
                ) : null}
                {" "}
              </div>
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexWrap: "wrap", gap: "8px", transitionDelay: ".2s" }}>
                {" "}
                {__arr(v.chapters).map(($c, $i0) => (
                  <React.Fragment key={$i0}>
                    {" "}
                    <button onClick={$c?.on} style={__css(`display:inline-flex;align-items:center;gap:10px;height:40px;padding:0 14px;border-radius:999px;border:1px solid ${$c?.bd ?? ""};background:${$c?.bg ?? ""};color:${$c?.fg ?? ""};font-family:Figtree,system-ui,sans-serif;font-size:13px;font-weight:600;cursor:pointer;transition:background .2s,border-color .2s,color .2s,transform .15s`)} className={"mrp6 mrp7"}>
                      <span style={__css(`font-family:'JetBrains Mono',monospace;font-size:11px;color:${$c?.tc ?? ""};font-variant-numeric:tabular-nums`)}>
                        {__t($c?.time)}
                      </span>
                      {__t($c?.t)}
                    </button>
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
          <section id={"o-nama"} data-spy={"1"} data-screen-label={"O nama"} style={{ position: "relative", padding: "clamp(72px,9vw,128px) clamp(16px,4vw,48px)", scrollMarginTop: "76px", background: "var(--bg)", color: "var(--fg)", overflow: "hidden", isolation: "isolate" }}>
            {" "}
            <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(40px,5vw,72px)" }}>
              {" "}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "clamp(28px,4vw,64px)", alignItems: "center" }}>
                {" "}
                <div data-rv={"1"} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#ed1c24" }}>
                    <span style={{ width: "30px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                    {"05 · "}
                    {__t(v.t?.aboutEyebrow)}
                  </div>
                  {" "}
                  <h2 style={{ margin: "0", fontSize: "clamp(40px,5.4vw,76px)", fontWeight: "800", letterSpacing: "-.04em", lineHeight: ".96" }}>
                    <span style={{ display: "block" }}>
                      {__t(v.t?.aboutL1)}
                    </span>
                    <span style={{ display: "block", color: "#ed1c24" }}>
                      {__t(v.t?.aboutL2)}
                    </span>
                    <span style={{ display: "block", color: "var(--faint)" }}>
                      {__t(v.t?.aboutL3)}
                    </span>
                  </h2>
                  {" "}
                  <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "var(--muted2)", textWrap: "pretty" }}>
                    {__t(v.t?.aboutLead)}
                  </p>
                  {" "}
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)", textWrap: "pretty" }}>
                    {__t(v.t?.aboutStory)}
                  </p>
                  {" "}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", paddingLeft: "6px" }}>
                    {" "}
                    <a href={"/media/mr-engines-presentation.html"} target={"_blank"} rel={"noopener"} data-tone={"ink"} style={{ display: "inline-flex", alignItems: "center", height: "48px", padding: "0 22px", background: "rgba(19,19,22,.8)", border: "1px solid var(--line2)", color: "var(--fg)", transform: "skewX(-15deg)", transition: "border-color .15s,color .15s" }} className={"mrp4"}>
                      <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "12px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                        {__t(v.t?.presOpen)}
                        {" →"}
                      </span>
                    </a>
                    {" "}
                    <a href={"https://www.enginesmr.com/machine-with-a-soul-movie/"} target={"_blank"} rel={"noopener"} data-tone={"ink"} style={{ display: "inline-flex", alignItems: "center", height: "48px", padding: "0 22px", background: "rgba(19,19,22,.8)", border: "1px solid var(--line2)", color: "var(--fg)", transform: "skewX(-15deg)", transition: "border-color .15s,color .15s" }} className={"mrp4"}>
                      <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "12px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                        {"▶  "}
                        {__t(v.t?.filmOpen)}
                      </span>
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div data-rv={"1"} style={{ position: "relative", transitionDelay: ".15s" }}>
                  {" "}
                  <div style={{ position: "relative", aspectRatio: "4/5", maxHeight: "640px", borderRadius: "24px", overflow: "hidden", background: "var(--bg2)", border: "1px solid var(--line)", boxShadow: "0 40px 100px rgba(0,0,0,.5)" }}>
                    {" "}
                    {__t(v.aboutPhotoEl)}
                    {" "}
                    <img src={"/assets/logo-crest-white-1200.png"} alt={"MR Engines - Made in Serbia"} style={{ position: "absolute", right: "20px", bottom: "18px", height: "60px", width: "auto", pointerEvents: "none", filter: "drop-shadow(0 6px 16px rgba(0,0,0,.6))" }} />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#ed1c24" }}>
                  <span style={{ width: "30px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                  {__t(v.t?.whatTitle)}
                </div>
                {" "}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,215px),1fr))", gap: "14px" }}>
                  {" "}
                  {__arr(v.t?.services4).map(($s, $i0) => (
                    <React.Fragment key={$i0}>
                      {" "}
                      <div style={{ position: "relative", overflow: "hidden", padding: "26px 24px 24px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "12px", transition: "border-color .2s,transform .4s cubic-bezier(.22,1,.36,1)" }} className={"mrpa"}>
                        {" "}
                        <span style={{ position: "absolute", right: "-30px", top: "-30px", width: "110px", height: "110px", background: "rgba(237,28,36,.1)", transform: "skewX(-15deg)" }}></span>
                        {" "}
                        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", fontWeight: "600", letterSpacing: ".16em", color: "#ed1c24" }}>
                          {__t($s?.idx)}
                        </div>
                        {" "}
                        <div style={{ fontSize: "21px", fontWeight: "800", letterSpacing: "-.02em", lineHeight: "1.1" }}>
                          {__t($s?.t)}
                        </div>
                        {" "}
                        <div style={{ fontSize: "14px", lineHeight: "1.55", color: "var(--muted)", textWrap: "pretty" }}>
                          {__t($s?.d)}
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
              <div data-rv={"1"} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {" "}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "20px", alignItems: "end" }}>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {" "}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#ed1c24" }}>
                      <span style={{ width: "30px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                      {__t(v.t?.mapEyebrow)}
                    </div>
                    {" "}
                    <h2 style={{ margin: "0", fontSize: "clamp(34px,4.4vw,60px)", fontWeight: "800", letterSpacing: "-.035em", lineHeight: ".98", textWrap: "balance" }}>
                      {__t(v.t?.mapTitle)}
                    </h2>
                    {" "}
                  </div>
                  {" "}
                  <p style={{ margin: "0", maxWidth: "52ch", fontSize: "16px", lineHeight: "1.55", color: "var(--muted)", textWrap: "pretty" }}>
                    {__t(v.t?.mapSub)}
                  </p>
                  {" "}
                </div>
                {" "}
                <div data-tone={"ink"} style={{ position: "relative", borderRadius: "24px", overflow: "hidden", background: "radial-gradient(ellipse at 52% 38%,rgba(237,28,36,.16),transparent 45%),var(--bg)", border: "1px solid var(--line)", padding: "clamp(12px,2.5vw,32px)" }}>
                  {" "}
                  <div style={{ position: "relative", width: "100%", aspectRatio: "1538/768" }}>
                    {" "}
                    <img src={"/assets/world-map.png"} alt={""} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "contain" }} />
                    {" "}
                    {__t(v.mapEl)}
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
                  {" "}
                  {__arr(v.mapPoints).map(($m, $i0) => (
                    <React.Fragment key={$i0}>
                      {" "}
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "9px", height: "38px", padding: "0 14px", borderRadius: "999px", border: "1px solid var(--line)", background: "var(--bg2)", fontSize: "13px", fontWeight: "600" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ed1c24" }}></span>
                        {__t($m?.l)}
                      </span>
                      {" "}
                    </React.Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#ed1c24" }}>
                  <span style={{ width: "30px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                  {__t(v.t?.certsEyebrow)}
                </div>
                {" "}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: "14px" }}>
                  {" "}
                  {__arr(v.certs).map(($c, $i0) => (
                    <React.Fragment key={$i0}>
                      {" "}
                      <a href={$c?.href} target={$c?.target} rel={"noopener"} style={__css(`display:flex;align-items:center;gap:16px;padding:18px 20px;background:var(--bg2);border:1px solid var(--line);border-radius:18px;color:var(--fg);cursor:${$c?.cursor ?? ""};transition:border-color .2s,transform .4s cubic-bezier(.22,1,.36,1)`)} className={"mrpc"}>
                        {" "}
                        <span style={{ flex: "none", width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", background: "#ed1c24", color: "#fff", transform: "skewX(-15deg)", boxShadow: "0 10px 24px rgba(237,28,36,.3)" }}>
                          <span style={{ display: "inline-block", transform: "skewX(15deg)", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", fontWeight: "700", letterSpacing: ".06em" }}>
                            {__t($c?.tag)}
                          </span>
                        </span>
                        {" "}
                        <span style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                          <span style={{ fontSize: "15px", fontWeight: "800", letterSpacing: "-.01em" }}>
                            {__t($c?.l)}
                          </span>
                          <span style={__css(`font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:${$c?.subColor ?? ""}`)}>
                            {__t($c?.sub)}
                          </span>
                        </span>
                        {" "}
                      </a>
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
          </section>
          {" "}
          <section id={"knjige"} data-spy={"1"} data-screen-label={"Tehničke knjige"} style={{ position: "relative", padding: "clamp(24px,4vw,48px) clamp(16px,4vw,48px)", scrollMarginTop: "76px", background: "var(--bg)", color: "var(--fg)" }}>
            {" "}
            <div data-rv={"1"} data-tone={"ink"} style={{ position: "relative", overflow: "hidden", maxWidth: "1320px", margin: "0 auto", borderRadius: "26px", background: "linear-gradient(120deg,#ed1c24,#c8141b 60%,#a8111a)", padding: "clamp(32px,5vw,60px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "28px", alignItems: "center", boxShadow: "0 40px 100px rgba(237,28,36,.22)" }}>
              {" "}
              <span style={{ position: "absolute", top: "-20%", bottom: "-20%", right: "18%", width: "90px", background: "rgba(0,0,0,.14)", transform: "skewX(-15deg)", pointerEvents: "none" }}></span>
              {" "}
              <span style={{ position: "absolute", top: "-20%", bottom: "-20%", right: "calc(18% + 120px)", width: "26px", background: "rgba(0,0,0,.14)", transform: "skewX(-15deg)", pointerEvents: "none" }}></span>
              {" "}
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "14px" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#fff" }}>
                  <span style={{ width: "30px", height: "4px", background: "#fff", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                  {"06 · "}
                  {__t(v.t?.booksEyebrow)}
                </div>
                {" "}
                <h2 style={{ margin: "0", fontSize: "clamp(32px,4vw,54px)", fontWeight: "800", letterSpacing: "-.035em", lineHeight: "1", color: "#fff", textWrap: "balance" }}>
                  {__t(v.t?.booksTitle)}
                </h2>
                {" "}
                <p style={{ margin: "0", maxWidth: "50ch", fontSize: "16px", fontWeight: "600", lineHeight: "1.55", color: "#fff", textWrap: "pretty" }}>
                  {__t(v.t?.booksBody)}
                </p>
                {" "}
              </div>
              {" "}
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "18px", alignItems: "flex-start", justifySelf: "end" }}>
                {" "}
                <a href={v.booksUrl} target={"_blank"} rel={"noopener"} style={{ display: "inline-flex", alignItems: "center", height: "60px", padding: "0 32px", background: "#fff", color: "#191919", transform: "skewX(-15deg)", boxShadow: "0 20px 50px rgba(0,0,0,.25)", transition: "transform .15s,background .15s" }} className={"mrpd mrp3"}>
                  <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "14px", fontWeight: "800", letterSpacing: ".1em", textTransform: "uppercase" }}>
                    {__t(v.t?.booksOpen)}
                    {" →"}
                  </span>
                </a>
                {" "}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {" "}
                  {__arr(v.t?.booksCells).map(($c, $i0) => (
                    <React.Fragment key={$i0}>
                      {" "}
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 12px", borderRadius: "999px", background: "rgba(0,0,0,.18)", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".12em", textTransform: "uppercase", color: "#fff" }}>
                        <span style={{ opacity: ".75" }}>
                          {__t($c?.l)}
                        </span>
                        {__t($c?.v)}
                      </span>
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
          </section>
          {" "}
          <section data-tone={"paper3"} id={"galerija"} data-spy={"1"} data-screen-label={"Galerija"} style={{ position: "relative", padding: "clamp(72px,9vw,128px) clamp(16px,4vw,48px)", scrollMarginTop: "76px", background: "var(--bg)", color: "var(--fg)", overflow: "hidden", isolation: "isolate" }}>
            {" "}
            <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "26px" }}>
              {" "}
              <div data-rv={"1"} style={{ display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: "20px" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#ed1c24" }}>
                    <span style={{ width: "30px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                    {"07 · "}
                    {__t(v.t?.photosEyebrow)}
                  </div>
                  {" "}
                  <h2 style={{ margin: "0", fontSize: "clamp(36px,4.8vw,64px)", fontWeight: "800", letterSpacing: "-.035em", lineHeight: ".98", textWrap: "balance" }}>
                    {__t(v.t?.photosTitle)}
                  </h2>
                  {" "}
                  <p style={{ margin: "0", maxWidth: "52ch", fontSize: "16px", lineHeight: "1.55", color: "var(--muted)", textWrap: "pretty" }}>
                    {__t(v.t?.photosSub)}
                  </p>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {" "}
                  {__arr(v.cats).map(($c, $i0) => (
                    <React.Fragment key={$i0}>
                      {" "}
                      <button onClick={$c?.on} style={__css(`height:42px;padding:0 18px;border-radius:999px;cursor:pointer;font-family:Figtree,system-ui,sans-serif;font-size:13px;font-weight:600;background:${$c?.bg ?? ""};border:1px solid ${$c?.bd ?? ""};color:${$c?.fg ?? ""};transition:background .15s,border-color .15s,color .15s,transform .15s`)} className={"mrp6 mrp7"}>
                        {__t($c?.label)}
                      </button>
                      {" "}
                    </React.Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-rv={"1"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,250px),1fr))", gap: "12px", transitionDelay: ".1s" }}>
                {" "}
                {__arr(v.photos).map(($p, $i0) => (
                  <React.Fragment key={$i0}>
                    {" "}
                    <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "16px", overflow: "hidden", background: "var(--bg2)", border: "1px solid var(--line)", transition: "transform .4s cubic-bezier(.22,1,.36,1),border-color .2s" }} className={"mrpe"}>
                      {" "}
                      {__t($p?.photoEl)}
                      {" "}
                      <span data-tone={"ink"} style={{ position: "absolute", top: "10px", left: "10px", pointerEvents: "none", padding: "5px 10px", borderRadius: "999px", background: "rgba(11,11,13,.75)", fontFamily: "'JetBrains Mono',monospace", fontSize: "9.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted2)" }}>
                        {__t($p?.cat)}
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </React.Fragment>
                ))}
                {" "}
              </div>
              {" "}
              {v.galEmpty ? (
                <>
                  <div style={{ padding: "40px 24px", border: "1px dashed var(--line2)", borderRadius: "20px", textAlign: "center", fontSize: "14px", color: "var(--muted)" }}>
                    {__t(v.t?.noPhotosCat)}
                  </div>
                </>
              ) : null}
              {" "}
            </div>
            {" "}
          </section>
          {" "}
        </main>
        {" "}
        <footer data-tone={"ink"} style={{ position: "relative", overflow: "hidden", borderTop: "1px solid var(--line)", background: "var(--bg)", isolation: "isolate" }}>
          {" "}
          <div style={{ position: "relative", maxWidth: "1320px", margin: "0 auto", padding: "48px clamp(16px,4vw,48px) 40px", display: "flex", flexDirection: "column", gap: "32px" }}>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "28px" }}>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
                {" "}
                <img src={"/assets/logo-crest-white-1200.png"} alt={"MR Engines - Made in Serbia"} style={{ height: "64px", width: "auto" }} />
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  {" "}
                  <span style={{ fontSize: "15px", fontWeight: "700" }}>
                    {__t(v.t?.footTag)}
                  </span>
                  {" "}
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)" }}>
                    {__t(v.t?.footAddr)}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {" "}
                <a href={"tel:+38162227455"} style={{ display: "inline-flex", flexDirection: "column", justifyContent: "center", gap: "3px", height: "56px", padding: "0 20px", background: "var(--bg2)", border: "1px solid var(--line)", color: "var(--fg)", transform: "skewX(-15deg)", transition: "border-color .15s" }} className={"mrpf"}>
                  <span style={{ display: "block", transform: "skewX(15deg)", fontFamily: "'JetBrains Mono',monospace", fontSize: "9.5px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                    {__t(v.t?.phoneRebuild)}
                  </span>
                  <span style={{ display: "block", transform: "skewX(15deg)", fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", fontWeight: "700" }}>
                    +381 62 227 455
                  </span>
                </a>
                {" "}
                <a href={"tel:+38162226397"} style={{ display: "inline-flex", flexDirection: "column", justifyContent: "center", gap: "3px", height: "56px", padding: "0 20px", background: "var(--bg2)", border: "1px solid var(--line)", color: "var(--fg)", transform: "skewX(-15deg)", transition: "border-color .15s" }} className={"mrpf"}>
                  <span style={{ display: "block", transform: "skewX(15deg)", fontFamily: "'JetBrains Mono',monospace", fontSize: "9.5px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                    {__t(v.t?.phoneMach)}
                  </span>
                  <span style={{ display: "block", transform: "skewX(15deg)", fontFamily: "'JetBrains Mono',monospace", fontSize: "14px", fontWeight: "700" }}>
                    +381 62 226 397
                  </span>
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 22px", paddingTop: "22px", borderTop: "1px solid var(--line)" }}>
              {" "}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 22px", fontFamily: "'JetBrains Mono',monospace", fontSize: "11.5px", fontWeight: "600", letterSpacing: ".06em" }}>
                {" "}
                <a href={"https://www.enginesmr.com"} target={"_blank"} rel={"noopener"}>
                  enginesmr.com
                </a>
                {" "}
                <a href={"https://www.mrgroup.rs"} target={"_blank"} rel={"noopener"}>
                  mrgroup.rs
                </a>
                {" "}
                <a href={"https://tikivent.rs"} target={"_blank"} rel={"noopener"}>
                  tikivent.rs
                </a>
                {" "}
                <a href={"https://www.instagram.com/mrengines"} target={"_blank"} rel={"noopener"}>
                  @mrengines
                </a>
                {" "}
                <a href={"https://www.youtube.com/@mrengines"} target={"_blank"} rel={"noopener"}>
                  YouTube
                </a>
                {" "}
                <a href={"/admin"} style={{ color: "var(--faint)" }}>
                  Admin
                </a>
                {" "}
              </div>
              {" "}
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", letterSpacing: ".08em", color: "var(--faint)" }}>
                {__t(v.t?.footRights)}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </footer>
        {" "}
        {v.hasLightbox ? (
          <>
            {" "}
            <div onClick={v.closeLightbox} data-screen-label={"Slika"} style={{ position: "fixed", inset: "0", zIndex: "130", background: "rgba(8,8,10,.96)", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(16px,4vw,48px)", cursor: "zoom-out", animation: "fadeIn .25s ease-out both" }}>
              {" "}
              {__t(v.lightboxEl)}
              {" "}
              {v.lbMulti ? (
                <>
                  {" "}
                  <button onClick={v.lbPrev} aria-label={"Prev"} data-tone={"ink"} style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)", width: "52px", height: "52px", borderRadius: "50%", border: "1px solid var(--line2)", background: "rgba(19,19,22,.8)", color: "var(--fg)", cursor: "pointer", fontSize: "22px", lineHeight: "1" }} className={"mrp4"}>
                    ‹
                  </button>
                  {" "}
                  <button onClick={v.lbNext} aria-label={"Next"} data-tone={"ink"} style={{ position: "absolute", right: "18px", top: "50%", transform: "translateY(-50%)", width: "52px", height: "52px", borderRadius: "50%", border: "1px solid var(--line2)", background: "rgba(19,19,22,.8)", color: "var(--fg)", cursor: "pointer", fontSize: "22px", lineHeight: "1" }} className={"mrp4"}>
                    ›
                  </button>
                  {" "}
                  <div data-tone={"ink"} style={{ position: "absolute", left: "50%", bottom: "22px", transform: "translateX(-50%)", fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", fontWeight: "600", letterSpacing: ".18em", color: "var(--muted)" }}>
                    {__t(v.lbCount)}
                  </div>
                  {" "}
                </>
              ) : null}
              {" "}
              <button onClick={v.closeLightbox} aria-label={"Close"} data-tone={"ink"} style={{ position: "absolute", top: "18px", right: "18px", width: "48px", height: "48px", borderRadius: "50%", border: "1px solid var(--line2)", background: "rgba(19,19,22,.8)", color: "var(--fg)", cursor: "pointer", fontSize: "16px" }}>
                ✕
              </button>
              {" "}
            </div>
            {" "}
          </>
        ) : null}
        {" "}
        {v.hasSel ? (
          <>
            {" "}
            <div data-screen-label={"Detalj motora"} style={{ position: "fixed", inset: "0", zIndex: "100", background: "var(--overlay)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", overflowY: "auto", animation: "fadeIn .35s ease-out both" }}>
              {" "}
              <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(16px,3vw,36px) clamp(16px,3vw,40px) 80px", animation: "sheetIn .55s cubic-bezier(.22,1,.36,1) both" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "22px" }}>
                  {" "}
                  <button onClick={v.closeSel} style={{ display: "flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 6px", background: "transparent", border: "0", cursor: "pointer", color: "var(--muted)", fontFamily: "Figtree,system-ui,sans-serif", fontSize: "14px", fontWeight: "700", letterSpacing: ".06em", textTransform: "uppercase" }} className={"mrp5"}>
                    {"← "}
                    {__t(v.t?.back)}
                  </button>
                  {" "}
                  <button onClick={v.closeSel} aria-label={"Close"} data-tone={"ink"} style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid var(--line2)", background: "rgba(19,19,22,.8)", color: "var(--fg)", cursor: "pointer", fontSize: "16px", transition: "border-color .15s,color .15s" }} className={"mrp4 mrp7"}>
                    ✕
                  </button>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "28px", alignItems: "start" }}>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                    {" "}
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {" "}
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#ed1c24" }}>
                        <span style={{ width: "30px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
                        {__t(v.t?.remont)}
                      </div>
                      {" "}
                      <h2 style={{ margin: "0", fontSize: "clamp(32px,4.2vw,56px)", fontWeight: "800", letterSpacing: "-.035em", lineHeight: "1", textWrap: "balance" }}>
                        {__t(v.sel?.title)}
                      </h2>
                      {" "}
                      <div style={{ fontSize: "14.5px", color: "var(--muted)", lineHeight: "1.5" }}>
                        {__t(v.sel?.apps)}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ position: "relative", aspectRatio: "1", borderRadius: "24px", overflow: "hidden", background: "radial-gradient(circle at 50% 58%,rgba(237,28,36,.18),transparent 55%),radial-gradient(circle at 50% 50%,var(--bg3),var(--bg) 72%)", border: "1px solid var(--line)" }}>
                      {" "}
                      <div style={{ position: "absolute", left: "50%", top: "50%", width: "80%", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", border: "1px dashed var(--line)" }}></div>
                      {" "}
                      <div style={{ position: "absolute", left: "50%", top: "50%", width: "62%", aspectRatio: "1", transform: "translate(-50%,-50%)", borderRadius: "50%", border: "1px solid var(--fill)" }}></div>
                      {" "}
                      <div style={{ position: "absolute", left: "0", right: "0", top: "50%", height: "1px", background: "var(--fill)" }}></div>
                      {" "}
                      <div style={{ position: "absolute", top: "0", bottom: "0", left: "50%", width: "1px", background: "var(--fill)" }}></div>
                      {" "}
                      {v.sel?.hasPhotos ? (
                        <>
                          {" "}
                          {__t(v.sel?.stageEl)}
                          {" "}
                          <button onClick={v.sel?.prev} aria-label={"Prev"} data-tone={"ink"} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", width: "46px", height: "46px", borderRadius: "50%", border: "1px solid var(--line2)", background: "rgba(19,19,22,.75)", color: "var(--fg)", cursor: "pointer", fontSize: "20px", lineHeight: "1" }} className={"mrp4"}>
                            ‹
                          </button>
                          {" "}
                          <button onClick={v.sel?.next} aria-label={"Next"} data-tone={"ink"} style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", width: "46px", height: "46px", borderRadius: "50%", border: "1px solid var(--line2)", background: "rgba(19,19,22,.75)", color: "var(--fg)", cursor: "pointer", fontSize: "20px", lineHeight: "1" }} className={"mrp4"}>
                            ›
                          </button>
                          {" "}
                          <div style={{ position: "absolute", left: "18px", bottom: "16px", pointerEvents: "none", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                            {__t(v.sel?.angleLabel)}
                          </div>
                          {" "}
                        </>
                      ) : null}
                      {" "}
                      {v.sel?.noPhotos ? (
                        <>
                          {" "}
                          <div style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(64px,10vw,130px)", fontWeight: "700", letterSpacing: "-.05em", lineHeight: "1", color: "var(--line)" }}>
                              {__t(v.sel?.code)}
                            </span>
                            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--faint)" }}>
                              {__t(v.t?.photoSoon)}
                            </span>
                          </div>
                          {" "}
                        </>
                      ) : null}
                      {" "}
                    </div>
                    {" "}
                    {v.sel?.hasPhotos ? (
                      <>
                        {" "}
                        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                          {" "}
                          {__t(v.sel?.thumbsEl)}
                          {" "}
                        </div>
                        {" "}
                      </>
                    ) : null}
                    {" "}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "10px" }}>
                      {" "}
                      <div style={{ padding: "14px 16px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "9.5px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                          {__t(v.t?.specFuel)}
                        </span>
                        <span style={{ fontSize: "15px", fontWeight: "700" }}>
                          {__t(v.sel?.fuel)}
                        </span>
                      </div>
                      {" "}
                      <div style={{ padding: "14px 16px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "9.5px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                          {__t(v.t?.specCc)}
                        </span>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "15px", fontWeight: "700" }}>
                          {__t(v.sel?.cc)}
                        </span>
                      </div>
                      {" "}
                      <div style={{ padding: "14px 16px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "9.5px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                          {__t(v.t?.specTiming)}
                        </span>
                        <span style={{ fontSize: "15px", fontWeight: "700" }}>
                          {__t(v.sel?.timing)}
                        </span>
                      </div>
                      {" "}
                      <div style={{ padding: "14px 16px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "9.5px", fontWeight: "600", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--muted)" }}>
                          {__t(v.t?.specCode)}
                        </span>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "15px", fontWeight: "700" }}>
                          {__t(v.sel?.code)}
                        </span>
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {" "}
                    <div style={{ padding: "26px 28px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                      {" "}
                      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--muted)" }}>
                        {__t(v.t?.priceLbl)}
                      </div>
                      {" "}
                      {v.sel?.showPrice ? (
                        <>
                          {" "}
                          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                            <span style={{ width: "4px", height: "60px", background: "#ed1c24", transform: "skewX(-15deg)", flex: "none" }}></span>
                            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(44px,5.5vw,72px)", fontWeight: "700", lineHeight: "1", letterSpacing: "-.05em", color: "#ed1c24", fontVariantNumeric: "tabular-nums" }}>
                              {__t(v.sel?.priceText)}
                            </span>
                          </div>
                          {" "}
                          <div style={{ fontSize: "13.5px", color: "var(--muted)" }}>
                            {__t(v.t?.priceNote)}
                          </div>
                          {" "}
                        </>
                      ) : null}
                      {" "}
                      {v.sel?.showBtn ? (
                        <>
                          {" "}
                          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                            <span style={{ width: "4px", height: "60px", background: "rgba(237,28,36,.4)", transform: "skewX(-15deg)", flex: "none" }}></span>
                            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(44px,5.5vw,72px)", fontWeight: "700", lineHeight: "1", letterSpacing: "-.05em", color: "var(--line)", fontVariantNumeric: "tabular-nums" }}>
                              •.••• €
                            </span>
                          </div>
                          {" "}
                          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
                            {" "}
                            <button onClick={v.sel?.reveal} style={{ height: "48px", padding: "0 24px", border: "0", cursor: "pointer", background: "#ed1c24", color: "#fff", transform: "skewX(-15deg)", boxShadow: "0 14px 34px rgba(237,28,36,.3)", transition: "background .15s,transform .15s" }} className={"mrp2 mrp3"}>
                              <span style={{ display: "inline-block", transform: "skewX(15deg)", fontFamily: "Figtree,system-ui,sans-serif", fontSize: "12.5px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                                {__t(v.t?.showPrice)}
                              </span>
                            </button>
                            {" "}
                            <span style={{ fontSize: "13.5px", color: "var(--muted)" }}>
                              {__t(v.t?.priceHidden)}
                            </span>
                            {" "}
                          </div>
                          {" "}
                        </>
                      ) : null}
                      {" "}
                      {v.sel?.noPrice ? (
                        <>
                          {" "}
                          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "20px", fontWeight: "600", color: "var(--muted)" }}>
                            {__t(v.t?.priceTbd)}
                          </div>
                          {" "}
                        </>
                      ) : null}
                      {" "}
                    </div>
                    {" "}
                    <div style={{ padding: "26px 28px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                      {" "}
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ width: "34px", height: "34px", borderRadius: "10px", background: "rgba(237,28,36,.14)", color: "#ed1c24", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "800", flex: "none" }}>
                          ✓
                        </span>
                        <span style={{ fontSize: "20px", fontWeight: "800", letterSpacing: "-.015em" }}>
                          {__t(v.t?.partsTitle)}
                        </span>
                      </div>
                      {" "}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "10px 20px" }}>
                        {" "}
                        {__arr(v.sel?.parts).map(($p, $i0) => (
                          <React.Fragment key={$i0}>
                            {" "}
                            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14.5px", lineHeight: "1.4" }}>
                              <span style={{ color: "#ed1c24", fontWeight: "800", flex: "none" }}>
                                ✓
                              </span>
                              {__t($p?.text)}
                            </div>
                            {" "}
                          </React.Fragment>
                        ))}
                        {" "}
                      </div>
                      {" "}
                      <div style={{ paddingTop: "14px", borderTop: "1px solid var(--line)", fontSize: "13.5px", lineHeight: "1.5", color: "var(--muted)", textWrap: "pretty" }}>
                        {__t(v.t?.partsNote)}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ display: "flex", alignItems: "center", gap: "18px", padding: "16px 20px", background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: "20px" }}>
                      {" "}
                      <div style={{ width: "104px", height: "104px", flex: "none", borderRadius: "14px", background: "#fff", padding: "7px", display: "flex", overflow: "hidden" }}>
                        {__t(v.sel?.qrEl)}
                      </div>
                      {" "}
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "0" }}>
                        <div style={{ fontSize: "17px", fontWeight: "800", letterSpacing: "-.01em" }}>
                          {__t(v.t?.qrTitle)}
                        </div>
                        <div style={{ fontSize: "13.5px", lineHeight: "1.5", color: "var(--muted)", textWrap: "pretty" }}>
                          {__t(v.t?.qrBody)}
                        </div>
                        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", color: "var(--faint)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {__t(v.sel?.qrLink)}
                        </div>
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ padding: "26px 28px", background: "var(--bg2)", border: "1px solid rgba(237,28,36,.35)", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                      {" "}
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ width: "34px", height: "34px", borderRadius: "10px", background: "#ed1c24", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "800", flex: "none" }}>
                          12
                        </span>
                        <span style={{ fontSize: "20px", fontWeight: "800", letterSpacing: "-.015em" }}>
                          {__t(v.t?.warrantyTitle)}
                        </span>
                      </div>
                      {" "}
                      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: "600", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted)" }}>
                        {__t(v.t?.warrantyCond)}
                      </div>
                      {" "}
                      <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                        {" "}
                        {__arr(v.warranty).map(($w, $i0) => (
                          <React.Fragment key={$i0}>
                            {" "}
                            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.45", color: "var(--muted2)" }}>
                              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ed1c24", flex: "none", marginTop: "7px" }}></span>
                              {__t($w?.text)}
                            </div>
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
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </>
        ) : null}
      </div>
    </>
  )
}

export const defaultProps = {
  "defaultLang": "sr",
  "showPrices": false,
  "booksUrl": "https://mrengines-app.rs/kontrolna-tabla",
  "videoUrl": ""
}

export default createDCPage(Component, view, defaultProps, "MrEnginesPage")
