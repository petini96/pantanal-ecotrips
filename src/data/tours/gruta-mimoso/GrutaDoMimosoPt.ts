import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples/CouplesPt';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt'; // Flutuação
import { cavesPt } from '../../categories/cavess/CavessPt';

const img = `${TOURS_BUCKET_NAME}/gruta-do-mimoso/img1.webp`

export const grutaDoMimosoPt: Tour = {
  id: 'TOUR-GM-01',
  slug: 'gruta-do-mimoso',
  name: 'Gruta do Mimoso',
  description: [
    'Após ser equipado, o grupo iniciará a trilha autoguiada de 300 metros. O grupo contará com um deck onde receberá instruções sobre os equipamentos que utilizará na flutuação e também um treinamento prático, onde realizará a atividade, possibilitando assim total adaptação com o ambiente.',
    'Após o treinamento, o grupo descerá uma escadaria com 78 degraus (podendo alterar conforme o nível de água da caverna), seguindo para a área interna da caverna e dará início a flutuação onde poderá contemplar toda a Gruta do Mimoso e suas belíssimas formações geológicas.'
  ],
  shortDescription: 'Flutuação dentro de uma caverna com águas azuis e formações incríveis.',
  mainImage: img,
  durationInHours: 2,
  minAge: 8,
  groupLimit: 10,
  distanceFromCity: '28km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  includedItems: ['Acompanhamento de guia', 'Equipamentos de flutuação', 'Treinamento'],
  keywords: ['caverna', 'flutuação', 'gruta', 'mimoso'],
  categories: [cavesPt, aquaticPt],
  recommendedFor: [couplesPt, familiesPt],
  city: bonito
};
