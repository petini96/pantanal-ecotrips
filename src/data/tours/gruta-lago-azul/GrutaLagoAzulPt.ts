import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples/CouplesPt';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { cavesPt } from '../../categories/cavess/CavessPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/gruta-lagoa-azul/img1.webp`

export const grutaLagoAzulPt: Tour = {
  id: 'TOUR-GLA-01',
  slug: 'gruta-do-lago-azul-em-bonito',
  name: 'Gruta do Lago Azul',
  description: [
     'Uma das mais belas cavernas do mundo. Após uma trilha, desce-se por uma escadaria até um lago de águas intensamente azuis, com mais de 80 metros de profundidade.'
  ],
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: '21km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Acompanhamento de guia', 'Capacete de segurança'],
  keywords: ['gruta', 'lago', 'caverna', 'contemplação'],
  categories: [cavesPt, ecotourismPt],
  recommendedFor: [familiesPt, couplesPt],
  city: bonito
};