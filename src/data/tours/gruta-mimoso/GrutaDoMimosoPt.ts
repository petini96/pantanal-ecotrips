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
    'O passeio começa com uma trilha e escadaria até a entrada da caverna. Após o treinamento, o visitante flutua em águas cristalinas dentro da caverna.',
    'Formações geológicas belíssimas e salões submersos tornam essa experiência única. Também oferece mergulho.'
  ],
  shortDescription: 'Flutuação dentro de uma caverna com águas azuis e formações incríveis.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: '28km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  includedItems: ['Acompanhamento de guia', 'Equipamentos de flutuação', 'Treinamento'],
  keywords: ['caverna', 'flutuação', 'gruta', 'mimoso'],
  categories: [cavesPt, aquaticPt],
  recommendedFor: [couplesPt, familiesPt],
  city: bonito
};
