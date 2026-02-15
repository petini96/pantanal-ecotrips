import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventurePt } from '../../categories/adventuree/AdventureePt';
import { cavesPt } from '../../categories/cavess/CavessPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';

const img = `${TOURS_BUCKET_NAME}/abismo-anhumas/img1.webp`

export const abismoAnhumasPt: Tour = {
  id: 'TOUR-AA-01',
  slug: 'abismo-anhumas',
  name: 'Abismo Anhumas',
  description: [
    'Uma verdadeira viagem ao centro da terra. A aventura começa com um rapel elétrico de 72m por uma fenda na rocha até um lago de águas cristalinas.',
    'Lá embaixo, é possível fazer passeio de bote e flutuação (ou mergulho autônomo para credenciados) para observar as gigantescas formações submersas (cones).',
    'Exige check-point no dia anterior.'
  ],
  shortDescription: 'Aventura radical com descida em rapel e flutuação em lago subterrâneo.',
  mainImage: img,
  durationInHours: 5,
  distanceFromCity: '22km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  includedItems: ['Rapel elétrico', 'Passeio de bote', 'Flutuação', 'Equipamentos'],
  keywords: ['rapel', 'caverna', 'flutuação', 'abismo', 'mergulho'],
  categories: [adventurePt, cavesPt, aquaticPt],
  recommendedFor: [],
  city: bonito
};
