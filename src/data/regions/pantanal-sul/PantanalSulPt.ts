import { type Region } from 'src/model/Region';
import * as cities from '../Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const baseImgPath = `${GENERAL_BUCKET_NAME}/region`;

export const pantanalSulPt: Region = {
  id: 'pantanal-sul',
  slug: 'pantanal-sul',
  name: 'Pantanal Sul (MS)',
  subtitle: 'Fazendas tradicionais, pesca e fácil acesso.',
  description: [
    `O Destino Visitar o Pantanal Sul é ingressar em um dos ecossistemas mais vibrantes do planeta. Reconhecido pela UNESCO como Patrimônio Natural da Humanidade e Reserva da Biosfera, este bioma vai muito além de uma planície alagável; é um organismo vivo que pulsa conforme o movimento das águas. Aqui, a transição entre o Cerrado, a Floresta Amazônica e o Chaco cria um refúgio de biodiversidade inigualável, onde a natureza se exibe sem timidez.`,
    `O Ciclo das Águas A paisagem pantaneira está em constante transformação. O regime de cheias e vazantes dita o ritmo da vida. Durante a estação chuvosa, a planície se torna um imenso espelho d'água, refletindo o céu e criando cenários fotográficos deslumbrantes. Já na estação seca, as lagoas diminuem e a vida selvagem se concentra, transformando a região em um verdadeiro "zoológico a céu aberto", ideal para a observação de fauna.`,
    `Vida Selvagem e Clima Com um clima tropical que alterna verões intensos e invernos secos e amenos, o Pantanal é o habitat de gigantes. É o lar da onça-pintada, do tuiuiú (o símbolo do Pantanal), de araras-azuis, jacarés, capivaras e centenas de outras espécies. É um destino obrigatório para biólogos, fotógrafos e amantes da natureza que buscam a autenticidade de um ambiente preservado.`,
    `Sua Experiência Personalizada Nós acreditamos que cada viajante possui um ritmo próprio. Por isso, fugimos do turismo de massa. Nossa especialidade é conectar você à essência do Pantanal Sul através de roteiros flexíveis. Seja através de safáris fotográficos em veículos 4x4, focagem noturna de animais, passeios de barco pelos rios Aquidauana ou Miranda, cavalgadas pelas fazendas tradicionais ou pesca esportiva, nós desenhamos a sua jornada.`,
    `Se você não encontrou o pacote exato que procurava, não se preocupe. Entre em contato conosco. Nossa equipe está pronta para criar um roteiro sob medida, garantindo conforto, segurança e uma imersão inesquecível na maior planície alagável do mundo.`
  ],
  coverImage: `${baseImgPath}/pantanal-sul/img1.webp`,
  galleryImages: [],
  icon: 'mdi-cow',
  cities: [cities.aquidauana, cities.miranda, cities.corumba],
  highlights: ['Pesca Esportiva', 'Cavalgadas', 'Focagem Noturna', 'Safaris'],
  // Campos novos que estavam faltando:
  location: {
    lat: -20.4697,
    lng: -55.7876,
    address: 'Aquidauana/Miranda - Mato Grosso do Sul, Brasil'
  },
  details: {
    bestTime: 'Maio a Setembro (Seca e Ipês floridos) | Outubro a Março (Cheia)',
    climate: 'Tropical. Verões chuvosos e invernos secos.',
    access: 'Aeroporto de Campo Grande (CGR) + Transfer (aprox. 3h).',
  },
  gastronomy: ['Sopa Paraguaia', 'Arroz Carreteiro', 'Chipa', 'Caldo de Piranha'],
  tips: [
    'Combine o roteiro com a cidade de Bonito.',
    'Ótimo para vivenciar o dia a dia do peão pantaneiro.',
    'A pesca só é permitida nos meses abertos (março a outubro).'
  ]
};