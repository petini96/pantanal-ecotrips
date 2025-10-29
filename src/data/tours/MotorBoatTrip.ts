import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { ecotourismPt, ecotourismEn, ecotourismEs } from 'src/data/categories/Ecotourismm';
import { familiesPt, familiesEn, familiesEs } from 'src/data/audiences/Families';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

// PT-BR
export const motorBoatTripPt: Tour = {
  id: 'TOUR-MBT-01',
  slug: 'passeio-de-barco-motor',
  name: 'Passeio de Barco a Motor com Holofote',
  description: 'Navegação noturna pelos rios do Pantanal, usando um holofote para avistar animais de hábitos noturnos como jacarés, capivaras e corujas.',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-motor-boat.png`,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Barco', 'Colete salva-vidas', 'Guia especializado'],
  keywords: ['focagem', 'noturna', 'jacaré', 'barco'],
  categories: [ecotourismPt],
  recommendedFor: [familiesPt],
  city: miranda
};

// EN-US
export const motorBoatTripEn: Tour = {
  id: 'TOUR-MBT-01',
  slug: 'passeio-de-barco-motor',
  name: 'Motor Boat Trip with Spotlight',
  description: 'Night navigation through the Pantanal rivers, using a spotlight to spot nocturnal animals like caimans, capybaras, and owls.',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-motor-boat.png`,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Boat', 'Life jacket', 'Specialized guide'],
  keywords: ['spotlighting', 'night', 'caiman', 'boat'],
  categories: [ecotourismEn],
  recommendedFor: [familiesEn],
  city: miranda
};

// ES
export const motorBoatTripEs: Tour = {
  id: 'TOUR-MBT-01',
  slug: 'passeio-de-barco-motor',
  name: 'Paseo en Bote a Motor con Foco de Luz',
  description: 'Navegación nocturna por los ríos del Pantanal, usando un foco de luz para avistar animales de hábitos nocturnos como caimanes, capibaras y búhos.',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-motor-boat.png`,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Bote', 'Chaleco salvavidas', 'Guía especializado'],
  keywords: ['enfoque', 'noche', 'caimán', 'bote'],
  categories: [ecotourismEs],
  recommendedFor: [familiesEs],
  city: miranda
};