import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEs } from '../../audiences/couples/CouplesEs';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { seniorsEs } from '../../audiences/seniors/Seniors';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/buraco-das-araras/img3.webp`

// ES
export const buracoDasArarasEs: Tour = {
  id: 'TOUR-BA-01',
  slug: 'buraco-das-araras-em-bonito',
  name: 'Buraco das Araras',
  description: ['Un enorme cráter de arenisca (una dolina) de 120m de profundidad, donde guacamayos rojos y otras aves han creado su hábitat. Un recorrido de contemplación y observación de la fauna.'],
  shortDescription: 'Un enorme cráter de arenisca (una dolina) de 120m de profundidad, donde guacamayos rojos y otras aves han creado su hábitat. Un recorrido de contemplación y observación de la fauna.',
  mainImage: img,
  durationInHours: 1,
  distanceFromCity: '58km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST],
  includedItems: ['Acompañamiento de guía'],
  keywords: ['guacamayos', 'dolina', 'contemplación', 'pájaros', 'observación'],
  categories: [ecotourismEs],
  recommendedFor: [familiesEs, couplesEs, seniorsEs],
  city: bonito
};

