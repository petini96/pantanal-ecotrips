import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';
import { adventurePt } from '../../categories/adventuree/AdventureePt';

const img = `${TOURS_BUCKET_NAME}/fazenda-san-francisco/img1.webp`

// Note: Fazenda San Francisco is in Miranda/Pantanal
export const fazendaSanFranciscoPt: Tour = {
  id: 'TOUR-FSF-01',
  slug: 'fazenda-san-francisco',
  name: 'Fazenda San Francisco (Pantanal)',
  description: [
    'O Day-use na Fazenda San Francisco inicia-se as 8h00 partindo da sede da Fazenda San Francisco. Durante o dia serão realizadas duas atividades, o Safari Fotográfico (Percorre estradas entre as reservas de matas nativas e Pantanal, campos de arroz irrigado e visita a invernadas de criação de gado da fazenda com objetivo de avistar e conhecer a fauna e flora do Pantanal, além das atividades produtivas da fazenda), e a Chalana (São realizados também pescaria esportiva de piranhas e visita à figueira centenária), sendo a ordem das atividades organizadas pela Fazenda.'
  ],
  shortDescription: 'Um dia no Pantanal com Safari Fotográfico, Chalana e almoço típico.',
  mainImage: img,
  durationInHours: 10,
  minAge: 0,
  distanceFromCity: '162km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.RIVER, EnvironmentType.FARM],
  includedItems: ['Safari', 'Chalana', 'Almoço', 'Guia'],
  keywords: ['pantanal', 'safari', 'chalana', 'bichos'],
  categories: [ecotourismPt, adventurePt],
  recommendedFor: [familiesPt],
  city: miranda
};
