import { type Tour } from 'src/model/Tour';
import { DifficultyLevel } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/projeto-jiboia/img1.webp`

export const projetoJiboiaPt: Tour = {
  id: 'TOUR-PJ-01',
  slug: 'projeto-jiboia',
  name: 'Projeto Jiboia',
  description: [
    'Uma palestra educativa e divertida sobre serpentes, desmistificando medos e mostrando a importância delas na natureza.',
    'Ao final, é possível tirar uma foto com uma jiboia nos ombros (opcional).',
    'Atividade noturna, ideal para fazer após os passeios do dia.'
  ],
  shortDescription: 'Palestra educativa e interativa sobre serpentes e educação ambiental.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'Centro',
  difficulty: DifficultyLevel.EASY,
  environments: [], // Urban/Indoor
  includedItems: ['Palestra', 'Foto com Jiboia (opcional)'],
  keywords: ['educação ambiental', 'cobras', 'noturno'],
  categories: [ecotourismPt],
  recommendedFor: [familiesPt],
  city: bonito
};
