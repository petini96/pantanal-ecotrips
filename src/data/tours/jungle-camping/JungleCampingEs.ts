import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';

const img = `${TOURS_BUCKET_NAME}/acampamento-na-selva/img1.webp`

export const jungleCampingEs: Tour = {
  id: 'TOUR-JC-01',
  slug: 'acampamento-na-selva-em-miranda',
  name: 'Campamento en la Selva (una noche fuera)',
  description: ['Una experiencia única de pasar la noche en la selva del Pantanal en hamacas con mosquiteros. Una inmersión total en los sonidos y la atmósfera nocturna de la naturaleza.'],
  shortDescription: 'Una experiencia única de pasar la noche en la selva del Pantanal en hamacas con mosquiteros. Una inmersión total en los sonidos y la atmósfera nocturna de la naturaleza.',
  mainImage: img,
  durationInHours: 12,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.FOREST],
  includedItems: ['Hamaca con mosquitero', 'Cena y desayuno en el lugar', 'Guía'],
  keywords: ['acampar', 'selva', 'hamaca', 'aventura'],
  categories: [adventureEs],
  recommendedFor: [],
  city: miranda
};

