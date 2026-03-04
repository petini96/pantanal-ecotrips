import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
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

const img = `${TOURS_BUCKET_NAME}/fazenda-san-francisco/img1.webp`

const commonData = {
  id: 'TOUR-FSF-01',
  slug: 'fazenda-san-francisco',
  mainImage: img,
  durationInHours: 10,
  minAge: 0,
  distanceFromCity: '162km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.RIVER, EnvironmentType.FARM],
  city: miranda
};

// Note: Fazenda San Francisco is in Miranda/Pantanal
export const fazendaSanFranciscoPt: Tour = {
    ...commonData,
    name: 'Fazenda San Francisco (Pantanal)',
    description: [
        'O Day-use na Fazenda San Francisco inicia-se as 8h00 partindo da sede da Fazenda San Francisco. Durante o dia serão realizadas duas atividades, o Safari Fotográfico (Percorre estradas entre as reservas de matas nativas e Pantanal, campos de arroz irrigado e visita a invernadas de criação de gado da fazenda com objetivo de avistar e conhecer a fauna e flora do Pantanal, além das atividades produtivas da fazenda), e a Chalana (São realizados também pescaria esportiva de piranhas e visita à figueira centenária), sendo a ordem das atividades organizadas pela Fazenda.'
    ],
    shortDescription: 'Um dia no Pantanal com Safari Fotográfico, Chalana e almoço típico.',
    includedItems: ['Safari', 'Chalana', 'Almoço', 'Guia'],
    keywords: ['pantanal', 'safari', 'chalana', 'bichos'],
    categories: [ecotourismPt, adventurePt],
    recommendedFor: [familiesPt]
};

export const fazendaSanFranciscoEn: Tour = {
    ...commonData,
    name: 'Fazenda San Francisco (Pantanal)',
    description: [
        'The Day-use at Fazenda San Francisco starts at 8:00 am departing from the headquarters of Fazenda San Francisco. During the day two activities will be carried out, the Photographic Safari (Travels through roads between native forest reserves and Pantanal, irrigated rice fields and visit to cattle breeding pastures of the farm aiming to spot and know the fauna and flora of the Pantanal, in addition to the productive activities of the farm), and the Chalana (Piranha sport fishing and visit to the centenary fig tree are also carried out), the order of activities being organized by the Farm.'
    ],
    shortDescription: 'A day in the Pantanal with Photographic Safari, Chalana and typical lunch.',
    includedItems: ['Safari', 'Chalana', 'Lunch', 'Guide'],
    keywords: ['pantanal', 'safari', 'chalana', 'animals'],
    categories: [ecotourismEn, adventureEn],
    recommendedFor: [familiesEn]
};

export const fazendaSanFranciscoEs: Tour = {
    ...commonData,
    name: 'Fazenda San Francisco (Pantanal)',
    description: [
        'El Day-use en la Fazenda San Francisco se inicia a las 8:00 partiendo de la sede de la Fazenda San Francisco. Durante el día serán realizadas dos actividades, el Safari Fotográfico (Recorre caminos entre las reservas de bosques nativos y Pantanal, campos de arroz irrigado y visita a invernadas de cría de ganado de la hacienda con objetivo de avistar y conocer la fauna y flora del Pantanal, además de las actividades productivas de la hacienda), y la Chalana (Se realizan también pesca deportiva de pirañas y visita a la higuera centenaria), siendo el orden de las actividades organizadas por la Hacienda.'
    ],
    shortDescription: 'Un día en el Pantanal con Safari Fotográfico, Chalana y almuerzo típico.',
    includedItems: ['Safari', 'Chalana', 'Almuerzo', 'Guía'],
    keywords: ['pantanal', 'safari', 'chalana', 'bichos'],
    categories: [ecotourismEs, adventureEs],
    recommendedFor: [familiesEs]
};
