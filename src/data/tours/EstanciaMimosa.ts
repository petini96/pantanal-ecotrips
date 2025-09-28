import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { ecotourismEn, ecotourismEs, ecotourismPt } from 'src/data/categories/Ecotourismm';
import { aquaticEn, aquaticEs, aquaticPt } from 'src/data/categories/Aquatic';
import { familiesEn, familiesEs, familiesPt } from 'src/data/audiences/Families';
import { couplesEn, couplesEs, couplesPt } from 'src/data/audiences/Couples';
import image from 'src/assets/images/tours/estancia-mimosa.png';

export const estanciaMimosaPt: Tour = {
  id: 'TOUR-EM-01',
  name: 'Estância Mimosa',
  description: 'Trilha na mata ciliar do rio Mimoso com paradas para banho em cachoeiras, piscinas naturais, plataforma para salto e um passeio de barco a remo.',
  mainImage: image,
  durationInHours: 4,
  distanceFromCity: '22,6km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Acompanhamento de guia', 'Colete salva-vidas'],
  keywords: ['cachoeira', 'trilha', 'banho de rio', 'barco'],
  categories: [aquaticPt, ecotourismPt],
  recommendedFor: [familiesPt, couplesPt],
};

export const estanciaMimosaEn: Tour = {
  id: 'TOUR-EM-01',
  name: 'Estância Mimosa',
  description: 'Trail in the riparian forest of the Mimoso River with stops for swimming in waterfalls, natural pools, a diving platform, and a rowboat ride.',
  mainImage: image,
  durationInHours: 4,
  distanceFromCity: '22.6km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Guide accompaniment', 'Life vest'],
  keywords: ['waterfall', 'trail', 'river swimming', 'boat'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn],
};

export const estanciaMimosaEs: Tour = {
  id: 'TOUR-EM-01',
  name: 'Estancia Mimosa',
  description: 'Sendero en el bosque de ribera del río Mimoso con paradas para bañarse en cascadas, piscinas naturales, una plataforma de salto y un paseo en bote de remos.',
  mainImage: image,
  durationInHours: 4,
  distanceFromCity: '22,6km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Acompañamiento de guía', 'Chaleco salvavidas'],
  keywords: ['cascada', 'sendero', 'baño en el río', 'bote'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs, couplesEs],
};