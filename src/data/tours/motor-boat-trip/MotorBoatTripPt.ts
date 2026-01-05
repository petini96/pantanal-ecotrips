import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/passeio-de-barco-motor/img1.webp`

// PT-BR
export const motorBoatTripPt: Tour = {
  id: 'TOUR-MBT-01',
  slug: 'passeio-de-barco-motor-em-miranda',
  name: 'Passeio de Barco a Motor com Holofote',
  description: ['Navegação noturna pelos rios do Pantanal, usando um holofote para avistar animais de hábitos noturnos como jacarés, capivaras e corujas.'],
  shortDescription: 'Navegação noturna pelos rios do Pantanal, usando um holofote para avistar animais de hábitos noturnos como jacarés, capivaras e corujas.',
  mainImage: img,
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

