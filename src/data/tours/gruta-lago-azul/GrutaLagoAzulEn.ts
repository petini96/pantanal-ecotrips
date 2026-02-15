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
    'After a 100 m descent, you come across a lake of intensely blue waters, whose dimensions make it one of the largest flooded cavities on the planet.',
    'Inside the cave, speleothems of various shapes and sizes are observed, such as stalactites and stalagmites, as well as fossils of prehistoric animals such as the giant sloth and the saber-toothed tiger, which lived in the geological period of the Pleistocene (6,000 to 10,000 years ago).',
    'Mandatory use of sneakers.'
  ],
  shortDescription: 'One of the largest flooded cavities on the planet, with blue water lake and prehistoric fossils. Postcard of Bonito.',
  mainImage: img,
  durationInHours: 2,
  minAge: 5,
  distanceFromCity: '21km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Guide accompaniment', 'Safety helmet'],
  keywords: ['cave', 'lake', 'grotto', 'contemplation'],
  categories: [cavesEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn],
  city: bonito
};
