import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { jardim } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../../audiences/couples/CouplesEn';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { seniorsEn } from '../../audiences/seniors/SeniorsEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

// const videos = [
//   {
//     type: 'video',
//     src: encodeURI(`${TOURS_BUCKET_NAME}/videos/rio-da-prata/drone alto pessoas.mp4`),
//     title: 'Drone pessoas',
//     caption: 'Caption example',
//     thumbnailUrl: ''
//   } as MediaItem
// ] as MediaItem[]

const img = `${TOURS_BUCKET_NAME}/flutuacao-rio-prata/img1.webp`

export const rioDaPrataEn: Tour = {
  id: 'TOUR-RDP-01',
  slug: 'flutuacao-rio-prata-em-jardim',
  name: 'Snorkeling at Rio da Prata',
  description: [
    'The tour starts with a walk along a trail through the riparian forest of the Rivers: Olho D`água and Prata. The trail is interpretive and numerous centenary trees, orchids and bromeliads are observed and several species of birds and many mammals such as: coatis, capuchin monkeys, howler monkeys, peccaries, agoutis are seen.',
    'The floating begins at the source of the Rio Olho D`água where one comes across an huge aquarium of crystal clear waters (close to 2 km) extremely transparent, where one floats calmly among dozens of species of fish and aquatic plants where you can interact. After the tour lunch.'
  ],
  shortDescription: 'Interpretive walk and floating in crystal clear waters with rich aquatic and wild life. Includes lunch.',
  mainImage: img,
  durationInHours: 4,
  minAge: 6,
  distanceFromCity: '50km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Neoprene wetsuit', 'Neoprene boots', 'Life vest', 'Mask and snorkel', 'Lunch'],
  keywords: ['snorkeling', 'river', 'fish', 'spring', 'trail'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn, seniorsEn],
  city: jardim
};