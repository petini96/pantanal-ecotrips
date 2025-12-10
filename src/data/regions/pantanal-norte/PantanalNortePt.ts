import { type Region } from 'src/model/Region';
import { REGIONS_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${REGIONS_BUCKET_NAME}`;

export const pantanalNortePt: Region = {
  id: 'pantanal-norte',
  slug: 'pantanal-norte',
  name: 'Pantanal Norte (MT)',
  subtitle: 'A casa da onça-pintada e a mítica Transpantaneira.',
  description: 'O Pantanal Norte, com entrada por Cuiabá, é marcado pela rodovia Transpantaneira. É o destino mundialmente reconhecido para quem tem o objetivo específico de avistar a onça-pintada, especialmente na região de Porto Jofre. A paisagem muda ligeiramente, oferecendo alagados densos e uma concentração impressionante de vida selvagem ao longo da estrada.',
  coverImage: `${baseImgPath}/pantanal-norte/cover.webp`,
  galleryImages: [],
  icon: 'mdi-camera-iris',
  cities: [],
  highlights: ['Onça-Pintada', 'Transpantaneira', 'Porto Jofre', 'Observação Intensa']
};