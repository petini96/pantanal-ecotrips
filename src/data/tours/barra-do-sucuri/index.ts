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
const img = `${TOURS_BUCKET_NAME}/barra-do-sucuri/img1.webp`

const commonData = {
  id: 'TOUR-BS-01',
  slug: 'barra-do-sucuri',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '17km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  city: bonito
};

export const barraDoSucuriPt: Tour = {
    ...commonData,
    name: 'Barra do Sucuri',
    description: [
        'O passeio começa subindo o rio Sucuri num delicioso passeio de barco elétrico de aprox. 1.300m conhecendo a fauna e flora local.',
        'O retorno acontece em flutuação com os peixes e a vegetação subaquática, terminando no encontro das águas do Rio Sucuri com o Rio Formoso. O passeio conta com um barco de apoio durante todo percurso.',
        'Tem restaurante no Refúgio da Barra (balneário que fica ao lado da Barra do Sucuri), a permanência no balneário não está inclusa.'
    ],
    shortDescription: 'Subida de barco elétrico pelo Rio Sucuri e descida em flutuação cristalina.',
    groupLimit: 7,
    includedItems: ['Acompanhamento de guia', 'Equipamentos de flutuação', 'Barco de apoio'],
    keywords: ['flutuação', 'rio sucuri', 'barco elétrico', 'águas cristalinas'],
    categories: [floatingPt],
    recommendedFor: [familiesPt, couplesPt]
};

export const barraDoSucuriEn: Tour = {
    ...commonData,
    name: 'Barra do Sucuri',
    description: [
        'The tour begins going up the Sucuri River in a delightful electric boat ride of approx. 1,300m getting to know the local fauna and flora.',
        'The return happens floating with the fish and underwater vegetation, ending at the meeting of the waters of the Sucuri River with the Formoso River. The tour has a support boat throughout the course.',
        'There is a restaurant at Refúgio da Barra (resort next to Barra do Sucuri), staying at the resort is not included.'
    ],
    shortDescription: 'Electric boat trip up the Sucuri River and snorkeling down in crystal clear water.',
    groupLimit: 7,
    includedItems: ['Guide accompaniment', 'Snorkeling equipment', 'Support boat'],
    keywords: ['snorkeling', 'sucuri river', 'electric boat', 'crystal clear waters'],
    categories: [floatingEn],
    recommendedFor: [familiesEn, couplesEn]
};

export const barraDoSucuriEs: Tour = {
    ...commonData,
    name: 'Barra do Sucuri',
    description: [
        'El paseo comienza subiendo el río Sucuri en un delicioso paseo en barco eléctrico de aprox. 1.300m conociendo la fauna y flora local.',
        'El regreso se realiza flotando con los peces y la vegetación subacuática, terminando en el encuentro de las aguas del Río Sucuri con el Río Formoso. El paseo cuenta con un barco de apoyo durante todo el recorrido.',
        'Hay restaurante en el Refúgio da Barra (balneario que está al lado de Barra do Sucuri), la permanencia en el balneario no está incluida.'
    ],
    shortDescription: 'Subida en barco eléctrico por el Río Sucuri y descenso en flotación cristalina.',
    groupLimit: 7,
    includedItems: ['Acompañamiento de guía', 'Equipos de flotación', 'Barco de apoyo'],
    keywords: ['flotación', 'río sucuri', 'barco eléctrico', 'aguas cristalinas'],
    categories: [floatingEs],
    recommendedFor: [familiesEs, couplesEs]
};
