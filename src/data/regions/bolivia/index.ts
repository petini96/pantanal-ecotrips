import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${GENERAL_BUCKET_NAME}/region`;

const commonData = {
  id: 'bolivia-salar-uyuni',
  slug: 'bolivia',
  galleryImages: [],
  icon: 'mdi-image-filter-hdr'
};

export const boliviaPt: Region = {
  ...commonData,
  name: 'Bolívia - Salar de Uyuni',
  subtitle: 'Espetáculo natural no coração da América do Sul.',
  description: [
    `A Bolívia abriga um dos espetáculos naturais mais impressionantes do planeta: o Salar de Uyuni. Com mais de 10.000 km² de extensão, é o maior deserto de sal do mundo e transforma-se, na estação chuvosa, em um imenso espelho d'água que reflete o céu com perfeição absoluta. Uma experiência que desafia os sentidos e fica para sempre na memória.`,
    `Além do Salar, o roteiro inclui a histórica Sucre, Patrimônio Mundial da UNESCO, com sua arquitetura colonial branca e a icônica Casa de la Libertad. Potosí, uma das cidades mais altas do mundo, surpreende com a Casa da Moneda, testemunha da história colonial da América Latina. O percurso ainda reserva paisagens surreais: a Laguna Colorada de tons vermelhos, o Árbol de Piedra esculpido pelo vento e os imponentes Geiseres Sol de Mañana.`,
    `A viagem parte de Corumbá, no Brasil, passando por Puerto Quijarro e Santa Cruz, com voo para Sucre e traslado terrestre até Uyuni. Um pacote completo que une conforto, aventura e cultura, cuidadosamente organizado pela TURPANBOL, agência especialista nessa rota transfronteiriça.`
  ],
  coverImage: `${baseImgPath}/bolivia/img1.webp`,
  cities: [cities.sucre, cities.potosi, cities.uyuni],
  highlights: ['Salar de Uyuni', 'Laguna Colorada', 'Sucre Colonial', 'Geiseres'],
  location: {
    lat: -20.1338,
    lng: -67.4891,
    address: 'Salar de Uyuni, Bolívia'
  },
  details: {
    bestTime: 'Maio a Outubro (estação seca) | Dezembro a Março (espelho d\'água no Salar)',
    climate: 'Árido de altitude. Dias ensolarados, noites muito frias. Leve roupas quentes e edredom.',
    access: 'Corumbá (BR) → Puerto Quijarro → Santa Cruz → Sucre (voo incluso) → Uyuni (terrestre)',
  },
  gastronomy: ['Salteñas', 'Silpancho', 'Pique Macho', 'Api con Pastel'],
  tips: [
    'Use roupas quentes e leve um edredom — as noites no altiplano são muito frias.',
    'Óculos escuros são essenciais devido ao reflexo intenso do sal.',
    'Sapatos confortáveis ou botas para caminhar no Salar.',
    'Respeite a altitude elevada: hidrate-se bem e evite esforço excessivo nos primeiros dias.'
  ],
  howToGetThere: {
    description: [
      'A partida é de Puerto Quijarro, na fronteira entre Brasil e Bolívia, com conexão rodoviária até Santa Cruz e voo doméstico para Sucre. O traslado terrestre até Uyuni completa a chegada ao destino mais espetacular da rota.'
    ],
    transportOptions: [
      {
        type: 'bus',
        title: 'Corumbá → Puerto Quijarro (BR/BO)',
        description: 'O ponto de partida é a cidade de Corumbá, no Mato Grosso do Sul. O traslado segue até Puerto Quijarro, já em território boliviano, onde se realiza o trâmite de migração.',
        icon: 'mdi-bus'
      },
      {
        type: 'plane',
        title: 'Santa Cruz → Sucre (voo incluso)',
        description: 'Em Santa Cruz, o grupo embarca em voo doméstico para Sucre, capital constitucional da Bolívia e Patrimônio da UNESCO. A passagem aérea está inclusa no pacote.',
        icon: 'mdi-airplane'
      },
      {
        type: 'car',
        title: 'Sucre → Uyuni (transfer terrestre)',
        description: 'De Sucre, o traslado segue por terra até Uyuni, porta de entrada para o Salar. A paisagem do altiplano boliviano ao longo do caminho já é um espetáculo à parte.',
        icon: 'mdi-car-side'
      }
    ]
  }
};

