import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../../audiences/couples/CouplesEn';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { seniorsEn } from '../../audiences/seniors/SeniorsEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/buraco-das-araras/img3.webp`

export const buracoDasArarasEn: Tour = {
  id: 'TOUR-BA-01',
  slug: 'buraco-das-araras-em-bonito',
  name: 'Macaw\'s Hole (Buraco das Araras)',
  description: ['A huge sandstone crater (a doline) 120m deep, where Red Macaws and other birds have made their habitat. A tour for contemplation and wildlife observation.'],
  shortDescription: 'A huge sandstone crater (a doline) 120m deep, where Red Macaws and other birds have made their habitat. A tour for contemplation and wildlife observation.',
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

