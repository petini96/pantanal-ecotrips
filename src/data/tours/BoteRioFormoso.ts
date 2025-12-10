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
import { aquaticEn } from '../categories/aquaticc/AquaticcEn';
import { aquaticEs } from '../categories/aquaticc/AquaticcEs';
import { aquaticPt } from '../categories/aquaticc/AquaticcPt';

const img = `${TOURS_BUCKET_NAME}/rio-formoso/img1.webp`

export const boteRioFormosoPt: Tour = {
  id: 'TOUR-BRF-01',
  slug: 'bote-rio-formoso-em-bonito',
  name: 'Bote no Rio Formoso',
  description: 'Descida de 6km em botes infláveis por um dos principais rios da região, passando por três cachoeiras, duas corredeiras e com uma parada para banho.',
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

export const boteRioFormosoEn: Tour = {
  id: 'TOUR-BRF-01',
  slug: 'bote-rio-formoso-em-bonito',
  name: 'Rafting on the Formoso River',
  description: 'A 6km downstream trip in inflatable rafts on one of the main rivers of the region, passing by three waterfalls, two rapids, and a stop for swimming.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL],
  includedItems: ['Life vest', 'Guide accompaniment'],
  keywords: ['rafting', 'formoso river', 'rapids', 'waterfall'],
  categories: [aquaticEn, adventureEn],
  recommendedFor: [familiesEn, groupsEn],
  city: bonito
};

export const boteRioFormosoEs: Tour = {
  id: 'TOUR-BRF-01',
  slug: 'bote-rio-formoso-em-bonito',
  name: 'Bote en el Río Formoso',
  description: 'Descenso de 6km en botes inflables por uno de los principales ríos de la región, pasando por tres cascadas, dos rápidos y con una parada para bañarse.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL],
  includedItems: ['Chaleco salvavidas', 'Acompañamiento de guía'],
  keywords: ['bote', 'río formoso', 'rápidos', 'cascada'],
  categories: [aquaticEs, adventureEs],
  recommendedFor: [familiesEs, groupsEs],
  city: bonito
};