import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEs } from '../../audiences/couples/CouplesEs';
import { familiesEs } from '../../audiences/families/FamiliesEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';
import { cavesEs } from '../../categories/cavess/CavessEs';

const img = `${TOURS_BUCKET_NAME}/gruta-do-mimoso/img1.webp`

export const grutaDoMimosoEs: Tour = {
  id: 'TOUR-GM-01',
  slug: 'gruta-do-mimoso',
  name: 'Gruta do Mimoso',
  description: [
    'El paseo comienza con un sendero y escalera hasta la entrada de la cueva. Después del entrenamiento, el visitante flota en aguas cristalinas dentro de la cueva.',
    'Formaciones geológicas bellísimas y salones sumergidos hacen que esta experiencia sea única. También ofrece buceo.'
  ],
  shortDescription: 'Flotación dentro de una cueva con aguas azules y formaciones increíbles.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: '28km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  includedItems: ['Acompañamiento de guía', 'Equipos de flotación', 'Entrenamiento'],
  keywords: ['cueva', 'flotación', 'gruta', 'mimoso'],
  categories: [cavesEs, aquaticEs],
  recommendedFor: [couplesEs, familiesEs],
  city: bonito
};
