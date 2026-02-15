import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';

const img = `${TOURS_BUCKET_NAME}/porto-da-ilha/img1.webp`

export const portoDaIlhaEn: Tour = {
  id: 'TOUR-PI-01',
  slug: 'porto-da-ilha',
  name: 'Porto da Ilha (Eco Park)',
  description: [
    'Eco Park Porto da Ilha offers different water tours on the Formoso River: Boia Cross (Tubing), Boat, Duck, Stand Up and Electric Boat.',
    'The place has complete resort infrastructure with decks, waterfalls and restaurants.',
    'Ideal activities for those seeking fun and contact with nature.'
  ],
  shortDescription: 'Complex of water activities on the Formoso River: Boat, Tubing and Resort.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Access to the resort', 'Contracted activities (Boat, Tubing, etc)'],
  keywords: ['tubing', 'boat', 'formoso river', 'resort', 'duck'],
  categories: [aquaticEn, adventureEn],
  recommendedFor: [familiesEn],
  city: bonito
};
