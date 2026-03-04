import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventurePt } from '../../categories/adventuree';
import { adventureEn } from '../../categories/adventuree';
import { adventureEs } from '../../categories/adventuree';

const img = `${TOURS_BUCKET_NAME}/acampamento-na-selva/img1.webp`

const commonData = {
  id: 'TOUR-JC-01',
  slug: 'acampamento-na-selva-em-miranda',
  mainImage: img,
  durationInHours: 12,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.FOREST],
  city: miranda
};

// PT-BR
export const jungleCampingPt: Tour = {
    ...commonData,
    name: 'Acampamento na Selva (uma noite)',
    description: ['Uma experiência única de pernoite na selva do Pantanal em redes com mosquiteiros. Uma imersão total nos sons e na atmosfera noturna da natureza.'],
    shortDescription: 'Uma experiência única de pernoite na selva do Pantanal em redes com mosquiteiros. Uma imersão total nos sons e na atmosfera noturna da natureza.',
    includedItems: ['Rede com mosquiteiro', 'Jantar e café da manhã no local', 'Guia'],
    keywords: ['acampar', 'selva', 'rede', 'aventura'],
    categories: [adventurePt],
    recommendedFor: []
};

export const jungleCampingEn: Tour = {
    ...commonData,
    name: 'Camping in the Jungle (one night out)',
    description: ['A unique experience of spending the night in the Pantanal jungle in hammocks with mosquito nets. A total immersion in the sounds and nocturnal atmosphere of nature.'],
    shortDescription: 'A unique experience of spending the night in the Pantanal jungle in hammocks with mosquito nets. A total immersion in the sounds and nocturnal atmosphere of nature.',
    includedItems: ['Hammock with mosquito net', 'Dinner and breakfast on site', 'Guide'],
    keywords: ['camping', 'jungle', 'hammock', 'adventure'],
    categories: [adventureEn],
    recommendedFor: []
};

export const jungleCampingEs: Tour = {
    ...commonData,
    name: 'Campamento en la Selva (una noche fuera)',
    description: ['Una experiencia única de pasar la noche en la selva del Pantanal en hamacas con mosquiteros. Una inmersión total en los sonidos y la atmósfera nocturna de la naturaleza.'],
    shortDescription: 'Una experiencia única de pasar la noche en la selva del Pantanal en hamacas con mosquiteros. Una inmersión total en los sonidos y la atmósfera nocturna de la naturaleza.',
    includedItems: ['Hamaca con mosquitero', 'Cena y desayuno en el lugar', 'Guía'],
    keywords: ['acampar', 'selva', 'hamaca', 'aventura'],
    categories: [adventureEs],
    recommendedFor: []
};
