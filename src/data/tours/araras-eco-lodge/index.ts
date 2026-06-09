import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { pocone } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { contemplationPt, contemplationEn, contemplationEs } from 'src/data/categories/contemplation';
import { pantanalPt, pantanalEn, pantanalEs } from 'src/data/categories/pantanal';

const img = `${TOURS_BUCKET_NAME}/araras-eco-lodge/01.jpg`;

const commonData = {
  id: 'TOUR-PCN-AEL-01',
  slug: 'araras-eco-lodge',
  mainImage: img,
  durationInHours: 48,
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.RIVER, EnvironmentType.FOREST],
  city: pocone,
};

export const ararasEcoLodgePt: Tour = {
  ...commonData,
  name: 'Araras Eco Lodge',
  description: [
    'O Araras Eco Lodge é um dos mais tradicionais e premiados lodges ecológicos do Pantanal Norte, situado na Rodovia Transpantaneira, a cerca de 140 km de Cuiabá. Seu nome homenageia as araras-azuis que habitam a região em grande quantidade.',
    'O lodge oferece estrutura completa para safáris fotográficos, observação de aves e avistamento de onças-pintadas, com guias especializados e uma localização privilegiada no coração do Pantanal Mato-Grossense. A fauna abundante ao redor do lodge inclui tuiuiús, ariranhas, capivaras, jacarés e onças.',
    'Os chalés são projetados para uma integração harmônica com a natureza, com varandas voltadas para o campo aberto — perfeitas para observar animais silvestres ao amanhecer e ao entardecer.'
  ],
  shortDescription: 'Lodge ecológico premiado na Transpantaneira, Pantanal Norte, famoso pelo avistamento de araras-azuis, onças-pintadas e rica biodiversidade.',
  includedItems: [
    'Hospedagem em chalé com ar-condicionado e banheiro privativo',
    'Pensão completa (café da manhã, almoço, jantar)',
    'Safári fotográfico diurno e noturno',
    'Guia especializado em fauna e flora',
    'Passeio de barco',
    'Transfer a partir de Cuiabá (consulte disponibilidade)',
  ],
  keywords: ['araras eco lodge', 'pantanal norte', 'transpantaneira', 'onça-pintada', 'araras azuis', 'safari fotográfico', 'poconé'],
  categories: [pantanalPt, contemplationPt],
  recommendedFor: [],
};

export const ararasEcoLodgeEn: Tour = {
  ...commonData,
  name: 'Araras Eco Lodge',
  description: [
    'Araras Eco Lodge is one of the most traditional and awarded eco-lodges in the Northern Pantanal, located on the Transpantaneira Highway, about 140 km from Cuiabá. Its name honors the hyacinth macaws that inhabit the region in large numbers.',
    'The lodge offers complete facilities for photographic safaris, birdwatching and jaguar spotting, with specialized guides and a privileged location in the heart of the Mato Grosso Pantanal. The abundant wildlife surrounding the lodge includes jabiru storks, giant otters, capybaras, caimans and jaguars.',
    'The chalets are designed for seamless integration with nature, featuring verandas overlooking the open fields — perfect for observing wildlife at dawn and dusk.'
  ],
  shortDescription: 'Award-winning eco-lodge on the Transpantaneira, Northern Pantanal, famous for hyacinth macaw and jaguar sightings amid rich biodiversity.',
  includedItems: [
    'Accommodation in chalet with air conditioning and private bathroom',
    'Full board (breakfast, lunch, dinner)',
    'Day and night photographic safari',
    'Specialized fauna and flora guide',
    'Boat trip',
    'Transfer from Cuiabá (check availability)',
  ],
  keywords: ['araras eco lodge', 'northern pantanal', 'transpantaneira', 'jaguar', 'hyacinth macaw', 'photographic safari', 'pocone'],
  categories: [pantanalEn, contemplationEn],
  recommendedFor: [],
};

export const ararasEcoLodgeEs: Tour = {
  ...commonData,
  name: 'Araras Eco Lodge',
  description: [
    'Araras Eco Lodge es uno de los lodges ecológicos más tradicionales y premiados del Pantanal Norte, ubicado en la Carretera Transpantaneira, a unos 140 km de Cuiabá. Su nombre rinde homenaje a los guacamayos jacintos que habitan la región en grandes cantidades.',
    'El lodge ofrece instalaciones completas para safaris fotográficos, observación de aves y avistamiento de jaguares, con guías especializados y una ubicación privilegiada en el corazón del Pantanal de Mato Grosso. La abundante fauna que rodea el lodge incluye jabirús, nutrias gigantes, capibaras, caimanes y jaguares.',
    'Los chalets están diseñados para una integración armoniosa con la naturaleza, con terrazas orientadas hacia el campo abierto, perfectas para observar animales salvajes al amanecer y al atardecer.'
  ],
  shortDescription: 'Lodge ecológico premiado en la Transpantaneira, Pantanal Norte, famoso por el avistamiento de guacamayos jacintos, jaguares y rica biodiversidad.',
  includedItems: [
    'Alojamiento en cabaña con aire acondicionado y baño privado',
    'Pensión completa (desayuno, almuerzo, cena)',
    'Safari fotográfico diurno y nocturno',
    'Guía especializado en fauna y flora',
    'Paseo en bote',
    'Traslado desde Cuiabá (consulte disponibilidad)',
  ],
  keywords: ['araras eco lodge', 'pantanal norte', 'transpantaneira', 'jaguar', 'guacamayo jacinto', 'safari fotográfico', 'pocone'],
  categories: [pantanalEs, contemplationEs],
  recommendedFor: [],
};
