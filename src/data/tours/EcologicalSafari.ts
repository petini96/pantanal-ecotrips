import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEn } from '../categories/adventuree/AdventureeEn';
import { adventureEs } from '../categories/adventuree/AdventureeEs';
import { adventurePt } from '../categories/adventuree/AdventureePt';
import { ecotourismEn } from '../categories/ecotourismm/EcotourismmEn';
import { ecotourismEs } from '../categories/ecotourismm/EcotourismmEs';
import { ecotourismPt } from '../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/safari-fotografico/img1.webp`

// PT-BR
export const ecologicalSafariPt: Tour = {
  id: 'TOUR-FSF-ES-01',
  slug: 'safari-fotografico-em-miranda',
  name: 'Safári Fotográfico',
  description: 'Passeio diurno em carro aberto pelas áreas da fazenda, como campos, cerrados e matas, para observação da fauna e flora local. Uma ótima oportunidade para fotos.',
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Veículo de safári', 'Guia'],
  keywords: ['safári', 'fotográfico', 'fauna', 'flora'],
  categories: [ecotourismPt, adventurePt],
  recommendedFor: [],
  city: miranda
};

// EN-US
export const ecologicalSafariEn: Tour = {
  id: 'TOUR-FSF-ES-01',
  slug: 'safari-fotografico-em-miranda',
  name: 'Photographic Safari',
  description: 'Daytime tour in an open car through the farm\'s areas, such as fields, savannas, and forests, to observe the local fauna and flora. A great opportunity for photos.',
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

// ES
export const ecologicalSafariEs: Tour = {
  id: 'TOUR-FSF-ES-01',
  slug: 'safari-fotografico-em-miranda',
  name: 'Safari Fotográfico',
  description: 'Paseo diurno en coche abierto por las áreas de la hacienda, como campos, cerrados y bosques, para la observación de la fauna y flora local. Una gran oportunidad para fotos.',
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Vehículo de safari', 'Guía'],
  keywords: ['safari', 'fotográfico', 'fauna', 'flora'],
  categories: [ecotourismEs, adventureEs],
  recommendedFor: [],
  city: miranda
};