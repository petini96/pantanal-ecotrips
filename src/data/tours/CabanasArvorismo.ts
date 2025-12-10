import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../audiences/families/FamiliesEn';
import { familiesEs } from '../audiences/families/FamiliesEs';
import { familiesPt } from '../audiences/families/FamiliesPt';
import { groupsEn } from '../audiences/groups/GroupsEn';
import { groupsEs } from '../audiences/groups/GroupsEs';
import { groupsPt } from '../audiences/groups/GroupsPt';
import { adventureEn } from '../categories/adventuree/AdventureeEn';
import { adventureEs } from '../categories/adventuree/AdventureeEs';
import { adventurePt } from '../categories/adventuree/AdventureePt';

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

export const cabanasArvorismoEn: Tour = {
  id: 'TOUR-CA-01',
  slug: 'cabanas-arvorismo-em-bonito',
  name: 'Cabanas Treetop Circuit',
  description: 'A 300m course with 20 stations and 2 zip lines, at heights from 4m to 15m. The final one is an aquatic zip line over the Formoso River.',
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: '6.1km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Safety equipment (harness, helmet)', 'Training'],
  keywords: ['treetop', 'zip line', 'adventure', 'formoso river'],
  categories: [adventureEn],
  recommendedFor: [familiesEn, groupsEn],
  city: bonito
};

export const cabanasArvorismoEs: Tour = {
  id: 'TOUR-CA-01',
  slug: 'cabanas-arvorismo-em-bonito',
  name: 'Cabanas Arborismo',
  description: 'Recorrido de 300m con 20 estaciones y 2 tirolinas, con alturas de 4m a 15m. La última es una tirolina acuática en el río Formoso.',
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: '6,1km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Equipo de seguridad (arnés, casco)', 'Entrenamiento'],
  keywords: ['arborismo', 'tirolina', 'aventura', 'río formoso'],
  categories: [adventureEs],
  recommendedFor: [familiesEs, groupsEs],
  city: bonito
};