import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../audiences/couples/CouplesEn';
import { couplesEs } from '../audiences/couples/CouplesEs';
import { couplesPt } from '../audiences/couples/CouplesPt';
import { familiesEn } from '../audiences/families/FamiliesEn';
import { familiesEs } from '../audiences/families/FamiliesEs';
import { familiesPt } from '../audiences/families/FamiliesPt';
import { cavesEn } from '../categories/cavess/CavessEn';
import { cavesEs } from '../categories/cavess/CavessEs';
import { cavesPt } from '../categories/cavess/CavessPt';
import { ecotourismEn } from '../categories/ecotourismm/EcotourismmEn';
import { ecotourismEs } from '../categories/ecotourismm/EcotourismmEs';
import { ecotourismPt } from '../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/gruta-lagoa-azul/img1.webp`

export const grutaLagoAzulPt: Tour = {
  id: 'TOUR-GLA-01',
  slug: 'gruta-do-lago-azul-em-bonito',
  name: 'Gruta do Lago Azul',
  description: 'Uma das mais belas cavernas do mundo. Após uma trilha, desce-se por uma escadaria até um lago de águas intensamente azuis, com mais de 80 metros de profundidade.',
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

export const grutaLagoAzulEn: Tour = {
  id: 'TOUR-GLA-01',
  slug: 'gruta-do-lago-azul-em-bonito',
  name: 'Gruta do Lago Azul',
  description: 'One of the most beautiful caves in the world. After a short trail, you descend a staircase to a lake of intensely blue waters, over 80 meters deep.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: '21km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Guide accompaniment', 'Safety helmet'],
  keywords: ['cave', 'lake', 'grotto', 'contemplation'],
  categories: [cavesEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn],
  city: bonito
};

export const grutaLagoAzulEs: Tour = {
  id: 'TOUR-GLA-01',
  slug: 'gruta-do-lago-azul-em-bonito',
  name: 'Gruta del Lago Azul',
  description: 'Una de las cuevas más bellas del mundo. Tras un corto sendero, se desciende por una escalera hasta un lago de aguas intensamente azules, con más de 80 metros de profundidad.',
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