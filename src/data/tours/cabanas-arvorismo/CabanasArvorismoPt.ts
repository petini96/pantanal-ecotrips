import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { groupsPt } from '../../audiences/groups/GroupsPt';
import { adventurePt } from '../../categories/adventuree/AdventureePt';

const img = `${TOURS_BUCKET_NAME}/cabanas-arvorismo/img1.jpg`

export const cabanasArvorismoPt: Tour = {
  id: 'TOUR-CA-01',
  slug: 'cabanas-arvorismo-em-bonito',
  name: 'Cabanas Arvorismo',
  description: 'Percurso de 300m com 20 estações e 2 tirolesas, com altura de 4m a 15m. A última é uma tirolesa aquática no rio Formoso.',
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: '6,1km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Equipamentos de segurança (arnês, capacete)', 'Treinamento'],
  keywords: ['arvorismo', 'tirolesa', 'aventura', 'rio formoso'],
  categories: [adventurePt],
  recommendedFor: [familiesPt, groupsPt],
  city: bonito
};