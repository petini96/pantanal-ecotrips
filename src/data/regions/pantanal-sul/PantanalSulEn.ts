import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${GENERAL_BUCKET_NAME}/region`;

export const pantanalSulEn: Region = {
  id: 'pantanal-sul',
  slug: 'pantanal-sul',
  name: 'South Pantanal',
  subtitle: 'Traditional ranches, fishing, and easy access.',
  description: [
    `The Destination Visiting the Southern Pantanal means entering one of the most vibrant ecosystems on the planet. Recognized by UNESCO as a World Natural Heritage Site and Biosphere Reserve, this biome is far more than just a wetland; it is a living organism that pulses with the movement of water. Here, the unique transition between the Savanna (Cerrado), the Amazon Rainforest, and the Chaco creates an unparalleled biodiversity refuge where nature displays itself without inhibition.`,
    `The Cycle of Waters The Pantanal landscape is in constant transformation. The cycle of floods and receding waters dictates the rhythm of life. During the wet season, the plains turn into a vast water mirror, reflecting the sky and creating breathtaking photographic scenery. In the dry season, the lagoons shrink and wildlife gathers around the remaining water sources, turning the region into a true "open-air zoo," perfect for wildlife spotting.`,
    `Wildlife and Climate With a tropical climate that alternates between intense summers and mild, dry winters, the Pantanal is the habitat of giants. It is home to the Jaguar, the Jabiru Stork (the symbol of the Pantanal), Hyacinth Macaws, Caimans, Capybaras, and hundreds of other species. It is a must-visit destination for biologists, photographers, and nature lovers seeking the authenticity of a preserved environment.`,
    `Your Personalized Experience We believe that every traveler has their own pace. That is why we avoid mass tourism. Our specialty is connecting you to the essence of the Southern Pantanal through flexible itineraries. Whether through photographic safaris in 4x4 vehicles, nocturnal wildlife spotting, boat tours along the Aquidauana or Miranda rivers, horseback riding through traditional farms, or sport fishing, we design your journey.`,
    `If you haven't found the exact package you were looking for, don't worry. Contact us. Our team is ready to create a tailor-made itinerary, ensuring comfort, safety, and an unforgettable immersion in the world's largest tropical wetland.`
  ],
  coverImage: `${baseImgPath}/pantanal-sul/img1.webp`,
  galleryImages: [],
  icon: 'mdi-cow',
  cities: [cities.miranda, cities.aquidauana, cities.corumba, cities.anastacio],
  highlights: ['Sport Fishing', 'Horseback Riding', 'Night Spotting', 'Safaris'],
  // Campos novos que estavam faltando:
  location: {
    lat: -20.4697,
    lng: -55.7876,
    address: 'Aquidauana/Miranda - Mato Grosso do Sul, Brazil'
  },
  details: {
    bestTime: 'May to September (Dry season) | October to March (Wet season)',
    climate: 'Tropical. Rainy summers and dry winters.',
    access: 'Campo Grande Airport (CGR) + Transfer (approx. 3h).',
  },
  gastronomy: ['Sopa Paraguaia (Cornbread)', 'Wagoner\'s Rice', 'Chipa', 'Piranha Soup'],
  tips: [
    'Combine your itinerary with Bonito.',
    'Great for experiencing the daily life of a "pantaneiro" cowboy.',
    'Fishing is only allowed during open season (March to October).'
  ]
};