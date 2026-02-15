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
    'Amplia área de ocio a orillas del Río Formoso con cascadas, piscinas naturales e infraestructura completa.',
    'Ofrece quioscos con parrillas, canchas deportivas, tirolesa y trampolín.',
    'Excelente para que las familias pasen todo el día. Animales silvestres como monos y aves son frecuentes en el lugar.'
  ],
  shortDescription: 'Ocio completo con cascadas, parrillas y actividades para la familia.',
  mainImage: img,
  durationInHours: 6,
  distanceFromCity: '10km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Entrada y uso de la infraestructura'],
  keywords: ['balneario', 'familia', 'parrilla', 'río formoso'],
  categories: [aquaticEs],
  recommendedFor: [familiesEs],
  city: bonito
};
