import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples/CouplesPt';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/aquario-natural/img1.webp`

export const aquarioNaturalPt: Tour = {
  id: 'TOUR-AN-01',
  slug: 'aquario-natural',
  name: 'Aquário Natural',
  description: [
    'Iniciando com uma caminhada de aprox. 700m em mata ciliar até a nascente do rio Baia Bonita, onde é realizada a flutuação de aprox. 800m apreciando a diversidade de peixes e plantas subaquáticas.',
    'Na volta pela trilha dos animais aprox. 1.000m o visitante poderá avistar pássaros e animais silvestres e saltar da tirolesa no encontro dos rios. O passeio conta com um barco de apoio durante todo percurso.',
    'Tem restaurante no atrativo, consumo pago a parte.'
  ],
  shortDescription: 'Flutuação de águas cristalinas na nascente do rio Baia Bonita, com trilha e rica vida subaquática.',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  groupLimit: 9,
  distanceFromCity: '8km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Acompanhamento de guia', 'Equipamentos (máscara, snorkel, roupa de neoprene)', 'Barco de apoio'],
  keywords: ['flutuação', 'peixes', 'nascente', 'trilha', 'tirolesa'],
  categories: [aquaticPt, ecotourismPt],
  recommendedFor: [familiesPt, couplesPt],
  city: bonito
};
