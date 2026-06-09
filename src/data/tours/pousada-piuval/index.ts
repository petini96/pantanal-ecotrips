import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { pocone } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { contemplationPt, contemplationEn, contemplationEs } from 'src/data/categories/contemplation';
import { pantanalPt, pantanalEn, pantanalEs } from 'src/data/categories/pantanal';

const img = `${TOURS_BUCKET_NAME}/pousada-piuval/img1.webp`;

const commonData = {
  id: 'TOUR-PCN-PP-01',
  slug: 'pousada-piuval',
  mainImage: img,
  durationInHours: 48,
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.RIVER, EnvironmentType.FARM],
  city: pocone,
};

export const pousadaPiuvalPt: Tour = {
  ...commonData,
  name: 'Pousada Piuval',
  description: [
    'A Pousada Piuval é a primeira pousada da Rodovia Transpantaneira, situada a apenas 10 km de Poconé (MT) e a 110 km de Cuiabá. Em seus 7.000 hectares de Pantanal preservado, é possível encontrar uma riquíssima fauna e flora, com observação de onças-pintadas, aves, jacarés, capivaras e animais típicos do bioma.',
    'A pousada é referência em sustentabilidade, adotando sistema de tratamento de esgoto, reuso de águas, coleta seletiva, aquecimento solar e iluminação LED com sensores de presença. Em breve, produção de energia 100% solar.',
    'As acomodações incluem 20 apartamentos standard (25m²), 9 suítes luxo (36m²) com sacada privativa, e 1 suíte master (45m²) com hidromassagem. As atividades incluem safári fotográfico noturno na Transpantaneira, passeio a cavalo, caminhada ecológica, passeio de barco e pescaria de piranha.',
  ],
  shortDescription: 'Primeira pousada da Transpantaneira, a 10 km de Poconé, com 7.000 ha de Pantanal preservado, safári noturno, cavalos, barcos e práticas sustentáveis.',
  includedItems: [
    'Hospedagem em apartamento standard, suíte luxo ou suíte master',
    'Pensão completa (café da manhã, almoço, jantar)',
    'Safári fotográfico noturno na Transpantaneira',
    'Passeio a cavalo ou de barco',
    'Caminhada ecológica',
    'Guia local',
    'Transfer de Cuiabá (aeroporto/hotel até a pousada)',
  ],
  keywords: ['pousada piuval', 'transpantaneira', 'pantanal norte', 'poconé', 'safari noturno', 'cavalgada', 'ecoturismo sustentável'],
  categories: [pantanalPt, contemplationPt],
  recommendedFor: [],
};

export const pousadaPiuvalEn: Tour = {
  ...commonData,
  name: 'Pousada Piuval',
  description: [
    'Pousada Piuval is the first lodge along the Transpantaneira Highway, located just 10 km from Poconé (MT) and 110 km from Cuiabá. Across its 7,000 hectares of preserved Pantanal, guests can encounter extraordinary wildlife including jaguars, birds, caimans, capybaras and other typical fauna of the biome.',
    'The lodge is a benchmark for sustainability, adopting sewage treatment systems, water reuse, selective waste collection, solar water heating and LED lighting with motion sensors. It will soon produce 100% of its energy from solar panels.',
    'Accommodations include 20 standard apartments (25m²), 9 luxury suites (36m²) with private balconies, and 1 master suite (45m²) with a jacuzzi. Activities include nocturnal photographic safari on the Transpantaneira, horseback riding, ecological walk, boat trip and piranha fishing.',
  ],
  shortDescription: 'First lodge on the Transpantaneira, 10 km from Poconé, with 7,000 ha of preserved Pantanal, night safari, horses, boats and sustainable practices.',
  includedItems: [
    'Accommodation in standard apartment, luxury suite or master suite',
    'Full board (breakfast, lunch, dinner)',
    'Nocturnal photographic safari on the Transpantaneira',
    'Horseback riding or boat trip',
    'Ecological walk',
    'Local guide',
    'Transfer from Cuiabá (airport/hotel to the lodge)',
  ],
  keywords: ['pousada piuval', 'transpantaneira', 'northern pantanal', 'pocone', 'night safari', 'horseback riding', 'sustainable ecotourism'],
  categories: [pantanalEn, contemplationEn],
  recommendedFor: [],
};

export const pousadaPiuvalEs: Tour = {
  ...commonData,
  name: 'Pousada Piuval',
  description: [
    'La Pousada Piuval es la primera pousada de la Carretera Transpantaneira, ubicada a solo 10 km de Poconé (MT) y a 110 km de Cuiabá. En sus 7.000 hectáreas de Pantanal preservado, es posible encontrar una riquísima fauna y flora, con avistamiento de jaguares, aves, caimanes, capibaras y animales típicos del bioma.',
    'La pousada es una referencia en sostenibilidad, con sistema de tratamiento de aguas residuales, reutilización de agua, recolección selectiva de residuos, calentamiento solar y iluminación LED con sensores de presencia. Próximamente producirá el 100% de su energía de manera solar.',
    'Los alojamientos incluyen 20 apartamentos estándar (25m²), 9 suites de lujo (36m²) con balcón privado y 1 suite máster (45m²) con hidromasaje. Las actividades incluyen safari fotográfico nocturno en la Transpantaneira, cabalgata, caminata ecológica, paseo en bote y pesca de pirañas.',
  ],
  shortDescription: 'Primera pousada de la Transpantaneira, a 10 km de Poconé, con 7.000 ha de Pantanal preservado, safari nocturno, caballos, botes y prácticas sostenibles.',
  includedItems: [
    'Alojamiento en apartamento estándar, suite de lujo o suite máster',
    'Pensión completa (desayuno, almuerzo, cena)',
    'Safari fotográfico nocturno en la Transpantaneira',
    'Cabalgata o paseo en bote',
    'Caminata ecológica',
    'Guía local',
    'Traslado desde Cuiabá (aeropuerto/hotel a la pousada)',
  ],
  keywords: ['pousada piuval', 'transpantaneira', 'pantanal norte', 'pocone', 'safari nocturno', 'cabalgata', 'ecoturismo sostenible'],
  categories: [pantanalEs, contemplationEs],
  recommendedFor: [],
};
