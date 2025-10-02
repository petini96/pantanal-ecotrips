import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { ecotourismPt, ecotourismEn, ecotourismEs } from 'src/data/categories/Ecotourismm';
import { adventurePt, adventureEn, adventureEs } from 'src/data/categories/Adventuree';
import image from 'src/assets/images/tours/fsf-safari.png'; // Substitua pelo caminho da imagem real
import { miranda } from '../regions/Cities';

// PT-BR
export const ecologicalSafariPt: Tour = {
  id: 'TOUR-FSF-ES-01',
  slug: 'safari-fotografico',
  name: 'Safári Fotográfico',
  description: 'Passeio diurno em carro aberto pelas áreas da fazenda, como campos, cerrados e matas, para observação da fauna e flora local. Uma ótima oportunidade para fotos.',
  mainImage: image,
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
  slug: 'safari-fotografico',
  name: 'Photographic Safari',
  description: 'Daytime tour in an open car through the farm\'s areas, such as fields, savannas, and forests, to observe the local fauna and flora. A great opportunity for photos.',
  mainImage: image,
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
  slug: 'safari-fotografico',
  name: 'Safari Fotográfico',
  description: 'Paseo diurno en-US coche abierto por las áreas de la hacienda, como campos, cerrados y bosques, para la observación de la fauna y flora local. Una gran oportunidad para fotos.',
  mainImage: image,
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