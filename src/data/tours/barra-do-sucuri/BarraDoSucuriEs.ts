import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEs } from '../../audiences/couples/CouplesEs';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/barra-do-sucuri/img1.webp`

export const barraDoSucuriEs: Tour = {
  id: 'TOUR-BS-01',
  slug: 'barra-do-sucuri',
  name: 'Barra do Sucuri',
  description: [
    'El paseo comienza subiendo el río Sucuri en un delicioso paseo en barco eléctrico de aprox. 1.300m conociendo la fauna y flora local.',
    'El regreso se realiza flotando con los peces y la vegetación subacuática, terminando en el encuentro de las aguas del Río Sucuri con el Río Formoso. El paseo cuenta con un barco de apoyo durante todo el recorrido.',
    'Hay restaurante en el Refúgio da Barra (balneario que está al lado de Barra do Sucuri), la permanencia en el balneario no está incluida.'
  ],
  shortDescription: 'Subida en barco eléctrico por el Río Sucuri y descenso en flotación cristalina.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '17km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Acompañamiento de guía', 'Equipos de flotación', 'Barco de apoyo'],
  keywords: ['flotación', 'río sucuri', 'barco eléctrico', 'aguas cristalinas'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs, couplesEs],
  city: bonito
};
