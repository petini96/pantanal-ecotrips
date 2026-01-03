import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${GENERAL_BUCKET_NAME}/region`;

export const bonitoSerraBodoquenaPt: Region = {
  id: 'bonito-serra-bodoquena',
  slug: 'bonito',
  name: 'Bonito & Serra da Bodoquena',
  subtitle: 'A capital do ecoturismo brasileiro e suas águas cristalinas.',
  description: [
    `Conhecida mundialmente como o "Caribe de água doce", a região de Bonito e Serra da Bodoquena oferece uma experiência inigualável de ecoturismo. Aqui, você poderá realizar flutuações em rios de águas incrivelmente transparentes, explorar grutas milenares e admirar cachoeiras majestosas. É o destino perfeito para quem busca contato direto com a natureza, aliando aventura a uma excelente infraestrutura de segurança e preservação ambiental.`
  ],
  coverImage: `${baseImgPath}/bonito/img1.webp`,
  galleryImages: [],
  icon: 'mdi-fish',
  cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque],
  highlights: ['Flutuações', 'Grutas', 'Cachoeiras', 'Mergulho'],
  // Novos campos sugeridos
  location: {
    lat: -21.1214,
    lng: -56.4819, // Coordenadas centrais de Bonito
    address: 'Mato Grosso do Sul, Brasil'
  },
  details: {
    bestTime: 'Abril a Setembro (Águas mais cristalinas) | Outubro a Março (Cachoeiras mais cheias)',
    climate: 'Tropical úmido. Verão quente e chuvoso, inverno ameno e seco.',
    access: 'Aeroporto Regional de Bonito (BYO) ou Aeroporto de Campo Grande (CGR) + 290km de transfer.',
  },
  gastronomy: ['Pintado a Urucum', 'Carne de Jacaré', 'Caldo de Piranha', 'Pacu Assado'],
  tips: [
    'Obrigatório uso de Voucher Único para passeios.',
    'Reserve com antecedência, os passeios têm limite diário.',
    'Não é permitido uso de protetor solar nas flutuações.'
  ]
};