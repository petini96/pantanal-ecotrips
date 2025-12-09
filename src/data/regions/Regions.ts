import { type Region } from 'src/model/Region';
import * as cities from './Cities'; // Certifique-se de que suas cidades estão exportadas corretamente
import { REGIONS_BUCKET_NAME } from 'src/utils/environmentUtils'; // Supondo que exista

const baseImgPath = `${REGIONS_BUCKET_NAME}`;

// --- PT-BR ---

export const bonitoSerraBodoquenaPt: Region = {
  id: 'bonito-serra-bodoquena',
  slug: 'bonito',
  name: 'Bonito & Serra da Bodoquena',
  subtitle: 'A capital do ecoturismo brasileiro e suas águas cristalinas.',
  description: 'Conhecida mundialmente como o caribe de água doce, a região de Bonito e Serra da Bodoquena oferece uma experiência única de flutuação em rios de águas transparentes, exploração de grutas milenares e cachoeiras majestosas. É o destino perfeito para quem busca contato direto com a natureza com excelente infraestrutura de segurança e preservação ambiental.',
  coverImage: `${baseImgPath}/bonito/cover.webp`,
  galleryImages: [], // Preencher futuramente
  icon: 'mdi-fish',
  cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque],
  highlights: ['Flutuações', 'Grutas', 'Cachoeiras', 'Mergulho']
};

export const pantanalSulPt: Region = {
  id: 'pantanal-sul',
  slug: 'pantanal-sul',
  name: 'Pantanal Sul (MS)',
  subtitle: 'A autêntica cultura pantaneira e a vida selvagem acessível.',
  description: 'O Pantanal Sul, acessado principalmente via Campo Grande, é famoso por suas fazendas tradicionais que combinam pecuária com ecoturismo. É uma região fantástica para safáris fotográficos, observação de aves e vivência da cultura do peão pantaneiro. Regiões como Miranda e Aquidauana oferecem fácil acesso a uma biodiversidade incrível.',
  coverImage: `${baseImgPath}/pantanal-sul/cover.webp`,
  galleryImages: [],
  icon: 'mdi-paw',
  cities: [cities.miranda, cities.aquidauana, cities.corumba, cities.anastacio],
  highlights: ['Safáris', 'Fazendas Típicas', 'Pesca', 'Cultura Pantaneira']
};

export const pantanalNortePt: Region = {
  id: 'pantanal-norte',
  slug: 'pantanal-norte',
  name: 'Pantanal Norte (MT)',
  subtitle: 'A casa da onça-pintada e a mítica Transpantaneira.',
  description: 'O Pantanal Norte, com entrada por Cuiabá, é marcado pela rodovia Transpantaneira. É o destino mundialmente reconhecido para quem tem o objetivo específico de avistar a onça-pintada, especialmente na região de Porto Jofre. A paisagem muda ligeiramente, oferecendo alagados densos e uma concentração impressionante de vida selvagem ao longo da estrada.',
  coverImage: `${baseImgPath}/pantanal-norte/cover.webp`,
  galleryImages: [],
  icon: 'mdi-camera-iris',
  cities: [], // Você precisará criar cidades como Poconé ou Cáceres em Cities.ts se for operar lá
  highlights: ['Onça-Pintada', 'Transpantaneira', 'Porto Jofre', 'Observação Intensa']
};

// --- EN-US ---

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

// --- ES ---

export const bonitoSerraBodoquenaEs: Region = {
  id: 'bonito-serra-bodoquena',
  slug: 'bonito',
  name: 'Bonito y Sierra de Bodoquena',
  subtitle: 'La capital del ecoturismo brasileño y sus aguas cristalinas.',
  description: 'Conocida mundialmente como el Caribe de agua dulce, la región de Bonito ofrece una experiencia única de flotación en ríos transparentes, exploración de cuevas milenarias y cascadas majestuosas. Es el destino perfecto para quienes buscan contacto directo con la naturaleza con excelente infraestructura de seguridad.',
  coverImage: `${baseImgPath}/bonito/cover.webp`,
  galleryImages: [],
  icon: 'mdi-fish',
  cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque],
  highlights: ['Flotación', 'Cuevas', 'Cascadas', 'Buceo']
};

export const pantanalSulEs: Region = {
  id: 'pantanal-sul',
  slug: 'pantanal-sul',
  name: 'Pantanal Sur',
  subtitle: 'La auténtica cultura pantanera y vida salvaje accesible.',
  description: 'El Pantanal Sur, con acceso principalmente vía Campo Grande, es famoso por sus haciendas tradicionales que combinan ganadería con ecoturismo. Es una región fantástica para safaris fotográficos, observación de aves y vivir la cultura del peón local. Regiones como Miranda y Aquidauana ofrecen fácil acceso a una biodiversidad increíble.',
  coverImage: `${baseImgPath}/pantanal-sul/cover.webp`,
  galleryImages: [],
  icon: 'mdi-paw',
  cities: [cities.miranda, cities.aquidauana, cities.corumba, cities.anastacio],
  highlights: ['Safaris', 'Haciendas Típicas', 'Pesca', 'Cultura Pantanera']
};

export const pantanalNorteEs: Region = {
  id: 'pantanal-norte',
  slug: 'pantanal-norte',
  name: 'Pantanal Norte',
  subtitle: 'El hogar del jaguar y la mítica Transpantaneira.',
  description: 'El Pantanal Norte, con entrada por Cuiabá, está marcado por la carretera Transpantaneira. Es el destino mundialmente reconocido para quienes tienen el objetivo específico de avistar al jaguar, especialmente en la región de Porto Jofre. El paisaje cambia ligeramente, ofreciendo humedales densos y una concentración impresionante de vida salvaje.',
  coverImage: `${baseImgPath}/pantanal-norte/cover.webp`,
  galleryImages: [],
  icon: 'mdi-camera-iris',
  cities: [], 
  highlights: ['Jaguar', 'Transpantaneira', 'Porto Jofre', 'Observación Intensa']
};