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
    'Bio Park is a wildlife shelter open to visitation, which participates in important conservation projects for endangered species such as the maned wolf and the tapir.',
    'The visit itinerary, conducted by a guide, presents the animals that are unable to return to nature and the story of each one, awakening environmental awareness.',
    'A true lesson of knowledge and respect for nature.'
  ],
  shortDescription: 'Refuge for wild animals and petting zoo with mini animals.',
  mainImage: img,
  durationInHours: 2,
  minAge: 0,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FARM],
  includedItems: ['Guide accompaniment'],
  keywords: ['animals', 'shelter', 'education', 'petting zoo'],
  categories: [ecotourismEn],
  recommendedFor: [familiesEn],
  city: bonito
};
