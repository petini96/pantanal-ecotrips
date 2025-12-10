import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples/CouplesPt';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

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