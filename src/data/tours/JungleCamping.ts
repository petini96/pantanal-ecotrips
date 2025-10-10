import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { adventurePt, adventureEn, adventureEs } from 'src/data/categories/Adventuree';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

// PT-BR
export const jungleCampingPt: Tour = {
  id: 'TOUR-JC-01',
  slug: 'acampamento-na-selva',
  name: 'Acampamento na Selva (uma noite)',
  description: 'Uma experiência única de pernoite na selva do Pantanal em redes com mosquiteiros. Uma imersão total nos sons e na atmosfera noturna da natureza.',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-jungle-camping.jpg`,
  durationInHours: 12,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.FOREST],
  includedItems: ['Rede com mosquiteiro', 'Jantar e café da manhã no local', 'Guia'],
  keywords: ['acampar', 'selva', 'rede', 'aventura'],
  categories: [adventurePt],
  recommendedFor: [],
  city: miranda
};

// EN-US
export const jungleCampingEn: Tour = {
  id: 'TOUR-JC-01',
  slug: 'acampamento-na-selva',
  name: 'Camping in the Jungle (one night out)',
  description: 'A unique experience of spending the night in the Pantanal jungle in hammocks with mosquito nets. A total immersion in the sounds and nocturnal atmosphere of nature.',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-jungle-camping.jpg`,
  durationInHours: 12,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.FOREST],
  includedItems: ['Hammock with mosquito net', 'Dinner and breakfast on site', 'Guide'],
  keywords: ['camping', 'jungle', 'hammock', 'adventure'],
  categories: [adventureEn],
  recommendedFor: [],
  city: miranda
};

// ES
export const jungleCampingEs: Tour = {
  id: 'TOUR-JC-01',
  slug: 'acampamento-na-selva',
  name: 'Campamento en-US la Selva (una noche fuera)',
  description: 'Una experiencia única de pasar la noche en-US la selva del Pantanal en-US hamacas con mosquiteros. Una inmersión total en-US los sonidos y la atmósfera nocturna de la naturaleza.',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-jungle-camping.jpg`,
  durationInHours: 12,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.FOREST],
  includedItems: ['Hamaca con mosquitero', 'Cena y desayuno en-US el lugar', 'Guía'],
  keywords: ['acampar', 'selva', 'hamaca', 'aventura'],
  categories: [adventureEs],
  recommendedFor: [],
  city: miranda
};