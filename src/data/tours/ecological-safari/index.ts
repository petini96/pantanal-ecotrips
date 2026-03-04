import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventurePt } from '../../categories/adventuree';
import { ecotourismPt } from '../../categories/ecotourismm';
import { adventureEn } from '../../categories/adventuree';
import { ecotourismEn } from '../../categories/ecotourismm';
import { adventureEs } from '../../categories/adventuree';
import { ecotourismEs } from '../../categories/ecotourismm';

const img = `${TOURS_BUCKET_NAME}/safari-fotografico/img1.webp`

const commonData = {
  id: 'TOUR-FSF-ES-01',
  slug: 'safari-fotografico-em-miranda',
  mainImage: img,
  durationInHours: 2.5,
  minAge: 0,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  city: miranda
};

export const ecologicalSafariPt: Tour = {
    ...commonData,
    name: 'Safári Fotográfico',
    description: [
        'Em carros especialmente adaptados, percorre-se estradas em meio a reserva florestal e campos de arroz irrigado. Visita-se a criação de jacarés e pode-se observar uma grande diversidade de fauna e flora. Duração aproximada de 2:30 horas.'
    ],
    shortDescription: 'Passeio em carro aberto para observação de fauna e flora, visitando criação de jacarés e campos de arroz.',
    includedItems: ['Veículo de safári', 'Guia'],
    keywords: ['safári', 'fotográfico', 'fauna', 'flora', 'jacaré'],
    categories: [ecotourismPt, adventurePt],
    recommendedFor: []
};

export const ecologicalSafariEn: Tour = {
    ...commonData,
    name: 'Photographic Safari',
    description: [
        'In specially adapted cars, you travel along roads through forest reserves and irrigated rice fields. You visit the alligator farm and can observe a great diversity of fauna and flora. Approximate duration of 2:30 hours.'
    ],
    shortDescription: 'Open car tour for fauna and flora observation, visiting alligator farm and rice fields.',
    includedItems: ['Safari vehicle', 'Guide'],
    keywords: ['safari', 'photographic', 'fauna', 'flora', 'alligator'],
    categories: [ecotourismEn, adventureEn],
    recommendedFor: []
};

export const ecologicalSafariEs: Tour = {
    ...commonData,
    name: 'Safari Fotográfico',
    description: [
        'En coches especialmente adaptados, se recorren caminos en medio de la reserva forestal y campos de arroz irrigado. Se visita el criadero de yacarés y se puede observar una gran diversidad de fauna y flora. Duración aproximada de 2:30 horas.'
    ],
    shortDescription: 'Paseo en coche abierto para observación de fauna y flora, visitando criadero de yacarés y campos de arroz.',
    includedItems: ['Vehículo de safari', 'Guía'],
    keywords: ['safari', 'fotográfico', 'fauna', 'flora', 'yacaré'],
    categories: [ecotourismEs, adventureEs],
    recommendedFor: []
};
