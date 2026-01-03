import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';

const img = `${TOURS_BUCKET_NAME}/acampamento-na-selva/img1.webp`

export const jungleCampingEn: Tour = {
  id: 'TOUR-JC-01',
  slug: 'acampamento-na-selva-em-miranda',
  name: 'Camping in the Jungle (one night out)',
  description: [
     'A unique experience of spending the night in the Pantanal jungle in hammocks with mosquito nets. A total immersion in the sounds and nocturnal atmosphere of nature.'
  ],
  mainImage: img,
  durationInHours: 12,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.FOREST],
  includedItems: ['Hammock with mosquito net', 'Dinner and breakfast on site', 'Guide'],
  keywords: ['camping', 'jungle', 'hammock', 'adventure'],
  categories: [adventureEn],
  recommendedFor: [],
  city: miranda
};