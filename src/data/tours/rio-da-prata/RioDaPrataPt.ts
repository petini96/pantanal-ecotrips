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
    'Passeio inicia-se com uma caminhada em trilha pela mata ciliar dos Rios: Olho D`água e Prata. A trilha é interpretativa e observam-se inúmeras árvores centenárias, orquídeas e bromélias e, avistam-se diversas espécies de aves e muitos mamíferos como: quatis, macacos prego, bugios, catetos, queixadas, cutias.',
    'A flutuação começa na nascente do Rio Olho D`água onde depara-se com um imenso aquário de águas cristalinas (próximo de 2 km) extremamente transparentes, onde flutua-se tranquilamente em meio a dezenas de espécies de peixes e plantas aquáticas. Após o passeio almoço.'
  ],
  shortDescription: 'Caminhada interpretativa e flutuação em águas cristalinas com rica vida aquática e silvestre. Inclui almoço.',
  mainImage: img,
  durationInHours: 4,
  minAge: 6,
  distanceFromCity: '50km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Roupa de neoprene', 'Bota de neoprene', 'Colete salva-vidas', 'Máscara e snorkel', 'Almoço'],
  keywords: ['flutuação', 'rio', 'peixes', 'nascente', 'trilha'],
  categories: [aquaticPt, ecotourismPt],
  recommendedFor: [familiesPt, couplesPt, seniorsPt],
  city: jardim,
  videos: videos
};