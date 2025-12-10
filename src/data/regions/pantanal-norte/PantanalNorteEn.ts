import { type Region } from 'src/model/Region';
import { REGIONS_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${REGIONS_BUCKET_NAME}`;

export const pantanalNorteEn: Region = {
  id: 'pantanal-norte',
  slug: 'pantanal-norte',
  name: 'North Pantanal',
  subtitle: 'Home of the Jaguar and the mythical Transpantaneira.',
  description: 'The North Pantanal, entered via Cuiabá, is marked by the Transpantaneira Highway. It is the globally recognized destination for those with the specific goal of spotting the jaguar, especially in the Porto Jofre region. The landscape shifts slightly, offering dense wetlands and an impressive concentration of wildlife along the road.',
  coverImage: `${baseImgPath}/pantanal-norte/cover.webp`,
  galleryImages: [],
  icon: 'mdi-camera-iris',
  cities: [], 
  highlights: ['Jaguar', 'Transpantaneira', 'Porto Jofre', 'Intense Observation']
};