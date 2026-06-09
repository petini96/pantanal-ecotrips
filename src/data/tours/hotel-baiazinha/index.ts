import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { caceres } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { adventurePt, adventureEn, adventureEs } from 'src/data/categories/adventure';
import { pantanalPt, pantanalEn, pantanalEs } from 'src/data/categories/pantanal';

const img = `${TOURS_BUCKET_NAME}/hotel-baiazinha/img1.webp`;

const commonData = {
  id: 'TOUR-CAC-HBZ-01',
  slug: 'hotel-baiazinha-caceres',
  mainImage: img,
  durationInHours: 48,
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST, EnvironmentType.FIELDS],
  city: caceres,
};

export const hotelBaiazinhaPt: Tour = {
  ...commonData,
  name: 'Hotel Baiazinha',
  description: [
    'O Hotel Baiazinha está localizado às margens do Rio Paraguai, próximo à Reserva Ecológica Tayamã, em Cáceres (MT). Os passeios saem ao amanhecer para observar animais silvestres em seu habitat natural — com grandes chances de avistar onças-pintadas, macacos, jaguatiricas, tamanduás, capivaras e ariranhas.',
    'Os passeios de lancha sobem o Rio Paraguai até o Rio Jauru e percorrem baías e canais onde a vida selvagem se concentra. O almoço é servido a bordo (pic nic) durante os passeios mais longos, com retorno ao hotel ao entardecer.',
    'A estrutura conta com 15 apartamentos com ar-condicionado, TV e frigobar; restaurante com ar-condicionado e área externa telada em frente ao Rio Paraguai; piscinas adulta e infantil; salão de jogos; Wi-Fi e pista de pouso própria.',
  ],
  shortDescription: 'Hotel às margens do Rio Paraguai em Cáceres (MT), com safáris em barco pela Reserva Ecológica Tayamã e avistamento de onças, macacos e ariranhas.',
  includedItems: [
    'Hospedagem em apartamento com ar-condicionado, TV e frigobar',
    'Refeições inclusas',
    'Passeios de lancha diurno e noturno',
    'Guia especializado em fauna pantaneira',
  ],
  keywords: ['hotel baiazinha', 'cáceres', 'pantanal norte', 'rio paraguai', 'reserva tayamã', 'onça-pintada', 'safari barco'],
  categories: [pantanalPt, adventurePt],
  recommendedFor: [],
};

export const hotelBaiazinhaEn: Tour = {
  ...commonData,
  name: 'Hotel Baiazinha',
  description: [
    'Hotel Baiazinha is located on the banks of the Paraguay River, near the Tayamã Ecological Reserve in Cáceres (MT). Early morning boat excursions set out to observe wildlife in their natural habitat — with great chances of spotting jaguars, monkeys, ocelots, giant anteaters, capybaras and giant otters.',
    'Motorboat trips travel up the Paraguay River to the Jauru River and navigate through bays and channels where wildlife concentrates. Lunch is served on board (picnic style) during longer excursions, returning to the hotel at dusk.',
    'Facilities include 15 apartments with air conditioning, TV and minibar; an air-conditioned restaurant plus a screened outdoor area overlooking the Paraguay River; adult and children\'s pools; games room; Wi-Fi and a private airstrip.',
  ],
  shortDescription: 'Hotel on the banks of the Paraguay River in Cáceres (MT), with boat safaris through the Tayamã Ecological Reserve and wildlife spotting.',
  includedItems: [
    'Accommodation with air conditioning, TV and minibar',
    'Meals included',
    'Day and night motorboat trips',
    'Specialized Pantanal wildlife guide',
  ],
  keywords: ['hotel baiazinha', 'caceres', 'northern pantanal', 'paraguay river', 'tayama reserve', 'jaguar', 'boat safari'],
  categories: [pantanalEn, adventureEn],
  recommendedFor: [],
};

export const hotelBaiazinhaEs: Tour = {
  ...commonData,
  name: 'Hotel Baiazinha',
  description: [
    'El Hotel Baiazinha está ubicado a orillas del Río Paraguay, cerca de la Reserva Ecológica Tayamã en Cáceres (MT). Las excursiones en bote al amanecer salen para observar animales en su hábitat natural, con grandes posibilidades de avistar jaguares, monos, ocelotes, osos hormigueros gigantes, capibaras y nutrias gigantes.',
    'Los paseos en lancha remontan el Río Paraguay hasta el Río Jauru y navegan por bahías y canales donde la vida silvestre se concentra. El almuerzo se sirve a bordo (estilo picnic) durante las excursiones más largas, regresando al hotel al atardecer.',
    'Las instalaciones incluyen 15 apartamentos con aire acondicionado, TV y minibar; restaurante climatizado con área exterior en frente al Río Paraguay; piscinas para adultos y niños; salón de juegos; Wi-Fi y pista de aterrizaje propia.',
  ],
  shortDescription: 'Hotel a orillas del Río Paraguay en Cáceres (MT), con safaris en bote por la Reserva Ecológica Tayamã y avistamiento de jaguares, monos y nutrias.',
  includedItems: [
    'Alojamiento con aire acondicionado, TV y minibar',
    'Comidas incluidas',
    'Paseos en lancha diurno y nocturno',
    'Guía especializado en fauna pantanera',
  ],
  keywords: ['hotel baiazinha', 'cáceres', 'pantanal norte', 'río paraguay', 'reserva tayamã', 'jaguar', 'safari en bote'],
  categories: [pantanalEs, adventureEs],
  recommendedFor: [],
};
