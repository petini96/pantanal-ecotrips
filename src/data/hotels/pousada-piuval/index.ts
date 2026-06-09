import { type Hotel } from 'src/model/Hotel';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const commonData = {
  slug: 'pousada-piuval',
  regionSlug: 'pantanal-norte',
};

const heroImage = `${GENERAL_BUCKET_NAME}/region/pantanal-norte/img1.webp`;

export const pousadaPiuvalPt: Hotel = {
  ...commonData,
  heroImage,
  name: 'Pousada Piuval',
  shortDescription:
    'Primeira pousada da Transpantaneira, a 10 km de Poconé, com 7.000 ha de Pantanal preservado, 30 acomodações, piscina com cascata e práticas sustentáveis.',
  description: [
    'A Pousada Piuval é a primeira pousada da Rodovia Transpantaneira, situada a apenas 10 km de Poconé (MT) e a 110 km de Cuiabá. Em seus 7.000 hectares de Pantanal preservado, é possível encontrar uma riquíssima fauna e flora, com observação de onças-pintadas, aves, jacarés, capivaras e animais típicos do bioma.',
    'Referência em sustentabilidade, a pousada adota sistema de tratamento de esgoto, reuso de águas, coleta seletiva, aquecimento solar e iluminação LED com sensores de presença. Em breve, produção de energia 100% solar.',
    'As acomodações incluem 20 apartamentos standard (25m²), 9 suítes luxo (36m²) com sacada privativa e 1 suíte master (45m²) com hidromassagem. As atividades incluem safári fotográfico noturno na Transpantaneira, passeio a cavalo, caminhada ecológica, passeio de barco e pescaria de piranha.',
  ],
  location: {
    lat: -16.3478,
    lng: -56.4356,
    address: 'Rodovia Transpantaneira, km 10, Poconé - MT, Brasil',
  },
  commonAreas: [
    'Piscina com cascata',
    'Restaurante',
    'Quadra de vôlei',
    'Torres de observação',
    'Playground infantil',
    'Salão de jogos',
    'Redes e varandas',
    '40 cavalos para cavalgada',
    '5 lanchas para passeios',
    'Veículos de safári',
    'Estacionamento gratuito',
    'Wi-Fi nas áreas comuns',
  ],
  gastronomy: [
    'Pensão completa (café da manhã, almoço e jantar)',
    'Culinária regional pantaneira com ingredientes locais',
    'Bar com bebidas variadas',
  ],
  accommodations: {
    name: 'Apartamentos e Suítes',
    description: [
      '20 apartamentos standard (25m²) com ar-condicionado e frigobar.',
      '9 suítes luxo (36m²) com sacada privativa.',
      '1 suíte master (45m²) com hidromassagem.',
      'Todos com banheiro privativo.',
      'Total de 30 acomodações.',
    ],
    galleryImage: [],
  },
};

export const pousadaPiuvalEn: Hotel = {
  ...commonData,
  heroImage,
  name: 'Pousada Piuval',
  shortDescription:
    'First lodge on the Transpantaneira, 10 km from Poconé, with 7,000 ha of preserved Pantanal, 30 rooms, pool with waterfall and sustainable practices.',
  description: [
    'Pousada Piuval is the first lodge along the Transpantaneira Highway, located just 10 km from Poconé (MT) and 110 km from Cuiabá. Across its 7,000 hectares of preserved Pantanal, guests can encounter extraordinary wildlife including jaguars, birds, caimans, capybaras and other typical fauna of the biome.',
    'A benchmark for sustainability, the lodge adopts sewage treatment systems, water reuse, selective waste collection, solar water heating and LED lighting with motion sensors. It will soon produce 100% of its energy from solar panels.',
    'Accommodations include 20 standard apartments (25m²), 9 luxury suites (36m²) with private balconies, and 1 master suite (45m²) with a jacuzzi. Activities include nocturnal photographic safari on the Transpantaneira, horseback riding, ecological walk, boat trip and piranha fishing.',
  ],
  location: {
    lat: -16.3478,
    lng: -56.4356,
    address: 'Transpantaneira Highway, km 10, Poconé - MT, Brazil',
  },
  commonAreas: [
    'Pool with waterfall',
    'Restaurant',
    'Volleyball court',
    'Observation towers',
    'Children\'s playground',
    'Games room',
    'Hammocks and verandas',
    '40 horses for horseback riding',
    '5 motorboats for excursions',
    'Safari vehicles',
    'Free parking',
    'Wi-Fi in common areas',
  ],
  gastronomy: [
    'Full board (breakfast, lunch and dinner)',
    'Regional Pantanal cuisine with local ingredients',
    'Bar with a variety of beverages',
  ],
  accommodations: {
    name: 'Apartments and Suites',
    description: [
      '20 standard apartments (25m²) with air conditioning and minibar.',
      '9 luxury suites (36m²) with private balcony.',
      '1 master suite (45m²) with jacuzzi.',
      'All with private bathroom.',
      '30 accommodations in total.',
    ],
    galleryImage: [],
  },
};

export const pousadaPiuvalEs: Hotel = {
  ...commonData,
  heroImage,
  name: 'Pousada Piuval',
  shortDescription:
    'Primera pousada de la Transpantaneira, a 10 km de Poconé, con 7.000 ha de Pantanal preservado, 30 alojamientos, piscina con cascada y prácticas sostenibles.',
  description: [
    'La Pousada Piuval es la primera pousada de la Carretera Transpantaneira, ubicada a solo 10 km de Poconé (MT) y a 110 km de Cuiabá. En sus 7.000 hectáreas de Pantanal preservado, es posible encontrar una riquísima fauna y flora, con avistamiento de jaguares, aves, caimanes, capibaras y animales típicos del bioma.',
    'Referencia en sostenibilidad, la pousada cuenta con sistema de tratamiento de aguas residuales, reutilización de agua, recolección selectiva de residuos, calentamiento solar y iluminación LED con sensores de presencia. Próximamente producirá el 100% de su energía de manera solar.',
    'Los alojamientos incluyen 20 apartamentos estándar (25m²), 9 suites de lujo (36m²) con balcón privado y 1 suite máster (45m²) con hidromasaje. Las actividades incluyen safari fotográfico nocturno en la Transpantaneira, cabalgata, caminata ecológica, paseo en bote y pesca de pirañas.',
  ],
  location: {
    lat: -16.3478,
    lng: -56.4356,
    address: 'Carretera Transpantaneira, km 10, Poconé - MT, Brasil',
  },
  commonAreas: [
    'Piscina con cascada',
    'Restaurante',
    'Cancha de vóleibol',
    'Torres de observación',
    'Área de juegos infantil',
    'Salón de juegos',
    'Hamacas y verandas',
    '40 caballos para cabalgata',
    '5 lanchas para excursiones',
    'Vehículos de safari',
    'Estacionamiento gratuito',
    'Wi-Fi en áreas comunes',
  ],
  gastronomy: [
    'Pensión completa (desayuno, almuerzo y cena)',
    'Cocina regional pantanera con ingredientes locales',
    'Bar con variedad de bebidas',
  ],
  accommodations: {
    name: 'Apartamentos y Suites',
    description: [
      '20 apartamentos estándar (25m²) con aire acondicionado y minibar.',
      '9 suites de lujo (36m²) con balcón privado.',
      '1 suite máster (45m²) con hidromasaje.',
      'Todos con baño privado.',
      '30 alojamientos en total.',
    ],
    galleryImage: [],
  },
};
