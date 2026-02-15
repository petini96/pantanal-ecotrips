import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples/CouplesPt';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/rio-sucuri/img1.webp`

export const rioSucuriPt: Tour = {
  id: 'TOUR-RS-01',
  slug: 'rio-sucuri',
  name: 'Rio Sucuri',
  description: [
    'O transporte do atrativo levará os visitantes ao início da trilha de aprox. 500m na mata ciliar até as nascentes do Rio Sucuri.',
    'Na flutuação por cerca de 1.500m, o visitante poderá apreciar a beleza da flora subaquática e interação com diversos cardumes de peixes.',
    'O passeio conta com um barco de apoio durante todo percurso. Considerado uma das águas mais cristalinas do mundo.'
  ],
  shortDescription: 'Flutuação em uma das águas mais cristalinas do mundo.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '19km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Acompanhamento de guia', 'Equipamentos de flutuação', 'Barco de apoio'],
  keywords: ['flutuação', 'cristalina', 'peixes', 'rio sucuri'],
  categories: [aquaticPt, ecotourismPt],
  recommendedFor: [familiesPt, couplesPt],
  city: bonito
};
