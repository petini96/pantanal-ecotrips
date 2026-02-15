import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${TOURS_BUCKET_NAME}/estrela-do-formoso/img1.webp`

export const estrelaDoFormosoEs: Tour = {
  id: 'TOUR-EF-01',
  slug: 'estrela-do-formoso',
  name: 'Estrela do Formoso',
  description: [
    'Un refugio exclusivo a orillas del Río Formoso. La isla cuenta con 7 decks para baño y una infraestructura encantadora y privada.',
    'Ideal para quienes buscan tranquilidad y contacto con la naturaleza con más confort. Ofrece pérgolas privadas (costo extra).',
    'Opciones de kayak y Stand Up Paddle.'
  ],
  shortDescription: 'Balneario exclusivo con decks en el Río Formoso y ambiente privado.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '16km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Acceso a los decks y senderos'],
  keywords: ['balneario', 'exclusivo', 'río formoso', 'decks'],
  categories: [aquaticEs],
  recommendedFor: [familiesEs],
  city: bonito
};
