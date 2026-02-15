import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/bio-park/img1.webp`

export const bioParkPt: Tour = {
  id: 'TOUR-BP-01',
  slug: 'bio-park',
  name: 'Bio Park',
  description: [
    'O Bio Park é um abrigo de fauna silvestre aberto à visitação, que participa de importantes projetos de conservação de espécies em extinção como o lobo guará e a anta.',
    'O roteiro da visita, conduzido por um guia, apresenta os animais que não tem condiciones de voltar à natureza e a história de cada um, despertando a sensibilização ambiental.',
    'Uma verdadeira aula de conhecimento e respeito a natureza.'
  ],
  shortDescription: 'Refúgio de animais silvestres e fazendinha de mini animais.',
  mainImage: img,
  durationInHours: 2,
  minAge: 0,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FARM],
  includedItems: ['Acompanhamento de guia'],
  keywords: ['animais', 'abrigo', 'educacao', 'fazendinha'],
  categories: [ecotourismPt],
  recommendedFor: [familiesPt],
  city: bonito
};
