import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';
import { cavesEs } from '../../categories/cavess/CavessEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${TOURS_BUCKET_NAME}/abismo-anhumas/img1.webp`

export const abismoAnhumasEs: Tour = {
  id: 'TOUR-AA-01',
  slug: 'abismo-anhumas',
  name: 'Abismo Anhumas',
  description: [
    'Un verdadero viaje al centro de la tierra. La aventura comienza con un rappel eléctrico de 72m por una grieta en la roca hasta un lago de aguas cristalinas.',
    'Abajo, es posible realizar un paseo en bote y flotación (o buceo autónomo para acreditados) para observar las gigantescas formaciones sumergidas (conos).',
    'Exige check-point el día anterior.'
  ],
  shortDescription: 'Aventura radical con descenso en rappel y flotación en lago subterráneo.',
  mainImage: img,
  durationInHours: 5,
  distanceFromCity: '22km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  includedItems: ['Rappel eléctrico', 'Paseo en bote', 'Flotación', 'Equipos'],
  keywords: ['rappel', 'cueva', 'flotación', 'abismo', 'buceo'],
  categories: [adventureEs, cavesEs, aquaticEs],
  recommendedFor: [],
  city: bonito
};
