import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';
import { adventurePt } from '../../categories/adventuree/AdventureePt';

const img = `${TOURS_BUCKET_NAME}/porto-da-ilha/img1.webp`

export const portoDaIlhaPt: Tour = {
  id: 'TOUR-PI-01',
  slug: 'porto-da-ilha',
  name: 'Porto da Ilha (Eco Park)',
  description: [
    'Porto da Ilha – O Eco Park Porto da Ilha oferece diferentes passeios aquáticos ao ar livre e a oportunidade de apreciar as belezas naturais do Rio Formoso e sua maravilhosa fauna: peixes, pássaros, mamíferos e cachoeiras incríveis, de águas calmas e cristalinas.',
    'A estrutura conta com restaurante, sanitários e uma série de atividades (vendidas separadamente).'
  ],
  shortDescription: 'Complexo de atividades aquáticas no Rio Formoso: Bote, Boia Cross e Balneário.',
  mainImage: img,
  durationInHours: 4,
  minAge: 5,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Acesso ao balneário', 'Atividades contratadas (Bote, Boia Cross, etc)'],
  keywords: ['boia cross', 'bote', 'rio formoso', 'balneario', 'duck'],
  categories: [aquaticPt, adventurePt],
  recommendedFor: [familiesPt],
  city: bonito
};
