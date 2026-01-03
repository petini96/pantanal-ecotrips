import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/safari-fluvial/img1.webp`

export const fluvialSafariEs: Tour = {
  id: 'TOUR-FS-01',
  slug: 'safari-fluvial-em-miranda',
  name: 'Safari Fluvial',
  description: [
     'Un paseo en bote durante el día para explorar las orillas del Río Miranda, ideal para observar aves, caimanes y con suerte, nutrias y nutrias gigantes.'
  ],
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