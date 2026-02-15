import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';
import { cavesEn } from '../../categories/cavess/CavessEn';

const img = `${TOURS_BUCKET_NAME}/grutas-sao-miguel/img1.webp`

export const grutasSaoMiguelEn: Tour = {
  id: 'TOUR-GSM-01',
  slug: 'grutas-sao-miguel',
  name: 'São Miguel Caves',
  description: [
    'Dry cave tour. Starts with a presentation video and follows through a suspended trail in the treetops to the cave.',
    'Inside, impressive speleological formations such as stalagmites, stalactites and corals.',
    'Possibility of spotting the Barn Owl (Suindara).'
  ],
  shortDescription: 'Dry cave visitation with access via suspended trail in the forest.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: '18km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Guide accompaniment', 'Helmet', 'Flashlight'],
  keywords: ['cave', 'grotto', 'suspended trail', 'dry'],
  categories: [cavesEn, ecotourismEn],
  recommendedFor: [],
  city: bonito
};
