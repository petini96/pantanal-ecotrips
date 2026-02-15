import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';
import { cavesEs } from '../../categories/cavess/CavessEs';

const img = `${TOURS_BUCKET_NAME}/grutas-sao-miguel/img1.webp`

export const grutasSaoMiguelEs: Tour = {
  id: 'TOUR-GSM-01',
  slug: 'grutas-sao-miguel',
  name: 'Grutas de São Miguel',
  description: [
    'Paseo en cueva seca. Inicia con un video de presentación y sigue por un sendero suspendido en la copa de los árboles hasta la cueva.',
    'En el interior, formaciones espeleológicas impresionantes como estalagmitas, estalactitas y corales.',
    'Posibilidad de avistar la lechuza campanaria (Suindara).'
  ],
  shortDescription: 'Visita de cueva seca con acceso por sendero suspendido en el bosque.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: '18km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Acompañamiento de guía', 'Casco', 'Linterna'],
  keywords: ['cueva', 'gruta', 'sendero suspendido', 'seco'],
  categories: [cavesEs, ecotourismEs],
  recommendedFor: [],
  city: bonito
};
