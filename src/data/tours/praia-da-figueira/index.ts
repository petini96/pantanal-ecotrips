import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { resortsPt, resortsEn, resortsEs } from "src/data/categories/resorts";

const img = `${TOURS_BUCKET_NAME}/praia-da-figueira/img1.jpg`

const commonData = {
  id: 'TOUR-PDF-01',
  slug: 'praia-da-figueira',
  mainImage: img,
  durationInHours: 8,
  minAge: 0,
  distanceFromCity: '15.7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: bonito
};

export const praiaDaFigueiraPt: Tour = {
    ...commonData,
    name: 'Praia da Figueira (Balneário)',
    description: [
        'A Praia da Figueira é uma das maiores e mais completas áreas de lazer de Bonito, com uma lagoa de água corrente de mais de 60.000 m².',
        'O local conta com uma areia branca e águas calmas banhadas pelo Rio Formoso, oferecendo quiosques dentro d’água para o máximo relaxamento.',
        'A infraestrutura é impecável, incluindo bangalôs, redário, restaurante, bar, lanchonete, playground, parque aquático e wi-fi.',
        'Diversas atividades estão inclusas ou disponíveis no local, como tirolesa, caiaque e stand-up paddle. Ideal para todas as idades.'
    ],
    shortDescription: 'Lagoa de 60.000m² com areia branca, quiosques dentro d’água e lazer completo.',
    includedItems: ['Acesso ao balneário', 'Uso do parque aquático', 'Tirolesa', 'Infraestrutura de apoio'],
    keywords: ['praia da figueira', 'balneario', 'lagoa', 'rio formoso', 'lazer', 'familia'],
    categories: [resortsPt],
    recommendedFor: []
};

export const praiaDaFigueiraEn: Tour = {
    ...commonData,
    name: 'Praia da Figueira (Resort/Beach)',
    description: [
        'Praia da Figueira is one of the largest and most complete leisure areas in Bonito, with a running water lagoon of over 60,000 m².',
        'The site features white sand and calm waters bathed by the Formoso River, offering in-water kiosks for maximum relaxation.',
        'The infrastructure is impeccable, including bungalows, a hammock area, restaurant, bar, snack bar, playground, water park, and Wi-Fi.',
        'Several activities are included or available on-site, such as ziplining, kayaking, and stand-up paddleboarding. Ideal for all ages.'
    ],
    shortDescription: '60,000m² lagoon with white sand, in-water kiosks, and complete leisure.',
    includedItems: ['Resort access', 'Water park use', 'Zipline', 'Support infrastructure'],
    keywords: ['praia da figueira', 'resort', 'lagoon', 'rio formoso', 'leisure', 'family'],
    categories: [resortsEn],
    recommendedFor: []
};

export const praiaDaFigueiraEs: Tour = {
    ...commonData,
    name: 'Praia da Figueira (Balneario)',
    description: [
        'Praia da Figueira es una de las áreas de ocio más grandes y completas de Bonito, con una laguna de agua corriente de más de 60.000 m².',
        'El sitio cuenta con arena blanca y aguas tranquilas bañadas por el río Formoso, ofreciendo quioscos dentro del agua para el máximo relax.',
        'La infraestructura es impecable e incluye bungalows, zona de hamacas, restaurante, bar, cafetería, parque infantil, parque acuático y Wi-Fi.',
        'Varias actividades están incluidas o disponibles en el sitio, como tirolesa, kayak y stand-up paddle. Ideal para todas las edades.'
    ],
    shortDescription: 'Laguna de 60.000m² con arena blanca, quioscos dentro del agua y ocio completo.',
    includedItems: ['Acceso al balneario', 'Uso del parque acuático', 'Tirolesa', 'Infraestructura de apoyo'],
    keywords: ['praia da figueira', 'balneario', 'laguna', 'rio formoso', 'ocio', 'familia'],
    categories: [resortsEs],
    recommendedFor: []
};
