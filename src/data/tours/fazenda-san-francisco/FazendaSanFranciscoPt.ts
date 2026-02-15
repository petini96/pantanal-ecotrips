import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';
import { adventurePt } from '../../categories/adventuree/AdventureePt';

const img = `${TOURS_BUCKET_NAME}/fazenda-san-francisco/img1.webp`

// Note: Fazenda San Francisco is in Miranda/Pantanal
export const fazendaSanFranciscoPt: Tour = {
  id: 'TOUR-FSF-01',
  slug: 'fazenda-san-francisco',
  name: 'Fazenda San Francisco (Pantanal)',
  description: [
    'Day-use no Pantanal. Inclui Safari Fotográfico em carro aberto para observação de fauna e flora, e Passeio de Chalana com pescaria de piranhas.',
    'Ótima oportunidade para ver jacarés, capivaras, aves e, com sorte, a onça-pintada.',
    'Almoço pantaneiro incluso.'
  ],
  shortDescription: 'Um dia no Pantanal com Safari Fotográfico, Chalana e almoço típico.',
  mainImage: img,
  durationInHours: 10,
  distanceFromCity: '162km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.RIVER, EnvironmentType.FARM],
  includedItems: ['Safari', 'Chalana', 'Almoço', 'Guia'],
  keywords: ['pantanal', 'safari', 'chalana', 'bichos'],
  categories: [ecotourismPt, adventurePt],
  recommendedFor: [familiesPt],
  city: miranda
};
