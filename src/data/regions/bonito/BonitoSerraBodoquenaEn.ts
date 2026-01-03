import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${GENERAL_BUCKET_NAME}/region`;

export const bonitoSerraBodoquenaEn: Region = {
  id: 'bonito-serra-bodoquena',
  slug: 'bonito',
  name: 'Bonito & Bodoquena Ridge',
  subtitle: 'The capital of Brazilian ecotourism and its crystal clear waters.',
  description: [
    `World-renowned as the "Freshwater Caribbean," the region of Bonito and Serra da Bodoquena offers a unique ecotourism experience. Immerse yourself in river snorkeling adventures through crystal-clear waters, explore ancient caves, and marvel at majestic waterfalls. It is the perfect destination for those seeking direct contact with nature, combining breathtaking scenery with excellent safety infrastructure and environmental preservation.`
  ],
  coverImage: `${baseImgPath}/bonito/img1.webp`,
  galleryImages: [],
  icon: 'mdi-fish',
  cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque],
  highlights: ['Snorkeling', 'Caves', 'Waterfalls', 'Diving'],
  // Novos campos sugeridos
  location: {
    lat: -21.1214,
    lng: -56.4819,
    address: 'Mato Grosso do Sul, Brazil'
  },
  details: {
    bestTime: 'April to September (Clearest waters) | October to March (Fuller waterfalls)',
    climate: 'Humid tropical. Hot and rainy summer, mild and dry winter.',
    access: 'Bonito Regional Airport (BYO) or Campo Grande Airport (CGR) + 290km transfer.',
  },
  gastronomy: ['Pintado fish with Urucum', 'Alligator meat', 'Piranha soup', 'Baked Pacu'],
  tips: [
    'Single Voucher system is mandatory for tours.',
    'Book in advance, tours have a daily visitor limit.',
    'Sunscreen is not allowed during river snorkeling.'
  ]
};