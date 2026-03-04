import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { ecotourismPt } from '../../categories/ecotourismm';
import { adventurePt } from '../../categories/adventuree';
import { familiesEn } from '../../audiences/families';
import { ecotourismEn } from '../../categories/ecotourismm';
import { adventureEn } from '../../categories/adventuree';
import { familiesEs } from '../../audiences/families';
import { ecotourismEs } from '../../categories/ecotourismm';
import { adventureEs } from '../../categories/adventuree';

const img = `${TOURS_BUCKET_NAME}/parque-ecologico-rio-formoso/img1.webp`

const commonData = {
  id: 'TOUR-PRF-01',
  slug: 'parque-rio-formoso',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  city: bonito
};

export const parqueRioFormosoPt: Tour = {
    ...commonData,
    name: 'Parque Ecológico Rio Formoso',
    description: [
        'Parque Ecológico Rio Formoso – Com acesso fácil, fica a 7 km do centro da cidade e reúne passeios diversos como Boia Cross, Cavalgada, Trilha e o Adventure.',
        'Tem uma estrutura de balneário (Lagoa) junto a recepção que tem tirolesa, caiaque e stand up, disponíveis para uso custo adicional, é um local bonito e agradável para se passar o dia.'
    ],
    shortDescription: 'Parque próximo à cidade com lagoa para banho e atividades de aventura opcionais.',
    includedItems: ['Acesso à Lagoa Formosa (se Day Use)', 'Outras atividades cobradas à parte'],
    keywords: ['lagoa', 'boia cross', 'cavalgada', 'relax'],
    categories: [ecotourismPt, adventurePt],
    recommendedFor: [familiesPt]
};

export const parqueRioFormosoEn: Tour = {
    ...commonData,
    name: 'Rio Formoso Ecological Park',
    description: [
        'Parque Ecológico Rio Formoso – With easy access, it is located 7 km from the city center and brings together various tours such as Boia Cross (Tubing), Horseback Riding, Trail and Adventure.',
        'It has a resort structure (Lagoon) next to the reception that has zipline, kayak and stand up paddle, available for use at additional cost, it is a beautiful and pleasant place to spend the day.'
    ],
    shortDescription: 'Park near the city with a lagoon for swimming and optional adventure activities.',
    includedItems: ['Access to Lagoa Formosa (if Day Use)', 'Other activities charged separately'],
    keywords: ['lagoon', 'tubing', 'horseback riding', 'relax'],
    categories: [ecotourismEn, adventureEn],
    recommendedFor: [familiesEn]
};

export const parqueRioFormosoEs: Tour = {
    ...commonData,
    name: 'Parque Ecológico Rio Formoso',
    description: [
        'Parque Ecológico Rio Formoso – Con acceso fácil, queda a 7 km del centro de la ciudad y reúne paseos diversos como Boia Cross, Cabalgata, Sendero y Adventure.',
        'Tiene una estructura de balneario (Laguna) junto a la recepción que tiene tirolesa, kayak y stand up, disponibles para uso con costo adicional, es un lugar bonito y agradable para pasar el día.'
    ],
    shortDescription: 'Parque cerca de la ciudad con laguna para baño y actividades de aventura opcionales.',
    includedItems: ['Acceso a la Laguna Formosa (si es Day Use)', 'Otras actividades cobradas aparte'],
    keywords: ['laguna', 'boia cross', 'cabalgata', 'relax'],
    categories: [ecotourismEs, adventureEs],
    recommendedFor: [familiesEs]
};
