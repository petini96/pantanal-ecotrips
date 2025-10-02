import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { aquaticPt, aquaticEn, aquaticEs } from 'src/data/categories/Aquaticc';
import { familiesPt, familiesEn, familiesEs } from 'src/data/audiences/Families';
import image from 'src/assets/images/tours/pantanal-river-floating.webp'; // Substitua pelo caminho da imagem real
import { miranda } from '../regions/Cities';

// PT-BR
export const riverFloatingPt: Tour = {
  id: 'TOUR-RF-01',
  slug: 'flutuacao-rio',
  name: 'Flutuação no Rio',
  description: 'Uma relaxante descida de bote ou "macarrão" flutuador pelas águas calmas do rio, permitindo uma perspectiva única da vegetação e sons da natureza.',
  mainImage: image,
  durationInHours: 1.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Equipamento de flutuação', 'Guia'],
  keywords: ['flutuação', 'rio', 'relaxar'],
  categories: [aquaticPt],
  recommendedFor: [familiesPt],
  city: miranda
};

// EN-US
export const riverFloatingEn: Tour = {
  id: 'TOUR-RF-01',
  slug: 'flutuacao-rio',
  name: 'Floating Down the River',
  description: 'A relaxing descent in a small boat or with a "pool noodle" floater down the calm river waters, offering a unique perspective of the vegetation and sounds of nature.',
  mainImage: image,
  durationInHours: 1.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Floating equipment', 'Guide'],
  keywords: ['floating', 'river', 'relax'],
  categories: [aquaticEn],
  recommendedFor: [familiesEn],
  city: miranda
};

// ES
export const riverFloatingEs: Tour = {
  id: 'TOUR-RF-01',
  slug: 'flutuacao-rio',
  name: 'Flotación en-US el Río',
  description: 'Un relajante descenso en-US bote o con flotador por las tranquilas aguas del río, permitiendo una perspectiva única de la vegetación y los sonidos de la naturaleza.',
  mainImage: image,
  durationInHours: 1.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Equipo de flotación', 'Guía'],
  keywords: ['flotación', 'río', 'relajarse'],
  categories: [aquaticEs],
  recommendedFor: [familiesEs],
  city: miranda
};