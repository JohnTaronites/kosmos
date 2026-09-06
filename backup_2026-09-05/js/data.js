// Baza danych obiektów kosmicznych – dane dla dzieci
// Format: { id, type, name, description, temperature, distance_from_sun, fun_fact }

const OBJECTS = [
  // --- Układ Słoneczny ---
  {
    id: 1,
    type: 'planet',
    name: 'Merkury',
    description: 'Najbliższy Słońcu z planetą. Jest bardzo małe i szybko kręci się wokół Słońca.',
    temperature: -173, // °C
    distanceFromSun: 57.9, // miliony km
    funFact: 'Merkury jest tak blisko Słońca, że jego temperatura może być zarówno bardzo gorąca, jak i bardzo zimna!'
  },
  {
    id: 2,
    type: 'planet',
    name: 'Wenus',
    description: 'Największa planeta w naszym układzie. Ma bardzo gorącą powierzchnię.',
    temperature: 462, // °C
    distanceFromSun: 108.2,
    funFact: 'Wenus jest tak gorąca, że jej powierzchnia jest pokryta płytkami lawy – jak gorący piec!'
  },
  {
    id: 3,
    type: 'planet',
    name: 'Ziemia',
    description: 'Nasza domowa planeta. Jest jedyną znaną nam żyjącą życiem.',
    temperature: 15, // °C (średnia)
    distanceFromSun: 149.6,
    funFact: 'Ziemia to nasz dom! Na niej żyjemy, pożeramy jabłka i śpimy w domu.'
  },
  {
    id: 4,
    type: 'planet',
    name: 'Mars',
    description: 'Czerwona Planeta – pełna kraterów i wulkanów.',
    temperature: -63, // °C
    distanceFromSun: 227.9,
    funFact: 'Mars jest czerwony dzięki węglu w piasku. To tutaj żywi się wulkan Olympus Mons – największy wulkan wszechświata!'
  },
  {
    id: 5,
    type: 'planet',
    name: 'Jowisz',
    description: 'Największa planeta. Ma gigantyczne wulkany i wielką plamę – Wielką Czerwoną Plamę.',
    temperature: -145, // °C
    distanceFromSun: 778.5,
    funFact: 'Jowisz ma tak wielki wiatr, że w jednym z nich można lecieć szybciej niż samochód!'
  },
  {
    id: 6,
    type: 'planet',
    name: 'Saturn',
    description: 'Znana z pięknych pierścieni wykonanych z lodowych kamieni.',
    temperature: -178, // °C
    distanceFromSun: 1432.5,
    funFact: 'Pierścienie Saturna są tak delikatne, że mogą zostać rozrzucone w ciągu kilku tysięcy lat!'
  },
  {
    id: 7,
    type: 'planet',
    name: 'Uran',
    description: 'Błękitna planeta – ma niebieską skórkę i obraca się „na bok“.',
    temperature: -224, // °C
    distanceFromSun: 2340.0,
    funFact: 'Uran kręci się tak nienaturalnie, że jego biegun północny jest odwrócony w stosunku do Słońca!'
  },
  {
    id: 8,
    type: 'planet',
    name: 'Neptun',
    description: 'Najdalej od Słońca planeta – ma silne wiatry.',
    temperature: -214, // °C
    distanceFromSun: 2981.0,
    funFact: 'Neptun ma wiatry szybsze niż samolot w powietrzu – ponad 2000 km/h!'
  },
  // --- Księżyce ---
  {
    id: 9,
    type: 'moon',
    name: 'Księżyc (Ziemski)',
    description: 'Nasz naturalny satelita – widoczny w nocy.',
    temperature: -173, // °C
    distanceFromSun: 384100, // km (od Ziemi)
    funFact: 'Księżyc to prawdziwy „brat” Ziemi – bez atmosfery i wody, ale pełen kraterów!'
  },
  {
    id: 10,
    type: 'moon',
    name: 'Ganimedes (Jowisz)',
    description: 'Największy księżyc w Układzie Słonecznym – ma własne wulkany!'
  },
  {
    id: 11,
    type: 'moon',
    name: 'Europa (Jupiter)',
    description: 'Pokryta lodowcami – może kryć pod powierzchnią ocean.',
    temperature: -110, // °C (przyjmowana dla powierzchni)
    distanceFromSun: 778.5, // od Słońca (Jupiter jest daleko)
    funFact: 'Pod lodem Europy kryje się ogromny ocean – może tam żyć mikroorganizmy!'
  },
  {
    id: 12,
    type: 'moon',
    name: 'Tytan (Saturn)',
    description: 'Jedyny księżyc z gęstą atmosferą – jak Ziemia!'
  },
  {
    id: 13,
    type: 'moon',
    name: 'Ios (Jupiter)',
    description: 'Najduży księżyc Jowisza – ma liczne wulkany.'
  },
  // --- Dalekie obiekty ---
  {
    id: 14,
    type: 'distant_object',
    name: 'Pluton',
    description: 'Najdalej od Słońca „planeta karłowata“. Ma wielki krater Sputnik.',
    temperature: -230, // °C
    distanceFromSun: 59000000, // km
    funFact: 'Pluton to nie planeta, ale „król” Płomyków – ma 5 znanych księżyców!'
  },
  {
    id: 15,
    type: 'distant_object',
    name: 'Andromeda (Galaktyka Andromedy)',
    description: 'Najbliższa galaktyka poza naszym Układem Słonecznym.',
    temperature: 25, // °C (typowa temperatura galaktyki)
    distanceFromSun: 2500000, // km (od Słońca)
    funFact: 'Andromeda jest większa od naszej Galaktyki – ma nawet więcej gwiazd!'
  },
  {
    id: 16,
    type: 'distant_object',
    name: 'Mgławica Oriona',
    description: 'Obłok gwiazd, gdzie powstają nowe gwiazdy.',
    temperature: 50, // °C (promień mgławicy)
    distanceFromSun: 8400, // km (od Słońca)
    funFact: 'Mgławica Oriona wygląda jak wielka mgła gwiazd – jak kosmiczna chmurka!'
  },
  {
    id: 17,
    type: 'distant_object',
    name: 'Mgławica Krąża (Ring Nebula)',
    description: 'Kolorowa mgławica z jasnymi pierścieniami.',
    temperature: 150, // °C
    distanceFromSun: 7000, // km
    funFact: 'To „pierścień” to reszta materiału gwiezdnego, który został wyrzucony podczas wybuchu gwiazdy!'
  },
  {
    id: 18,
    type: 'distant_object',
    name: 'Czarne dziura Sagittarius A* (centrum Mlecznej Gwiazdy)',
    description: 'Ogromna czarna dziura o masie 4 miliardy Słońce.',
    temperature: 3000000, // °C (promień dysku akrecyjnego)
    distanceFromSun: 8000000, // km
    funFact: 'Jeśli byłaby w Twojej okolicy, jej siła przyciągania byłaby niesamowita – nawet w odległości 1000 km!'
  }
];

export const objects = OBJECTS;

export const getObjectById = (id) => OBJECTS.find(o => o.id === id);

export const getPlanets = () => OBJECTS.filter(o => o.type === 'planet');

export const getMoons = () => OBJECTS.filter(o => o.type === 'moon');

export const getDistantObjects = () => OBJECTS.filter(o => o.type === 'distant_object');
