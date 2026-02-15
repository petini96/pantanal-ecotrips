import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEs } from '../../audiences/couples/CouplesEs';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';
import { cavesEs } from '../../categories/cavess/CavessEs';

const img = `${TOURS_BUCKET_NAME}/lagoa-misteriosa/img1.webp`

export const lagoaMisteriosaEs: Tour = {
  id: 'TOUR-LM-01',
  slug: 'lagoa-misteriosa',
  name: 'Lagoa Misteriosa',
  description: [
    'Comienza con un pequeño sendero de 600m en medio del bosque que rodea la dolina, conduciendo a los visitantes hasta el mirador, desde donde es posible contemplar toda la belleza de la Laguna.',
    'El acceso se realiza a través de una escalera de 179 escalones. En la flotación, la visión de los dos abismos azules que forman el fondo de la laguna es impresionante.',
    'Es un paseo estacional (normalmente abre de abril hasta principios de octubre). No posee barco de apoyo.'
  ],
  shortDescription: 'Flotación en una dolina de aguas azules profundas y misteriosas.',
  mainImage: img,
  durationInHours: 4,
  minAge: 6,
  groupLimit: 10,
  distanceFromCity: '45km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Acompañamiento de guía', 'Equipos de flotación'],
  keywords: ['flotación', 'dolina', 'profundidad', 'misterio'],
  categories: [aquaticEs, cavesEs, adventureEs],
  recommendedFor: [couplesEs],
  city: bonito
};
