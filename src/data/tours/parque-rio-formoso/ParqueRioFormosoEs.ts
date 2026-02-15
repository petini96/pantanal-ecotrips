import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';

const img = `${TOURS_BUCKET_NAME}/parque-ecologico-rio-formoso/img1.webp`

export const parqueRioFormosoEs: Tour = {
  id: 'TOUR-PRF-01',
  slug: 'parque-rio-formoso',
  name: 'Parque Ecológico Rio Formoso',
  description: [
    'Parque Ecológico Rio Formoso – Con acceso fácil, queda a 7 km del centro de la ciudad y reúne paseos diversos como Boia Cross, Cabalgata, Sendero y Adventure.',
    'Tiene una estructura de balneario (Laguna) junto a la recepción que tiene tirolesa, kayak y stand up, disponibles para uso con costo adicional, es un lugar bonito y agradable para pasar el día.'
  ],
  shortDescription: 'Parque cerca de la ciudad con laguna para baño y actividades de aventura opcionales.',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Acceso a la Laguna Formosa (si es Day Use)', 'Otras actividades cobradas aparte'],
  keywords: ['laguna', 'boia cross', 'cabalgata', 'relax'],
  categories: [ecotourismEs, adventureEs],
  recommendedFor: [familiesEs],
  city: bonito
};
