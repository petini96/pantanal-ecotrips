import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEs } from '../../audiences/couples/CouplesEs';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/nascente-azul/img1.webp`

export const nascenteAzulEs: Tour = {
  id: 'TOUR-NA-01',
  slug: 'nascente-azul',
  name: 'Nascente Azul',
  description: [
    'El paseo de flotación comienza con una caminata ligera de más o menos 1.000 metros por el bosque de galería, exuberante y diversificado.',
    'El nacimiento está repleto de peces y plantas que ornamentan el ambiente. No posee barco de apoyo.',
    'Para quien va a realizar la flotación, el Balneario Lago da Capela ya está incluido.'
  ],
  shortDescription: 'Flotación en aguas tranquilas y acceso al Balneario Lago da Capela.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '32km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Acompañamiento de guía', 'Equipos de flotación', 'Day use en el balneario'],
  keywords: ['flotación', 'balneario', 'nacimiento', 'peces'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs, couplesEs],
  city: bonito
};
