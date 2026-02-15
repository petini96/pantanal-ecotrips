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
    `Conhecida como o "Caribe de água doce", Bonito é o principal destino de ecoturismo do Brasil e oferece uma experiência única de contato com a natureza. A região é famosa por seus rios de águas cristalinas, onde é possível realizar flutuações e observar uma incrível diversidade de peixes e plantas aquáticas como se estivesse em um aquário gigante.`,
    `Além das flutuações, Bonito e a Serra da Bodoquena abrigam grutas impressionantes com formações geológicas milenares e lagos subterrâneos de azul intenso, como a famosa Gruta do Lago Azul. As cachoeiras da região também são um espetáculo à parte, com quedas d'água majestosas e piscinas naturais perfeitas para banho.`,
    `A cidade possui uma excelente infraestrutura turística, com opções gastronômicas que vão da culinária regional pantaneira a pratos internacionais, e uma rede hoteleira diversificada. O turismo aqui é organizado e sustentável: as atrações têm limite de visitação para preservar o meio ambiente, garantindo que as belezas naturais permaneçam intocadas para as futuras gerações.`
  ],
  coverImage: `${baseImgPath}/bonito/img1.webp`,
  galleryImages: [],
  icon: 'mdi-fish',
  cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque],
  highlights: ['Flutuações', 'Grutas', 'Cachoeiras', 'Mergulho'],
  location: {
    lat: -21.1214,
    lng: -56.4819, 
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
  ],
  howToGetThere: {
    description: [
      'Chegar a Bonito é o primeiro passo para sua aventura. A cidade conta com um aeroporto próprio que facilita o acesso, mas muitos visitantes também optam por desembarcar na capital, Campo Grande, e seguir viagem via terrestre, aproveitando para apreciar as paisagens do Mato Grosso do Sul.'
    ],
    transportOptions: [
      {
        type: 'plane',
        title: 'Voos Diretos (BYO)',
        description: 'O Aeroporto Regional de Bonito (BYO) recebe voos diretos de Campinas (Azul) e conexões. É a opção mais rápida e cômoda, a apenas 15km do centro da cidade.',
        icon: 'mdi-airplane'
      },
      {
        type: 'car',
        title: 'Via Campo Grande (CGR)',
        description: 'Desembarque no Aeroporto Internacional de Campo Grande e siga para Bonito via transfer regular, privativo ou carro alugado. O trajeto de 290km é asfaltado e leva cerca de 4 horas.',
        icon: 'mdi-car-side'
      },
      {
        type: 'bus',
        title: 'Ônibus / Transfer',
        description: 'Existem diversas opções de vans e ônibus que fazem o trajeto Campo Grande - Bonito diariamente, com saídas diretas do aeroporto ou rodoviária.',
        icon: 'mdi-bus'
      }
    ]
  }
};