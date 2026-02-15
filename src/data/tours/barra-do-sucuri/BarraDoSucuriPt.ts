import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples/CouplesPt';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/barra-do-sucuri/img1.webp`

export const barraDoSucuriPt: Tour = {
  id: 'TOUR-BS-01',
  slug: 'barra-do-sucuri',
  name: 'Barra do Sucuri',
  description: [
    'O passeio começa subindo o rio Sucuri num delicioso passeio de barco elétrico de aprox. 1.300m conhecendo a fauna e flora local.',
    'O retorno acontece em flutuação com os peixes e a vegetação subaquática, terminando no encontro das águas do Rio Sucuri com o Rio Formoso. O passeio conta com um barco de apoio durante todo percurso.',
    'Tem restaurante no Refúgio da Barra (balneário que fica ao lado da Barra do Sucuri), a permanência no balneário não está inclusa.'
  ],
  shortDescription: 'Subida de barco elétrico pelo Rio Sucuri e descida em flutuação cristalina.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '17km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Acompanhamento de guia', 'Equipamentos de flutuação', 'Barco de apoio'],
  keywords: ['flutuação', 'rio sucuri', 'barco elétrico', 'águas cristalinas'],
  categories: [aquaticPt, ecotourismPt],
  recommendedFor: [familiesPt, couplesPt],
  city: bonito
};
