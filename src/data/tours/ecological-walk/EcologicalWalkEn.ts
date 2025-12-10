import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/caminhada-ecologica/img1.webp`

export const ecologicalWalkEn: Tour = {
  id: 'TOUR-EW-01',
  slug: 'caminhada-ecologica-em-miranda',
  name: 'Ecological Walk (Jungle and Fields)',
  description: 'An interpretive walking trail through different Pantanal environments, such as forest patches and open fields, learning about the flora and small animals.',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.FOREST, EnvironmentType.FIELDS],
  includedItems: ['Guide accompaniment'],
  keywords: ['walk', 'trail', 'ecological', 'flora'],
  categories: [ecotourismEn],
  recommendedFor: [],
  city: miranda
};