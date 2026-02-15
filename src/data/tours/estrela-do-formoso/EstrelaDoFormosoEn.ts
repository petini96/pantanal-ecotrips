import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';

const img = `${TOURS_BUCKET_NAME}/estrela-do-formoso/img1.webp`

export const estrelaDoFormosoEn: Tour = {
  id: 'TOUR-EF-01',
  slug: 'estrela-do-formoso',
  name: 'Estrela do Formoso',
  description: [
    'Estrela do Formoso is the ideal tour for all ages. The trails inside and around the Island take you to 07 bathing decks on the main river of the city, the Rio Formoso, known for its crystal clear waters and thriving aquatic life with fish of the species piraputanga, curimba and dourado that transform the water into the ideal setting to take “that” refreshing bath.',
    'In addition to all the natural beauty, we have reception, restrooms, rest area and parking. For use of the Pergolas, consult values and availability. There are Stand Up and Kayak tour options, with an average duration of 1h.'
  ],
  shortDescription: 'Exclusive resort with decks on the Formoso River and private environment.',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '17km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Access to decks and trails'],
  keywords: ['resort', 'exclusive', 'rio formoso', 'decks'],
  categories: [aquaticEn],
  recommendedFor: [familiesEn],
  city: bonito
};
