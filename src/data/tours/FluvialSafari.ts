import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { ecotourismPt, ecotourismEn, ecotourismEs } from 'src/data/categories/Ecotourismm';
import { familiesPt, familiesEn, familiesEs } from 'src/data/audiences/Families';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

const img = `${TOURS_BUCKET_NAME}/safari-fluvial/img1.webp`
// PT-BR
export const fluvialSafariPt: Tour = {
  id: 'TOUR-FS-01',
  slug: 'safari-fluvial',
  name: 'Safári Fluvial',
  description: 'Um passeio de barco durante o dia para explorar as margens do Rio Miranda, ideal para observar aves, jacarés e com sorte, lontras e ariranhas.',
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Barco', 'Colete salva-vidas', 'Guia'],
  keywords: ['safari', 'rio', 'aves', 'observação'],
  categories: [ecotourismPt],
  recommendedFor: [familiesPt],
  city: miranda
};

// EN-US
export const fluvialSafariEn: Tour = {
  id: 'TOUR-FS-01',
  slug: 'safari-fluvial',
  name: 'Fluvial Safari',
  description: 'A daytime boat trip to explore the banks of the Miranda River, ideal for observing birds, caimans, and hopefully, otters and giant otters.',
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Boat', 'Life jacket', 'Guide'],
  keywords: ['safari', 'river', 'birds', 'observation'],
  categories: [ecotourismEn],
  recommendedFor: [familiesEn],
  city: miranda
};

// ES
export const fluvialSafariEs: Tour = {
  id: 'TOUR-FS-01',
  slug: 'safari-fluvial',
  name: 'Safari Fluvial',
  description: 'Un paseo en bote durante el día para explorar las orillas del Río Miranda, ideal para observar aves, caimanes y con suerte, nutrias y nutrias gigantes.',
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Bote', 'Chaleco salvavidas', 'Guía'],
  keywords: ['safari', 'río', 'aves', 'observación'],
  categories: [ecotourismEs],
  recommendedFor: [familiesEs],
  city: miranda
};