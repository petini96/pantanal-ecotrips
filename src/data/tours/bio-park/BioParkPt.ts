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
    'Abrigo de fauna silvestre que alia conservação e educação ambiental. Animais que não podem voltar à natureza encontram lar aqui.',
    'Possui também uma fazendinha com mini-animais para interação com crianças.',
    'Passeio leve e educativo.'
  ],
  shortDescription: 'Refúgio de animais silvestres e fazendinha de mini animais.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FARM],
  includedItems: ['Acompanhamento de guia'],
  keywords: ['animais', 'abrigo', 'educacao', 'fazendinha'],
  categories: [ecotourismPt],
  recommendedFor: [familiesPt],
  city: bonito
};
