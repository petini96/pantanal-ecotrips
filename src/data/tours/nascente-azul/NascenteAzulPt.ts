import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples/CouplesPt';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/nascente-azul/img1.webp`

export const nascenteAzulPt: Tour = {
  id: 'TOUR-NA-01',
  slug: 'nascente-azul',
  name: 'Nascente Azul',
  description: [
    'O passeio de flutuação tem início com uma caminhada leve de mais ou menos 1.000 metros pela mata ciliar, exuberante e diversificada.',
    'A nascente é repleta de peixes e plantas que ornamentam o ambiente. Não possui barco de apoio.',
    'Para quem vai fazer a flutuação, o Balneário Lago da Capela já está incluído.'
  ],
  shortDescription: 'Flutuação em águas calmas e acesso ao Balneário Lago da Capela.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '32km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Acompanhamento de guia', 'Equipamentos de flutuação', 'Day use no balneário'],
  keywords: ['flutuação', 'balneario', 'nascente', 'peixes'],
  categories: [aquaticPt, ecotourismPt],
  recommendedFor: [familiesPt, couplesPt],
  city: bonito
};
