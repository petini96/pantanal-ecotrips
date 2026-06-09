import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { pocone } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { contemplationPt, contemplationEn, contemplationEs } from 'src/data/categories/contemplation';
import { pantanalPt, pantanalEn, pantanalEs } from 'src/data/categories/pantanal';

const img = `${TOURS_BUCKET_NAME}/hotel-mato-grosso/img1.webp`;

const commonData = {
  id: 'TOUR-PCN-HMG-01',
  slug: 'hotel-mato-grosso-transpantaneira',
  mainImage: img,
  durationInHours: 48,
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.RIVER],
  city: pocone,
};

export const hotelMatoGrossoPt: Tour = {
  ...commonData,
  name: 'Hotel Mato Grosso',
  description: [
    'Localizado a 165 km de Cuiabá — sendo 100 km de asfalto bem sinalizado até Poconé e mais 65 km pela Transpantaneira não pavimentada — o Hotel Mato Grosso fica às margens do Rio Pixaim, em pleno coração do Pantanal Norte.',
    'O hotel conta com 33 acomodações decoradas com leveza e informalidade, buscando a fusão com o cenário natural. Todos os apartamentos possuem banheiro privativo, ar-condicionado e cama de casal ou solteiro. A arquitetura cria uma atmosfera de perfeita integração com a vegetação pantaneira.',
    'A estadia inclui passeio de barco, caminhada ecológica e o tradicional caldo de piranhas ao som de moda de viola. Estrutura completa com piscina com cascata, restaurante climatizado e cozinha típica regional com doces caseiros.',
  ],
  shortDescription: 'Hotel às margens do Rio Pixaim na Transpantaneira, com 33 apartamentos, passeio de barco, caminhada ecológica e gastronomia pantaneira.',
  includedItems: [
    'Hospedagem em apartamento com ar-condicionado e banheiro privativo',
    'Pensão completa',
    'Passeio de barco',
    'Caminhada ecológica',
    'Caldo de piranhas ao som de moda de viola',
  ],
  keywords: ['hotel mato grosso', 'transpantaneira', 'pantanal norte', 'rio pixaim', 'poconé', 'passeio de barco', 'caminhada ecológica'],
  categories: [pantanalPt, contemplationPt],
  recommendedFor: [],
};

export const hotelMatoGrossoEn: Tour = {
  ...commonData,
  name: 'Hotel Mato Grosso',
  description: [
    'Located 165 km from Cuiabá — 100 km of well-signed paved road to Poconé plus 65 km along the unpaved Transpantaneira — Hotel Mato Grosso sits on the banks of the Pixaim River in the heart of the Northern Pantanal.',
    'The hotel features 33 accommodations decorated with lightness and informality, seeking a seamless blend with the natural surroundings. All rooms include private bathroom, air conditioning, and double or single beds. The architecture creates an atmosphere of perfect integration with the Pantanal vegetation.',
    'The stay includes a boat trip, ecological walk, and the traditional piranha broth accompanied by regional folk music. Full facilities include a pool with waterfall, air-conditioned restaurant and typical regional cuisine with homemade sweets.',
  ],
  shortDescription: 'Hotel on the banks of the Pixaim River along the Transpantaneira, with 33 rooms, boat trip, ecological walk and Pantanal gastronomy.',
  includedItems: [
    'Accommodation with air conditioning and private bathroom',
    'Full board',
    'Boat trip',
    'Ecological walk',
    'Piranha broth with regional folk music',
  ],
  keywords: ['hotel mato grosso', 'transpantaneira', 'northern pantanal', 'pixaim river', 'pocone', 'boat trip', 'ecological walk'],
  categories: [pantanalEn, contemplationEn],
  recommendedFor: [],
};

export const hotelMatoGrossoEs: Tour = {
  ...commonData,
  name: 'Hotel Mato Grosso',
  description: [
    'Ubicado a 165 km de Cuiabá — 100 km de asfalto bien señalizado hasta Poconé y otros 65 km por la Transpantaneira sin pavimentar — el Hotel Mato Grosso está a orillas del Río Pixaim, en pleno corazón del Pantanal Norte.',
    'El hotel cuenta con 33 alojamientos decorados con ligereza e informalidad, buscando la fusión con el entorno natural. Todos los apartamentos tienen baño privado, aire acondicionado y cama doble o individual. La arquitectura crea una atmósfera de perfecta integración con la vegetación del Pantanal.',
    'La estadía incluye paseo en bote, caminata ecológica y el tradicional caldo de pirañas al son de música regional. Instalaciones completas con piscina con cascada, restaurante climatizado y cocina típica regional con dulces caseros.',
  ],
  shortDescription: 'Hotel a orillas del Río Pixaim en la Transpantaneira, con 33 habitaciones, paseo en bote, caminata ecológica y gastronomía pantanera.',
  includedItems: [
    'Alojamiento con aire acondicionado y baño privado',
    'Pensión completa',
    'Paseo en bote',
    'Caminata ecológica',
    'Caldo de pirañas con música regional',
  ],
  keywords: ['hotel mato grosso', 'transpantaneira', 'pantanal norte', 'río pixaim', 'pocone', 'paseo en bote', 'caminata ecológica'],
  categories: [pantanalEs, contemplationEs],
  recommendedFor: [],
};
