import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/focagem-notura-animais/img1.webp`

export const nocturnalSpotlightingEs: Tour = {
  id: 'TOUR-FSF-NS-01',
  slug: 'focagem-notura-animais-em-miranda',
  name: 'Enfoque Nocturno de Animales Silvestres',
  description: ['Un safari en vehículo abierto después de la cena para observar animales de hábitos nocturnos. Con la ayuda de una potente linterna, es posible avistar caimanes, búhos, capibaras e incluso jaguares.'],
  shortDescription: 'Un safari en vehículo abierto después de la cena para observar animales de hábitos nocturnos. Con la ayuda de una potente linterna, es posible avistar caimanes, búhos, capibaras e incluso jaguares.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Vehículo de safari', 'Linterna de enfoque', 'Guía'],
  keywords: ['enfoque', 'nocturno', 'safari', 'animales'],
  categories: [ecotourismEs],
  recommendedFor: [familiesEs],
  city: miranda
};

