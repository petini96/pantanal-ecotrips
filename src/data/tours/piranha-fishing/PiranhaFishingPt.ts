import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';

const img = `${TOURS_BUCKET_NAME}/pesca-piranha/img1.webp`

// PT-BR
export const piranhaFishingPt: Tour = {
  id: 'TOUR-PF-01',
  slug: 'pesca-piranha-em-miranda',
  name: 'Pesca de Piranhas',
  description: 'Uma divertida e tradicional pescaria de piranhas nas águas do Pantanal, usando varas de bambu. O que você pescar pode ser preparado para o jantar!',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Equipamento de pesca', 'Iscas', 'Acompanhamento de guia'],
  keywords: ['pesca', 'piranha', 'rio', 'pantanal'],
  categories: [aquaticPt],
  recommendedFor: [familiesPt],
  city: miranda
};