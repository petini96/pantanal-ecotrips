import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { ecotourismEn, ecotourismEs, ecotourismPt } from 'src/data/categories/Ecotourismm';
import { aquaticEn, aquaticEs, aquaticPt } from 'src/data/categories/Aquaticc';
import { adventureEn, adventureEs, adventurePt } from 'src/data/categories/Adventuree';
import { groupsEn, groupsEs, groupsPt } from 'src/data/audiences/Groups';
import { couplesEn, couplesEs, couplesPt } from 'src/data/audiences/Couples';
import { bonito } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

const img = `${TOURS_BUCKET_NAME}/boca-onca/img3.webp`

// PT-BR
export const bocaDaOncaPt: Tour = {
  id: 'TOUR-BDO-01',
  slug: 'boca-da-onca',
  name: 'Boca da Onça Ecotour',
  description: 'Caminhada por trilha de 4km passando por 11 cachoeiras, incluindo a Cachoeira Boca da Onça, a mais alta do MS com 156m. Vários pontos de banho e vista para o Canyon do Rio Salobra.',
  mainImage: img,
  durationInHours: 8,
  distanceFromCity: '55km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Almoço', 'Acompanhamento de guia'],
  keywords: ['boca da onça', 'cachoeira', 'trilha', 'canyon'],
  categories: [adventurePt, ecotourismPt, aquaticPt],
  recommendedFor: [groupsPt, couplesPt],
  city: bonito
};

// EN-US
export const bocaDaOncaEn: Tour = {
  id: 'TOUR-BDO-01',
  slug: 'boca-da-onca',
  name: 'Boca da Onça Ecotour',
  description: 'A 4km trail walk passing by 11 waterfalls, including Boca da Onça Waterfall, the highest in the state at 156m. Various swimming spots and a view of the Salobra River Canyon.',
  mainImage: img,
  durationInHours: 8,
  distanceFromCity: '55km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Lunch', 'Guide accompaniment'],
  keywords: ['boca da onça', 'waterfall', 'trail', 'canyon'],
  categories: [adventureEn, ecotourismEn, aquaticEn],
  recommendedFor: [groupsEn, couplesEn],
  city: bonito
};

// ES
export const bocaDaOncaEs: Tour = {
  id: 'TOUR-BDO-01',
  slug: 'boca-da-onca',
  name: 'Boca da Onça Ecotour',
  description: 'Caminata por un sendero de 4km que pasa por 11 cascadas, incluida la Cascada Boca da Onça, la más alta del estado con 156m. Varios puntos para bañarse y vistas al Cañón del Río Salobra.',
  mainImage: img,
  durationInHours: 8,
  distanceFromCity: '55km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Almuerzo', 'Acompañamiento de guía'],
  keywords: ['boca da onça', 'cascada', 'sendero', 'cañón'],
  categories: [adventureEs, ecotourismEs, aquaticEs],
  recommendedFor: [groupsEs, couplesEs],
  city: bonito
};