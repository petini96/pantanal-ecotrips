import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${TOURS_BUCKET_NAME}/balneario-do-sol/img1.webp`

export const balnearioDoSolEs: Tour = {
  id: 'TOUR-BDS-01',
  slug: 'balneario-do-sol',
  name: 'Balneário do Sol',
  description: [
    'El Balneario do Sol ofrece la posibilidad de nadar en la piscina o el propio río Formoso con varias especies de peces y lindas cascadas formando parte del escenario.',
    'Posee cancha de vóley, fútbol de arena, tirolesa, plataforma de salto y restaurante, además de quioscos con parrillas y sanitarios (adaptados para personas con discapacidad).',
    'Es un lugar apropiado para pasar el día y refrescarse.'
  ],
  shortDescription: 'Ocio completo con cascadas, parrillas y actividades para la familia.',
  mainImage: img,
  durationInHours: 6,
  minAge: 0,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Entrada y uso de la infraestructura'],
  keywords: ['balneario', 'familia', 'parrilla', 'río formoso'],
  categories: [aquaticEs],
  recommendedFor: [familiesEs],
  city: bonito
};
