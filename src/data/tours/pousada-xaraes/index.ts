import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { pantanalPt, pantanalEn, pantanalEs } from 'src/data/categories/pantanal';
import { adventurePt, adventureEn, adventureEs } from 'src/data/categories/adventure';
import { familiesPt, familiesEn, familiesEs } from 'src/data/audiences/families';

const img = `${TOURS_BUCKET_NAME}/pousada-xaraes/img1.webp`;

const commonData = {
  id: 'TOUR-XRS-01',
  slug: 'pousada-xaraes',
  mainImage: img,
  durationInHours: 48,
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.RIVER, EnvironmentType.FOREST],
  city: miranda,
  photos: [
    `${TOURS_BUCKET_NAME}/pousada-xaraes/img1.webp`,
    `${TOURS_BUCKET_NAME}/pousada-xaraes/img2.webp`,
    `${TOURS_BUCKET_NAME}/pousada-xaraes/img3.webp`,
    `${TOURS_BUCKET_NAME}/pousada-xaraes/img4.webp`,
    `${TOURS_BUCKET_NAME}/pousada-xaraes/img5.webp`,
    `${TOURS_BUCKET_NAME}/pousada-xaraes/img6.webp`,
  ],
};

export const pousadaXaraesPt: Tour = {
  ...commonData,
  name: 'Pousada Xaraes',
  description: [
    'A Pousada Xaraes está situada no coração do Pantanal Sul, oferecendo uma experiência completa de imersão na natureza pantaneira. Com estrutura para receber grupos e famílias — 17 apartamentos divididos entre duplos, triplos e quádruplos, todos com ar-condicionado, banheiro privativo e frigobar —, a pousada alia conforto ao ambiente selvagem do Pantanal.',
    'As atividades ecológicas são o grande diferencial: caminhadas e trilhas pela mata, pesca de piranha, cavalgadas, passeios de barco e canoa canadense, safári fotográfico em veículo 4x4 e focagem noturna de animais. Dois passeios diários são incluídos no pacote, programados pela pousada conforme o clima e as condições do Pantanal. Todos os passeios são acompanhados por guias bilíngues (português/inglês) especializados em fauna e flora pantaneira, além de guias de campo nativos da região.',
    'A infraestrutura completa conta ainda com piscina, campo de futebol gramado, quadra poliesportiva, sala com lareira, TV DirecTV, internet, bar e loja. O acesso à pousada é feito por barco ou veículo 4x4, dependendo da estação das águas — uma aventura que começa na chegada.',
  ],
  shortDescription: 'Pousada completa no Pantanal Sul com atividades ecológicas, safári fotográfico, pesca e infraestrutura de lazer.',
  includedItems: [
    'Pensão completa (café da manhã, almoço e jantar)',
    '2 atividades ecológicas por dia (programadas pela pousada)',
    'Apartamento com ar-condicionado, banheiro privativo e frigobar',
    'Transporte privativo Aeroporto Campo Grande / Pantanal / Aeroporto',
    'Acesso à pousada (barco ou 4x4 conforme a estação)',
    'Guia bilíngue (português/inglês) especializado',
    'Receptivo no Aeroporto Internacional de Campo Grande',
  ],
  keywords: ['pousada xaraes', 'pantanal sul', 'miranda', 'safári', 'pesca', 'ecoturismo', 'cavalgada', 'focagem noturna'],
  categories: [pantanalPt, adventurePt],
  recommendedFor: [familiesPt],
};

export const pousadaXaraesEn: Tour = {
  ...commonData,
  name: 'Pousada Xaraes',
  description: [
    'Pousada Xaraes is set in the heart of the Southern Pantanal, offering a complete immersion in one of the world\'s most spectacular wetlands. With 17 comfortable rooms — doubles, triples and quadruples, all with air conditioning, private bathroom and mini-fridge — the lodge blends comfort with the wild soul of the Pantanal.',
    'The ecological activities are the highlight: forest hikes, piranha fishing, horseback riding, boat and canoe trips, 4x4 photographic safari and nocturnal wildlife spotlighting. Two daily excursions are included in the package, scheduled by the lodge according to weather and water conditions. All activities are led by bilingual (Portuguese/English) university-trained guides specialising in Pantanal flora and fauna, supported by local field guides born in the region.',
    'Full facilities include a swimming pool, football pitch, sports court, lounge with fireplace, DirecTV, internet, bar and shop. Access to the lodge is by boat or 4x4 depending on the flood season — an adventure that starts from the moment you arrive.',
  ],
  shortDescription: 'Full-service lodge in the Southern Pantanal with ecological activities, photographic safari, fishing and leisure facilities.',
  includedItems: [
    'Full board (breakfast, lunch and dinner)',
    '2 ecological activities per day (scheduled by the lodge)',
    'Room with air conditioning, private bathroom and mini-fridge',
    'Private transport Campo Grande Airport / Pantanal / Airport',
    'Lodge transfer (boat or 4x4 according to season)',
    'Bilingual guide (Portuguese/English) specialised in Pantanal wildlife',
    'Transfer assistance at Campo Grande International Airport',
  ],
  keywords: ['pousada xaraes', 'southern pantanal', 'miranda', 'safari', 'fishing', 'ecotourism', 'horseback riding', 'nocturnal spotlighting'],
  categories: [pantanalEn, adventureEn],
  recommendedFor: [familiesEn],
};

export const pousadaXaraesEs: Tour = {
  ...commonData,
  name: 'Pousada Xaraes',
  description: [
    'La Pousada Xaraes está ubicada en el corazón del Pantanal Sur, ofreciendo una experiencia completa de inmersión en la naturaleza pantanera. Con 17 habitaciones — dobles, triples y cuádruples, todas con aire acondicionado, baño privado y minibar —, el alojamiento combina comodidad con el ambiente salvaje del Pantanal.',
    'Las actividades ecológicas son el punto fuerte: caminatas y senderos por el bosque, pesca de pirañas, cabalgatas, paseos en bote y canoa, safari fotográfico en vehículo 4x4 y avistamiento nocturno de animales. Se incluyen dos excursiones diarias en el paquete, programadas por la pousada según el clima y las condiciones del Pantanal. Todas las actividades son acompañadas por guías bilingües (portugués/inglés) universitarios especializados en fauna y flora pantanera, además de guías de campo nativos de la región.',
    'La infraestructura completa incluye piscina, cancha de fútbol, polideportivo, sala con chimenea, DirecTV, internet, bar y tienda. El acceso a la pousada se realiza en bote o vehículo 4x4 según la temporada de aguas — una aventura que comienza desde la llegada.',
  ],
  shortDescription: 'Pousada completa en el Pantanal Sur con actividades ecológicas, safari fotográfico, pesca e instalaciones de ocio.',
  includedItems: [
    'Pensión completa (desayuno, almuerzo y cena)',
    '2 actividades ecológicas por día (programadas por la pousada)',
    'Habitación con aire acondicionado, baño privado y minibar',
    'Transporte privado Aeropuerto Campo Grande / Pantanal / Aeropuerto',
    'Acceso a la pousada (bote o 4x4 según la temporada)',
    'Guía bilingüe (portugués/inglés) especializado en vida silvestre del Pantanal',
    'Asistencia en el Aeropuerto Internacional de Campo Grande',
  ],
  keywords: ['pousada xaraes', 'pantanal sur', 'miranda', 'safari', 'pesca', 'ecoturismo', 'cabalgata', 'avistamiento nocturno'],
  categories: [pantanalEs, adventureEs],
  recommendedFor: [familiesEs],
};
