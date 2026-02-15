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
    'Uma fascinante caminhada de 4,5 km na fazenda Água Viva, onde se pode curtir e relaxar nas cachoeiras entre cardumes de peixes nas piscinas naturais e salto de carretilha nos rios Olaria e do Peixe.',
    'Considerada uma trilha tranquila para crianças, não tem limite de idade. São feitas 9 paradas para que você possa se refrescar nas águas cristalinas entre elas, 5 são belíssimas cachoeiras, 1 ponto para banho muito especial cercado por diversos peixinhos e, para os mais aventureiros, a propriedade ainda disponibiliza 1 plataforma de salto na Cachoeira do Poção e 2 tirolesas.',
    'Após o delicioso almoço que é famoso na região.'
  ],
  shortDescription: 'Trilha com cachoeiras incríveis, muitos peixes e almoço pantaneiro.',
  mainImage: img,
  durationInHours: 6,
  minAge: 0,
  distanceFromCity: '34km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.FARM],
  includedItems: ['Almoço', 'Acompanhamento de guia', 'Acesso às cachoeiras'],
  keywords: ['cachoeiras', 'peixes', 'fazenda', 'almoco'],
  categories: [ecotourismPt, aquaticPt],
  recommendedFor: [familiesPt],
  city: bonito
};
