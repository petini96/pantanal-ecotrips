import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';

const img = `${TOURS_BUCKET_NAME}/fazenda-san-francisco/img1.webp`

export const fazendaSanFranciscoEs: Tour = {
  id: 'TOUR-FSF-01',
  slug: 'fazenda-san-francisco',
  name: 'Fazenda San Francisco (Pantanal)',
  description: [
    'El Day-use en la Fazenda San Francisco se inicia a las 8:00 partiendo de la sede de la Fazenda San Francisco. Durante el día serán realizadas dos actividades, el Safari Fotográfico (Recorre caminos entre las reservas de bosques nativos y Pantanal, campos de arroz irrigado y visita a invernadas de cría de ganado de la hacienda con objetivo de avistar y conocer la fauna y flora del Pantanal, además de las actividades productivas de la hacienda), y la Chalana (Se realizan también pesca deportiva de pirañas y visita a la higuera centenaria), siendo el orden de las actividades organizadas por la Hacienda.'
  ],
  shortDescription: 'Un día en el Pantanal con Safari Fotográfico, Chalana y almuerzo típico.',
  mainImage: img,
  durationInHours: 10,
  minAge: 0,
  distanceFromCity: '162km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.RIVER, EnvironmentType.FARM],
  includedItems: ['Safari', 'Chalana', 'Almuerzo', 'Guía'],
  keywords: ['pantanal', 'safari', 'chalana', 'bichos'],
  categories: [ecotourismEs, adventureEs],
  recommendedFor: [familiesEs],
  city: miranda
};
