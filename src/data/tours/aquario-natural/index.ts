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
const img = `${TOURS_BUCKET_NAME}/aquario-natural/img1.webp`

const commonData = {
  id: 'TOUR-AN-01',
  slug: 'aquario-natural',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '8km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  city: bonito
};

export const aquarioNaturalPt: Tour = {
    ...commonData,
    name: 'Aquário Natural',
    description: [
        'Iniciando com uma caminhada de aprox. 700m em mata ciliar até a nascente do rio Baia Bonita, onde é realizada a flutuação de aprox. 800m apreciando a diversidade de peixes e plantas subaquáticas.',
        'Na volta pela trilha dos animais aprox. 1.000m o visitante poderá avistar pássaros e animais silvestres e saltar da tirolesa no encontro dos rios. O passeio conta com um barco de apoio durante todo percurso.',
        'Tem restaurante no atrativo, consumo pago a parte.'
    ],
    shortDescription: 'Flutuação de águas cristalinas na nascente do rio Baia Bonita, com trilha e rica vida subaquática.',
    groupLimit: 9,
    includedItems: ['Acompanhamento de guia', 'Equipamentos (máscara, snorkel, roupa de neoprene)', 'Barco de apoio'],
    keywords: ['flutuação', 'peixes', 'nascente', 'trilha', 'tirolesa'],
    categories: [floatingPt],
    recommendedFor: [familiesPt, couplesPt]
};

export const aquarioNaturalEn: Tour = {
    ...commonData,
    name: 'Natural Aquarium',
    description: [
        'Starting with a walk of approx. 700m in the riparian forest to the source of the Baia Bonita river, where the floating of approx. 800m takes place, appreciating the diversity of fish and underwater plants.',
        'On the way back along the animal trail (approx. 1,000m), visitors can spot birds and wild animals and jump from the zip line at the meeting of the rivers. The tour has a support boat throughout the course.',
        'Where is a restaurant at the attraction, consumption paid separately.'
    ],
    shortDescription: 'Snorkeling in crystal clear waters at the source of the Baia Bonita river, with a trail and rich underwater life.',
    groupLimit: 9,
    includedItems: ['Guide accompaniment', 'Equipment (mask, snorkel, wetsuit)', 'Support boat'],
    keywords: ['snorkeling', 'fish', 'spring', 'trail', 'zipline'],
    categories: [floatingEn],
    recommendedFor: [familiesEn, couplesEn]
};

export const aquarioNaturalEs: Tour = {
    ...commonData,
    name: 'Aquário Natural',
    description: [
        'Comenzando con una caminata de aprox. 700m en el bosque de galería hasta el nacimiento del río Baía Bonita, donde se realiza la flotación de aprox. 800m apreciando la diversidad de peces y plantas subacuáticas.',
        'Al regreso por el sendero de los animales (aprox. 1.000m), el visitante podrá avistar aves y animales silvestres y saltar en la tirolesa en el encuentro de los ríos. El paseo cuenta con un barco de apoyo durante todo el recorrido.',
        'Hay restaurante en el atractivo, consumo pagado aparte.'
    ],
    shortDescription: 'Flotación en aguas cristalinas en el nacimiento del río Baía Bonita, con sendero y rica vida subacuática.',
    groupLimit: 9,
    includedItems: ['Acompañamiento de guía', 'Equipos (máscara, snorkel, traje de neopreno)', 'Barco de apoyo'],
    keywords: ['flotación', 'peces', 'nacimiento', 'sendero', 'tirolesa'],
    categories: [floatingEs],
    recommendedFor: [familiesEs, couplesEs]
};
