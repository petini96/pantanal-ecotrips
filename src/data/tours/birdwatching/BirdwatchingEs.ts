import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/observacao-das-aves/img1.webp`

// ES
export const birdwatchingEs: Tour = {
  id: 'TOUR-FSF-BW-01',
  slug: 'observacao-das-aves-em-miranda',
  name: 'Observación de Aves',
  description: 'Caminata al amanecer, el mejor momento para observar la gran diversidad de aves del Pantanal, como jabirús, guacamayos jacintos y tucanes. Esencial para los amantes de la ornitología.',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FIELDS],
  includedItems: ['Guía especializado en aves'],
  keywords: ['aves', 'birdwatching', 'pájaros', 'guacamayos'],
  categories: [ecotourismEs],
  recommendedFor: [],
  city: miranda
};