import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesPt } from '../../audiences/couples';
import { familiesPt } from '../../audiences/families';
import { aquaticPt } from '../../categories/aquaticc';
import { ecotourismPt } from '../../categories/ecotourismm';
import { couplesEn } from '../../audiences/couples';
import { familiesEn } from '../../audiences/families';
import { aquaticEn } from '../../categories/aquaticc';
import { ecotourismEn } from '../../categories/ecotourismm';
import { couplesEs } from '../../audiences/couples';
import { familiesEs } from '../../audiences/families';
import { aquaticEs } from '../../categories/aquaticc';
import { ecotourismEs } from '../../categories/ecotourismm';

const img = `${TOURS_BUCKET_NAME}/estancia-mimosa/img1.webp`

const commonData = {
  id: 'TOUR-EM-01',
  slug: 'estancia-mimosa-em-bonito',
  mainImage: img,
  durationInHours: 4,
  minAge: 3,
  distanceFromCity: '24km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  city: bonito
};

export const estanciaMimosaPt: Tour = {
    ...commonData,
    name: 'Estância Mimosa',
    description: [
        'O receptivo é uma casa sede de fazenda original e o almoço é preparado e servido no fogão a lenha, com diversidade de pratos regionais e doces caseiros.',
        'O passeio inicia-se com uma caminhada por trilha de aprox. 2.800m (ida e volta) pela mata ciliar do Rio Mimoso, passando por 10 cachoeiras de tamanhos e formas variadas com 9 paradas para banho em suas piscinas naturais a e uma plataforma de salto.',
        'Durante o caminho, passarela suspensa, mirantes, barco a remo, além de uma fauna e flora exuberante que compõem o cenário fotográfico. Grupos limitados: 12 pessoas.'
    ],
    shortDescription: 'Trilha com cachoeiras, piscinas naturais, salto e almoço em fazenda típica.',
    includedItems: ['Acompanhamento de guia', 'Colete salva-vidas', 'Almoço', 'Seguro'],
    keywords: ['cachoeira', 'trilha', 'banho de rio', 'barco', 'fazenda'],
    categories: [aquaticPt, ecotourismPt],
    recommendedFor: [familiesPt, couplesPt]
};

export const estanciaMimosaEn: Tour = {
    ...commonData,
    name: 'Estância Mimosa',
    description: [
        'The reception is an original farm headquarters house and lunch is prepared and served on the wood stove, with diversity of regional dishes and homemade sweets.',
        'The tour starts with a walk along a trail of approx. 2,800m (round trip) through the riparian forest of the Mimoso River, passing through 10 waterfalls of varied sizes and shapes with 9 stops for swimming in their natural pools and a diving platform.',
        'During the way, suspended walkway, lookouts, rowboat, in addition to an exuberant fauna and flora that make up the photographic scenario. Limited groups: 12 people.'
    ],
    shortDescription: 'Trail with waterfalls, natural pools, jumping platform and lunch at a typical farm.',
    includedItems: ['Guide accompaniment', 'Life vest', 'Lunch', 'Insurance'],
    keywords: ['waterfall', 'trail', 'river swimming', 'boat', 'farm'],
    categories: [aquaticEn, ecotourismEn],
    recommendedFor: [familiesEn, couplesEn]
};

export const estanciaMimosaEs: Tour = {
    ...commonData,
    name: 'Estancia Mimosa',
    description: [
        'La recepción es una casa sede de hacienda original y el almuerzo es preparado y servido en el fogón a leña, con diversidad de platos regionales y dulces caseros.',
        'El paseo se inicia con una caminata por sendero de aprox. 2.800m (ida y vuelta) por el bosque de galería del Río Mimoso, pasando por 10 cascadas de tamaños y formas variadas con 9 paradas para baño en sus piscinas naturales y una plataforma de salto.',
        'Durante el camino, pasarela suspendida, miradores, barco a remo, además de una fauna y flora exuberante que componen el escenario fotográfico. Grupos limitados: 12 personas.'
    ],
    shortDescription: 'Sendero con cascadas, piscinas naturales, salto y almuerzo en hacienda típica.',
    includedItems: ['Acompañamiento de guía', 'Chaleco salvavidas', 'Almoerzo', 'Seguro'],
    keywords: ['cascada', 'sendero', 'baño en el río', 'bote', 'hacienda'],
    categories: [aquaticEs, ecotourismEs],
    recommendedFor: [familiesEs, couplesEs]
};
