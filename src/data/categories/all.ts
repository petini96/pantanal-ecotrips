// src/data/categories/all.ts

import { type TranslatableTag } from 'src/model/Tags';

// Importa de todos os arquivos individuais
import { adventurePt, adventureEn, adventureEs } from './Adventuree';
import { aquaticPt, aquaticEn, aquaticEs } from './Aquaticc';
import { cavesPt, cavesEn, cavesEs } from './Cavess';
import { ecotourismPt, ecotourismEn, ecotourismEs } from './Ecotourismm';

// Agrega e exporta um array para cada idioma
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