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
    'La caminata se inicia en el bosque de galería del Río Salobra y recorre 4 km de sendero en medio a vegetación preservada. En el trayecto, el visitante conoce 8 cascadas y tiene 4 paradas para baño en piscinas naturales de aguas cristalinas, además de la Cascada Boca da Onça, con 156 metros de altura, la más alta del estado.',
    'En la vuelta, la escalera de 886 peldaños, revela la más bella vista del Cañón del Río Salobra. El almuerzo es servido en la recepción con menú variado y comidas típicas.',
    'La recepción dispone de dos piscinas de agua corriente con peces, hidromasaje, ducha natural, vestuarios, tienda de souvenirs, bar y restaurante.'
  ],
  shortDescription: 'Caminata por sendero de 4km pasando por 8 cascadas, incluida Boca da Onça (la más alta de MS), con piscinas naturales e infraestructura completa.',
  mainImage: img,
  durationInHours: 8,
  minAge: 0,
  distanceFromCity: '59km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Almuerzo', 'Acompañamiento de guía', 'Seguro de accidentes'],
  keywords: ['boca da onça', 'cascada', 'sendero', 'cañón'],
  categories: [adventureEs, ecotourismEs, aquaticEs],
  recommendedFor: [groupsEs, couplesEs],
  city: bonito
};
