import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/pescaria-piranha/img1.webp`

export const chalanaPiranhaFishingPt: Tour = {
  id: 'TOUR-FSF-CPF-01',
  slug: 'pescaria-piranha-em-miranda',
  name: 'Passeio de Chalana com Pescaria de Piranhas',
  description: 'Navegação em barco típico "chalana" pelo Rio Miranda, com uma parada para a tradicional e divertida pescaria de piranhas. Ideal para observação de aves aquáticas.',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Barco Chalana', 'Equipamento de pesca', 'Guia'],
  keywords: ['chalana', 'pesca', 'piranha', 'rio miranda'],
  categories: [aquaticPt, ecotourismPt],
  recommendedFor: [familiesPt],
  city: miranda
};