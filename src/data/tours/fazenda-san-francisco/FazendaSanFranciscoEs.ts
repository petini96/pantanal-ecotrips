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
    'Day-use en el Pantanal. Incluye Safari Fotográfico en vehículo abierto para observación de fauna y flora, y Paseo en Chalana con pesca de pirañas.',
    'Gran oportunidad para ver caimanes, carpinchos, aves y, con suerte, el jaguar.',
    'Almuerzo pantanero incluido.'
  ],
  shortDescription: 'Un día en el Pantanal con Safari Fotográfico, Chalana y almuerzo típico.',
  mainImage: img,
  durationInHours: 10,
  distanceFromCity: '162km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.RIVER, EnvironmentType.FARM],
  includedItems: ['Safari', 'Chalana', 'Almuerzo', 'Guía'],
  keywords: ['pantanal', 'safari', 'chalana', 'bichos'],
  categories: [ecotourismEs, adventureEs],
  recommendedFor: [familiesEs],
  city: miranda
};
