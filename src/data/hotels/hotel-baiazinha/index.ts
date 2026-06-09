import { type Hotel } from 'src/model/Hotel';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const commonData = {
  slug: 'hotel-baiazinha',
  regionSlug: 'pantanal-norte',
};

const heroImage = `${GENERAL_BUCKET_NAME}/region/pantanal-norte/img1.webp`;

export const hotelBaiazinhaPt: Hotel = {
  ...commonData,
  heroImage,
  name: 'Hotel Baiazinha',
  shortDescription:
    'Hotel às margens do Rio Paraguai em Cáceres (MT), próximo à Reserva Ecológica Tayamã, com 15 apartamentos, piscinas, pista de pouso e safáris de barco.',
  description: [
    'Localizado às margens do Rio Paraguai, próximo à Reserva Ecológica Tayamã em Cáceres (MT), o Hotel Baiazinha oferece uma experiência imersiva no Pantanal Norte com excelentes chances de avistamento de onças-pintadas, ariranhas, macacos, jaguatiricas, tamanduás e capivaras.',
    'O hotel conta com 15 apartamentos equipados com ar-condicionado, TV e frigobar, além de restaurante climatizado e área externa telada com churrasqueira em frente ao Rio Paraguai. A infraestrutura inclui piscinas para adultos e crianças, salão de jogos, redes e pista de pouso própria.',
    'Os passeios de lancha saem ao amanhecer, subindo o Rio Paraguai até o Rio Jauru e percorrendo baías e canais onde a vida selvagem se concentra. O almoço é servido a bordo (pic nic) durante os passeios mais longos, com retorno ao hotel ao entardecer.',
  ],
  location: {
    lat: -16.1128,
    lng: -57.6831,
    address: 'Margens do Rio Paraguai, Cáceres - MT, Brasil',
  },
  commonAreas: [
    'Piscina para adultos e infantil',
    'Restaurante climatizado',
    'Área externa telada com churrasqueira frente ao Rio Paraguai',
    'Salão de jogos',
    'Redes e varandas',
    'Wi-Fi',
    'Pista de pouso própria',
    'Lanchas (115 HP) e barcos (25 HP)',
    'Gerador próprio de energia',
    'Água tratada e aquecimento solar',
  ],
  gastronomy: [
    'Pensão completa (café da manhã, almoço e jantar)',
    'Culinária regional pantaneira',
    'Pic nic a bordo em passeios longos',
    'Churrasco na área externa',
  ],
  accommodations: {
    name: 'Apartamentos',
    description: [
      '15 apartamentos disponíveis (capacidade máxima de 46 hóspedes).',
      'Todos com ar-condicionado, TV e frigobar.',
      'Banheiro privativo.',
      'Decoração integrada ao ambiente pantaneiro.',
    ],
    galleryImage: [],
  },
};

export const hotelBaiazinhaEn: Hotel = {
  ...commonData,
  heroImage,
  name: 'Hotel Baiazinha',
  shortDescription:
    'Hotel on the banks of the Paraguay River in Cáceres (MT), near the Tayamã Ecological Reserve, with 15 rooms, pools, airstrip and boat safaris.',
  description: [
    'Located on the banks of the Paraguay River, near the Tayamã Ecological Reserve in Cáceres (MT), Hotel Baiazinha offers an immersive experience in the Northern Pantanal with excellent chances of spotting jaguars, giant otters, monkeys, ocelots, giant anteaters and capybaras.',
    'The hotel features 15 apartments equipped with air conditioning, TV and minibar, plus an air-conditioned restaurant and a screened outdoor area with barbecue overlooking the Paraguay River. Facilities include adult and children\'s pools, a games room, hammocks and a private airstrip.',
    'Motorboat excursions depart at dawn, heading up the Paraguay River to the Jauru River and navigating through bays and channels where wildlife concentrates. Lunch is served on board (picnic style) during longer trips, returning to the hotel at dusk.',
  ],
  location: {
    lat: -16.1128,
    lng: -57.6831,
    address: 'Banks of the Paraguay River, Cáceres - MT, Brazil',
  },
  commonAreas: [
    'Adult and children\'s pool',
    'Air-conditioned restaurant',
    'Screened outdoor area with barbecue facing the Paraguay River',
    'Games room',
    'Hammocks and verandas',
    'Wi-Fi',
    'Private airstrip',
    'Motorboats (115 HP) and boats (25 HP)',
    'Own power generator',
    'Treated water and solar heating',
  ],
  gastronomy: [
    'Full board (breakfast, lunch and dinner)',
    'Regional Pantanal cuisine',
    'On-board picnic during longer trips',
    'Barbecue in the outdoor area',
  ],
  accommodations: {
    name: 'Rooms',
    description: [
      '15 apartments available (maximum capacity of 46 guests).',
      'All with air conditioning, TV and minibar.',
      'Private bathroom.',
      'Décor integrated with the Pantanal environment.',
    ],
    galleryImage: [],
  },
};

export const hotelBaiazinhaEs: Hotel = {
  ...commonData,
  heroImage,
  name: 'Hotel Baiazinha',
  shortDescription:
    'Hotel a orillas del Río Paraguay en Cáceres (MT), cerca de la Reserva Ecológica Tayamã, con 15 habitaciones, piscinas, pista de aterrizaje y safaris en bote.',
  description: [
    'Ubicado a orillas del Río Paraguay, cerca de la Reserva Ecológica Tayamã en Cáceres (MT), el Hotel Baiazinha ofrece una experiencia inmersiva en el Pantanal Norte con excelentes oportunidades de avistar jaguares, nutrias gigantes, monos, ocelotes, osos hormigueros y capibaras.',
    'El hotel cuenta con 15 apartamentos equipados con aire acondicionado, TV y minibar, además de un restaurante climatizado y un área exterior con malla y parrilla frente al Río Paraguay. La infraestructura incluye piscinas para adultos y niños, salón de juegos, hamacas y pista de aterrizaje propia.',
    'Las excursiones en lancha salen al amanecer, remontando el Río Paraguay hasta el Río Jauru y recorriendo bahías y canales donde la vida silvestre se concentra. El almuerzo se sirve a bordo (estilo picnic) durante los paseos más largos, regresando al hotel al atardecer.',
  ],
  location: {
    lat: -16.1128,
    lng: -57.6831,
    address: 'Orillas del Río Paraguay, Cáceres - MT, Brasil',
  },
  commonAreas: [
    'Piscina para adultos y niños',
    'Restaurante climatizado',
    'Área exterior con malla y parrilla frente al Río Paraguay',
    'Salón de juegos',
    'Hamacas y verandas',
    'Wi-Fi',
    'Pista de aterrizaje propia',
    'Lanchas (115 HP) y botes (25 HP)',
    'Generador propio de energía',
    'Agua tratada y calentamiento solar',
  ],
  gastronomy: [
    'Pensión completa (desayuno, almuerzo y cena)',
    'Cocina regional pantanera',
    'Picnic a bordo en paseos largos',
    'Parrillada en el área exterior',
  ],
  accommodations: {
    name: 'Habitaciones',
    description: [
      '15 apartamentos disponibles (capacidad máxima de 46 huéspedes).',
      'Todos con aire acondicionado, TV y minibar.',
      'Baño privado.',
      'Decoración integrada al ambiente pantanero.',
    ],
    galleryImage: [],
  },
};
