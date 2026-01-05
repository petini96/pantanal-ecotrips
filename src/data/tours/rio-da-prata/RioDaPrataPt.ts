import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { jardim } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { type MediaItem } from 'src/components/galerry/MediaGallery.vue';
import { couplesPt } from '../../audiences/couples/CouplesPt';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { seniorsPt } from '../../audiences/seniors/SeniorsPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

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
  description: [
     'Uma flutuação tranquila por um imenso aquário de águas cristalinas, observando peixes e a vegetação subaquática. O passeio começa com uma trilha na mata ciliar.'
  ],
  shortDescription: 'Uma flutuação tranquila por um imenso aquário de águas cristalinas, observando peixes e a vegetação subaquática. O passeio começa com uma trilha na mata ciliar.',
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