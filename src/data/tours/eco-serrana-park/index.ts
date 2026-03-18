import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { trailsWaterfallsPt, trailsWaterfallsEn, trailsWaterfallsEs } from "src/data/categories/trails-waterfalls";

const img = `${TOURS_BUCKET_NAME}/eco-serrana-park/img1.webp`

const commonData = {
  id: 'TOUR-ESP-01',
  slug: 'eco-serrana-park',
  mainImage: img,
  durationInHours: 5,
  minAge: 0,
  distanceFromCity: '92km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST, EnvironmentType.WATERFALL, EnvironmentType.RIVER],
  city: miranda
};

export const ecoSerranaParkPt: Tour = {
    ...commonData,
    name: 'Eco Serrana Park (Trilhas)',
    description: [
        'O Eco Serrana Park oferece uma experiência selvagem e autêntica em meio ao Cânion do Rio Salobra.',
        'O atrativo oferece três opções principais de trilhas:',
        '• Trilha do Funil (2.000m - 2h30): Leve, ideal para todas as idades com 4 pontos de banho.',
        '• Cânion do Rio Salobra (7km - 5h): Trilha moderada de aquatrekking com 6 paradas para banho em cenários deslumbrantes.',
        '• Muralha de Jericó (3,6km - 4h): Trilha moderada com aquatrekking e 4 paradas para banho.',
        'Incluso um delicioso almoço caipira para todas as opções. Idade mínima: Livre (Funil) e 06 anos (Cânion/Muralha).'
    ],
    shortDescription: 'Experiência de aquatrekking e trilhas selvagens no Cânion do Rio Salobra.',
    includedItems: ['Almoço caipira', 'Acompanhamento de guia especializado', 'Seguro de acidentes'],
    keywords: ['eco serrana park', 'salobra', 'canion', 'aquatrekking', 'trilha', 'natureza'],
    categories: [trailsWaterfallsPt],
    recommendedFor: []
};

export const ecoSerranaParkEn: Tour = {
    ...commonData,
    name: 'Eco Serrana Park (Trails)',
    description: [
        'Eco Serrana Park offers a wild and authentic experience in the middle of the Salobra River Canyon.',
        'The attraction offers three main trail options:',
        '• Funnel Trail (2,000m - 2h30): Light, ideal for all ages with 4 swimming spots.',
        '• Salobra River Canyon (7km - 5h): Moderate aquatrekking trail with 6 swimming stops in stunning scenery.',
        '• Muralha de Jericó (3.6km - 4h): Moderate trail with aquatrekking and 4 swimming stops.',
        'A delicious country lunch is included for all options. Minimum age: Free (Funnel) and 06 years old (Canyon/Muralha).'
    ],
    shortDescription: 'Aquatrekking and wild trails experience in the Salobra River Canyon.',
    includedItems: ['Country lunch', 'Specialized guide accompaniment', 'Accident insurance'],
    keywords: ['eco serrana park', 'salobra', 'canyon', 'aquatrekking', 'trail', 'nature'],
    categories: [trailsWaterfallsEn],
    recommendedFor: []
};

export const ecoSerranaParkEs: Tour = {
    ...commonData,
    name: 'Eco Serrana Park (Senderos)',
    description: [
        'Eco Serrana Park ofrece una experiencia salvaje y auténtica en medio del Cañón del Río Salobra.',
        'El atractivo ofrece tres opciones principales de senderos:',
        '• Sendero del Embudo (2.000m - 2h30): Ligero, ideal para todas las edades con 4 puntos de baño.',
        '• Cañón del Río Salobra (7km - 5h): Sendero moderado de aquatrekking con 6 paradas para baño en escenarios deslumbrantes.',
        '• Muralla de Jericó (3,6km - 4h): Sendero moderado con aquatrekking y 4 paradas para baño.',
        'Incluye un delicioso almuerzo de campo para todas las opciones. Edad mínima: Libre (Embudo) y 06 años (Cañón/Muralla).'
    ],
    shortDescription: 'Experiencia de aquatrekking y senderos salvajes en el Cañón del Río Salobra.',
    includedItems: ['Almuerzo de campo', 'Acompañamiento de guía especializado', 'Seguro de accidentes'],
    keywords: ['eco serrana park', 'salobra', 'cañon', 'aquatrekking', 'sendero', 'naturaleza'],
    categories: [trailsWaterfallsEs],
    recommendedFor: []
};
