import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';

const img = `${TOURS_BUCKET_NAME}/ceita-core/img1.webp`

export const ceitaCorePt: Tour = {
  id: 'TOUR-CC-01',
  slug: 'ceita-core',
  name: 'Ceita Corê',
  description: [
    'Trilha interpretativa por passarelas e pontes suspensas, com paradas para banho em cachoeiras e piscinas naturais do Rio Chapeninha.',
    'Visitação à nascente do Rio Chapeninha, onde existe uma caverna inundada explorada até 155m de profundidade.',
    'Fazenda com almoço típico e infraestrutura de lazer.'
  ],
  shortDescription: 'Trilha com cachoeiras e visita à nascente misteriosa do Rio Chapeninha.',
  mainImage: img,
  durationInHours: 6,
  distanceFromCity: '36km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER, EnvironmentType.FARM],
  includedItems: ['Acompanhamento de guia', 'Almoço', 'Uso da infraestrutura'],
  keywords: ['cachoeiras', 'trilha', 'nascente', 'fazenda'],
  categories: [ecotourismPt, aquaticPt],
  recommendedFor: [familiesPt],
  city: bonito
};
