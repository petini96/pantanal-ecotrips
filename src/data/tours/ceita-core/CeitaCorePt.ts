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
    'Na língua tupi-guarani Ceita Corê significa “Terra de meus filhos”. Trilha interpretativa por passarelas e pontes suspensas fazem o grupo apreciar os sons e se refrescar em cachoeiras e piscinas naturais, percurso de 4km na mata ciliar do rio Chapeninha, com parada para banho na cachoeira.',
    'E visitação na exótica nascente de águas cristalinas, que aguça a imaginação, pois é considerada uma das cavernas mais profundas do mundo, com vazão de 1300 lts. de água por segundo. Uso obrigatório de tênis.'
  ],
  shortDescription: 'Trilha com cachoeiras e visita à nascente misteriosa do Rio Chapeninha.',
  mainImage: img,
  durationInHours: 6,
  minAge: 0,
  distanceFromCity: '36km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER, EnvironmentType.FARM],
  includedItems: ['Acompanhamento de guia', 'Almoço', 'Uso da infraestrutura'],
  keywords: ['cachoeiras', 'trilha', 'nascente', 'fazenda'],
  categories: [ecotourismPt, aquaticPt],
  recommendedFor: [familiesPt],
  city: bonito
};
