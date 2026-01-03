import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/passeio-de-barco-motor/img1.webp`

export const motorBoatTripEs: Tour = {
  id: 'TOUR-MBT-01',
  slug: 'passeio-de-barco-motor-em-miranda',
  name: 'Paseo en Bote a Motor con Foco de Luz',
  description: [
     'Navegación nocturna por los ríos del Pantanal, usando un foco de luz para avistar animales de hábitos nocturnos como caimanes, capibaras y búhos.'
  ],
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Bote', 'Chaleco salvavidas', 'Guía especializado'],
  keywords: ['enfoque', 'noche', 'caimán', 'bote'],
  categories: [ecotourismEs],
  recommendedFor: [familiesEs],
  city: miranda
};