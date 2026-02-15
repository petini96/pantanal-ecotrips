import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/bio-park/img1.webp`

export const bioParkEn: Tour = {
  id: 'TOUR-BP-01',
  slug: 'bio-park',
  name: 'Bio Park',
  description: [
    'Wild animal shelter that combines conservation and environmental education. Animals that cannot return to the wild find a home here.',
    'It also has a petting zoo with mini animals for interaction with children.',
    'Light and educational tour.'
  ],
  shortDescription: 'Refuge for wild animals and petting zoo with mini animals.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FARM],
  includedItems: ['Guide accompaniment'],
  keywords: ['animals', 'shelter', 'education', 'petting zoo'],
  categories: [ecotourismEn],
  recommendedFor: [familiesEn],
  city: bonito
};
