import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';

const img = `${TOURS_BUCKET_NAME}/estrela-do-formoso/img1.webp`

export const estrelaDoFormosoPt: Tour = {
  id: 'TOUR-EF-01',
  slug: 'estrela-do-formoso',
  name: 'Estrela do Formoso',
  description: [
    'Estrela do Formoso é o passeio ideal para todas as idades. As trilhas dentro e ao redor da Ilha, te levam até 07 decks de banho no principal rio da cidade, o Rio Formoso, conhecido por suas águas cristalinas e vida aquática pujante com peixes da espécie piraputanga, curimba e dourado que transformam a água no cenário ideal para tomar “aquele” banho refrescante.',
    'Além de toda beleza natural, contamos com receptivo, banheiros, área de descanso e estacionamento. Para uso dos Pergolados, consultar valores e disponibilidade. Tem opções de passeio de Stand Up e Caique, com duração média de 1h.'
  ],
  shortDescription: 'Balneário exclusivo com decks no Rio Formoso e ambiente privativo.',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '17km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Acesso aos decks e trilhas'],
  keywords: ['balneario', 'exclusivo', 'rio formoso', 'decks'],
  categories: [aquaticPt],
  recommendedFor: [familiesPt],
  city: bonito
};
