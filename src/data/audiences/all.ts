import { seniorsPt, seniorsEn, seniorsEs } from './seniors';
import { groupsPt, groupsEn, groupsEs } from './groups';
import { familiesPt, familiesEn, familiesEs } from './families';
import { couplesPt, couplesEn, couplesEs } from './couples';
import { type TranslatableTag } from 'src/model/Tags';














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