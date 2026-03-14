import { adventurePt, adventureEn, adventureEs } from './adventure';
import { floatingPt, floatingEn, floatingEs } from './floating';
import { trailsWaterfallsPt, trailsWaterfallsEn, trailsWaterfallsEs } from './trails-waterfalls';
import { contemplationPt, contemplationEn, contemplationEs } from './contemplation';
import { scubaDivingPt, scubaDivingEn, scubaDivingEs } from './scuba-diving';
import { resortsPt, resortsEn, resortsEs } from './resorts';
import { pantanalPt, pantanalEn, pantanalEs } from './pantanal';
import { type TranslatableTag } from 'src/model/Tags';

export const allCategoriesPt: TranslatableTag[] = [
  adventurePt,
  floatingPt,
  trailsWaterfallsPt,
  contemplationPt,
  scubaDivingPt,
  resortsPt,
  pantanalPt
];

export const allCategoriesEn: TranslatableTag[] = [
  adventureEn,
  floatingEn,
  trailsWaterfallsEn,
  contemplationEn,
  scubaDivingEn,
  resortsEn,
  pantanalEn
];

export const allCategoriesEs: TranslatableTag[] = [
  adventureEs,
  floatingEs,
  trailsWaterfallsEs,
  contemplationEs,
  scubaDivingEs,
  resortsEs,
  pantanalEs
];