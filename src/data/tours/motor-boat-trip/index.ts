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

const img = `${TOURS_BUCKET_NAME}/passeio-de-barco-motor/img1.webp`

const commonData = {
  id: 'TOUR-MBT-01',
  slug: 'passeio-de-barco-motor-em-miranda',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: miranda
};

// PT-BR
export const motorBoatTripPt: Tour = {
    ...commonData,
    name: 'Passeio de Barco a Motor com Holofote',
    description: ['Navegação noturna pelos rios do Pantanal, usando um holofote para avistar animais de hábitos noturnos como jacarés, capivaras e corujas.'],
    shortDescription: 'Navegação noturna pelos rios do Pantanal, usando um holofote para avistar animais de hábitos noturnos como jacarés, capivaras e corujas.',
    includedItems: ['Barco', 'Colete salva-vidas', 'Guia especializado'],
    keywords: ['focagem', 'noturna', 'jacaré', 'barco'],
    categories: [ecotourismPt],
    recommendedFor: [familiesPt]
};

export const motorBoatTripEn: Tour = {
    ...commonData,
    name: 'Motor Boat Trip with Spotlight',
    description: ['Night navigation through the Pantanal rivers, using a spotlight to spot nocturnal animals like caimans, capybaras, and owls.'],
    shortDescription: 'Night navigation through the Pantanal rivers, using a spotlight to spot nocturnal animals like caimans, capybaras, and owls.',
    includedItems: ['Boat', 'Life jacket', 'Specialized guide'],
    keywords: ['spotlighting', 'night', 'caiman', 'boat'],
    categories: [ecotourismEn],
    recommendedFor: [familiesEn]
};

export const motorBoatTripEs: Tour = {
    ...commonData,
    name: 'Paseo en Bote a Motor con Foco de Luz',
    description: ['Navegación nocturna por los ríos del Pantanal, usando un foco de luz para avistar animales de hábitos nocturnos como caimanes, capibaras y búhos.'],
    shortDescription: 'Navegación nocturna por los ríos del Pantanal, usando un foco de luz para avistar animales de hábitos nocturnos como caimanes, capibaras y búhos.',
    includedItems: ['Bote', 'Chaleco salvavidas', 'Guía especializado'],
    keywords: ['enfoque', 'noche', 'caimán', 'bote'],
    categories: [ecotourismEs],
    recommendedFor: [familiesEs]
};
