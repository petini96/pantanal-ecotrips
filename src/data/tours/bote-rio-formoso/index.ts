import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { groupsPt } from '../../audiences/groups';
import { familiesEn } from '../../audiences/families';
import { groupsEn } from '../../audiences/groups';
import { familiesEs } from '../../audiences/families';
import { groupsEs } from '../../audiences/groups';

import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";
const img = `${GENERAL_BUCKET_NAME}/gallery/jungle-lodge/img49.jpg`

const commonData = {
  id: 'TOUR-BRF-01',
  slug: 'bote-rio-formoso-em-bonito',
  mainImage: img,
  durationInHours: 4,
  minAge: 5,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL],
  city: bonito
};

export const boteRioFormosoPt: Tour = {
    ...commonData,
    name: 'Bote no Rio Formoso',
    description: [
        'O passeio de bote é realizado em botes de borracha para até 12 pessoas, em percurso de 6 km pelo Rio Formoso, passando por 3 cachoeiras e 2 corredeiras. Nas margens do rio avista-se aves e animais silvestres.'
    ],
    shortDescription: 'Descida de 6km em botes infláveis por um dos principais rios da região, passando por cachoeiras e corredeiras.',
    groupLimit: 12,
    includedItems: ['Colete salva-vidas', 'Acompanhamento de guia'],
    keywords: ['bote', 'rio formoso', 'corredeira', 'cachoeira'],
    categories: [adventurePt],
    recommendedFor: [familiesPt, groupsPt]
};

export const boteRioFormosoEn: Tour = {
    ...commonData,
    name: 'Rafting on the Formoso River',
    description: [
        'The dinghy tour is carried out in rubber boats for up to 12 people, on a 6 km route along the Rio Formoso, passing through 3 waterfalls and 2 rapids. On the river banks, birds and wild animals can be seen.'
    ],
    shortDescription: 'Descent of 6km in inflatable boats along one of the main rivers of the region, passing through waterfalls and rapids.',
    groupLimit: 12,
    includedItems: ['Life jacket', 'Guide accompaniment'],
    keywords: ['dinghy', 'rio formoso', 'rapids', 'waterfall'],
    categories: [adventureEn],
    recommendedFor: [familiesEn, groupsEn]
};

export const boteRioFormosoEs: Tour = {
    ...commonData,
    name: 'Bote en el Río Formoso',
    description: [
        'El paseo en bote se realiza en botes de goma para hasta 12 personas, en un recorrido de 6 km por el Río Formoso, pasando por 3 cascadas y 2 rápidos. En las orillas del río se avistan aves y animales silvestres.'
    ],
    shortDescription: 'Descenso de 6km en botes inflables por uno de los principales ríos de la región, pasando por cascadas y rápidos.',
    groupLimit: 12,
    includedItems: ['Chaleco salvavidas', 'Acompañamiento de guía'],
    keywords: ['bote', 'río formoso', 'rápidos', 'cascada'],
    categories: [adventureEs],
    recommendedFor: [familiesEs, groupsEs]
};
