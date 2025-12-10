import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';

const img = `${TOURS_BUCKET_NAME}/pesca-piranha/img1.webp`

export const piranhaFishingEn: Tour = {
  id: 'TOUR-PF-01',
  slug: 'pesca-piranha-em-miranda',
  name: 'Piranha Fishing',
  description: 'A fun and traditional piranha fishing activity in the waters of the Pantanal using bamboo rods. What you catch can be prepared for dinner!',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Fishing equipment', 'Bait', 'Guide accompaniment'],
  keywords: ['fishing', 'piranha', 'river', 'pantanal'],
  categories: [aquaticEn],
  recommendedFor: [familiesEn],
  city: miranda
};