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
  description: [
    'A caminhada inicia-se na mata ciliar do Rio Salobra e percorre 4 km de trilha em meio a vegetação preservada. No trajeto, o visitante conhece 8 cachoeiras e tem 4 paradas para banho em piscinas naturais de águas cristalinas, além da Cachoeira Boca da Onça, com 156 metros de altura, a mais alta do estado.',
    'Na volta, a escadaria de 886 degraus, revela a mais bela vista do Cânion do Rio Salobra. O almoço é servido no receptivo com cardápio variado e comidas típicas.',
    'O receptivo dispõe de duas piscinas de água corrente com peixes, hidromassagem, ducha natural, vestiários, loja de souvenirs, bar e restaurante.'
  ],
  shortDescription: 'Caminhada por trilha de 4km passando por 8 cachoeiras, incluindo a Boca da Onça (mais alta do MS), com piscinas naturais e infraestrutura completa.',
  mainImage: img,
  durationInHours: 8,
  minAge: 0,
  distanceFromCity: '59km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Almoço', 'Acompanhamento de guia', 'Seguro acidente'],
  keywords: ['boca da onça', 'cachoeira', 'trilha', 'canyon'],
  categories: [adventurePt, ecotourismPt, aquaticPt],
  recommendedFor: [groupsPt, couplesPt],
  city: bonito
};
