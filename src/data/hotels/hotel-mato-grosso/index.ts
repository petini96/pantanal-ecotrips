import { type Hotel } from 'src/model/Hotel';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';

const commonData = {
  slug: 'hotel-mato-grosso',
  regionSlug: 'pantanal-norte',
};

const heroImage = `${GENERAL_BUCKET_NAME}/region/pantanal-norte/img1.webp`;

export const hotelMatoGrossoPt: Hotel = {
  ...commonData,
  heroImage,
  name: 'Hotel Pantanal Mato Grosso',
  shortDescription:
    'Hotel charmoso no km 65 da Transpantaneira, às margens do Rio Pixaim, com 33 apartamentos, piscina com cascata e pensão completa com gastronomia pantaneira.',
  description: [
    'Localizado a 165 km de Cuiabá — sendo 100 km de asfalto bem sinalizado até Poconé e mais 65 km pela Transpantaneira não pavimentada — o Hotel Pantanal Mato Grosso fica às margens do Rio Pixaim, em pleno coração do Pantanal Norte.',
    'O hotel conta com 33 acomodações decoradas com leveza e informalidade, buscando a fusão com o cenário natural. Todos os apartamentos possuem banheiro privativo, ar-condicionado e cama de casal ou solteiro. A arquitetura cria uma atmosfera de perfeita integração com a vegetação pantaneira.',
    'A estadia inclui passeio de barco, caminhada ecológica e o tradicional caldo de piranhas ao som de moda de viola. Do deck à beira do Rio Pixaim é possível observar jacarés, aves e a paisagem do Pantanal de perto.',
  ],
  location: {
    lat: -16.7194,
    lng: -56.8361,
    address: 'Transpantaneira, km 65, Poconé - MT, Brasil',
  },
  commonAreas: [
    'Piscina para adultos e infantil com cascata',
    'Deck à beira do Rio Pixaim',
    'Salão de jogos (sinuca, pebolim e ping-pong)',
    'Redes e varandas',
    'Restaurante Capão (climatizado)',
    'Wi-Fi nas áreas comuns',
    'Estacionamento gratuito',
    'Gerador próprio de energia',
  ],
  gastronomy: [
    'Pensão completa (café da manhã, almoço e jantar)',
    'Culinária regional pantaneira com ingredientes locais',
    'Caldo de piranhas ao som de moda de viola',
    'Doces caseiros regionais',
    'Bar com bebidas variadas',
  ],
  accommodations: {
    name: 'Apartamentos',
    description: [
      '33 apartamentos disponíveis.',
      'Todos com ar-condicionado, minibar e banheiro privativo.',
      'Opções de cama de casal e solteiro.',
      'Quartos conjugados disponíveis para famílias.',
      'TV LCD 40 polegadas com canais a cabo.',
      'Decoração rústica integrada ao ambiente pantaneiro.',
    ],
    galleryImage: [],
  },
};

export const hotelMatoGrossoEn: Hotel = {
  ...commonData,
  heroImage,
  name: 'Pantanal Mato Grosso Hotel',
  shortDescription:
    'Charming hotel at km 65 of the Transpantaneira, on the banks of the Pixaim River, with 33 rooms, pool with waterfall and full board featuring Pantanal cuisine.',
  description: [
    'Located 165 km from Cuiabá — 100 km of well-signed paved road to Poconé plus 65 km along the unpaved Transpantaneira — Hotel Pantanal Mato Grosso sits on the banks of the Pixaim River in the heart of the Northern Pantanal.',
    'The hotel features 33 accommodations decorated with lightness and informality, seeking a seamless blend with the natural surroundings. All rooms include private bathroom, air conditioning, and double or single beds. The architecture creates an atmosphere of perfect integration with the Pantanal vegetation.',
    'The stay includes a boat trip, ecological walk, and the traditional piranha broth accompanied by regional folk music. From the deck on the Pixaim River you can observe caimans, birds and the Pantanal landscape up close.',
  ],
  location: {
    lat: -16.7194,
    lng: -56.8361,
    address: 'Transpantaneira, km 65, Poconé - MT, Brazil',
  },
  commonAreas: [
    'Adult and children’s pool with waterfall',
    'Deck on the Pixaim River bank',
    'Game room (pool table, foosball and ping-pong)',
    'Hammocks and verandas',
    'Capão Restaurant (air-conditioned)',
    'Free Wi-Fi in common areas',
    'Free parking',
    'Own power generator',
  ],
  gastronomy: [
    'Full board (breakfast, lunch and dinner)',
    'Regional Pantanal cuisine with local ingredients',
    'Piranha broth with regional folk music',
    'Homemade regional sweets',
    'Bar with a variety of beverages',
  ],
  accommodations: {
    name: 'Rooms',
    description: [
      '33 rooms available.',
      'All with air conditioning, minibar and private bathroom.',
      'Double and single bed options.',
      'Connecting rooms available for families.',
      '40-inch LCD TV with cable channels.',
      'Rustic décor integrated with the Pantanal environment.',
    ],
    galleryImage: [],
  },
};

export const hotelMatoGrossoEs: Hotel = {
  ...commonData,
  heroImage,
  name: 'Hotel Pantanal Mato Grosso',
  shortDescription:
    'Hotel encantador en el km 65 de la Transpantaneira, a orillas del Río Pixaim, con 33 habitaciones, piscina con cascada y pensión completa con gastronomía pantanera.',
  description: [
    'Ubicado a 165 km de Cuiabá — 100 km de asfalto bien señalizado hasta Poconé y otros 65 km por la Transpantaneira sin pavimentar — el Hotel Pantanal Mato Grosso está a orillas del Río Pixaim, en pleno corazón del Pantanal Norte.',
    'El hotel cuenta con 33 alojamientos decorados con ligereza e informalidad, buscando la fusión con el entorno natural. Todos los apartamentos tienen baño privado, aire acondicionado y cama doble o individual. La arquitectura crea una atmósfera de perfecta integración con la vegetación del Pantanal.',
    'La estadía incluye paseo en bote, caminata ecológica y el tradicional caldo de pirañas al son de música regional. Desde el deck a orillas del Río Pixaim se pueden observar caimanes, aves y el paisaje del Pantanal de cerca.',
  ],
  location: {
    lat: -16.7194,
    lng: -56.8361,
    address: 'Transpantaneira, km 65, Poconé - MT, Brasil',
  },
  commonAreas: [
    'Piscina para adultos y niños con cascada',
    'Deck a orillas del Río Pixaim',
    'Sala de juegos (billar, futbolín y ping-pong)',
    'Hamacas y verandas',
    'Restaurante Capão (climatizado)',
    'Wi-Fi gratuito en áreas comunes',
    'Estacionamiento gratuito',
    'Generador propio de energía',
  ],
  gastronomy: [
    'Pensión completa (desayuno, almuerzo y cena)',
    'Cocina regional pantanera con ingredientes locales',
    'Caldo de pirañas con música regional',
    'Dulces caseros regionales',
    'Bar con variedad de bebidas',
  ],
  accommodations: {
    name: 'Habitaciones',
    description: [
      '33 habitaciones disponibles.',
      'Todas con aire acondicionado, minibar y baño privado.',
      'Opciones de cama doble e individual.',
      'Habitaciones comunicadas disponibles para familias.',
      'TV LCD de 40 pulgadas con canales por cable.',
      'Decoración rústica integrada al ambiente pantanero.',
    ],
    galleryImage: [],
  },
};
