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
    'Antes de iniciar la caminata el grupo asiste a un video de presentación de las Grutas de São Miguel. Luego, el grupo se dirige a un sendero suspendido, de aproximadamente 05 metros de altura y de 180 metros de longitud que termina en un mirador desde donde se puede observar el valle y la vegetación característica del lugar.',
    'La caminata continúa por pasarelas, hasta un mirador de observación de la caverna, por donde se puede tener el primer contacto visual con su interior. En seguida el turista es conducido hasta la entrada de la cavidad, en este recorrido, conocerá formaciones espeleológicas.',
    'Existe aún la posibilidad de observar la lechuza Suindara que habita la caverna, para lo cual se hace uso de linternas y de la propia iluminación artificial que hay en el interior de la gruta. Uso obligatorio de zapatillas.'
  ],
  shortDescription: 'Visita a cueva seca con acceso por sendero suspendido en el bosque.',
  mainImage: img,
  durationInHours: 2,
  minAge: 5,
  distanceFromCity: '18km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Acompañamiento de guía', 'Casco', 'Linterna'],
  keywords: ['gruta', 'cueva', 'sendero suspendido', 'seco'],
  categories: [cavesEs, ecotourismEs],
  recommendedFor: [],
  city: bonito
};
