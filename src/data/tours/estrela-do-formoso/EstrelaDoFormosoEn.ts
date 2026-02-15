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
    'An exclusive refuge on the banks of the Formoso River. The island has 7 decks for swimming and a charming and private infrastructure.',
    'Ideal for those seeking tranquility and contact with nature with more comfort. Offers private pergolas (extra cost).',
    'Kayak and Stand Up Paddle options.'
  ],
  shortDescription: 'Exclusive resort with decks on the Formoso River and private environment.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '16km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Access to decks and trails'],
  keywords: ['resort', 'exclusive', 'formoso river', 'decks'],
  categories: [aquaticEn],
  recommendedFor: [familiesEn],
  city: bonito
};
