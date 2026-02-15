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
    'O balneário público de Bonito oferece banho nas águas cristalinas do Rio Formoso, com grande quantidade de peixes.',
    'Possui infraestrutura com lanchonetes, churrasqueiras, quadras de vôlei e estacionamento.',
    'Local de fácil acesso e muito frequentado por moradores e turistas.'
  ],
  shortDescription: 'Banho de rio com muitos peixes e infraestrutura de lazer próxima à cidade.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Entrada'],
  keywords: ['balneario', 'peixes', 'rio formoso', 'lazer'],
  categories: [aquaticPt],
  recommendedFor: [familiesPt],
  city: bonito
};
