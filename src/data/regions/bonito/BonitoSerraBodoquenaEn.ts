import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { REGIONS_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${REGIONS_BUCKET_NAME}`;

export const bonitoSerraBodoquenaEn: Region = {
  id: 'bonito-serra-bodoquena',
  slug: 'bonito',
  name: 'Bonito & Bodoquena Ridge',
  subtitle: 'The capital of Brazilian ecotourism and its crystal clear waters.',
  description: 'Known worldwide as the freshwater Caribbean, the Bonito and Bodoquena region offers a unique experience of snorkeling in transparent rivers, exploring ancient caves, and majestic waterfalls. It is the perfect destination for those seeking direct contact with nature with excellent safety infrastructure and environmental preservation.',
  coverImage: `${baseImgPath}/bonito/cover.webp`,
  galleryImages: [],
  icon: 'mdi-fish',
  cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque],
  highlights: ['Snorkeling', 'Caves', 'Waterfalls', 'Diving']
};