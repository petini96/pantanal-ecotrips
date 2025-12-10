import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../audiences/couples/CouplesEn';
import { couplesEs } from '../audiences/couples/CouplesEs';
import { couplesPt } from '../audiences/couples/CouplesPt';
import { familiesEn } from '../audiences/families/FamiliesEn';
import { familiesEs } from '../audiences/families/FamiliesEs';
import { familiesPt } from '../audiences/families/FamiliesPt';
import { aquaticEn } from '../categories/aquaticc/AquaticcEn';
import { aquaticEs } from '../categories/aquaticc/AquaticcEs';
import { aquaticPt } from '../categories/aquaticc/AquaticcPt';
import { ecotourismEn } from '../categories/ecotourismm/EcotourismmEn';
import { ecotourismEs } from '../categories/ecotourismm/EcotourismmEs';
import { ecotourismPt } from '../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/estancia-mimosa/img1.webp`

export const estanciaMimosaPt: Tour = {
  id: 'TOUR-EM-01',
  slug: 'estancia-mimosa-em-bonito',
  name: 'Estância Mimosa',
  description: 'Trilha na mata ciliar do rio Mimoso com paradas para banho em cachoeiras, piscinas naturais, plataforma para salto e um passeio de barco a remo.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '22,6km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Acompanhamento de guia', 'Colete salva-vidas'],
  keywords: ['cachoeira', 'trilha', 'banho de rio', 'barco'],
  categories: [aquaticPt, ecotourismPt],
  recommendedFor: [familiesPt, couplesPt],
  city: bonito
};

export const estanciaMimosaEn: Tour = {
  id: 'TOUR-EM-01',
  slug: 'estancia-mimosa-em-bonito',
  name: 'Estância Mimosa',
  description: 'Trail in the riparian forest of the Mimoso River with stops for swimming in waterfalls, natural pools, a diving platform, and a rowboat ride.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '22.6km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Guide accompaniment', 'Life vest'],
  keywords: ['waterfall', 'trail', 'river swimming', 'boat'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn],
  city: bonito
};

export const estanciaMimosaEs: Tour = {
  id: 'TOUR-EM-01',
  slug: 'estancia-mimosa-em-bonito',
  name: 'Estancia Mimosa',
  description: 'Sendero en el bosque de ribera del río Mimoso con paradas para bañarse en cascadas, piscinas naturales, una plataforma de salto y un paseo en bote de remos.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '22,6km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Acompañamiento de guía', 'Chaleco salvavidas'],
  keywords: ['cascada', 'sendero', 'baño en el río', 'bote'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs, couplesEs],
  city: bonito
};