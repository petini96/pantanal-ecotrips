import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples';
import { familiesPt } from '../../audiences/families';
import { couplesEn } from '../../audiences/couples';
import { familiesEn } from '../../audiences/families';
import { couplesEs } from '../../audiences/couples';
import { familiesEs } from '../../audiences/families';

import { floatingPt, floatingEn, floatingEs } from "src/data/categories/floating";
import { resortsEn, resortsEs, resortsPt } from 'src/data/categories/resorts';
const img = `${TOURS_BUCKET_NAME}/nascente-azul/img1.jpg`

const commonData = {
  id: 'TOUR-NA-01',
  slug: 'nascente-azul',
  mainImage: img,
  durationInHours: 4,
  minAge: 4,
  distanceFromCity: '32km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  city: bonito
};

export const nascenteAzulPt: Tour = {
    ...commonData,
    name: 'Nascente Azul',
    description: [
        'O passeio de flutuação tem início com uma caminhada leve de mais ou menos 1.000 metros pela mata ciliar, exuberante e diversificada com fauna e flora, tufas de calcário e bosque das figueiras.',
        'A nascente é repleta de peixes e plantas que ornamentam o ambiente e o receptivo em frente ao lago da Capela. Não possui barco de apoio e para quem vai fazer a flutuação, o Balneário Lago da Capela já está incluído.',
        'Possui Restaurante e um complexo com outras atividades, vendidas separadamente.'
    ],
    shortDescription: 'Flutuação em águas calmas e acesso ao Balneário Lago da Capela.',
    groupLimit: 10,
    includedItems: ['Acompanhamento de guia', 'Equipamentos de flutuação', 'Day use no balneário'],
    keywords: ['flutuação', 'balneario', 'nascente', 'peixes'],
    categories: [floatingPt, resortsPt],
    recommendedFor: [familiesPt, couplesPt]
};

export const nascenteAzulEn: Tour = {
    ...commonData,
    name: 'Nascente Azul (Blue Spring)',
    description: [
        'The floating tour begins with a light walk of about 1,000 meters through the riparian forest, exuberant and diversified with fauna and flora, limestone tufas and fig tree woods.',
        'The spring is full of fish and plants that ornament the environment and the reception in front of Lake Capela. It does not have a support boat and for those who will do the floating, the Lago da Capela Resort is already included.',
        'It has a Restaurant and a complex with other activities, sold separately.'
    ],
    shortDescription: 'Snorkeling in calm waters and access to Lago da Capela Resort.',
    groupLimit: 10,
    includedItems: ['Guide accompaniment', 'Snorkeling equipment', 'Day use at the resort'],
    keywords: ['snorkeling', 'resort', 'spring', 'fish'],
    categories: [floatingEn, resortsEn],
    recommendedFor: [familiesEn, couplesEn]
};

export const nascenteAzulEs: Tour = {
    ...commonData,
    name: 'Nascente Azul',
    description: [
        'El paseo de flotación comienza con una caminata ligera de más o menos 1.000 metros por el bosque de galería, exuberante y diversificado con fauna y flora, tobas calcáreas y bosque de higueras.',
        'El nacimiento está repleto de peces y plantas que ornamentan el ambiente y la recepción frente al lago de la Capela. No posee barco de apoyo y para quien va a hacer la flotación, el Balneario Lago da Capela ya está incluido.',
        'Posee Restaurante y un complejo con otras actividades, vendidas por separado.'
    ],
    shortDescription: 'Flotación en aguas tranquilas y acceso al Balneario Lago da Capela.',
    groupLimit: 10,
    includedItems: ['Acompañamiento de guía', 'Equipos de flotación', 'Day use en el balneario'],
    keywords: ['flotación', 'balneario', 'nacimiento', 'peces'],
    categories: [floatingEs, resortsEs],
    recommendedFor: [familiesEs, couplesEs]
};
