import { type TranslatableTag } from 'src/model/Tags';
import { adventureEn } from './adventuree/AdventureeEn';
import { adventureEs } from './adventuree/AdventureeEs';
import { adventurePt } from './adventuree/AdventureePt';
import { aquaticEn } from './aquaticc/AquaticcEn';
import { aquaticEs } from './aquaticc/AquaticcEs';
import { aquaticPt } from './aquaticc/AquaticcPt';
import { cavesEn } from './cavess/CavessEn';
import { cavesEs } from './cavess/CavessEs';
import { cavesPt } from './cavess/CavessPt';
import { ecotourismEn } from './ecotourismm/EcotourismmEn';
import { ecotourismEs } from './ecotourismm/EcotourismmEs';
import { ecotourismPt } from './ecotourismm/EcotourismmPt';

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