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
  description: [
    'En medio al cerrado una dolina (caverna cuyo techo se derrumbó), posibilitando contemplar de dos miradores una laguna de agua verde con aproximadamente 100m de profundidad, rodeada por vegetación exuberante que sirve de vivienda para guacamayos rojos que se abrigan en las grietas de las rocas, además de los guacamayos también pueden ser vistas otras aves como: curicacas, carcarás, buitres, tucanes, periquitos, loros, gavilanes y otras...',
    'En los dos miradores fueron implantados telescopios para facilitar la visualización e interpretación ambiental.'
  ],
  shortDescription: 'Contemplación de dolina con laguna verde y observación de guacamayos rojos y otras aves en su hábitat natural.',
  mainImage: img,
  durationInHours: 1,
  minAge: 0,
  distanceFromCity: '54km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST],
  includedItems: ['Acompañamiento de guía'],
  keywords: ['guacamayos', 'dolina', 'contemplación', 'pájaros', 'observación'],
  categories: [ecotourismEs],
  recommendedFor: [familiesEs, couplesEs, seniorsEs],
  city: bonito
};
