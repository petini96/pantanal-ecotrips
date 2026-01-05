import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEs } from '../../audiences/couples/CouplesEs';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { cavesEs } from '../../categories/cavess/CavessEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/gruta-lagoa-azul/img1.webp`

export const grutaLagoAzulEs: Tour = {
  id: 'TOUR-GLA-01',
  slug: 'gruta-do-lago-azul-em-bonito',
  name: 'Gruta del Lago Azul',
  description: ['Una de las cuevas más bellas del mundo. Tras un corto sendero, se desciende por una escalera hasta un lago de aguas intensamente azules, con más de 80 metros de profundidad.'],
  shortDescription: 'Una de las cuevas más bellas del mundo. Tras un corto sendero, se desciende por una escalera hasta un lago de aguas intensamente azules, con más de 80 metros de profundidad.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: '21km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Acompañamiento de guía', 'Casco de seguridad'],
  keywords: ['gruta', 'lago', 'cueva', 'contemplación'],
  categories: [cavesEs, ecotourismEs],
  recommendedFor: [familiesEs, couplesEs],
  city: bonito
};

