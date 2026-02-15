import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples/CouplesPt';
import { adventurePt } from '../../categories/adventuree/AdventureePt'; // Using adventure as it involves depth/diving context
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';
import { cavesPt } from '../../categories/cavess/CavessPt';

const img = `${TOURS_BUCKET_NAME}/lagoa-misteriosa/img1.webp`

export const lagoaMisteriosaPt: Tour = {
  id: 'TOUR-LM-01',
  slug: 'lagoa-misteriosa',
  name: 'Lagoa Misteriosa',
  description: [
    'Começa com uma pequena trilha de 600m em meio à mata que circunda a dolina, conduzindo os visitantes até o mirante, de onde é possível contemplar toda a beleza da Lagoa.',
    'O acesso é feito através de uma escadaria de 179 degraus. Na flutuação a visão dos dois abismos azuis que formam o fundo da lagoa é impressionante.',
    'É um passeio sazonal (normalmente abre de abril até inicio de outubro). Não possui barco de apoio.'
  ],
  shortDescription: 'Flutuação em uma dolina de águas azuis profundas e misteriosas.',
  mainImage: img,
  durationInHours: 4,
  minAge: 6,
  groupLimit: 10,
  distanceFromCity: '45km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST], // Dolina is cave-like
  includedItems: ['Acompanhamento de guia', 'Equipamentos de flutuação'],
  keywords: ['flutuação', 'dolina', 'profundidade', 'misterio'],
  categories: [aquaticPt, cavesPt, adventurePt],
  recommendedFor: [couplesPt],
  city: bonito
};
