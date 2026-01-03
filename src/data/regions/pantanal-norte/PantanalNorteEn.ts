import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${GENERAL_BUCKET_NAME}/region`;

export const pantanalNorteEn: Region = {
  id: 'pantanal-norte',
  slug: 'pantanal-norte',
  name: 'North Pantanal',
  subtitle: 'The realm of the Jaguar and the Transpantaneira Highway.',
  description: [
    'The Northern Pantanal is famous for the Transpantaneira Highway and for being the best place in the world to spot jaguars, especially in the Porto Jofre region. It is a destination focused on intense wildlife watching and photography.'
  ],
  coverImage: `${baseImgPath}/pantanal-norte/img1.webp`,
  galleryImages: [],
  icon: 'mdi-paw',
  cities: [cities.pocone],
  highlights: ['Jaguar Spotting', 'Transpantaneira Highway', 'Birdwatching'],
  location: {
    lat: -16.3722,
    lng: -56.6280,
    address: 'Poconé - Mato Grosso, Brazil'
  },
  details: {
    bestTime: 'July to September (Dry season, best for Jaguars) | February to May (Wet season)',
    climate: 'Tropical continental. Very hot during the dry season.',
    access: 'Cuiabá Airport (CGB) + Land transfer via Transpantaneira.',
  },
  gastronomy: ['Pintado Fish Stew (Mojica)', 'Baked Pacu', 'Banana Farofa', 'Maria Isabel Meat Rice'],
  tips: [
    'Bring insect repellent and long-sleeved clothes.',
    'Porto Jofre is the key spot for jaguars.',
    'The road is unpaved, expect dust during the dry season.'
  ]
};