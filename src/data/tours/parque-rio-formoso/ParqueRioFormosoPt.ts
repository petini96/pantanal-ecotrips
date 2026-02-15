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
    'Parque Ecológico Rio Formoso – Com acesso fácil, fica a 7 km do centro da cidade e reúne passeios diversos como Boia Cross, Cavalgada, Trilha e o Adventure.',
    'Tem uma estrutura de balneário (Lagoa) junto a recepção que tem tirolesa, caiaque e stand up, disponíveis para uso custo adicional, é um local bonito e agradável para se passar o dia.'
  ],
  shortDescription: 'Parque próximo à cidade com lagoa para banho e atividades de aventura opcionais.',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Acesso à Lagoa Formosa (se Day Use)', 'Outras atividades cobradas à parte'],
  keywords: ['lagoa', 'boia cross', 'cavalgada', 'relax'],
  categories: [ecotourismPt, adventurePt],
  recommendedFor: [familiesPt],
  city: bonito
};
