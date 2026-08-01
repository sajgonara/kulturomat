// Kulturomat — sekcja Koncerty: miejsca koncertowe + nadchodzące wydarzenia.
// Zbiór własny (research: strony obiektów, agencje koncertowe, eBilet/Live Nation).
// forma:  klub | sala | hala | stadion | amfiteatr | plener
// skala:  kameralna (<300) | klubowa (300–2500) | duza (2,5–10 tys.) | mega (>10 tys.)
// genres: rock | pop | metal | hiphop | elektronika | jazz | klasyka | indie | inne
const KONCERTY_UPDATED='2026-08-01';

const KONCERTY_MIEJSCA=[
// ---- stadiony ----
{name:'PGE Narodowy',city:'Warszawa',lat:52.2394,lng:21.0457,forma:'stadion',skala:'mega',cap:73000,genres:['pop','rock','hiphop'],website:'https://www.pgenarodowy.pl',note:'największe koncerty stadionowe w kraju'},
{name:'Stadion Śląski',city:'Chorzów',lat:50.2890,lng:18.9722,forma:'stadion',skala:'mega',cap:55000,genres:['pop','rock'],website:'https://stadionslaski.pl'},
{name:'Polsat Plus Arena Gdańsk',city:'Gdańsk',lat:54.3901,lng:18.6398,forma:'stadion',skala:'mega',cap:43000,genres:['pop','rock'],website:'https://polsatplusarena.pl'},
{name:'Tarczyński Arena Wrocław',city:'Wrocław',lat:51.1413,lng:16.9438,forma:'stadion',skala:'mega',cap:45000,genres:['pop','rock']},
{name:'Enea Stadion',city:'Poznań',lat:52.3975,lng:16.8577,forma:'stadion',skala:'mega',cap:43000,genres:['pop','rock']},
// ---- hale i areny ----
{name:'TAURON Arena Kraków',city:'Kraków',lat:50.0673,lng:19.9916,forma:'hala',skala:'mega',cap:22000,genres:['pop','rock','metal','hiphop','elektronika'],website:'https://www.tauronarenakrakow.pl'},
{name:'Spodek',city:'Katowice',lat:50.2667,lng:19.0264,forma:'hala',skala:'mega',cap:11000,genres:['pop','rock','metal','hiphop'],website:'https://spodekkatowice.pl'},
{name:'Atlas Arena',city:'Łódź',lat:51.7636,lng:19.4250,forma:'hala',skala:'mega',cap:13800,genres:['pop','rock','hiphop'],website:'https://atlasarena.pl'},
{name:'Ergo Arena',city:'Gdańsk',lat:54.4256,lng:18.5814,forma:'hala',skala:'mega',cap:15000,genres:['pop','rock','hiphop','elektronika'],website:'https://ergoarena.pl',note:'na granicy Gdańska i Sopotu'},
{name:'PreZero Arena Gliwice',city:'Gliwice',lat:50.3161,lng:18.6933,forma:'hala',skala:'mega',cap:13700,genres:['pop','rock','metal','hiphop'],website:'https://arenagliwice.com'},
{name:'COS Torwar',city:'Warszawa',lat:52.2285,lng:21.0314,forma:'hala',skala:'duza',cap:8000,genres:['pop','rock','hiphop'],website:'https://www.torwar.pl'},
{name:'Arena Poznań (MTP)',city:'Poznań',lat:52.4016,lng:16.9104,forma:'hala',skala:'duza',cap:10000,genres:['pop','rock','hiphop']},
{name:'Hala Olivia',city:'Gdańsk',lat:54.4018,lng:18.5772,forma:'hala',skala:'duza',cap:5500,genres:['pop','rock'],website:'https://halaolivia.pl'},
{name:'Netto Arena',city:'Szczecin',lat:53.4379,lng:14.5230,forma:'hala',skala:'duza',cap:5400,genres:['pop','rock','hiphop']},
{name:'Arena Toruń',city:'Toruń',lat:53.0233,lng:18.5891,forma:'hala',skala:'duza',cap:6300,genres:['pop','rock']},
{name:'EXPO XXI',city:'Warszawa',lat:52.2245,lng:20.9643,forma:'hala',skala:'duza',cap:6000,genres:['elektronika','pop','hiphop'],website:'https://expoxxi.pl',note:'duże koncerty klubowe i imprezy elektroniczne'},
{name:'Hala Orbita',city:'Wrocław',lat:51.1068,lng:17.0890,forma:'hala',skala:'duza',cap:3000,genres:['pop','rock']},
// ---- sale koncertowe i filharmonie ----
{name:'ICE Kraków Congress Centre',city:'Kraków',lat:50.0471,lng:19.9337,forma:'sala',skala:'klubowa',cap:2000,genres:['klasyka','jazz','pop'],website:'https://icekrakow.pl'},
{name:'Filharmonia Narodowa',city:'Warszawa',lat:52.2346,lng:21.0117,forma:'sala',skala:'klubowa',cap:1072,genres:['klasyka'],website:'https://filharmonia.pl'},
{name:'NOSPR',city:'Katowice',lat:50.2849,lng:19.0198,forma:'sala',skala:'klubowa',cap:1800,genres:['klasyka','jazz'],website:'https://nospr.org.pl',note:'jedna z najlepszych sal akustycznie w Europie'},
{name:'Narodowe Forum Muzyki',city:'Wrocław',lat:51.1108,lng:17.0339,forma:'sala',skala:'klubowa',cap:1800,genres:['klasyka','jazz'],website:'https://nfm.wroclaw.pl'},
{name:'Filharmonia Bałtycka',city:'Gdańsk',lat:54.3526,lng:18.6598,forma:'sala',skala:'klubowa',cap:1000,genres:['klasyka'],website:'https://filharmonia.gda.pl',note:'sala na wyspie Ołowianka'},
{name:'Filharmonia im. M. Karłowicza',city:'Szczecin',lat:53.4347,lng:14.5463,forma:'sala',skala:'klubowa',cap:1000,genres:['klasyka'],website:'https://filharmonia.szczecin.pl'},
{name:'Filharmonia Łódzka',city:'Łódź',lat:51.7698,lng:19.4625,forma:'sala',skala:'klubowa',cap:650,genres:['klasyka'],website:'https://filharmonia.lodz.pl'},
{name:'Filharmonia Poznańska',city:'Poznań',lat:52.4075,lng:16.9195,forma:'sala',skala:'klubowa',cap:850,genres:['klasyka']},
{name:'Filharmonia Krakowska',city:'Kraków',lat:50.0606,lng:19.9370,forma:'sala',skala:'klubowa',cap:700,genres:['klasyka'],website:'https://filharmonia.krakow.pl'},
// ---- kluby ----
{name:'Stodoła',city:'Warszawa',lat:52.2181,lng:21.0094,forma:'klub',skala:'klubowa',cap:1500,genres:['rock','pop','indie','hiphop','jazz'],website:'https://stodola.pl',note:'legenda polskiej sceny klubowej'},
{name:'Progresja',city:'Warszawa',lat:52.2321,lng:20.9474,forma:'klub',skala:'klubowa',cap:2500,genres:['metal','rock','elektronika','hiphop'],website:'https://progresja.com'},
{name:'Palladium',city:'Warszawa',lat:52.2305,lng:21.0114,forma:'klub',skala:'klubowa',cap:1500,genres:['pop','rock','jazz','indie']},
{name:'Proxima',city:'Warszawa',lat:52.1984,lng:20.9616,forma:'klub',skala:'klubowa',cap:1500,genres:['pop','rock','hiphop','indie'],website:'https://proxima.com.pl'},
{name:'Hydrozagadka',city:'Warszawa',lat:52.2533,lng:21.0345,forma:'klub',skala:'klubowa',cap:400,genres:['indie','rock','elektronika'],note:'Praga, ul. 11 Listopada 22'},
{name:'Chmury',city:'Warszawa',lat:52.2536,lng:21.0342,forma:'klub',skala:'klubowa',cap:300,genres:['indie','elektronika','rock'],note:'kameralny klub przy 11 Listopada 22'},
{name:'Smolna',city:'Warszawa',lat:52.2286,lng:21.0249,forma:'klub',skala:'klubowa',cap:400,genres:['elektronika'],note:'jeden z głównych klubów techno w kraju'},
{name:'Klub Studio',city:'Kraków',lat:50.0292,lng:19.9056,forma:'klub',skala:'klubowa',cap:1100,genres:['rock','metal','indie','hiphop'],website:'https://klubstudio.pl'},
{name:'Kwadrat',city:'Kraków',lat:50.0135,lng:19.9150,forma:'klub',skala:'klubowa',cap:500,genres:['rock','metal','indie','hiphop'],website:'https://klubkwadrat.pl'},
{name:'B90',city:'Gdańsk',lat:54.3609,lng:18.6549,forma:'klub',skala:'klubowa',cap:1000,genres:['metal','rock','elektronika'],website:'https://b90.pl',note:'postoczniowy klub na terenie Stoczni Gdańsk'},
{name:'Parlament',city:'Gdańsk',lat:54.3503,lng:18.6491,forma:'klub',skala:'klubowa',cap:1000,genres:['rock','pop','hiphop']},
{name:'Klub Żak',city:'Gdańsk',lat:54.3770,lng:18.6085,forma:'klub',skala:'klubowa',cap:500,genres:['jazz','rock','indie'],website:'https://klubzak.com.pl'},
{name:'A2 – Centrum Koncertowe',city:'Wrocław',lat:51.1185,lng:17.0586,forma:'klub',skala:'klubowa',cap:1500,genres:['rock','pop','metal','hiphop']},
{name:'Stary Klasztor',city:'Wrocław',lat:51.1145,lng:17.0327,forma:'klub',skala:'klubowa',cap:1200,genres:['rock','metal','jazz'],website:'https://staryklasztor.com.pl'},
{name:'Od Zmierzchu do Świtu',city:'Wrocław',lat:51.1122,lng:17.0384,forma:'klub',skala:'klubowa',cap:400,genres:['elektronika'],note:'klub techno przy Krupniczej'},
{name:'Tama',city:'Poznań',lat:52.4019,lng:16.9068,forma:'klub',skala:'klubowa',cap:600,genres:['rock','indie','elektronika','hiphop']},
{name:'CK Zamek',city:'Poznań',lat:52.4079,lng:16.9187,forma:'sala',skala:'klubowa',cap:500,genres:['jazz','inne','klasyka'],website:'https://ckzamek.pl'},
{name:'Wytwórnia',city:'Łódź',lat:51.7579,lng:19.4566,forma:'klub',skala:'klubowa',cap:600,genres:['rock','indie','pop','jazz'],note:'klub w budynku dawnej wytwórni wód mineralnych'},
{name:'Pub Gwint',city:'Białystok',lat:53.1308,lng:23.1612,forma:'klub',skala:'klubowa',cap:400,genres:['rock','metal'],website:'https://gwint.pl'},
{name:'Pod Palmą',city:'Rzeszów',lat:50.0325,lng:22.0030,forma:'klub',skala:'klubowa',cap:500,genres:['rock','metal','indie']},
{name:'Od Nowa',city:'Toruń',lat:53.0132,lng:18.6025,forma:'klub',skala:'klubowa',cap:700,genres:['rock','jazz','metal']},
{name:'Mózg',city:'Bydgoszcz',lat:53.1218,lng:18.0012,forma:'klub',skala:'kameralna',cap:200,genres:['jazz','inne','rock'],website:'https://mozg.art.pl',note:'klub jazzowy i improwizowany'},
// ---- amfiteatry ----
{name:'Opera Leśna',city:'Sopot',lat:54.4462,lng:18.5556,forma:'amfiteatr',skala:'duza',cap:5000,genres:['pop','klasyka'],note:'zadaszony amfiteatr w lesie'},
{name:'Amfiteatr NC Polskiej Piosenki',city:'Opole',lat:50.6716,lng:17.9238,forma:'amfiteatr',skala:'duza',cap:4500,genres:['pop'],note:'scena Krajowego Festiwalu Piosenki Polskiej'},
{name:'Amfiteatr im. I. J. Paderewskiego',city:'Koszalin',lat:54.1919,lng:16.1817,forma:'amfiteatr',skala:'duza',cap:3600,genres:['pop','rock']}
];

