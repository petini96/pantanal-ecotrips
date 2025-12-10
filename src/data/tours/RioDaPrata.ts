import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { jardim } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { type MediaItem } from 'src/components/galerry/MediaGallery.vue';
import { couplesEn } from '../audiences/couples/CouplesEn';
import { couplesEs } from '../audiences/couples/CouplesEs';
import { couplesPt } from '../audiences/couples/CouplesPt';
import { familiesEn } from '../audiences/families/FamiliesEn';
import { familiesEs } from '../audiences/families/FamiliesEs';
import { familiesPt } from '../audiences/families/FamiliesPt';
import { seniorsEs } from '../audiences/seniors/Seniors';
import { seniorsEn } from '../audiences/seniors/SeniorsEn';
import { seniorsPt } from '../audiences/seniors/SeniorsPt';
import { aquaticEn } from '../categories/aquaticc/AquaticcEn';
import { aquaticEs } from '../categories/aquaticc/AquaticcEs';
import { aquaticPt } from '../categories/aquaticc/AquaticcPt';
import { ecotourismEn } from '../categories/ecotourismm/EcotourismmEn';
import { ecotourismEs } from '../categories/ecotourismm/EcotourismmEs';
import { ecotourismPt } from '../categories/ecotourismm/EcotourismmPt';

const videos = [
  {
    type: 'video',
    src: encodeURI(`${TOURS_BUCKET_NAME}/videos/rio-da-prata/drone alto pessoas.mp4`),
    title: 'Drone pessoas',
    caption: 'Caption example',
    thumbnailUrl: ''
  } as MediaItem
] as MediaItem[]

const img = `${TOURS_BUCKET_NAME}/flutuacao-rio-prata/img1.webp`

export const rioDaPrataPt: Tour = {
  id: 'TOUR-RDP-01',
  slug: 'flutuacao-rio-prata-em-jardim',
  name: 'Flutuação no Rio da Prata',
  description: 'Uma flutuação tranquila por um imenso aquário de águas cristalinas, observando peixes e a vegetação subaquática. O passeio começa com uma trilha na mata ciliar.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '50km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Roupa de neoprene', 'Bota de neoprene', 'Colete salva-vidas', 'Máscara e snorkel'],
  keywords: ['flutuação', 'rio', 'peixes', 'nascente'],
  categories: [aquaticPt, ecotourismPt],
  recommendedFor: [familiesPt, couplesPt, seniorsPt],
  city: jardim,
  videos: videos
};

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

export const rioDaPrataEs: Tour = {
  id: 'TOUR-RDP-01',
  slug: 'flutuacao-rio-prata-em-jardim',
  name: 'Flotación en el Río da Prata',
  description: 'Una tranquila flotación por un inmenso acuario de aguas cristalinas, observando peces y la vegetación subacuática. El recorrido comienza con un sendero en el bosque de ribera.',
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