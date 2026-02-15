import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEs } from '../../audiences/couples/CouplesEs';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';


const img = `${TOURS_BUCKET_NAME}/estancia-mimosa/img1.webp`

export const estanciaMimosaEs: Tour = {
  id: 'TOUR-EM-01',
  slug: 'estancia-mimosa-em-bonito',
  name: 'Estancia Mimosa',
  description: [
    'La recepción es una casa sede de hacienda original y el almuerzo es preparado y servido en el fogón a leña, con diversidad de platos regionales y dulces caseros.',
    'El paseo se inicia con una caminata por sendero de aprox. 2.800m (ida y vuelta) por el bosque de galería del Río Mimoso, pasando por 10 cascadas de tamaños y formas variadas con 9 paradas para baño en sus piscinas naturales y una plataforma de salto.',
    'Durante el camino, pasarela suspendida, miradores, barco a remo, además de una fauna y flora exuberante que componen el escenario fotográfico. Grupos limitados: 12 personas.'
  ],
  shortDescription: 'Sendero con cascadas, piscinas naturales, salto y almuerzo en hacienda típica.',
  mainImage: img,
  durationInHours: 4,
  minAge: 3,
  distanceFromCity: '24km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Acompañamiento de guía', 'Chaleco salvavidas', 'Almoerzo', 'Seguro'],
  keywords: ['cascada', 'sendero', 'baño en el río', 'bote', 'hacienda'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs, couplesEs],
  city: bonito
};
