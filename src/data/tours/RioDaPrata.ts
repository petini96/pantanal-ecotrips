import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { aquaticEn, aquaticEs, aquaticPt } from 'src/data/categories/Aquaticc';
import { ecotourismEn, ecotourismEs, ecotourismPt } from 'src/data/categories/Ecotourismm';
import { couplesEn, couplesEs, couplesPt } from 'src/data/audiences/Couples';
import { familiesEn, familiesEs, familiesPt } from 'src/data/audiences/Families';
import { seniorsEn, seniorsEs, seniorsPt } from 'src/data/audiences/Seniors';
import { jardim } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { type MediaItem } from 'src/components/galerry/MediaGallery.vue';

const videos = [
  {
    type: 'video',
    src: encodeURI(`${TOURS_BUCKET_NAME}/videos/rio-da-prata/drone alto pessoas.mp4`),
    title: 'Drone pessoas',
    caption: 'Caption example',
    thumbnailUrl: ''
  } as MediaItem
] as MediaItem[]

export const rioDaPrataPt: Tour = {
  id: 'TOUR-RDP-01',
  slug: 'flutuacao-rio-prata',
  name: 'Flutuação no Rio da Prata',
  description: 'Uma flutuação tranquila por um imenso aquário de águas cristalinas, observando peixes e a vegetação subaquática. O passeio começa com uma trilha na mata ciliar.',
  mainImage: `${TOURS_BUCKET_NAME}/gruta-lagoa-azul.png`,
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
  slug: 'flutuacao-rio-prata',
  name: 'Snorkeling at Rio da Prata',
  description: 'A gentle snorkeling tour through a huge crystal-clear aquarium, observing fish and underwater vegetation. The tour begins with a trail in the riparian forest.',
  mainImage: `${TOURS_BUCKET_NAME}/gruta-lagoa-azul.png`,
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
  slug: 'flutuacao-rio-prata',
  name: 'Flotación en-US el Río da Prata',
  description: 'Una tranquila flotación por un inmenso acuario de aguas cristalinas, observando peces y la vegetación subacuática. El recorrido comienza con un sendero en-US el bosque de ribera.',
  mainImage: `${TOURS_BUCKET_NAME}/gruta-lagoa-azul.png`,
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