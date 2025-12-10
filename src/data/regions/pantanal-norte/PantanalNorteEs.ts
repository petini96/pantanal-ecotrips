import { type Region } from 'src/model/Region';
import { REGIONS_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${REGIONS_BUCKET_NAME}`;

export const pantanalNorteEs: Region = {
  id: 'pantanal-norte',
  slug: 'pantanal-norte',
  name: 'Pantanal Norte',
  subtitle: 'El hogar del jaguar y la mítica Transpantaneira.',
  description: 'El Pantanal Norte, con entrada por Cuiabá, está marcado por la carretera Transpantaneira. Es el destino mundialmente reconocido para quienes tienen el objetivo específico de avistar al jaguar, especialmente en la región de Porto Jofre. El paisaje cambia ligeramente, ofreciendo humedales densos y una concentración impresionante de vida salvaje.',
  coverImage: `${baseImgPath}/pantanal-norte/cover.webp`,
  galleryImages: [],
  icon: 'mdi-camera-iris',
  cities: [], 
  highlights: ['Jaguar', 'Transpantaneira', 'Porto Jofre', 'Observación Intensa']
};