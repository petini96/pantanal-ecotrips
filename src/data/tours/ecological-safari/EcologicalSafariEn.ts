import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/safari-fotografico/img1.webp`

export const ecologicalSafariEn: Tour = {
  id: 'TOUR-FSF-ES-01',
  slug: 'safari-fotografico-em-miranda',
  name: 'Photographic Safari',
  description: [
    'Daytime tour in an open car through the farm\'s areas, such as fields, savannas, and forests, to observe the local fauna and flora. A great opportunity for photos.'
  ],
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Safari vehicle', 'Guide'],
  keywords: ['safari', 'photographic', 'fauna', 'flora'],
  categories: [ecotourismEn, adventureEn],
  recommendedFor: [],
  city: miranda
};