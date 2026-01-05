import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { jardim } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEs } from '../../audiences/couples/CouplesEs';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { seniorsEs } from '../../audiences/seniors/Seniors';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

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

export const rioDaPrataEs: Tour = {
  id: 'TOUR-RDP-01',
  slug: 'flutuacao-rio-prata-em-jardim',
  name: 'Flotación en el Río da Prata',
  description: [
     'Una tranquila flotación por un inmenso acuario de aguas cristalinas, observando peces y la vegetación subacuática. El recorrido comienza con un sendero en el bosque de ribera.'
  ],
  shortDescription: 'Una tranquila flotación por un inmenso acuario de aguas cristalinas, observando peces y la vegetación subacuática. El recorrido comienza con un sendero en el bosque de ribera.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '50km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Traje de neopreno', 'Botas de neopreno', 'Chaleco salvavidas', 'Máscara y snorkel'],
  keywords: ['flotación', 'río', 'peces', 'naciente'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs, couplesEs, seniorsEs],
  city: jardim
};