import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { groupsPt } from '../../audiences/groups/GroupsPt';
import { adventurePt } from '../../categories/adventuree/AdventureePt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';

const img = `${TOURS_BUCKET_NAME}/rio-formoso/img1.webp`

export const boteRioFormosoPt: Tour = {
  id: 'TOUR-BRF-01',
  slug: 'bote-rio-formoso-em-bonito',
  name: 'Bote no Rio Formoso',
  description: ['Descida de 6km em botes infláveis por um dos principais rios da região, passando por três cachoeiras, duas corredeiras e com uma parada para banho.'],
  shortDescription: 'Descida de 6km em botes infláveis por um dos principais rios da região, passando por três cachoeiras, duas corredeiras e com uma parada para banho.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL],
  includedItems: ['Colete salva-vidas', 'Acompanhamento de guia'],
  keywords: ['bote', 'rio formoso', 'corredeira', 'cachoeira'],
  categories: [aquaticPt, adventurePt],
  recommendedFor: [familiesPt, groupsPt],
  city: bonito
};

