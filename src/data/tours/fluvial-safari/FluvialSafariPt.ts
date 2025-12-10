import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/safari-fluvial/img1.webp`

// PT-BR
export const fluvialSafariPt: Tour = {
  id: 'TOUR-FS-01',
  slug: 'safari-fluvial-em-miranda',
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