import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { cavesEn, cavesEs, cavesPt } from 'src/data/categories/Cavess';
import { ecotourismEn, ecotourismEs, ecotourismPt } from 'src/data/categories/Ecotourismm';
import { couplesEn, couplesEs, couplesPt } from 'src/data/audiences/Couples';
import { familiesEn, familiesEs, familiesPt } from 'src/data/audiences/Families';
import image from 'src/assets/images/packages/gruta-lagoa-azul.png';
import { bonito } from '../regions/Cities';

export const grutaLagoAzulPt: Tour = {
  id: 'TOUR-GLA-01',
  name: 'Gruta do Lago Azul',
  description: 'Uma das mais belas cavernas do mundo. Após uma trilha, desce-se por uma escadaria até um lago de águas intensamente azuis, com mais de 80 metros de profundidade.',
  mainImage: image,
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
  name: 'Blue Lake Cave',
  description: 'One of the most beautiful caves in the world. After a short trail, you descend a staircase to a lake of intensely blue waters, over 80 meters deep.',
  mainImage: image,
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
  name: 'Gruta del Lago Azul',
  description: 'Una de las cuevas más bellas del mundo. Tras un corto sendero, se desciende por una escalera hasta un lago de aguas intensamente azules, con más de 80 metros de profundidad.',
  mainImage: image,
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