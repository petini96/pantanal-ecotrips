import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';

const img = `${TOURS_BUCKET_NAME}/balneario-municipal/img1.webp`

export const balnearioMunicipalPt: Tour = {
  id: 'TOUR-MUN-01',
  slug: 'balneario-municipal',
  name: 'Balneário Municipal',
  description: [
    'Em um trecho privilegiado do rio formoso, em meio às águas cristalinas que permitem uma visão de peixes de cores e tamanho variados.',
    'O Balneário Municipal dispõe de estacionamento, quadras de vôlei e futebol de areia, lanchonetes e restaurantes, além de quiosques com churrasqueiras e sanitários (adaptados para cadeirantes).',
    'É um lugar apropriado para passar o dia e se refrescar.'
  ],
  shortDescription: 'Banho de rio com muitos peixes e infraestrutura de lazer próxima à cidade.',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Entrada'],
  keywords: ['balneario', 'peixes', 'rio formoso', 'lazer'],
  categories: [aquaticPt],
  recommendedFor: [familiesPt],
  city: bonito
};
