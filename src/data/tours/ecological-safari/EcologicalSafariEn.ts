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
    'In specially adapted cars, you travel along roads through forest reserves and irrigated rice fields. You visit the alligator farm and can observe a great diversity of fauna and flora. Approximate duration of 2:30 hours.'
  ],
  shortDescription: 'Open car tour for fauna and flora observation, visiting alligator farm and rice fields.',
  mainImage: img,
  durationInHours: 2.5,
  minAge: 0,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Safari vehicle', 'Guide'],
  keywords: ['safari', 'photographic', 'fauna', 'flora', 'alligator'],
  categories: [ecotourismEn, adventureEn],
  recommendedFor: [],
  city: miranda
};