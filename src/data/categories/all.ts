import { ecotourismPt, ecotourismEn, ecotourismEs } from './ecotourismm';
import { cavesPt, cavesEn, cavesEs } from './cavess';
import { aquaticPt, aquaticEn, aquaticEs } from './aquaticc';
import { adventurePt, adventureEn, adventureEs } from './adventuree';
import { type TranslatableTag } from 'src/model/Tags';













export const allCategoriesPt: TranslatableTag[] = [
  adventurePt,
  aquaticPt,
  cavesPt,
  ecotourismPt,
];

export const allCategoriesEn: TranslatableTag[] = [
  adventureEn,
  aquaticEn,
  cavesEn,
  ecotourismEn,
];

export const allCategoriesEs: TranslatableTag[] = [
  adventureEs,
  aquaticEs,
  cavesEs,
  ecotourismEs,
];