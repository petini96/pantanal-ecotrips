import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { aquidauana } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { pantanalPt, pantanalEn, pantanalEs } from 'src/data/categories/pantanal';
import { contemplationPt, contemplationEn, contemplationEs } from 'src/data/categories/contemplation';
import { familiesPt, familiesEn, familiesEs } from 'src/data/audiences/families';

const img = `${TOURS_BUCKET_NAME}/pousada-aguape/img1.webp`;

const commonData = {
  id: 'TOUR-AQD-PA-01',
  slug: 'pousada-aguape',
  mainImage: img,
  durationInHours: 48,
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.RIVER, EnvironmentType.FARM],
  city: aquidauana,
  photos: [
    `${TOURS_BUCKET_NAME}/pousada-aguape/img1.webp`,
    `${TOURS_BUCKET_NAME}/pousada-aguape/img2.webp`,
    `${TOURS_BUCKET_NAME}/pousada-aguape/img3.webp`,
    `${TOURS_BUCKET_NAME}/pousada-aguape/img4.webp`,
    `${TOURS_BUCKET_NAME}/pousada-aguape/img5.webp`,
    `${TOURS_BUCKET_NAME}/pousada-aguape/img6.webp`,
  ],
};

export const pousadaAguapePt: Tour = {
  ...commonData,
  name: 'Pousada Aguapé',
  description: [
    'Área pertencente a uma mesma família há mais de 150 anos, desde 1989 a Pousada Aguapé diversificou suas atividades, dando continuidade à criação de gado e atuando no turismo ecológico e na pesca, além de apoiar projetos como o Projeto Arara Azul e a Pecuária Orgânica.',
    'Localizada em uma área rica formada por vegetação típica do Pantanal, mesclada com vegetação de cerrado, baías (lagos), vazantes, corixos e o Rio Aquidauana com exuberante mata ciliar — possibilitando que o visitante, em qualquer época do ano, na cheia ou na seca, conheça as riquezas do Pantanal. Ótimo ambiente para observadores de aves, com mais de 300 espécies já cadastradas.',
    'Na Aguapé o hóspede acorda com o canto dos pássaros e pode até tomar leite no curral ao amanhecer, com uma vista privilegiada do nascer e do pôr do sol no Pantanal. As atividades incluem: passeio a cavalo, caminhada por trilhas, safári fotográfico, passeio de barco a motor no rio Aquidauana, pescaria esportiva de piranhas, focagem noturna, manejo de gado e passeio de charrete — todas acompanhadas de guia local.',
  ],
  shortDescription: 'Pousada histórica no coração do Pantanal Sul, às margens do Rio Aquidauana, com ecoturismo, pesca e observação de aves.',
  includedItems: [
    'Pernoite em apartamento com ar-condicionado, frigobar e banheiro',
    'Café da manhã, almoço, café da tarde e jantar',
    '2 atividades por dia (programadas pela pousada)',
    'Guia regional em Português',
    'Transporte privativo',
    'Receptivo no Aeroporto Internacional de Campo Grande',
  ],
  keywords: ['pousada aguapé', 'pantanal sul', 'aquidauana', 'ecoturismo', 'pesca', 'observação de aves', 'arara azul'],
  categories: [pantanalPt, contemplationPt],
  recommendedFor: [familiesPt],
};

export const pousadaAguapeEn: Tour = {
  ...commonData,
  name: 'Pousada Aguapé',
  description: [
    'A property belonging to the same family for over 150 years, Pousada Aguapé has diversified its activities since 1989, continuing cattle ranching while embracing ecological tourism, fishing, and supporting conservation projects such as the Blue Macaw Project and Organic Livestock farming.',
    'Set in a richly biodiverse landscape of typical Pantanal vegetation blended with savanna, lakes, wetlands, streams and the Aquidauana River with its lush riparian forest — guests can explore the wonders of the Pantanal at any time of year, whether in the flood or dry season. A premier destination for birdwatchers, with over 300 registered species.',
    'At Aguapé, guests wake to birdsong and can even collect fresh milk at dawn while watching the sun rise over the Pantanal. Activities include horseback riding, nature trails, photographic safari, motorboat trips on the Aquidauana River, piranha sport fishing, nocturnal spotlighting, cattle management and cart rides — all accompanied by a local guide.',
  ],
  shortDescription: 'Historic lodge in the heart of the Southern Pantanal, on the banks of the Aquidauana River, with ecotourism, fishing and birdwatching.',
  includedItems: [
    'Overnight stay in room with air conditioning, mini-fridge and private bathroom',
    'Breakfast, lunch, afternoon snack and dinner',
    '2 activities per day (scheduled by the lodge)',
    'Regional guide in Portuguese and English',
    'Private transport',
    'Transfer assistance at Campo Grande International Airport',
  ],
  keywords: ['pousada aguapé', 'southern pantanal', 'aquidauana', 'ecotourism', 'fishing', 'birdwatching', 'blue macaw'],
  categories: [pantanalEn, contemplationEn],
  recommendedFor: [familiesEn],
};

export const pousadaAguapeEs: Tour = {
  ...commonData,
  name: 'Pousada Aguapé',
  description: [
    'Una propiedad perteneciente a la misma familia durante más de 150 años, la Pousada Aguapé diversificó sus actividades desde 1989, continuando con la ganadería e incorporando el turismo ecológico y la pesca, además de apoyar proyectos de conservación como el Proyecto Guacamayo Azul y la Ganadería Orgánica.',
    'Ubicada en una área rica formada por la vegetación típica del Pantanal, mezclada con vegetación de cerrado, lagunas, humedales, arroyos y el Río Aquidauana con una exuberante mata ciliar — permitiendo que el visitante, en cualquier época del año, en la inundación o en la sequía, conozca las riquezas del Pantanal. Excelente ambiente para la observación de aves, con más de 300 especies registradas.',
    'En Aguapé los huéspedes se despiertan con el canto de los pájaros y pueden incluso tomar leche recién ordeñada al amanecer, contemplando el espectacular amanecer y atardecer del Pantanal. Las actividades incluyen: cabalgata, senderismo, safari fotográfico, paseo en lancha por el Río Aquidauana, pesca deportiva de pirañas, avistamiento nocturno de animales, manejo de ganado y paseo en carreta — todas acompañadas de guía local.',
  ],
  shortDescription: 'Pousada histórica en el corazón del Pantanal Sur, a orillas del Río Aquidauana, con ecoturismo, pesca y observación de aves.',
  includedItems: [
    'Alojamiento en habitación con aire acondicionado, minibar y baño privado',
    'Desayuno, almuerzo, merienda y cena',
    '2 actividades por día (programadas por la pousada)',
    'Guía regional en Portugués',
    'Transporte privado',
    'Asistencia en el Aeropuerto Internacional de Campo Grande',
  ],
  keywords: ['pousada aguapé', 'pantanal sur', 'aquidauana', 'ecoturismo', 'pesca', 'observación de aves', 'guacamayo azul'],
  categories: [pantanalEs, contemplationEs],
  recommendedFor: [familiesEs],
};
