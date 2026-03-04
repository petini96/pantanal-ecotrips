import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { aquaticPt } from '../../categories/aquaticc';
import { adventurePt } from '../../categories/adventuree';
import { familiesEn } from '../../audiences/families';
import { aquaticEn } from '../../categories/aquaticc';
import { adventureEn } from '../../categories/adventuree';
import { familiesEs } from '../../audiences/families';
import { aquaticEs } from '../../categories/aquaticc';
import { adventureEs } from '../../categories/adventuree';

const img = `${TOURS_BUCKET_NAME}/porto-da-ilha/img1.webp`

const commonData = {
  id: 'TOUR-PI-01',
  slug: 'porto-da-ilha',
  mainImage: img,
  durationInHours: 4,
  minAge: 5,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: bonito
};

export const portoDaIlhaPt: Tour = {
    ...commonData,
    name: 'Porto da Ilha (Eco Park)',
    description: [
        'Porto da Ilha – O Eco Park Porto da Ilha oferece diferentes passeios aquáticos ao ar livre e a oportunidade de apreciar as belezas naturais do Rio Formoso e sua maravilhosa fauna: peixes, pássaros, mamíferos e cachoeiras incríveis, de águas calmas e cristalinas.',
        'A estrutura conta com restaurante, sanitários e uma série de atividades (vendidas separadamente).'
    ],
    shortDescription: 'Complexo de atividades aquáticas no Rio Formoso: Bote, Boia Cross e Balneário.',
    includedItems: ['Acesso ao balneário', 'Atividades contratadas (Bote, Boia Cross, etc)'],
    keywords: ['boia cross', 'bote', 'rio formoso', 'balneario', 'duck'],
    categories: [aquaticPt, adventurePt],
    recommendedFor: [familiesPt]
};

export const portoDaIlhaEn: Tour = {
    ...commonData,
    name: 'Porto da Ilha (Eco Park)',
    description: [
        'Porto da Ilha – The Eco Park Porto da Ilha offers different outdoor water tours and the opportunity to appreciate the natural beauties of the Rio Formoso and its wonderful fauna: fish, birds, mammals and incredible waterfalls, with calm and crystal clear waters.',
        'The structure has a restaurant, restrooms and a series of activities (sold separately).'
    ],
    shortDescription: 'Complex of water activities on the Formoso River: Boat, Tubing and Resort.',
    includedItems: ['Access to the resort', 'Contracted activities (Boat, Tubing, etc)'],
    keywords: ['tubing', 'boat', 'formoso river', 'resort', 'duck'],
    categories: [aquaticEn, adventureEn],
    recommendedFor: [familiesEn]
};

export const portoDaIlhaEs: Tour = {
    ...commonData,
    name: 'Porto da Ilha (Eco Park)',
    description: [
        'Porto da Ilha – El Eco Park Porto da Ilha ofrece diferentes paseos acuáticos al aire libre y la oportunidad de apreciar las bellezas naturales del Río Formoso y su maravillosa fauna: peces, aves, mamíferos y cascadas increíbles, de aguas tranquilas y cristalinas.',
        'La estructura cuenta con restaurante, sanitarios y una serie de actividades (vendidas por separado).'
    ],
    shortDescription: 'Complejo de actividades acuáticas en el Río Formoso: Bote, Boia Cross y Balneario.',
    includedItems: ['Acceso al balneario', 'Actividades contratadas (Bote, Boia Cross, etc)'],
    keywords: ['boia cross', 'bote', 'río formoso', 'balneario', 'duck'],
    categories: [aquaticEs, adventureEs],
    recommendedFor: [familiesEs]
};
