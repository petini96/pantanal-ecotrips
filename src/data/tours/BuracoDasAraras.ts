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
import { seniorsEs } from '../audiences/seniors/Seniors';
import { seniorsEn } from '../audiences/seniors/SeniorsEn';
import { seniorsPt } from '../audiences/seniors/SeniorsPt';
import { ecotourismEn } from '../categories/ecotourismm/EcotourismmEn';
import { ecotourismEs } from '../categories/ecotourismm/EcotourismmEs';
import { ecotourismPt } from '../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/buraco-das-araras/img3.webp`

// PT-BR
export const buracoDasArarasPt: Tour = {
  id: 'TOUR-BA-01',
  slug: 'buraco-das-araras-em-bonito',
  name: 'Buraco das Araras',
  description: 'Uma enorme cratera em arenito (dolina) com 120m de profundidade, onde Araras Vermelhas e outros pássaros criaram seu habitat. Um passeio de contemplação e observação da fauna.',
  mainImage: img,
  durationInHours: 1,
  distanceFromCity: '58km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST],
  includedItems: ['Acompanhamento de guia'],
  keywords: ['araras', 'dolina', 'contemplação', 'pássaros', 'observação'],
  categories: [ecotourismPt],
  recommendedFor: [familiesPt, couplesPt, seniorsPt],
  city: bonito
};

// EN-US
export const buracoDasArarasEn: Tour = {
  id: 'TOUR-BA-01',
  slug: 'buraco-das-araras-em-bonito',
  name: 'Macaw\'s Hole (Buraco das Araras)',
  description: 'A huge sandstone crater (a doline) 120m deep, where Red Macaws and other birds have made their habitat. A tour for contemplation and wildlife observation.',
  mainImage: img,
  durationInHours: 1,
  distanceFromCity: '58km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST],
  includedItems: ['Guide accompaniment'],
  keywords: ['macaws', 'doline', 'contemplation', 'birds', 'observation'],
  categories: [ecotourismEn],
  recommendedFor: [familiesEn, couplesEn, seniorsEn],
  city: bonito
};

// ES
export const buracoDasArarasEs: Tour = {
  id: 'TOUR-BA-01',
  slug: 'buraco-das-araras-em-bonito',
  name: 'Buraco das Araras',
  description: 'Un enorme cráter de arenisca (una dolina) de 120m de profundidad, donde guacamayos rojos y otras aves han creado su hábitat. Un recorrido de contemplación y observación de la fauna.',
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