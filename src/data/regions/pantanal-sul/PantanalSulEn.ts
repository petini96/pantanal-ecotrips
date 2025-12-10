import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { REGIONS_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${REGIONS_BUCKET_NAME}`;

export const pantanalSulEn: Region = {
  id: 'pantanal-sul',
  slug: 'pantanal-sul',
  name: 'South Pantanal',
  subtitle: 'Authentic wetland culture and accessible wildlife.',
  description: 'The South Pantanal, accessed mainly via Campo Grande, is famous for its traditional farms combining cattle ranching with ecotourism. It is a fantastic region for photographic safaris, birdwatching, and experiencing the local cowboy culture. Regions like Miranda and Aquidauana offer easy access to incredible biodiversity.',
  coverImage: `${baseImgPath}/pantanal-sul/cover.webp`,
  galleryImages: [],
  icon: 'mdi-paw',
  cities: [cities.miranda, cities.aquidauana, cities.corumba, cities.anastacio],
  highlights: ['Safaris', 'Traditional Farms', 'Fishing', 'Cowboy Culture']
};