// Nadchodzące koncerty. Bez pola venue = konkretny obiekt jeszcze do potwierdzenia
// (pinezka na centrum miasta). Daty wg zapowiedzi organizatorów (lipiec 2026).
const KONCERTY_WYDARZENIA=[
{name:'Eivør',date:'2026-08-02',city:'Poznań',lat:52.4064,lng:16.9252,genres:['inne'],note:'folk z Wysp Owczych'},
{name:'Moby',date:'2026-08-04',city:'Warszawa',lat:52.2297,lng:21.0122,genres:['elektronika'],note:'pierwszy koncert w Polsce od 2011 r.'},
{name:'Anyma',date:'2026-08-07',end:'2026-08-08',city:'Gdańsk',lat:54.3520,lng:18.6466,genres:['elektronika'],note:'dwa dni'},
{name:'Soen',date:'2026-08-21',city:'Gdańsk',lat:54.3520,lng:18.6466,genres:['metal'],note:'trasa: 21.08 Gdańsk, 22.08 Poznań, 23.08 Lublin, 25.08 Bielsko-Biała'},
{name:'Soen',date:'2026-08-22',city:'Poznań',lat:52.4064,lng:16.9252,genres:['metal']},
{name:'Soen',date:'2026-08-23',city:'Lublin',lat:51.2465,lng:22.5684,genres:['metal']},
{name:'Soen',date:'2026-08-25',city:'Bielsko-Biała',lat:49.8224,lng:19.0444,genres:['metal']},
{name:'Joji',date:'2026-08-23',city:'Warszawa',lat:52.2297,lng:21.0122,genres:['pop'],note:'trasa SOLARIS'},
{name:'Garou',date:'2026-09-29',city:'Wrocław',lat:51.1079,lng:17.0385,genres:['pop'],note:'trasa: 29.09 Wrocław, 30.09 Kraków, 1.10 Zabrze'},
{name:'Garou',date:'2026-09-30',city:'Kraków',lat:50.0647,lng:19.9450,genres:['pop']},
{name:'Garou',date:'2026-10-01',city:'Zabrze',lat:50.3249,lng:18.7857,genres:['pop']},
{name:'Haken',date:'2026-10-07',city:'Warszawa',lat:52.2297,lng:21.0122,genres:['metal'],note:'metal progresywny'},
{name:'Fink',date:'2026-10-08',city:'Warszawa',lat:52.2297,lng:21.0122,genres:['indie']},
{name:'The HU',date:'2026-10-19',end:'2026-10-20',city:'Warszawa',lat:52.2297,lng:21.0122,genres:['metal'],note:'mongolski folk metal, dwa koncerty'},
{name:'Ruel',date:'2026-10-23',city:'Warszawa',lat:52.2297,lng:21.0122,genres:['pop']},
{name:'Acres',date:'2026-10-25',city:'Poznań',lat:52.4064,lng:16.9252,genres:['metal']},
{name:'Boris',date:'2026-10-31',city:'Kraków',lat:50.0647,lng:19.9450,genres:['metal'],note:'trasa: 31.10 Kraków, 1.11 Warszawa'},
{name:'Boris',date:'2026-11-01',city:'Warszawa',lat:52.2297,lng:21.0122,genres:['metal']},
{name:'Korn',date:'2026-11-17',city:'Kraków',lat:50.0673,lng:19.9916,venue:'TAURON Arena Kraków',forma:'hala',skala:'mega',cap:22000,genres:['metal']},
{name:'LP',date:'2026-11-17',city:'Warszawa',lat:52.2297,lng:21.0122,genres:['pop']},
{name:'Allt',date:'2026-11-22',city:'Poznań',lat:52.4064,lng:16.9252,genres:['metal']},
{name:'Muna',date:'2026-11-26',city:'Warszawa',lat:52.2297,lng:21.0122,genres:['pop']},
{name:'Sace6',date:'2026-12-02',city:'Warszawa',lat:52.2297,lng:21.0122,genres:['rock']}
];

const KONCERTY=[
  ...KONCERTY_MIEJSCA.map(m=>({kind:'miejsce',...m})),
  ...KONCERTY_WYDARZENIA.map(e=>({kind:'koncert',...e}))
];
