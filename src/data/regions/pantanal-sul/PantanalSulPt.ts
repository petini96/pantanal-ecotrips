import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { REGIONS_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${REGIONS_BUCKET_NAME}`;

export const pantanalSulPt: Region = {
  id: 'pantanal-sul',
  slug: 'pantanal-sul',
  name: 'Pantanal Sul (MS)',
  subtitle: 'A autêntica cultura pantaneira e a vida selvagem acessível.',
  description: 'O Pantanal Sul, acessado principalmente via Campo Grande, é famoso por suas fazendas tradicionais que combinam pecuária com ecoturismo. É uma região fantástica para safáris fotográficos, observação de aves e vivência da cultura do peão pantaneiro. Regiões como Miranda e Aquidauana oferecem fácil acesso a uma biodiversidade incrível.',
  coverImage: `${baseImgPath}/pantanal-sul/cover.webp`,
  galleryImages: [],
  icon: 'mdi-paw',
  cities: [cities.miranda, cities.aquidauana, cities.corumba, cities.anastacio],
  highlights: ['Safáris', 'Fazendas Típicas', 'Pesca', 'Cultura Pantaneira']
};