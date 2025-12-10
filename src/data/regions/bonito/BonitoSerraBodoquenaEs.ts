import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { REGIONS_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${REGIONS_BUCKET_NAME}`;

export const bonitoSerraBodoquenaEs: Region = {
  id: 'bonito-serra-bodoquena',
  slug: 'bonito',
  name: 'Bonito y Sierra de Bodoquena',
  subtitle: 'La capital del ecoturismo brasileño y sus aguas cristalinas.',
  description: 'Conocida mundialmente como el Caribe de agua dulce, la región de Bonito ofrece una experiencia única de flotación en ríos transparentes, exploración de cuevas milenarias y cascadas majestuosas. Es el destino perfecto para quienes buscan contacto directo con la naturaleza con excelente infraestructura de seguridad.',
  coverImage: `${baseImgPath}/bonito/cover.webp`,
  galleryImages: [],
  icon: 'mdi-fish',
  cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque],
  highlights: ['Flotación', 'Cuevas', 'Cascadas', 'Buceo']
};