import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { aquaticPt } from '../../categories/aquaticc';
import { familiesEn } from '../../audiences/families';
import { aquaticEn } from '../../categories/aquaticc';
import { familiesEs } from '../../audiences/families';
import { aquaticEs } from '../../categories/aquaticc';

const img = `${TOURS_BUCKET_NAME}/balneario-do-sol/img1.avif`

const commonData = {
  id: 'TOUR-BDS-01',
  slug: 'balneario-do-sol',
  mainImage: img,
  durationInHours: 6,
  minAge: 0,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  city: bonito
};

export const balnearioDoSolPt: Tour = {
    ...commonData,
    name: 'Balneário do Sol',
    description: [
        'O Balneário do Sol oferece a possibilidade de nadar na piscina ou próprio rio Formoso com várias espécies de peixes e lindas cachoeiras fazendo parte do cenário.',
        'Possui quadra de vôlei, futebol de areia, carretilha, plataforma para salto e restaurante, além de quiosques com churrasqueiras e sanitários (adaptados para cadeirantes).',
        'É um lugar apropriado para passar o dia e se refrescar.'
    ],
    shortDescription: 'Lazer completo com cachoeiras, churrasqueiras e atividades para família.',
    includedItems: ['Entrada e uso da infraestrutura'],
    keywords: ['balneario', 'familia', 'churrasqueira', 'rio formoso'],
    categories: [aquaticPt],
    recommendedFor: [familiesPt]
};

export const balnearioDoSolEn: Tour = {
    ...commonData,
    name: 'Balneário do Sol',
    description: [
        'The Balneário do Sol offers the possibility of swimming in the pool or the Formoso River itself with various species of fish and beautiful waterfalls being part of the scenery.',
        'It has a volleyball court, sand soccer, zip line, jumping platform and restaurant, as well as kiosks with barbecue grills and restrooms (adapted for wheelchair users).',
        'It is an appropriate place to spend the day and refresh yourself.'
    ],
    shortDescription: 'Complete leisure with waterfalls, barbecue grills and activities for the family.',
    includedItems: ['Entrance and use of infrastructure'],
    keywords: ['resort', 'family', 'barbecue', 'formoso river'],
    categories: [aquaticEn],
    recommendedFor: [familiesEn]
};

export const balnearioDoSolEs: Tour = {
    ...commonData,
    name: 'Balneário do Sol',
    description: [
        'El Balneario do Sol ofrece la posibilidad de nadar en la piscina o el propio río Formoso con varias especies de peces y lindas cascadas formando parte del escenario.',
        'Posee cancha de vóley, fútbol de arena, tirolesa, plataforma de salto y restaurante, además de quioscos con parrillas y sanitarios (adaptados para personas con discapacidad).',
        'Es un lugar apropiado para pasar el día y refrescarse.'
    ],
    shortDescription: 'Ocio completo con cascadas, parrillas y actividades para la familia.',
    includedItems: ['Entrada y uso de la infraestructura'],
    keywords: ['balneario', 'familia', 'parrilla', 'río formoso'],
    categories: [aquaticEs],
    recommendedFor: [familiesEs]
};
