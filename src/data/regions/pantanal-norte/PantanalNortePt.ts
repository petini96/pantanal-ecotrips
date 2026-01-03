import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${GENERAL_BUCKET_NAME}/region`;

export const pantanalNortePt: Region = {
  id: 'pantanal-norte',
  slug: 'pantanal-norte',
  name: 'Pantanal Norte (MT)',
  subtitle: 'O reino da onça-pintada e a Transpantaneira.',
  description: [
    'O Pantanal Norte é famoso pela Rodovia Transpantaneira e por ser o melhor lugar do mundo para avistar onças-pintadas, especialmente na região de Porto Jofre. É um destino mais voltado para a observação intensa de vida selvagem e fotografia.'
  ],
  coverImage: `${baseImgPath}/pantanal-norte/img1.webp`,
  galleryImages: [],
  icon: 'mdi-paw',
  cities: [cities.pocone],
  highlights: ['Onça-pintada', 'Rodovia Transpantaneira', 'Observação de Aves'],
  location: {
    lat: -16.3722,
    lng: -56.6280,
    address: 'Poconé - Mato Grosso, Brasil'
  },
  details: {
    bestTime: 'Julho a Setembro (Seca, ideal para ver onças) | Fevereiro a Maio (Cheia)',
    climate: 'Tropical continental. Muito quente na seca.',
    access: 'Aeroporto de Cuiabá (CGB) + Transfer terrestre pela Transpantaneira.',
  },
  gastronomy: ['Mojica de Pintado', 'Pacu Assado', 'Farofa de Banana', 'Maria Isabel'],
  tips: [
    'Leve repelente e roupas de manga longa.',
    'Porto Jofre é o ponto chave para ver onças.',
    'A estrada é de terra, prepare-se para poeira na seca.'
  ]
};