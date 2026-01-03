import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventurePt } from '../../categories/adventuree/AdventureePt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/jeep-safari-nhecolandia/img1.webp`

export const jeepSafariPt: Tour = {
  id: 'TOUR-JS-01',
  slug: 'jeep-safari-nhecolandia-em-miranda',
  name: 'Safári de Jeep na Nhecolândia',
  description: [
     'Exploração em veículo 4x4 aberto pelas vastas planícies e campos da região da Nhecolândia, buscando avistar a rica fauna do Pantanal como cervos, tamanduás e tuiuiús.'
  ],
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS],
  includedItems: ['Veículo 4x4', 'Guia-motorista'],
  keywords: ['safari', 'jeep', '4x4', 'fauna'],
  categories: [ecotourismPt, adventurePt],
  recommendedFor: [],
  city: miranda
};