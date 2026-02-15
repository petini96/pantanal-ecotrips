import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${TOURS_BUCKET_NAME}/rio-do-peixe/img1.webp`

export const rioDoPeixeEs: Tour = {
  id: 'TOUR-RDP-01',
  slug: 'rio-do-peixe',
  name: 'Rio do Peixe',
  description: [
    'Una fascinante caminata de 4,5 km en la hacienda Água Viva, donde se puede disfrutar y relajar en las cascadas entre cardúmenes de peces en las piscinas naturales y salto de tirolesa en los ríos Olaria y do Peixe.',
    'Considerada un sendero tranquilo para niños, no tiene límite de edad. Se realizan 9 paradas para que usted pueda refrescarse en las aguas cristalinas entre ellas, 5 son bellísimas cascadas, 1 punto de baño muy especial rodeado por diversos pececitos y, para los más aventureros, la propiedad aún disponibiliza 1 plataforma de salto en la Cachoeira do Poção y 2 tirolesas.',
    'Después del delicioso almuerzo que es famoso en la región.'
  ],
  shortDescription: 'Sendero con cascadas increíbles, muchos peces y almuerzo pantanero.',
  mainImage: img,
  durationInHours: 6,
  minAge: 0,
  distanceFromCity: '34km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.FARM],
  includedItems: ['Almuerzo', 'Acompañamiento de guía', 'Acceso a las cascadas'],
  keywords: ['cascadas', 'peces', 'hacienda', 'almuerzo'],
  categories: [ecotourismEs, aquaticEs],
  recommendedFor: [familiesEs],
  city: bonito
};
