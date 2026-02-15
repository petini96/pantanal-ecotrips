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
    `Known as the "Freshwater Caribbean", Bonito is Brazil's premier ecotourism destination, offering a unique experience of connection with nature. The region is famous for its crystal-clear rivers, where you can snorkel and observe an incredible diversity of fish and aquatic plants as if you were in a giant aquarium.`,
    `In addition to snorkeling, Bonito and the Serra da Bodoquena are home to impressive caves with millenary geological formations and deep blue underground lakes, such as the famous Blue Lake Cave. The region's waterfalls are also a spectacle apart, with majestic falls and natural swimming pools perfect for bathing.`,
    `The city boasts excellent tourism infrastructure, with dining options ranging from regional Pantanal cuisine to international dishes, and a diverse hotel network. Tourism here is organized and sustainable: attractions have daily visitation limits to preserve the environment, ensuring that natural beauties remain untouched for future generations.`
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
    bestTime: 'April to September (Clearer waters) | October to March (Fuller waterfalls)',
    climate: 'Humid tropical. Hot and rainy summer, mild and dry winter.',
    access: 'Bonito Regional Airport (BYO) or Campo Grande Airport (CGR) + 290km transfer.',
  },
  gastronomy: ['Pintado a Urucum', 'Alligator Meat', 'Piranha Soup', 'Roasted Pacu'],
  tips: [
    'Single Voucher use is mandatory for tours.',
    'Book in advance, tours have daily limits.',
    'Sunscreen is not allowed in snorkeling activities.'
  ],
  howToGetThere: {
    description: [
      'Getting to Bonito is the first step of your adventure. The city has its own airport facilitating access, but many visitors also choose to land in the capital, Campo Grande, and travel by land, taking the opportunity to enjoy the landscapes of Mato Grosso do Sul.'
    ],
    transportOptions: [
      {
        type: 'plane',
        title: 'Direct Flights (BYO)',
        description: 'Bonito Regional Airport (BYO) receives direct flights from Campinas (Azul) and connections. It is the fastest and most convenient option, just 15km from the city center.',
        icon: 'mdi-airplane'
      },
      {
        type: 'car',
        title: 'Via Campo Grande (CGR)',
        description: 'Land at Campo Grande International Airport and proceed to Bonito via regular transfer, private car, or rental. The 290km journey is on paved roads and takes about 4 hours.',
        icon: 'mdi-car-side'
      },
      {
        type: 'bus',
        title: 'Bus / Transfer',
        description: 'There are several van and bus options that make the Campo Grande - Bonito route daily, with departures directly from the airport or bus station.',
        icon: 'mdi-bus'
      }
    ]
  }
};