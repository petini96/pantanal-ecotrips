import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { groupsPt } from '../../audiences/groups';
import { adventurePt } from '../../categories/adventuree';
import { familiesEn } from '../../audiences/families';
import { groupsEn } from '../../audiences/groups';
import { adventureEn } from '../../categories/adventuree';
import { familiesEs } from '../../audiences/families';
import { groupsEs } from '../../audiences/groups';
import { adventureEs } from '../../categories/adventuree';

const img = `${TOURS_BUCKET_NAME}/cabanas-arvorismo/img1.jpg`

const commonData = {
  id: 'TOUR-CA-01',
  slug: 'cabanas-arvorismo-em-bonito',
  mainImage: img,
  durationInHours: 3,
  minAge: 6,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER],
  city: bonito
};

export const cabanasArvorismoPt: Tour = {
    ...commonData,
    name: 'Cabanas Arvorismo',
    description: [
        'O Arvorismo Cabanas é um percurso com 300 metros de extensão e altura variando de 4 a 15 metros. O visitante passa por 20 atividades diferentes, e duas tirolesas, sendo a última uma tirolesa aquática no Rio Formoso.'
    ],
    shortDescription: 'Percurso de arvorismo com 300m e 20 estações, incluindo tirolesas e tirolesa aquática no Rio Formoso.',
    includedItems: ['Equipamentos de segurança (arnês, capacete)', 'Treinamento', 'Guia'],
    keywords: ['arvorismo', 'tirolesa', 'aventura', 'rio formoso'],
    categories: [adventurePt],
    recommendedFor: [familiesPt, groupsPt]
};

export const cabanasArvorismoEn: Tour = {
    ...commonData,
    name: 'Cabanas Treetop Circuit',
    description: [
        'Arvorismo Cabanas is a course 300 meters long and ranging in height from 4 to 15 meters. The visitor goes through 20 different activities, and two zip lines, the last being an aquatic zip line on the Formoso River.'
    ],
    shortDescription: 'Tree climbing course with 300m and 20 stations, including zip lines and aquatic zip line on the Formoso River.',
    includedItems: ['Safety equipment (harness, helmet)', 'Training', 'Guide'],
    keywords: ['tree climbing', 'zip line', 'adventure', 'rio formoso'],
    categories: [adventureEn],
    recommendedFor: [familiesEn, groupsEn]
};

export const cabanasArvorismoEs: Tour = {
    ...commonData,
    name: 'Cabanas Arborismo',
    description: [
        'Arvorismo Cabanas es un recorrido de 300 metros de longitud y altura que varía de 4 a 15 metros. El visitante pasa por 20 actividades diferentes, y dos tirolesas, siendo la última una tirolesa acuática en el Río Formoso.'
    ],
    shortDescription: 'Recorrido de arborismo con 300m y 20 estaciones, incluyendo tirolesas y tirolesa acuática en el Río Formoso.',
    includedItems: ['Equipos de seguridad (arnés, casco)', 'Entrenamiento', 'Guía'],
    keywords: ['arborismo', 'tirolesa', 'aventura', 'río formoso'],
    categories: [adventureEs],
    recommendedFor: [familiesEs, groupsEs]
};
