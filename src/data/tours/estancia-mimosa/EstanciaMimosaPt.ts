import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples/CouplesPt';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';


const img = `${TOURS_BUCKET_NAME}/estancia-mimosa/img1.webp`

export const estanciaMimosaPt: Tour = {
  id: 'TOUR-EM-01',
  slug: 'estancia-mimosa-em-bonito',
  name: 'Estância Mimosa',
  description: [
    'O receptivo é uma casa sede de fazenda original e o almoço é preparado e servido no fogão a lenha, com diversidade de pratos regionais e doces caseiros.',
    'O passeio inicia-se com uma caminhada por trilha de aprox. 2.800m (ida e volta) pela mata ciliar do Rio Mimoso, passando por 10 cachoeiras de tamanhos e formas variadas com 9 paradas para banho em suas piscinas naturais a e uma plataforma de salto.',
    'Durante o caminho, passarela suspensa, mirantes, barco a remo, além de uma fauna e flora exuberante que compõem o cenário fotográfico. Grupos limitados: 12 pessoas.'
  ],
  shortDescription: 'Trilha com cachoeiras, piscinas naturais, salto e almoço em fazenda típica.',
  mainImage: img,
  durationInHours: 4,
  minAge: 3,
  distanceFromCity: '24km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Acompanhamento de guia', 'Colete salva-vidas', 'Almoço', 'Seguro'],
  keywords: ['cachoeira', 'trilha', 'banho de rio', 'barco', 'fazenda'],
  categories: [aquaticPt, ecotourismPt],
  recommendedFor: [familiesPt, couplesPt],
  city: bonito
};
