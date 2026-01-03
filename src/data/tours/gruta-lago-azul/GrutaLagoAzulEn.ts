import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../../audiences/couples/CouplesEn';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { cavesEn } from '../../categories/cavess/CavessEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/gruta-lagoa-azul/img1.webp`

export const grutaLagoAzulEn: Tour = {
  id: 'TOUR-GLA-01',
  slug: 'gruta-do-lago-azul-em-bonito',
  name: 'Gruta do Lago Azul',
  description: [
    'One of the most beautiful caves in the world. After a short trail, you descend a staircase to a lake of intensely blue waters, over 80 meters deep.'
  ],
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: '21km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Guide accompaniment', 'Safety helmet'],
  keywords: ['cave', 'lake', 'grotto', 'contemplation'],
  categories: [cavesEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn],
  city: bonito
};