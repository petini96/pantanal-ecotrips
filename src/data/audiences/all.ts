// src/data/audiences/all.ts

import { type TranslatableTag } from 'src/model/Tags';

// Importa de todos os arquivos individuais
import { couplesPt, couplesEn, couplesEs } from './Couples';
import { familiesPt, familiesEn, familiesEs } from './Families';
import { groupsPt, groupsEn, groupsEs } from './Groups';
import { seniorsPt, seniorsEn, seniorsEs } from './Seniors';

// Agrega e exporta um array para cada idioma
export const allAudiencesPt: TranslatableTag[] = [
  couplesPt,
  familiesPt,
  groupsPt,
  seniorsPt,
];

export const allAudiencesEn: TranslatableTag[] = [
  couplesEn,
  familiesEn,
  groupsEn,
  seniorsEn,
];

export const allAudiencesEs: TranslatableTag[] = [
  couplesEs,
  familiesEs,
  groupsEs,
  seniorsEs,
];