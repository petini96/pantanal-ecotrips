import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEs } from '../../audiences/couples/CouplesEs';
import { groupsEs } from '../../audiences/groups/GroupsEs';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/boca-onca/img3.webp`

export const bocaDaOncaEs: Tour = {
  id: 'TOUR-BDO-01',
  slug: 'boca-da-onca-em-bonito',
  name: 'Boca da Onça Ecotour',
  description: [
    'Caminata por un sendero de 4km que pasa por 11 cascadas, incluida la Cascada Boca da Onça, la más alta del estado con 156m. Varios puntos para bañarse y vistas al Cañón del Río Salobra.'
  ],
  mainImage: img,
  durationInHours: 8,
  distanceFromCity: '55km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Almuerzo', 'Acompañamiento de guía'],
  keywords: ['boca da onça', 'cascada', 'sendero', 'cañón'],
  categories: [adventureEs, ecotourismEs, aquaticEs],
  recommendedFor: [groupsEs, couplesEs],
  city: bonito
};