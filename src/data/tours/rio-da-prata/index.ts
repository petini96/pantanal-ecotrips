import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { jardim } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { type MediaItem } from 'src/components/galerry/MediaGallery.vue';
import { couplesPt } from '../../audiences/couples';
import { familiesPt } from '../../audiences/families';
import { seniorsPt } from '../../audiences/seniors';
import { aquaticPt } from '../../categories/aquaticc';
import { ecotourismPt } from '../../categories/ecotourismm';
import { couplesEn } from '../../audiences/couples';
import { familiesEn } from '../../audiences/families';
import { seniorsEn } from '../../audiences/seniors';
import { aquaticEn } from '../../categories/aquaticc';
import { ecotourismEn } from '../../categories/ecotourismm';
import { couplesEs } from '../../audiences/couples';
import { familiesEs } from '../../audiences/families';
import { seniorsEs } from '../../audiences/seniors';
import { aquaticEs } from '../../categories/aquaticc';
import { ecotourismEs } from '../../categories/ecotourismm';

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

const commonData = {
  id: 'TOUR-RDP-01',
  slug: 'flutuacao-rio-prata-em-jardim',
  mainImage: img,
  durationInHours: 4,
  minAge: 6,
  distanceFromCity: '50km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  city: jardim
};

export const rioDaPrataPt: Tour = {
    ...commonData,
    name: 'Flutuação no Rio da Prata',
    description: [
        'Passeio inicia-se com uma caminhada em trilha pela mata ciliar dos Rios: Olho D`água e Prata. A trilha é interpretativa e observam-se inúmeras árvores centenárias, orquídeas e bromélias e, avistam-se diversas espécies de aves e muitos mamíferos como: quatis, macacos prego, bugios, catetos, queixadas, cutias.',
        'A flutuação começa na nascente do Rio Olho D`água onde depara-se com um imenso aquário de águas cristalinas (próximo de 2 km) extremamente transparentes, onde flutua-se tranquilamente em meio a dezenas de espécies de peixes e plantas aquáticas. Após o passeio almoço.'
    ],
    shortDescription: 'Caminhada interpretativa e flutuação em águas cristalinas com rica vida aquática e silvestre. Inclui almoço.',
    includedItems: ['Roupa de neoprene', 'Bota de neoprene', 'Colete salva-vidas', 'Máscara e snorkel', 'Almoço'],
    keywords: ['flutuação', 'rio', 'peixes', 'nascente', 'trilha'],
    categories: [aquaticPt, ecotourismPt],
    recommendedFor: [familiesPt, couplesPt, seniorsPt],
    videos: videos
};

export const rioDaPrataEn: Tour = {
    ...commonData,
    name: 'Snorkeling at Rio da Prata',
    description: [
        'The tour starts with a walk along a trail through the riparian forest of the Rivers: Olho D`água and Prata. The trail is interpretive and numerous centenary trees, orchids and bromeliads are observed and several species of birds and many mammals such as: coatis, capuchin monkeys, howler monkeys, peccaries, agoutis are seen.',
        'The floating begins at the source of the Rio Olho D`água where one comes across an huge aquarium of crystal clear waters (close to 2 km) extremely transparent, where one floats calmly among dozens of species of fish and aquatic plants where you can interact. After the tour lunch.'
    ],
    shortDescription: 'Interpretive walk and floating in crystal clear waters with rich aquatic and wild life. Includes lunch.',
    includedItems: ['Neoprene wetsuit', 'Neoprene boots', 'Life vest', 'Mask and snorkel', 'Lunch'],
    keywords: ['snorkeling', 'river', 'fish', 'spring', 'trail'],
    categories: [aquaticEn, ecotourismEn],
    recommendedFor: [familiesEn, couplesEn, seniorsEn]
};

export const rioDaPrataEs: Tour = {
    ...commonData,
    name: 'Flotación en el Río da Prata',
    description: [
        'El paseo se inicia con una caminata en sendero por el bosque de galería de los Ríos: Olho D`água y Prata. El sendero es interpretativo y se observan innumerables árboles centenarios, orquídeas y bromelias y, se avistan diversas especies de aves y muchos mamíferos como: coatíes, monos capuchinos, aulladores, pecaríes, agutíes.',
        'La flotación comienza en el nacimiento del Río Olho D`água donde se encuentra con un inmenso acuario de aguas cristalinas (cerca de 2 km) extremadamente transparentes, donde se flota tranquilamente entre decenas de especies de peces y plantas acuáticas donde se puede interactuar. Después del paseo almuerzo.'
    ],
    shortDescription: 'Caminata interpretativa y flotación en aguas cristalinas con rica vida acuática y silvestre. Incluye almuerzo.',
    includedItems: ['Traje de neopreno', 'Botas de neopreno', 'Chaleco salvavidas', 'Máscara y snorkel', 'Almuerzo'],
    keywords: ['flotación', 'río', 'peces', 'naciente', 'sendero'],
    categories: [aquaticEs, ecotourismEs],
    recommendedFor: [familiesEs, couplesEs, seniorsEs]
};
