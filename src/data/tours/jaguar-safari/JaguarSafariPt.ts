import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventurePt } from '../../categories/adventuree/AdventureePt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/safari-onca-pintada/img1.webp`
// PT-BR
export const jaguarSafariPt: Tour = {
  id: 'TOUR-FSF-JS-01',
  slug: 'safari-onca-pintada-em-miranda',
  name: 'Safári de Onça-Pintada',
  description: [
     'Uma expedição especial focada em percorrer as áreas com maior probabilidade de avistamento da onça-pintada, o maior felino das Américas.'
  ],
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Veículo ou barco', 'Guia especializado'],
  keywords: ['onça', 'onça-pintada', 'jaguar', 'felino'],
  categories: [ecotourismPt, adventurePt],
  recommendedFor: [],
  city: miranda
};