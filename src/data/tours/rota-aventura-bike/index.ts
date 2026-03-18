import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";

const img = `${TOURS_BUCKET_NAME}/rota-aventura-bike/img1.webp`

const commonData = {
  id: 'TOUR-RAB-01',
  slug: 'rota-aventura-bike',
  mainImage: img,
  durationInHours: 1.5,
  minAge: 11,
  distanceFromCity: 'Urbano',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER],
  city: bonito
};

export const rotaAventuraBikePt: Tour = {
    ...commonData,
    name: 'Rota Aventura (Cicloturismo)',
    description: [
        'O Rota Aventura proporciona ao visitante conhecer Bonito de uma forma diferente e sustentável através do cicloturismo.',
        'Oferecemos várias opções de trilhas com diferentes níveis de desafio e duração:',
        '• Rota Boiadeira (09 km - 1h30): Trilha por antiga estrada de comitivas.',
        '• Rota Catedral (09 km - 2h30): Inclui visitação à Gruta Catedral.',
        '• Rota Formoso (18 km - 3h30): Com paradas para banho no Rio Formoso.',
        '• Rota Estrela (32 km - 5h00): Percorre a estrada do Estrela com acesso ao rio.',
        'Restrições: Crianças a partir de 11 anos com altura mínima de membros inferiores de 60 cm.'
    ],
    shortDescription: 'Conheça Bonito pedalando por trilhas históricas e matas preservadas.',
    includedItems: ['Bicicleta e capacete', 'Acompanhamento de guia', 'Seguro contra acidentes', 'Entrada nos atrativos (conforme rota)'],
    keywords: ['bike', 'bicicleta', 'cicloturismo', 'bonito', 'aventura', 'sustentavel'],
    categories: [adventurePt],
    recommendedFor: []
};

export const rotaAventuraBikeEn: Tour = {
    ...commonData,
    name: 'Rota Aventura (Bike Tours/Cycle Tourism)',
    description: [
        'Rota Aventura provides visitors with a different and sustainable way to explore Bonito through cycle tourism.',
        'We offer several trail options with different levels of challenge and duration:',
        '• Boiadeira Route (09 km - 1h30): Trail through an old cattle drive road.',
        '• Catedral Route (09 km - 2h30): Includes a visit to the Catedral Cave.',
        '• Formoso Route (18 km - 3h30): With swimming stops at the Formoso River.',
        '• Estrela Route (32 km - 5h00): Travels along the Estrela road with river access.',
        'Restrictions: Children from 11 years old with a minimum lower limb height of 60 cm.'
    ],
    shortDescription: 'Explore Bonito by pedaling through historical trails and preserved forests.',
    includedItems: ['Bicycle and helmet', 'Guide accompaniment', 'Accident insurance', 'Entrance to attractions (as per route)'],
    keywords: ['bike', 'bicycle', 'cycle tourism', 'bonito', 'adventure', 'sustainable'],
    categories: [adventureEn],
    recommendedFor: []
};

export const rotaAventuraBikeEs: Tour = {
    ...commonData,
    name: 'Rota Aventura (Cicloturismo)',
    description: [
        'Rota Aventura ofrece a los visitantes una forma diferente y sostenible de conocer Bonito a través del cicloturismo.',
        'Ofrecemos varias opciones de senderos con diferentes niveles de desafío y duración:',
        '• Ruta Boiadeira (09 km - 1h30): Sendero por antiguo camino de comitivas.',
        '• Ruta Catedral (09 km - 2h30): Incluye visita a la Gruta Catedral.',
        '• Ruta Formoso (18 km - 3h30): Con paradas de baño en el río Formoso.',
        '• Ruta Estrela (32 km - 5h00): Recorre el camino Estrela con acceso al río.',
        'Restricciones: Niños a partir de 11 años con una altura mínima de miembros inferiores de 60 cm.'
    ],
    shortDescription: 'Conozca Bonito pedaleando por senderos históricos y bosques preservados.',
    includedItems: ['Bicicleta y casco', 'Acompañamiento de guía', 'Seguro contra accidentes', 'Entrada a atractivos (según ruta)'],
    keywords: ['bike', 'bicicleta', 'cicloturismo', 'bonito', 'aventura', 'sostenible'],
    categories: [adventureEs],
    recommendedFor: []
};
