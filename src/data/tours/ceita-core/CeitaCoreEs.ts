import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${TOURS_BUCKET_NAME}/ceita-core/img1.webp`

export const ceitaCoreEs: Tour = {
  id: 'TOUR-CC-01',
  slug: 'ceita-core',
  name: 'Ceita Corê',
  description: [
    'Sendero interpretativo por pasarelas y puentes colgantes, con paradas para baño en cascadas y piscinas naturales del Río Chapeninha.',
    'Visita al nacimiento del Río Chapeninha, donde existe una cueva inundada explorada hasta 155m de profundidad.',
    'Estancia con almuerzo típico e infraestructura de ocio.'
  ],
  shortDescription: 'Sendero con cascadas y visita al nacimiento misterioso del Río Chapeninha.',
  mainImage: img,
  durationInHours: 6,
  distanceFromCity: '36km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER, EnvironmentType.FARM],
  includedItems: ['Acompañamiento de guía', 'Almuerzo', 'Uso de la infraestructura'],
  keywords: ['cascadas', 'sendero', 'nacimiento', 'estancia'],
  categories: [ecotourismEs, aquaticEs],
  recommendedFor: [familiesEs],
  city: bonito
};
