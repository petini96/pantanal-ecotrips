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
    'Expedición de aventura por el Río Salobra. Puede realizarse en Kayak Duck o Acquatrekking (sendero en el agua).',
    'Escenarios salvajes e impresionantes, con paradas para baño y cascadas.',
    'Ideal para quienes buscan contacto profundo con la naturaleza virgen.'
  ],
  shortDescription: 'Expedición de aventura (Duck o Trekking) por los cañones salvajes del Río Salobra.',
  mainImage: img,
  durationInHours: 8,
  distanceFromCity: '92km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL, EnvironmentType.MOUNTAIN],
  includedItems: ['Equipos', 'Guía', 'Almuerzo'],
  keywords: ['aventura', 'duck', 'trekking', 'cañón'],
  categories: [adventureEs, ecotourismEs],
  recommendedFor: [],
  city: bonito
};
