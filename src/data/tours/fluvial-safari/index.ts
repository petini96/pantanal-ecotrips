import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { ecotourismPt } from '../../categories/ecotourismm';
import { familiesEn } from '../../audiences/families';
import { ecotourismEn } from '../../categories/ecotourismm';
import { familiesEs } from '../../audiences/families';
import { ecotourismEs } from '../../categories/ecotourismm';

const img = `${TOURS_BUCKET_NAME}/safari-fluvial/img1.webp`

const commonData = {
  id: 'TOUR-FS-01',
  slug: 'safari-fluvial-em-miranda',
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: miranda
};

// PT-BR
export const fluvialSafariPt: Tour = {
    ...commonData,
    name: 'Safári Fluvial',
    description: ['Um passeio de barco durante o dia para explorar as margens do Rio Miranda, ideal para observar aves, jacarés e com sorte, lontras e ariranhas.'],
    shortDescription: 'Um passeio de barco durante o dia para explorar as margens do Rio Miranda, ideal para observar aves, jacarés e com sorte, lontras e ariranhas.',
    includedItems: ['Barco', 'Colete salva-vidas', 'Guia'],
    keywords: ['safari', 'rio', 'aves', 'observação'],
    categories: [ecotourismPt],
    recommendedFor: [familiesPt]
};

export const fluvialSafariEn: Tour = {
    ...commonData,
    name: 'Fluvial Safari',
    description: ['A daytime boat trip to explore the banks of the Miranda River, ideal for observing birds, caimans, and hopefully, otters and giant otters.'],
    shortDescription: 'A daytime boat trip to explore the banks of the Miranda River, ideal for observing birds, caimans, and hopefully, otters and giant otters.',
    includedItems: ['Boat', 'Life jacket', 'Guide'],
    keywords: ['safari', 'river', 'birds', 'observation'],
    categories: [ecotourismEn],
    recommendedFor: [familiesEn]
};

export const fluvialSafariEs: Tour = {
    ...commonData,
    name: 'Safari Fluvial',
    description: ['Un paseo en bote durante el día para explorar las orillas del Río Miranda, ideal para observar aves, caimanes y con suerte, nutrias y nutrias gigantes.'],
    shortDescription: 'Un paseo en bote durante el día para explorar las orillas del Río Miranda, ideal para observar aves, caimanes y con suerte, nutrias y nutrias gigantes.',
    includedItems: ['Bote', 'Chaleco salvavidas', 'Guía'],
    keywords: ['safari', 'río', 'aves', 'observación'],
    categories: [ecotourismEs],
    recommendedFor: [familiesEs]
};
