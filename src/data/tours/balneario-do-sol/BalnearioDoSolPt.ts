import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';

const img = `${TOURS_BUCKET_NAME}/balneario-do-sol/img1.webp`

export const balnearioDoSolPt: Tour = {
  id: 'TOUR-BDS-01',
  slug: 'balneario-do-sol',
  name: 'Balneário do Sol',
  description: [
    'Ampla área de lazer às margens do Rio Formoso com cachoeiras, piscinas naturais e infraestrutura completa.',
    'Oferece quiosques com churrasqueira, quadras esportivas, tirolesa e trampolim.',
    'Ótimo para famílias passarem o dia inteiro. Animais silvestres como macacos e aves são frequentes no local.'
  ],
  shortDescription: 'Lazer completo com cachoeiras, churrasqueiras e atividades para família.',
  mainImage: img,
  durationInHours: 6,
  distanceFromCity: '10km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Entrada e uso da infraestrutura'],
  keywords: ['balneario', 'familia', 'churrasqueira', 'rio formoso'],
  categories: [aquaticPt],
  recommendedFor: [familiesPt],
  city: bonito
};
