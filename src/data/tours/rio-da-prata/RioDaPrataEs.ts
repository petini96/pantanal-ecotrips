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
    'El paseo se inicia con una caminata en sendero por el bosque de galería de los Ríos: Olho D`água y Prata. El sendero es interpretativo y se observan innumerables árboles centenarios, orquídeas y bromelias y, se avistan diversas especies de aves y muchos mamíferos como: coatíes, monos capuchinos, aulladores, pecaríes, agutíes.',
    'La flotación comienza en el nacimiento del Río Olho D`água donde se encuentra con un inmenso acuario de aguas cristalinas (cerca de 2 km) extremadamente transparentes, donde se flota tranquilamente entre decenas de especies de peces y plantas acuáticas donde se puede interactuar. Después del paseo almuerzo.'
  ],
  shortDescription: 'Caminata interpretativa y flotación en aguas cristalinas con rica vida acuática y silvestre. Incluye almuerzo.',
  mainImage: img,
  durationInHours: 4,
  minAge: 6,
  distanceFromCity: '50km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Traje de neopreno', 'Botas de neopreno', 'Chaleco salvavidas', 'Máscara y snorkel', 'Almuerzo'],
  keywords: ['flotación', 'río', 'peces', 'naciente', 'sendero'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs, couplesEs, seniorsEs],
  city: jardim
};