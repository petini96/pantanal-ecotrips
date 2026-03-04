import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { aquaticPt } from '../../categories/aquaticc';
import { familiesEn } from '../../audiences/families';
import { aquaticEn } from '../../categories/aquaticc';
import { familiesEs } from '../../audiences/families';
import { aquaticEs } from '../../categories/aquaticc';

const img = `${TOURS_BUCKET_NAME}/pesca-piranha/img1.webp`

const commonData = {
  id: 'TOUR-PF-01',
  slug: 'pesca-piranha-em-miranda',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: miranda
};

// PT-BR
export const piranhaFishingPt: Tour = {
    ...commonData,
    name: 'Pesca de Piranhas',
    description: [
        'Uma divertida e tradicional pescaria de piranhas nas águas do Pantanal, usando varas de bambu. O que você pescar pode ser preparado para o jantar!'
    ],
    shortDescription: 'Uma divertida e tradicional pescaria de piranhas nas águas do Pantanal, usando varas de bambu. O que você pescar pode ser preparado para o jantar!',
    includedItems: ['Equipamento de pesca', 'Iscas', 'Acompanhamento de guia'],
    keywords: ['pesca', 'piranha', 'rio', 'pantanal'],
    categories: [aquaticPt],
    recommendedFor: [familiesPt]
};

export const piranhaFishingEn: Tour = {
    ...commonData,
    name: 'Piranha Fishing',
    description: [
        'A fun and traditional piranha fishing activity in the waters of the Pantanal using bamboo rods. What you catch can be prepared for dinner!'
    ],
    shortDescription: 'A fun and traditional piranha fishing activity in the waters of the Pantanal using bamboo rods. What you catch can be prepared for dinner!',
    includedItems: ['Fishing equipment', 'Bait', 'Guide accompaniment'],
    keywords: ['fishing', 'piranha', 'river', 'pantanal'],
    categories: [aquaticEn],
    recommendedFor: [familiesEn]
};

export const piranhaFishingEs: Tour = {
    ...commonData,
    name: 'Pesca de Pirañas',
    description: [
        'Una divertida y tradicional pesca de pirañas en las aguas del Pantanal, usando cañas de bambú. ¡Lo que pesques puede ser preparado para la cena!'
    ],
    shortDescription: 'Una divertida y tradicional pesca de pirañas en las aguas del Pantanal, usando cañas de bambú. ¡Lo que pesques puede ser preparado para la cena!',
    includedItems: ['Equipo de pesca', 'Cebo', 'Acompañamiento de guía'],
    keywords: ['pesca', 'piraña', 'río', 'pantanal'],
    categories: [aquaticEs],
    recommendedFor: [familiesEs]
};
