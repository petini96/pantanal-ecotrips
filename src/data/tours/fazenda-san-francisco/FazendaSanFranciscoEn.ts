import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';

const img = `${TOURS_BUCKET_NAME}/fazenda-san-francisco/img1.webp`

export const fazendaSanFranciscoEn: Tour = {
  id: 'TOUR-FSF-01',
  slug: 'fazenda-san-francisco',
  name: 'Fazenda San Francisco (Pantanal)',
  description: [
    'The Day-use at Fazenda San Francisco starts at 8:00 am departing from the headquarters of Fazenda San Francisco. During the day two activities will be carried out, the Photographic Safari (Travels through roads between native forest reserves and Pantanal, irrigated rice fields and visit to cattle breeding pastures of the farm aiming to spot and know the fauna and flora of the Pantanal, in addition to the productive activities of the farm), and the Chalana (Piranha sport fishing and visit to the centenary fig tree are also carried out), the order of activities being organized by the Farm.'
  ],
  shortDescription: 'A day in the Pantanal with Photographic Safari, Chalana and typical lunch.',
  mainImage: img,
  durationInHours: 10,
  minAge: 0,
  distanceFromCity: '162km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.RIVER, EnvironmentType.FARM],
  includedItems: ['Safari', 'Chalana', 'Lunch', 'Guide'],
  keywords: ['pantanal', 'safari', 'chalana', 'animals'],
  categories: [ecotourismEn, adventureEn],
  recommendedFor: [familiesEn],
  city: miranda
};
