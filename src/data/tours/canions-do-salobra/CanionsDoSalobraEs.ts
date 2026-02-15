import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/canions-do-salobra/img1.webp`

export const canionsDoSalobraEs: Tour = {
  id: 'TOUR-CS-01',
  slug: 'canions-do-salobra',
  name: 'Cañones del Salobra',
  description: [
    'Los Cañones del Salobra ofrecen una experiencia inolvidable de conexión con la naturaleza, la expedición de 1 día por el sinuoso Río Salobra es perfecta para quien busca aventura y escenarios deslumbrantes en el Pantanal.',
    'Navegue en barco a motor por aguas tranquilas, rodeado de paredes rocosas y vegetación exuberante, donde es posible avistar aves, peces y otros animales de la fauna local.',
    'El paseo incluye parada para baño refrescante en las aguas cristalinas del río Salobra.'
  ],
  shortDescription: 'Expedición de aventura (Duck o Trekking) por los cañones salvajes del Río Salobra.',
  mainImage: img,
  durationInHours: 8,
  minAge: 5,
  distanceFromCity: '62km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL, EnvironmentType.MOUNTAIN],
  includedItems: ['Equipos', 'Guía', 'Almuerzo'],
  keywords: ['aventura', 'duck', 'trekking', 'cañón'],
  categories: [adventureEs, ecotourismEs],
  recommendedFor: [],
  city: bonito
};
