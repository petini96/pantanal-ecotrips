import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${TOURS_BUCKET_NAME}/ceita-core/img1.webp`

export const ceitaCoreEs: Tour = {
  id: 'TOUR-CC-01',
  slug: 'ceita-core',
  name: 'Ceita Corê',
  description: [
    'En la lengua tupi-guarani Ceita Corê significa “Tierra de mis hijos”. Sendero interpretativo por pasarelas y puentes colgantes hacen que el grupo aprecie los sonidos y se refresque en cascadas y piscinas naturales, recorrido de 4km en el bosque de galería del río Chapeninha, con parada para baño en la cascada.',
    'Y visita al exótico nacimiento de aguas cristalinas, que agudiza la imaginación, pues es considerada una de las cavernas más profundas del mundo, con caudal de 1300 lts. de agua por segundo. Uso obligatorio de zapatillas.'
  ],
  shortDescription: 'Sendero con cascadas y visita al nacimiento misterioso del Río Chapeninha.',
  mainImage: img,
  durationInHours: 6,
  minAge: 0,
  distanceFromCity: '36km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER, EnvironmentType.FARM],
  includedItems: ['Acompañamiento de guía', 'Almuerzo', 'Uso de la infraestructura'],
  keywords: ['cascadas', 'sendero', 'nacimiento', 'estancia'],
  categories: [ecotourismEs, aquaticEs],
  recommendedFor: [familiesEs],
  city: bonito
};
