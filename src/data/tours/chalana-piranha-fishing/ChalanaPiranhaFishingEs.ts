import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/pescaria-piranha/img1.webp`

export const chalanaPiranhaFishingEs: Tour = {
  id: 'TOUR-FSF-CPF-01',
  slug: 'pescaria-piranha-em-miranda',
  name: 'Paseo en Chalana con Pesca de Pirañas',
  description: [
    'Navegación en barco típico "chalana" por el Río Miranda, con una parada para la tradicional y divertida pesca de pirañas. Ideal para la observación de aves acuáticas.'
  ],
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Barco Chalana', 'Equipo de pesca', 'Guía'],
  keywords: ['chalana', 'pesca', 'piraña', 'río miranda'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs],
  city: miranda
};