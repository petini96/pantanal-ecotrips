import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { familiesEn } from '../../audiences/families';
import { familiesEs } from '../../audiences/families';

import { resortsPt, resortsEn, resortsEs } from "src/data/categories/resorts";
const img = `${TOURS_BUCKET_NAME}/balneario-municipal/img1.jpg`

const commonData = {
  id: 'TOUR-MUN-01',
  slug: 'balneario-municipal',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: bonito
};

export const balnearioMunicipalPt: Tour = {
    ...commonData,
    name: 'Balneário Municipal',
    description: [
        'Em um trecho privilegiado do rio formoso, em meio às águas cristalinas que permitem uma visão de peixes de cores e tamanho variados.',
        'O Balneário Municipal dispõe de estacionamento, quadras de vôlei e futebol de areia, lanchonetes e restaurantes, além de quiosques com churrasqueiras e sanitários (adaptados para cadeirantes).',
        'É um lugar apropriado para passar o dia e se refrescar.'
    ],
    shortDescription: 'Banho de rio com muitos peixes e infraestrutura de lazer próxima à cidade.',
    includedItems: ['Entrada'],
    keywords: ['balneario', 'peixes', 'rio formoso', 'lazer'],
    categories: [resortsPt],
    recommendedFor: [familiesPt]
};

export const balnearioMunicipalEn: Tour = {
    ...commonData,
    name: 'Balneário Municipal (Municipal Resort)',
    description: [
        'In a privileged stretch of the Rio Formoso, amidst crystal clear waters that allow a view of fish of varied colors and sizes.',
        'The Municipal Resort has parking, volleyball and sand soccer courts, snack bars and restaurants, as well as kiosks with barbecue grills and restrooms (adapted for wheelchair users).',
        'It is an appropriate place to spend the day and refresh yourself.'
    ],
    shortDescription: 'River bath with many fish and leisure infrastructure close to the city.',
    includedItems: ['Entrance'],
    keywords: ['resort', 'fish', 'rio formoso', 'leisure'],
    categories: [resortsEn],
    recommendedFor: [familiesEn]
};

export const balnearioMunicipalEs: Tour = {
    ...commonData,
    name: 'Balneário Municipal',
    description: [
        'En un tramo privilegiado del río Formoso, en medio de aguas cristalinas que permiten una visión de peces de colores y tamaños variados.',
        'El Balneario Municipal dispone de estacionamiento, canchas de vóley y fútbol de arena, cafeterías y restaurantes, además de quioscos con parrillas y sanitarios (adaptados para personas con discapacidad).',
        'Es un lugar apropiado para pasar el día y refrescarse.'
    ],
    shortDescription: 'Baño de río con muchos peces e infraestructura de ocio cerca de la ciudad.',
    includedItems: ['Entrada'],
    keywords: ['balneario', 'peces', 'río formoso', 'ocio'],
    categories: [resortsEs],
    recommendedFor: [familiesEs]
};
