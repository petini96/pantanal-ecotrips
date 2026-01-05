import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples/CouplesPt';
import { groupsPt } from '../../audiences/groups/GroupsPt';
import { adventurePt } from '../../categories/adventuree/AdventureePt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/boca-onca/img3.webp`

export const bocaDaOncaPt: Tour = {
  id: 'TOUR-BDO-01',
  slug: 'boca-da-onca-em-bonito',
  name: 'Boca da Onça Ecotour',
  description: ['Caminhada por trilha de 4km passando por 11 cachoeiras, incluindo a Cachoeira Boca da Onça, a mais alta do MS com 156m. Vários pontos de banho e vista para o Canyon do Rio Salobra.'],
  shortDescription: 'Caminhada por trilha de 4km passando por 11 cachoeiras, incluindo a Cachoeira Boca da Onça, a mais alta do MS com 156m. Vários pontos de banho e vista para o Canyon do Rio Salobra.',
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

