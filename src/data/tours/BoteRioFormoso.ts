import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { aquaticEn, aquaticEs, aquaticPt } from 'src/data/categories/Aquatic';
import { adventureEn, adventureEs, adventurePt } from 'src/data/categories/Adventure';
import { familiesEn, familiesEs, familiesPt } from 'src/data/audiences/Families';
import { groupsEn, groupsEs, groupsPt } from 'src/data/audiences/Groups';
import image from 'src/assets/images/tours/bote-rio-formoso.png';

// PT-BR
export const boteRioFormosoPt: Tour = {
  id: 'TOUR-BRF-01',
  name: 'Bote no Rio Formoso',
  description: 'Descida de 6km em botes infláveis por um dos principais rios da região, passando por três cachoeiras, duas corredeiras e com uma parada para banho.',
  mainImage: image,
  durationInHours: 4,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL],
  includedItems: ['Colete salva-vidas', 'Acompanhamento de guia'],
  keywords: ['bote', 'rio formoso', 'corredeira', 'cachoeira'],
  categories: [aquaticPt, adventurePt],
  recommendedFor: [familiesPt, groupsPt],
};

// EN-US
export const boteRioFormosoEn: Tour = {
  id: 'TOUR-BRF-01',
  name: 'Rafting on the Formoso River',
  description: 'A 6km downstream trip in inflatable rafts on one of the main rivers of the region, passing by three waterfalls, two rapids, and a stop for swimming.',
  mainImage: image,
  durationInHours: 4,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL],
  includedItems: ['Life vest', 'Guide accompaniment'],
  keywords: ['rafting', 'formoso river', 'rapids', 'waterfall'],
  categories: [aquaticEn, adventureEn],
  recommendedFor: [familiesEn, groupsEn],
};

// ES
export const boteRioFormosoEs: Tour = {
  id: 'TOUR-BRF-01',
  name: 'Bote en el Río Formoso',
  description: 'Descenso de 6km en botes inflables por uno de los principales ríos de la región, pasando por tres cascadas, dos rápidos y con una parada para bañarse.',
  mainImage: image,
  durationInHours: 4,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL],
  includedItems: ['Chaleco salvavidas', 'Acompañamiento de guía'],
  keywords: ['bote', 'río formoso', 'rápidos', 'cascada'],
  categories: [aquaticEs, adventureEs],
  recommendedFor: [familiesEs, groupsEs],
};