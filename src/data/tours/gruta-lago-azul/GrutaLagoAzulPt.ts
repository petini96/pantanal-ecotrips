import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples/CouplesPt';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { cavesPt } from '../../categories/cavess/CavessPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/gruta-lagoa-azul/img1.webp`

export const grutaLagoAzulPt: Tour = {
  id: 'TOUR-GLA-01',
  slug: 'gruta-do-lago-azul-em-bonito',
  name: 'Gruta do Lago Azul',
  description: [
    'Após uma descida de 100 m, depara-se com um lago de águas intensamente azuladas, cujas dimensões a tornam uma das maiores cavidades inundadas do planeta.',
    'No interior da gruta, observam-se espeleotemas de diversas formas e tamanhos, como estalactites e estalagmites, além de fósseis de animais pré-históricos como a preguiça gigante e o tigre dentes de sabre, que viveram no período geológico do Pleistoceno (6.000 a 10.000 anos atrás).',
    'Obrigatório o uso de tênis.'
  ],
  shortDescription: 'Uma das maiores cavidades inundadas do planeta, com lago de águas azuis e fósseis pré-históricos. Cartão postal de Bonito.',
  mainImage: img,
  durationInHours: 2,
  minAge: 5,
  distanceFromCity: '21km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Acompanhamento de guia', 'Capacete de segurança'],
  keywords: ['gruta', 'lago', 'caverna', 'contemplação'],
  categories: [cavesPt, ecotourismPt],
  recommendedFor: [familiesPt, couplesPt],
  city: bonito
};
