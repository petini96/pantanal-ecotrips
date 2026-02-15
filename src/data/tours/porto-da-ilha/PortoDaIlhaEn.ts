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
    'Porto da Ilha – The Eco Park Porto da Ilha offers different outdoor water tours and the opportunity to appreciate the natural beauties of the Rio Formoso and its wonderful fauna: fish, birds, mammals and incredible waterfalls, with calm and crystal clear waters.',
    'The structure has a restaurant, restrooms and a series of activities (sold separately).'
  ],
  shortDescription: 'Complex of water activities on the Formoso River: Boat, Tubing and Resort.',
  mainImage: img,
  durationInHours: 4,
  minAge: 5,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Access to the resort', 'Contracted activities (Boat, Tubing, etc)'],
  keywords: ['tubing', 'boat', 'formoso river', 'resort', 'duck'],
  categories: [aquaticEn, adventureEn],
  recommendedFor: [familiesEn],
  city: bonito
};
