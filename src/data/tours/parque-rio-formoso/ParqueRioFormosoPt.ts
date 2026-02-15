import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';
import { adventurePt } from '../../categories/adventuree/AdventureePt';

const img = `${TOURS_BUCKET_NAME}/parque-ecologico-rio-formoso/img1.webp`

export const parqueRioFormosoPt: Tour = {
  id: 'TOUR-PRF-01',
  slug: 'parque-rio-formoso',
  name: 'Parque Ecológico Rio Formoso',
  description: [
    'Localizado a apenas 7km do centro, reúne diversas atividades como Boia Cross, Cavalgada, Trilha e Arvorismo.',
    'Possui uma lagoa formosa para banho e relaxamento (balneário).',
    'Ideal para passar o dia com a família com atividades opcionais.'
  ],
  shortDescription: 'Parque próximo à cidade com lagoa para banho e atividades de aventura opcionais.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Acesso à Lagoa Formosa (se Day Use)', 'Outras atividades cobradas à parte'],
  keywords: ['lagoa', 'boia cross', 'cavalgada', 'relax'],
  categories: [ecotourismPt, adventurePt],
  recommendedFor: [familiesPt],
  city: bonito
};
