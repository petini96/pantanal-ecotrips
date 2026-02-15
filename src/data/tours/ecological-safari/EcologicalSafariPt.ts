import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventurePt } from '../../categories/adventuree/AdventureePt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';


const img = `${TOURS_BUCKET_NAME}/safari-fotografico/img1.webp`

export const ecologicalSafariPt: Tour = {
  id: 'TOUR-FSF-ES-01',
  slug: 'safari-fotografico-em-miranda',
  name: 'Safári Fotográfico',
  description: [
    'Em carros especialmente adaptados, percorre-se estradas em meio a reserva florestal e campos de arroz irrigado. Visita-se a criação de jacarés e pode-se observar uma grande diversidade de fauna e flora. Duração aproximada de 2:30 horas.'
  ],
  shortDescription: 'Passeio em carro aberto para observação de fauna e flora, visitando criação de jacarés e campos de arroz.',
  mainImage: img,
  durationInHours: 2.5,
  minAge: 0,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Veículo de safári', 'Guia'],
  keywords: ['safári', 'fotográfico', 'fauna', 'flora', 'jacaré'],
  categories: [ecotourismPt, adventurePt],
  recommendedFor: [],
  city: miranda
};
