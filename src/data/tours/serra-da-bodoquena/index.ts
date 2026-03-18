import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bodoquena } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { trailsWaterfallsPt, trailsWaterfallsEn, trailsWaterfallsEs } from "src/data/categories/trails-waterfalls";
import { resortsPt, resortsEn, resortsEs } from "src/data/categories/resorts";

const img = `${TOURS_BUCKET_NAME}/serra-da-bodoquena/img1.webp`

const commonData = {
  id: 'TOUR-SB-01',
  slug: 'serra-da-bodoquena',
  mainImage: img,
  durationInHours: 8,
  minAge: 0,
  distanceFromCity: '74km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.WATERFALL, EnvironmentType.RIVER],
  city: bodoquena
};

export const serraDaBodoquenaPt: Tour = {
    ...commonData,
    name: 'Serra da Bodoquena (Trilha e Cachoeiras)',
    description: [
        'A Trilha da Fazenda Serra da Bodoquena é um percurso encantador de 2.500m em meio à mata preservada.',
        'O passeio oferece oito paradas refrescantes para banho em belíssimas cachoeiras e piscinas naturais do Rio Betione.',
        'Como diferencial, o atrativo possui uma completa área de balneário inclusa, com tirolesa, caiaques, stand-up paddle e infraestrutura de lazer.',
        'Idade mínima: Livre (até 5 anos acompanhados). O passeio inclui um delicioso almoço típico regional.'
    ],
    shortDescription: 'Trilha de 2,5km com 8 paradas para banho em cachoeiras e balneário completo.',
    includedItems: ['Almoço típico', 'Acesso ao balneário', 'Uso de caiaques e stand-up', 'Acompanhamento de guia'],
    keywords: ['serra da bodoquena', 'cachoeiras', 'trilha', 'rio betione', 'balneario', 'natureza'],
    categories: [trailsWaterfallsPt, resortsPt],
    recommendedFor: []
};

export const serraDaBodoquenaEn: Tour = {
    ...commonData,
    name: 'Serra da Bodoquena (Trail and Waterfalls)',
    description: [
        'The Serra da Bodoquena Farm Trail is an enchanting 2,500m route through preserved forest.',
        'The tour offers eight refreshing stops for swimming in beautiful waterfalls and natural pools of the Betione River.',
        'As a highlight, the attraction has a complete resort area included, with ziplining, kayaks, stand-up paddleboarding, and leisure infrastructure.',
        'Minimum age: Free (up to 5 years old accompanied). The tour includes a delicious typical regional lunch.'
    ],
    shortDescription: '2.5km trail with 8 swimming stops at waterfalls and a full resort area.',
    includedItems: ['Typical lunch', 'Resort access', 'Use of kayaks and stand-up', 'Guide accompaniment'],
    keywords: ['serra da bodoquena', 'waterfalls', 'trail', 'betione river', 'resort', 'nature'],
    categories: [trailsWaterfallsEn, resortsEn],
    recommendedFor: []
};

export const serraDaBodoquenaEs: Tour = {
    ...commonData,
    name: 'Serra da Bodoquena (Sendero y Cascadas)',
    description: [
        'El Sendero de la Fazenda Serra da Bodoquena es un recorrido encantador de 2.500 m en medio del bosque preservado.',
        'El recorrido ofrece ocho paradas refrescantes para nadar en hermosas cascadas y piscinas naturales del río Betione.',
        'Como diferencial, el atractivo cuenta con una completa área de balneario incluida, con tirolesa, kayaks, stand-up paddle e infraestructura de ocio.',
        'Edad mínima: Libre (hasta 5 años acompañados). El tour incluye un delicioso almuerzo típico regional.'
    ],
    shortDescription: 'Sendero de 2,5km con 8 paradas de baño en cascadas y balneario completo.',
    includedItems: ['Almuerzo típico', 'Acceso al balneario', 'Uso de kayaks y stand-up', 'Acompañamiento de guía'],
    keywords: ['serra da bodoquena', 'cascadas', 'sendero', 'rio betione', 'balneario', 'naturaleza'],
    categories: [trailsWaterfallsEs, resortsEs],
    recommendedFor: []
};
