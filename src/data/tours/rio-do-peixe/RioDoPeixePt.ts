import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';

const img = `${TOURS_BUCKET_NAME}/rio-do-peixe/img1.webp`

export const rioDoPeixePt: Tour = {
  id: 'TOUR-RDP-01',
  slug: 'rio-do-peixe',
  name: 'Rio do Peixe',
  description: [
    'Fascinante caminhada na Fazenda Água Viva. São diversas cachoeiras, piscinas naturais e cardumes de peixes.',
    'Destaque para o salto de carretilha e a plataforma de salto na Cachoeira do Poção. Almoço sul-mato-grossense incluso.',
    'Passeio relaxante e divertido, ótimo para todas as idades.'
  ],
  shortDescription: 'Trilha com cachoeiras incríveis, muitos peixes e almoço pantaneiro.',
  mainImage: img,
  durationInHours: 6,
  distanceFromCity: '34km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.FARM],
  includedItems: ['Almoço', 'Acompanhamento de guia', 'Acesso às cachoeiras'],
  keywords: ['cachoeiras', 'peixes', 'fazenda', 'almoco'],
  categories: [ecotourismPt, aquaticPt],
  recommendedFor: [familiesPt],
  city: bonito
};
