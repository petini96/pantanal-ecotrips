import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { ecotourismEn, ecotourismEs, ecotourismPt } from 'src/data/categories/Ecotourismm';
import { familiesEn, familiesEs, familiesPt } from 'src/data/audiences/Families';
import { couplesEn, couplesEs, couplesPt } from 'src/data/audiences/Couples';
import { seniorsEn, seniorsEs, seniorsPt } from 'src/data/audiences/Seniors';
import image from 'src/assets/images/tours/buraco-das-araras.png';
import { bonito } from '../regions/Cities';

// PT-BR
export const buracoDasArarasPt: Tour = {
  id: 'TOUR-BA-01',
  slug: 'buraco-das-araras',
  name: 'Buraco das Araras',
  description: 'Uma enorme cratera em arenito (dolina) com 120m de profundidade, onde Araras Vermelhas e outros pássaros criaram seu habitat. Um passeio de contemplação e observação da fauna.',
  mainImage: image,
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
  slug: 'buraco-das-araras',
  name: 'Macaw\'s Hole (Buraco das Araras)',
  description: 'A huge sandstone crater (a doline) 120m deep, where Red Macaws and other birds have made their habitat. A tour for contemplation and wildlife observation.',
  mainImage: image,
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
  slug: 'buraco-das-araras',
  name: 'Buraco das Araras',
  description: 'Un enorme cráter de arenisca (una dolina) de 120m de profundidad, donde guacamayos rojos y otras aves han creado su hábitat. Un recorrido de contemplación y observación de la fauna.',
  mainImage: image,
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