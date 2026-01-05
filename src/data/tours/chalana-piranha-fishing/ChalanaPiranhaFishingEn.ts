import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/pescaria-piranha/img1.webp`

export const chalanaPiranhaFishingEn: Tour = {
  id: 'TOUR-FSF-CPF-01',
  slug: 'pescaria-piranha-em-miranda',
  name: 'Chalana Boat Trip with Piranha Fishing',
  description: ['Navigation on a typical "chalana" boat along the Miranda River, with a stop for the traditional and fun piranha fishing. Ideal for watching aquatic birds.'],
  shortDescription: 'Navigation on a typical "chalana" boat along the Miranda River, with a stop for the traditional and fun piranha fishing. Ideal for watching aquatic birds.',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Chalana Boat', 'Fishing equipment', 'Guide'],
  keywords: ['chalana', 'fishing', 'piranha', 'miranda river'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn],
  city: miranda
};

