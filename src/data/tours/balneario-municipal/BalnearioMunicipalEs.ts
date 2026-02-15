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
    'El balneario público de Bonito ofrece baño en las aguas cristalinas del Río Formoso, con gran cantidad de peces.',
    'Posee infraestructura con cafeterías, parrillas, canchas de voleibol y estacionamiento.',
    'Lugar de fácil acceso y muy frecuentado por residentes y turistas.'
  ],
  shortDescription: 'Baño de río con muchos peces e infraestructura de ocio cerca de la ciudad.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Entrada'],
  keywords: ['balneario', 'peces', 'río formoso', 'ocio'],
  categories: [aquaticEs],
  recommendedFor: [familiesEs],
  city: bonito
};
