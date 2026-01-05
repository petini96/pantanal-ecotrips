import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/safari-fotografico/img1.webp`

export const ecologicalSafariEs: Tour = {
  id: 'TOUR-FSF-ES-01',
  slug: 'safari-fotografico-em-miranda',
  name: 'Safari Fotográfico',
  description: ['Paseo diurno en coche abierto por las áreas de la hacienda, como campos, cerrados y bosques, para la observación de la fauna y flora local. Una gran oportunidad para fotos.'],
  shortDescription: 'Paseo diurno en coche abierto por las áreas de la hacienda, como campos, cerrados y bosques, para la observación de la fauna y flora local. Una gran oportunidad para fotos.',
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Vehículo de safari', 'Guía'],
  keywords: ['safari', 'fotográfico', 'fauna', 'flora'],
  categories: [ecotourismEs, adventureEs],
  recommendedFor: [],
  city: miranda
};

