import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { familiesEn } from '../../audiences/families';
import { familiesEs } from '../../audiences/families';

import { pantanalPt, pantanalEn, pantanalEs } from "src/data/categories/pantanal";
const img = `${TOURS_BUCKET_NAME}/pescaria-piranha/img1.webp`

const commonData = {
  id: 'TOUR-FSF-CPF-01',
  slug: 'pescaria-piranha-em-miranda',
  mainImage: img,
  durationInHours: 2,
  minAge: 0,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: miranda
};

export const chalanaPiranhaFishingPt: Tour = {
    ...commonData,
    name: 'Passeio de Chalana com Pescaria de Piranhas',
    description: [
        'Realizado no Corixo São Domingos, um braço do Rio Miranda. Durante o passeio é possível observar a fauna e flora ribeirinha e realizar a pescaria artesanal de piranhas. Duração aproximada de 2:00 horas.'
    ],
    shortDescription: 'Passeio de Chalana no Corixo São Domingos com pescaria artesanal de piranhas e observação de fauna.',
    includedItems: ['Barco Chalana', 'Equipamento de pesca', 'Guia'],
    keywords: ['chalana', 'pesca', 'piranha', 'rio miranda', 'corixo'],
    categories: [pantanalPt],
    recommendedFor: [familiesPt]
};

export const chalanaPiranhaFishingEn: Tour = {
    ...commonData,
    name: 'Chalana Boat Trip with Piranha Fishing',
    description: [
        'Carried out in the Corixo São Domingos, a branch of the Miranda River. During the tour it is possible to observe the riparian fauna and flora and perform artisanal piranha fishing. Approximate duration of 2:00 hours.'
    ],
    shortDescription: 'Chalana boat tour in Corixo São Domingos with artisanal piranha fishing and fauna observation.',
    includedItems: ['Chalana Boat', 'Fishing equipment', 'Guide'],
    keywords: ['chalana', 'fishing', 'piranha', 'miranda river', 'corixo'],
    categories: [pantanalEn],
    recommendedFor: [familiesEn]
};

export const chalanaPiranhaFishingEs: Tour = {
    ...commonData,
    name: 'Paseo en Chalana con Pesca de Pirañas',
    description: [
        'Realizado en el Corixo São Domingos, un brazo del Río Miranda. Durante el paseo es posible observar la fauna y flora ribereña y realizar la pesca artesanal de pirañas. Duración aproximada de 2:00 horas.'
    ],
    shortDescription: 'Paseo en Chalana en el Corixo São Domingos con pesca artesanal de pirañas y observación de fauna.',
    includedItems: ['Barco Chalana', 'Equipo de pesca', 'Guía'],
    keywords: ['chalana', 'pesca', 'piraña', 'río miranda', 'corixo'],
    categories: [pantanalEs],
    recommendedFor: [familiesEs]
};
