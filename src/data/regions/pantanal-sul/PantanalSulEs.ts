import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { REGIONS_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${REGIONS_BUCKET_NAME}`;

export const pantanalSulEs: Region = {
  id: 'pantanal-sul',
  slug: 'pantanal-sul',
  name: 'Pantanal Sur',
  subtitle: 'La auténtica cultura pantanera y vida salvaje accesible.',
  description: 'El Pantanal Sur, con acceso principalmente vía Campo Grande, es famoso por sus haciendas tradicionales que combinan ganadería con ecoturismo. Es una región fantástica para safaris fotográficos, observación de aves y vivir la cultura del peón local. Regiones como Miranda y Aquidauana ofrecen fácil acceso a una biodiversidad increíble.',
  coverImage: `${baseImgPath}/pantanal-sul/cover.webp`,
  galleryImages: [],
  icon: 'mdi-paw',
  cities: [cities.miranda, cities.aquidauana, cities.corumba, cities.anastacio],
  highlights: ['Safaris', 'Haciendas Típicas', 'Pesca', 'Cultura Pantanera']
};