import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { REGIONS_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${REGIONS_BUCKET_NAME}`;

export const bonitoSerraBodoquenaPt: Region = {
  id: 'bonito-serra-bodoquena',
  slug: 'bonito',
  name: 'Bonito & Serra da Bodoquena',
  subtitle: 'A capital do ecoturismo brasileiro e suas águas cristalinas.',
  description: 'Conhecida mundialmente como o caribe de água doce, a região de Bonito e Serra da Bodoquena oferece uma experiência única de flutuação em rios de águas transparentes, exploração de grutas milenares e cachoeiras majestosas. É o destino perfeito para quem busca contato direto com a natureza com excelente infraestrutura de segurança e preservação ambiental.',
  coverImage: `${baseImgPath}/bonito/cover.webp`,
  galleryImages: [],
  icon: 'mdi-fish',
  cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque],
  highlights: ['Flutuações', 'Grutas', 'Cachoeiras', 'Mergulho']
};