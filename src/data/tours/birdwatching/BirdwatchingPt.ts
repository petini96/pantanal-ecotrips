import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/observacao-das-aves/img1.webp`

// PT-BR
export const birdwatchingPt: Tour = {
  id: 'TOUR-FSF-BW-01',
  slug: 'observacao-das-aves-em-miranda',
  name: 'Observação de Aves',
  description: 'Caminhada ao amanhecer, o melhor horário para observar a grande diversidade de aves do Pantanal, como tuiuiús, araras-azuis e tucanos. Essencial para amantes da ornitologia.',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FIELDS],
  includedItems: ['Guia especializado em aves'],
  keywords: ['aves', 'birdwatching', 'passarinhar', 'araras'],
  categories: [ecotourismPt],
  recommendedFor: [],
  city: miranda
};