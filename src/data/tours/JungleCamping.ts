import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { adventurePt, adventureEn, adventureEs } from 'src/data/categories/Adventuree';
import image from '../../assets/images/tours/pantanal-jungle-camping.jpg'; // Substitua pelo caminho da imagem real
import { miranda } from '../regions/Cities';

// PT-BR
export const jungleCampingPt: Tour = {
  id: 'TOUR-JC-01',
  name: 'Acampamento na Selva (uma noite)',
  description: 'Uma experiência única de pernoite na selva do Pantanal em redes com mosquiteiros. Uma imersão total nos sons e na atmosfera noturna da natureza.',
  mainImage: image,
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
  name: 'Camping in the Jungle (one night out)',
  description: 'A unique experience of spending the night in the Pantanal jungle in hammocks with mosquito nets. A total immersion in the sounds and nocturnal atmosphere of nature.',
  mainImage: image,
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
  name: 'Campamento en la Selva (una noche fuera)',
  description: 'Una experiencia única de pasar la noche en la selva del Pantanal en hamacas con mosquiteros. Una inmersión total en los sonidos y la atmósfera nocturna de la naturaleza.',
  mainImage: image,
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