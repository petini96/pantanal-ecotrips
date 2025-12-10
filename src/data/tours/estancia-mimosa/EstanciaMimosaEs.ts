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
  description: 'Sendero en el bosque de ribera del río Mimoso con paradas para bañarse en cascadas, piscinas naturales, una plataforma de salto y un paseo en bote de remos.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '22,6km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Acompañamiento de guía', 'Chaleco salvavidas'],
  keywords: ['cascada', 'sendero', 'baño en el río', 'bote'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs, couplesEs],
  city: bonito
};