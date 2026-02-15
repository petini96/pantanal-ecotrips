import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';

const img = `${TOURS_BUCKET_NAME}/estrela-do-formoso/img1.webp`

export const estrelaDoFormosoPt: Tour = {
  id: 'TOUR-EF-01',
  slug: 'estrela-do-formoso',
  name: 'Estrela do Formoso',
  description: [
    'Um refúgio exclusivo às margens do Rio Formoso. A ilha conta com 7 decks para banho e uma infraestrutura charmosa e privativa.',
    'Ideal para quem busca tranquilidade e contato com a natureza com mais conforto. Oferece pergolados privativos (custo extra).',
    'Opções de caiaque e stand up paddle.'
  ],
  shortDescription: 'Balneário exclusivo com decks no Rio Formoso e ambiente privativo.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '16km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Acesso aos decks e trilhas'],
  keywords: ['balneario', 'exclusivo', 'rio formoso', 'decks'],
  categories: [aquaticPt],
  recommendedFor: [familiesPt],
  city: bonito
};
