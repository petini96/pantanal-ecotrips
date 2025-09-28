import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { aquaticEn, aquaticEs, aquaticPt } from 'src/data/categories/Aquatic';
import { ecotourismEn, ecotourismEs, ecotourismPt } from 'src/data/categories/Ecotourismm';
import { couplesEn, couplesEs, couplesPt } from 'src/data/audiences/Couples';
import { familiesEn, familiesEs, familiesPt } from 'src/data/audiences/Families';
import { seniorsEn, seniorsEs, seniorsPt } from 'src/data/audiences/Seniors';
import image from 'src/assets/images/packages/gruta-lagoa-azul.png';

export const rioDaPrataPt: Tour = {
  id: 'TOUR-RDP-01',
  name: 'Flutuação no Rio da Prata',
  description: 'Uma flutuação tranquila por um imenso aquário de águas cristalinas, observando peixes e a vegetação subaquática. O passeio começa com uma trilha na mata ciliar.',
  mainImage: image,
  durationInHours: 4,
  distanceFromCity: '50km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Roupa de neoprene', 'Bota de neoprene', 'Colete salva-vidas', 'Máscara e snorkel'],
  keywords: ['flutuação', 'rio', 'peixes', 'nascente'],
  categories: [aquaticPt, ecotourismPt],
  recommendedFor: [familiesPt, couplesPt, seniorsPt],
};

export const rioDaPrataEn: Tour = {
  id: 'TOUR-RDP-01',
  name: 'Snorkeling at Rio da Prata',
  description: 'A gentle snorkeling tour through a huge crystal-clear aquarium, observing fish and underwater vegetation. The tour begins with a trail in the riparian forest.',
  mainImage: image,
  durationInHours: 4,
  distanceFromCity: '50km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Neoprene wetsuit', 'Neoprene boots', 'Life vest', 'Mask and snorkel'],
  keywords: ['snorkeling', 'river', 'fish', 'spring'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn, seniorsEn],
};

export const rioDaPrataEs: Tour = {
  id: 'TOUR-RDP-01',
  name: 'Flotación en el Río da Prata',
  description: 'Una tranquila flotación por un inmenso acuario de aguas cristalinas, observando peces y la vegetación subacuática. El recorrido comienza con un sendero en el bosque de ribera.',
  mainImage: image,
  durationInHours: 4,
  distanceFromCity: '50km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Traje de neopreno', 'Botas de neopreno', 'Chaleco salvavidas', 'Máscara y snorkel'],
  keywords: ['flotación', 'río', 'peces', 'naciente'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs, couplesEs, seniorsEs],
};