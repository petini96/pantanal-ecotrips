import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';

const img = `${GENERAL_BUCKET_NAME}/gallery/jungle-lodge/img4.jpg`

export const riverFloatingPt: Tour = {
  id: 'TOUR-RF-01',
  slug: 'flutuacao-rio-miranda',
  name: 'Flutuação no Rio',
  description: [
     'Uma relaxante descida de bote ou "macarrão" flutuador pelas águas calmas do rio, permitindo uma perspectiva única da vegetação e sons da natureza.'
  ],
  shortDescription: 'Uma relaxante descida de bote ou "macarrão" flutuador pelas águas calmas do rio, permitindo uma perspectiva única da vegetação e sons da natureza.',
  mainImage: img,
  durationInHours: 1.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Equipamento de flutuação', 'Guia'],
  keywords: ['flutuação', 'rio', 'relaxar'],
  categories: [aquaticPt],
  recommendedFor: [familiesPt],
  city: miranda
};