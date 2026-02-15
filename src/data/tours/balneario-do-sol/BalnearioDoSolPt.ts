import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';

const img = `${TOURS_BUCKET_NAME}/balneario-do-sol/img1.webp`

export const balnearioDoSolPt: Tour = {
  id: 'TOUR-BDS-01',
  slug: 'balneario-do-sol',
  name: 'Balneário do Sol',
  description: [
    'O Balneário do Sol oferece a possibilidade de nadar na piscina ou próprio rio Formoso com várias espécies de peixes e lindas cachoeiras fazendo parte do cenário.',
    'Possui quadra de vôlei, futebol de areia, carretilha, plataforma para salto e restaurante, além de quiosques com churrasqueiras e sanitários (adaptados para cadeirantes).',
    'É um lugar apropriado para passar o dia e se refrescar.'
  ],
  shortDescription: 'Lazer completo com cachoeiras, churrasqueiras e atividades para família.',
  mainImage: img,
  durationInHours: 6,
  minAge: 0,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Entrada e uso da infraestrutura'],
  keywords: ['balneario', 'familia', 'churrasqueira', 'rio formoso'],
  categories: [aquaticPt],
  recommendedFor: [familiesPt],
  city: bonito
};
