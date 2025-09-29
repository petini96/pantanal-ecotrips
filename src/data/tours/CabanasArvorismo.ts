import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { familiesEn, familiesEs, familiesPt } from 'src/data/audiences/Families';
import { groupsEn, groupsEs, groupsPt } from 'src/data/audiences/Groups';
import image from 'src/assets/images/tours/cabanas-arvorismo.png';
import { adventurePt, adventureEn, adventureEs } from '../categories/Adventuree';
import { bonito } from '../regions/Cities';

export const cabanasArvorismoPt: Tour = {
  id: 'TOUR-CA-01',
  name: 'Cabanas Arvorismo',
  description: 'Percurso de 300m com 20 estações e 2 tirolesas, com altura de 4m a 15m. A última é uma tirolesa aquática no rio Formoso.',
  mainImage: image,
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
  name: 'Cabanas Treetop Circuit',
  description: 'A 300m course with 20 stations and 2 zip lines, at heights from 4m to 15m. The final one is an aquatic zip line over the Formoso River.',
  mainImage: image,
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
  name: 'Cabanas Arborismo',
  description: 'Recorrido de 300m con 20 estaciones y 2 tirolinas, con alturas de 4m a 15m. La última es una tirolina acuática en el río Formoso.',
  mainImage: image,
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