export const boliviaEn: Region = {
  ...commonData,
  name: 'Bolivia - Uyuni Salt Flat',
  subtitle: 'A natural spectacle in the heart of South America.',
  description: [
    `Bolivia is home to one of the most breathtaking natural wonders on the planet: the Uyuni Salt Flat. Spanning over 10,000 km², it is the largest salt desert in the world and transforms, during the rainy season, into an immense mirror that perfectly reflects the sky. An experience that challenges the senses and remains in the memory forever.`,
    `Beyond the Salt Flat, the itinerary includes historic Sucre, a UNESCO World Heritage Site, with its white colonial architecture and the iconic Casa de la Libertad. Potosí, one of the highest cities in the world, impresses with the Casa de la Moneda, a witness to Latin America's colonial history. The journey also offers surreal landscapes: the red-toned Laguna Colorada, the wind-sculpted Stone Tree (Árbol de Piedra), and the Sol de Mañana Geysers.`,
    `The trip departs from Corumbá, Brazil, passing through Puerto Quijarro and Santa Cruz, with a domestic flight to Sucre and an overland transfer to Uyuni. A complete package combining comfort, adventure, and culture, carefully organized by TURPANBOL, the specialist agency for this cross-border route.`
  ],
  coverImage: `${baseImgPath}/bolivia/img1.webp`,
  cities: [cities.sucre, cities.potosi, cities.uyuni],
  highlights: ['Uyuni Salt Flat', 'Laguna Colorada', 'Colonial Sucre', 'Geysers'],
  location: {
    lat: -20.1338,
    lng: -67.4891,
    address: 'Uyuni Salt Flat, Bolivia'
  },
  details: {
    bestTime: 'May to October (dry season) | December to March (mirror effect on the Salt Flat)',
    climate: 'Arid highland. Sunny days, very cold nights. Pack warm clothes and a comforter.',
    access: 'Corumbá (BR) → Puerto Quijarro → Santa Cruz → Sucre (flight included) → Uyuni (overland)',
  },
  gastronomy: ['Salteñas', 'Silpancho', 'Pique Macho', 'Api con Pastel'],
  tips: [
    'Wear warm layers and bring a comforter — altiplano nights are extremely cold.',
    'Sunglasses are essential due to the intense salt reflection.',
    'Wear comfortable shoes or boots for walking on the Salt Flat.',
    'Respect the high altitude: stay well hydrated and avoid strenuous activity in the first days.'
  ],
  howToGetThere: {
    description: [
      'The departure is from Puerto Quijarro, on the border between Brazil and Bolivia, with an overland connection to Santa Cruz and a domestic flight to Sucre. The overland transfer to Uyuni completes the journey to the most spectacular destination on the route.'
    ],
    transportOptions: [
      {
        type: 'bus',
        title: 'Corumbá → Puerto Quijarro (BR/BO)',
        description: 'The starting point is the city of Corumbá, in Mato Grosso do Sul. The transfer continues to Puerto Quijarro, already in Bolivian territory, where migration formalities are completed.',
        icon: 'mdi-bus'
      },
      {
        type: 'plane',
        title: 'Santa Cruz → Sucre (flight included)',
        description: 'In Santa Cruz, the group boards a domestic flight to Sucre, Bolivia\'s constitutional capital and a UNESCO Heritage Site. Airfare is included in the package.',
        icon: 'mdi-airplane'
      },
      {
        type: 'car',
        title: 'Sucre → Uyuni (overland transfer)',
        description: 'From Sucre, the transfer continues overland to Uyuni, gateway to the Salt Flat. The Bolivian altiplano scenery along the way is a spectacle in itself.',
        icon: 'mdi-car-side'
      }
    ]
  }
};

