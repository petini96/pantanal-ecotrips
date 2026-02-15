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
  description: [
    'Después de un descenso de 100 m, se encuentra con un lago de aguas intensamente azuladas, cuyas dimensiones la convierten en una de las mayores cavidades inundadas del planeta.',
    'En el interior de la gruta, se observan espeleotemas de diversas formas y tamaños, como estalactitas y estalagmitas, además de fósiles de animales prehistóricos como el perezoso gigante y el tigre dientes de sable, que vivieron en el período geológico del Pleistoceno (6.000 a 10.000 años atrás).',
    'Uso obligatorio de zapatillas.'
  ],
  shortDescription: 'Una de las mayores cavidades inundadas del planeta, con un lago de aguas azules y fósiles prehistóricos. Postal de Bonito.',
  mainImage: img,
  durationInHours: 2,
  minAge: 5,
  distanceFromCity: '21km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Acompañamiento de guía', 'Casco de seguridad'],
  keywords: ['gruta', 'lago', 'cueva', 'contemplación'],
  categories: [cavesEs, ecotourismEs],
  recommendedFor: [familiesEs, couplesEs],
  city: bonito
};
