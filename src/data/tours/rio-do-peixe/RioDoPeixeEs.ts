import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${TOURS_BUCKET_NAME}/rio-do-peixe/img1.webp`

export const rioDoPeixeEs: Tour = {
  id: 'TOUR-RDP-01',
  slug: 'rio-do-peixe',
  name: 'Rio do Peixe',
  description: [
    'Fascinante caminata en la Hacienda Água Viva. Son diversas cascadas, piscinas naturales y cardúmenes de peces.',
    'Destacado por el salto de tirolesa y la plataforma de salto en la Cascada del Poção. Almuerzo pantanero incluido.',
    'Paseo relajante y divertido, excelente para todas las edades.'
  ],
  shortDescription: 'Sendero con cascadas increíbles, muchos peces y almuerzo pantanero.',
  mainImage: img,
  durationInHours: 6,
  distanceFromCity: '34km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.FARM],
  includedItems: ['Almuerzo', 'Acompañamiento de guía', 'Acceso a las cascadas'],
  keywords: ['cascadas', 'peces', 'hacienda', 'almuerzo'],
  categories: [ecotourismEs, aquaticEs],
  recommendedFor: [familiesEs],
  city: bonito
};
