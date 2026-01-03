import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${GENERAL_BUCKET_NAME}/region`;

export const pantanalNorteEs: Region = {
  id: 'pantanal-norte',
  slug: 'pantanal-norte',
  name: 'Pantanal Norte',
  subtitle: 'El reino del jaguar y la Transpantaneira.',
  description: [
    'El Pantanal Norte es famoso por la Carretera Transpantaneira y por ser el mejor lugar del mundo para avistar jaguares, especialmente en la región de Porto Jofre. Es un destino enfocado en la observación intensa de vida salvaje y fotografía.'
  ],
  coverImage: `${baseImgPath}/pantanal-norte/img1.webp`,
  galleryImages: [],
  icon: 'mdi-paw',
  cities: [cities.pocone],
  highlights: ['Avistamiento de Jaguares', 'Carretera Transpantaneira', 'Observación de Aves'],
  location: {
    lat: -16.3722,
    lng: -56.6280,
    address: 'Poconé - Mato Grosso, Brasil'
  },
  details: {
    bestTime: 'Julio a Septiembre (Seca, ideal para jaguares) | Febrero a Mayo (Inundación)',
    climate: 'Tropical continental. Muy caluroso en la estación seca.',
    access: 'Aeropuerto de Cuiabá (CGB) + Traslado terrestre por la Transpantaneira.',
  },
  gastronomy: ['Mojica de Pintado', 'Pacú Asado', 'Farofa de Plátano', 'Maria Isabel'],
  tips: [
    'Lleve repelente y ropa de manga larga.',
    'Porto Jofre es el punto clave para ver jaguares.',
    'El camino es de tierra, prepárese para el polvo en la temporada seca.'
  ]
};