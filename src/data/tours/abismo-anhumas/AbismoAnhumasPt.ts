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
    'A descida e a subida são realizadas através de um guincho (são 72 metros), o que exigirá pouco esforço físico para a realização da atividade. Todos os pertences dos visitantes, como bolsas e mochilas, serão transportados da mesma forma.',
    'A chegada será em uma plataforma flutuante, onde os turistas poderão se preparar para o passeio de Bote, realizado no lago de águas cristalinas e para que conheçam as formações geológicas, de volta ao deck se preparam para a atividade de flutuação ou mergulho, utilizando roupa e calçados de neoprene além da máscara e snorkel já inclusos no passeio.',
    'Os visitantes devem comparecer obrigatoriamente ao CheckPoint do passeio realizado um dia antes, no escritório do Abismo, das 09:00 as 17:00h.'
  ],
  shortDescription: 'Aventura radical com descida em rapel e flutuação em lago subterrâneo.',
  mainImage: img,
  durationInHours: 5,
  minAge: 5,
  distanceFromCity: '22km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  includedItems: ['Rapel elétrico', 'Passeio de bote', 'Flutuação', 'Equipamentos'],
  keywords: ['rapel', 'caverna', 'flutuação', 'abismo', 'mergulho'],
  categories: [adventurePt, cavesPt, aquaticPt],
  recommendedFor: [],
  city: bonito
};
