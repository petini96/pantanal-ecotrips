import { type TranslatableTag } from 'src/model/Tags';

import { couplesEn } from './couples/CouplesEn';
import { couplesEs } from './couples/CouplesEs';
import { couplesPt } from './couples/CouplesPt';
import { familiesEn } from './families/FamiliesEn';
import { familiesEs } from './families/FamiliesEs';
import { familiesPt } from './families/FamiliesPt';
import { groupsEn } from './groups/GroupsEn';
import { groupsEs } from './groups/GroupsEs';
import { groupsPt } from './groups/GroupsPt';
import { seniorsEs } from './seniors/Seniors';
import { seniorsEn } from './seniors/SeniorsEn';
import { seniorsPt } from './seniors/SeniorsPt';

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