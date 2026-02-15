import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEs } from '../../audiences/couples/CouplesEs';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/rio-sucuri/img1.webp`

export const rioSucuriEs: Tour = {
  id: 'TOUR-RS-01',
  slug: 'rio-sucuri',
  name: 'Rio Sucuri',
  description: [
    'El transporte del atractivo llevará a los visitantes al inicio del sendero de aprox. 500m en el bosque de galería hasta los nacimientos del Río Sucuri.',
    'En la flotación por cerca de 1.500m, el visitante podrá apreciar la belleza de la flora subacuática e interacción con diversos cardúmenes de peces.',
    'El paseo cuenta con un barco de apoyo durante todo el recorrido. Considerada una de las aguas más cristalinas del mundo.'
  ],
  shortDescription: 'Flotación en una de las aguas más cristalinas del mundo.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '19km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Acompañamiento de guía', 'Equipos de flotación', 'Barco de apoyo'],
  keywords: ['flotación', 'cristalina', 'peces', 'río sucuri'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs, couplesEs],
  city: bonito
};
