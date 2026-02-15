import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${TOURS_BUCKET_NAME}/balneario-municipal/img1.webp`

export const balnearioMunicipalEs: Tour = {
  id: 'TOUR-MUN-01',
  slug: 'balneario-municipal',
  name: 'Balneário Municipal',
  description: [
    'En un tramo privilegiado del río Formoso, en medio de aguas cristalinas que permiten una visión de peces de colores y tamaños variados.',
    'El Balneario Municipal dispone de estacionamiento, canchas de vóley y fútbol de arena, cafeterías y restaurantes, además de quioscos con parrillas y sanitarios (adaptados para personas con discapacidad).',
    'Es un lugar apropiado para pasar el día y refrescarse.'
  ],
  shortDescription: 'Baño de río con muchos peces e infraestructura de ocio cerca de la ciudad.',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Entrada'],
  keywords: ['balneario', 'peces', 'río formoso', 'ocio'],
  categories: [aquaticEs],
  recommendedFor: [familiesEs],
  city: bonito
};
