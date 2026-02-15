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
    'Before starting the walk, the group watches a presentation video of the Grutas de São Miguel. Soon after, the group heads to a suspended trail, approximately 05 meters high and 180 meters long that ends at a lookout point from where you can observe the valley and the characteristic vegetation of the place.',
    'The walk continues along walkways, to a cave observation lookout, where you can have the first visual contact with its interior. Then the tourist is led to the entrance of the cavity, on this route, they will know speleological formations.',
    'There is also the possibility of observing the Suindara owl that inhabits the cave, for which flashlights and the artificial lighting inside the cave are used. Mandatory use of sneakers.'
  ],
  shortDescription: 'Dry cave visit accessed by a suspended trail in the forest.',
  mainImage: img,
  durationInHours: 2,
  minAge: 5,
  distanceFromCity: '18km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Guide accompaniment', 'Helmet', 'Flashlight'],
  keywords: ['grotto', 'cave', 'suspended trail', 'dry'],
  categories: [cavesEn, ecotourismEn],
  recommendedFor: [],
  city: bonito
};
