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
  description: 'A gentle snorkeling tour through a huge crystal-clear aquarium, observing fish and underwater vegetation. The tour begins with a trail in the riparian forest.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '50km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Neoprene wetsuit', 'Neoprene boots', 'Life vest', 'Mask and snorkel'],
  keywords: ['snorkeling', 'river', 'fish', 'spring'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn, seniorsEn],
  city: jardim
};