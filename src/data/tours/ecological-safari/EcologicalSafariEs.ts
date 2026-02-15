import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/safari-fotografico/img1.webp`

export const ecologicalSafariEs: Tour = {
  id: 'TOUR-FSF-ES-01',
  slug: 'safari-fotografico-em-miranda',
  name: 'Safari Fotográfico',
  description: [
    'En coches especialmente adaptados, se recorren caminos en medio de la reserva forestal y campos de arroz irrigado. Se visita el criadero de yacarés y se puede observar una gran diversidad de fauna y flora. Duración aproximada de 2:30 horas.'
  ],
  shortDescription: 'Paseo en coche abierto para observación de fauna y flora, visitando criadero de yacarés y campos de arroz.',
  mainImage: img,
  durationInHours: 2.5,
  minAge: 0,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Vehículo de safari', 'Guía'],
  keywords: ['safari', 'fotográfico', 'fauna', 'flora', 'yacaré'],
  categories: [ecotourismEs, adventureEs],
  recommendedFor: [],
  city: miranda
};
