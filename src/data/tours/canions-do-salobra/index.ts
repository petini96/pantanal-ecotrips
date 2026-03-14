import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { adventurePt, adventureEn, adventureEs } from "src/data/categories/adventure";
import { trailsWaterfallsPt, trailsWaterfallsEn, trailsWaterfallsEs } from "src/data/categories/trails-waterfalls";
import { pantanalPt, pantanalEn, pantanalEs } from "src/data/categories/pantanal";
const img = `${TOURS_BUCKET_NAME}/canions-do-salobra/img1.webp`

const commonData = {
  id: 'TOUR-CS-01',
  slug: 'canions-do-salobra',
  mainImage: img,
  durationInHours: 8,
  minAge: 5,
  distanceFromCity: '62km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL, EnvironmentType.MOUNTAIN],
  city: bonito
};

export const canionsDoSalobraPt: Tour = {
    ...commonData,
    name: 'Cânions do Salobra',
    description: [
        'Os Cânions do Salobra oferecem uma experiência inesquecível de conexão com a natureza, a expedição de 01 dia pelo sinuoso Rio Salobra é perfeita para quem busca aventura e cenários deslumbrantes no Pantanal.',
        'Navegue em barco a motor por águas tranquilas, cercado por paredões rochosos e vegetação exuberante, onde é possível avistar aves, peixes e outros animais da fauna local.',
        'O passeio inclui parada para banho refrescante nas águas cristalinas do rio salobra.'
    ],
    shortDescription: 'Expedição de aventura (Duck ou Trekking) pelos cânions selvagens do Rio Salobra.',
    includedItems: ['Equipamentos', 'Guia', 'Almoço'],
    keywords: ['aventura', 'duck', 'trekking', 'canion'],
    categories: [adventurePt, trailsWaterfallsPt, pantanalPt],
    recommendedFor: []
};

export const canionsDoSalobraEn: Tour = {
    ...commonData,
    name: 'Canyons of Salobra',
    description: [
        'The Salobra Canyons offer an unforgettable experience of connection with nature, the 1-day expedition along the winding Salobra River is perfect for those seeking adventure and stunning scenery in the Pantanal.',
        'Navigate by motorboat through calm waters, surrounded by rocky walls and lush vegetation, where it is possible to spot birds, fish and other animals of the local fauna.',
        'The tour includes a stop for a refreshing swim in the crystal clear waters of the Salobra River.'
    ],
    shortDescription: 'Adventure expedition (Duck or Trekking) through the wild canyons of the Salobra River.',
    includedItems: ['Equipment', 'Guide', 'Lunch'],
    keywords: ['adventure', 'duck', 'trekking', 'canyon'],
    categories: [adventureEn, trailsWaterfallsEn, pantanalEn],
    recommendedFor: []
};

export const canionsDoSalobraEs: Tour = {
    ...commonData,
    name: 'Cañones del Salobra',
    description: [
        'Los Cañones del Salobra ofrecen una experiencia inolvidable de conexión con la naturaleza, la expedición de 1 día por el sinuoso Río Salobra es perfecta para quien busca aventura y escenarios deslumbrantes en el Pantanal.',
        'Navegue en barco a motor por aguas tranquilas, rodeado de paredes rocosas y vegetación exuberante, donde es posible avistar aves, peces y otros animales de la fauna local.',
        'El paseo incluye parada para baño refrescante en las aguas cristalinas del río Salobra.'
    ],
    shortDescription: 'Expedición de aventura (Duck o Trekking) por los cañones salvajes del Río Salobra.',
    includedItems: ['Equipos', 'Guía', 'Almuerzo'],
    keywords: ['aventura', 'duck', 'trekking', 'cañón'],
    categories: [adventureEs, trailsWaterfallsEs, pantanalEs],
    recommendedFor: []
};