export const boliviaEs: Region = {
  ...commonData,
  name: 'Bolivia - Salar de Uyuni',
  subtitle: 'Un espectáculo natural en el corazón de América del Sur.',
  description: [
    `Bolivia alberga uno de los espectáculos naturales más impresionantes del planeta: el Salar de Uyuni. Con más de 10.000 km² de extensión, es el mayor desierto de sal del mundo y se convierte, en la estación lluviosa, en un inmenso espejo que refleja el cielo con absoluta perfección. Una experiencia que desafía los sentidos y queda grabada para siempre en la memoria.`,
    `Además del Salar, el itinerario incluye la histórica Sucre, Patrimonio Mundial de la UNESCO, con su arquitectura colonial blanca y la icónica Casa de la Libertad. Potosí, una de las ciudades más altas del mundo, sorprende con la Casa de la Moneda, testigo de la historia colonial de América Latina. El recorrido también reserva paisajes surrealistas: la Laguna Colorada de tonos rojos, el Árbol de Piedra esculpido por el viento y los imponentes Géiseres Sol de Mañana.`,
    `El viaje parte de Corumbá, en Brasil, pasando por Puerto Quijarro y Santa Cruz, con vuelo doméstico a Sucre y traslado terrestre hasta Uyuni. Un paquete completo que une comodidad, aventura y cultura, cuidadosamente organizado por TURPANBOL, agencia especialista en esta ruta transfronteriza.`
  ],
  coverImage: `${baseImgPath}/bolivia/img1.webp`,
  cities: [cities.sucre, cities.potosi, cities.uyuni],
  highlights: ['Salar de Uyuni', 'Laguna Colorada', 'Sucre Colonial', 'Géiseres'],
  location: {
    lat: -20.1338,
    lng: -67.4891,
    address: 'Salar de Uyuni, Bolivia'
  },
  details: {
    bestTime: 'Mayo a Octubre (estación seca) | Diciembre a Marzo (efecto espejo en el Salar)',
    climate: 'Árido de altitud. Días soleados, noches muy frías. Lleva ropa abrigada y edredón.',
    access: 'Corumbá (BR) → Puerto Quijarro → Santa Cruz → Sucre (vuelo incluido) → Uyuni (terrestre)',
  },
  gastronomy: ['Salteñas', 'Silpancho', 'Pique Macho', 'Api con Pastel'],
  tips: [
    'Usa ropa abrigada y lleva un edredón — las noches en el altiplano son muy frías.',
    'Los lentes de sol son esenciales debido al intenso reflejo de la sal.',
    'Calzado cómodo o botas para caminar en el Salar.',
    'Respeta la altitud elevada: hidrátate bien y evita esfuerzos excesivos los primeros días.'
  ],
  howToGetThere: {
    description: [
      'La salida es desde Puerto Quijarro, en la frontera entre Brasil y Bolivia, con conexión por tierra hasta Santa Cruz y vuelo doméstico a Sucre. El traslado terrestre hasta Uyuni completa la llegada al destino más espectacular de la ruta.'
    ],
    transportOptions: [
      {
        type: 'bus',
        title: 'Corumbá → Puerto Quijarro (BR/BO)',
        description: 'El punto de partida es la ciudad de Corumbá, en Mato Grosso do Sul. El traslado continúa hasta Puerto Quijarro, ya en territorio boliviano, donde se realizan los trámites migratorios.',
        icon: 'mdi-bus'
      },
      {
        type: 'plane',
        title: 'Santa Cruz → Sucre (vuelo incluido)',
        description: 'En Santa Cruz, el grupo embarca en un vuelo doméstico hacia Sucre, la capital constitucional de Bolivia y Patrimonio de la UNESCO. El pasaje aéreo está incluido en el paquete.',
        icon: 'mdi-airplane'
      },
      {
        type: 'car',
        title: 'Sucre → Uyuni (traslado terrestre)',
        description: 'Desde Sucre, el traslado continúa por tierra hasta Uyuni, puerta de entrada al Salar. El paisaje del altiplano boliviano a lo largo del camino es un espectáculo por sí solo.',
        icon: 'mdi-car-side'
      }
    ]
  }
};
