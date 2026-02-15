import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';
import { cavesEs } from '../../categories/cavess/CavessEs';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${TOURS_BUCKET_NAME}/abismo-anhumas/img1.webp`

export const abismoAnhumasEs: Tour = {
  id: 'TOUR-AA-01',
  slug: 'abismo-anhumas',
  name: 'Abismo Anhumas',
  description: [
    'El descenso y el ascenso se realizan a través de un cabrestante (son 72 metros), lo que exigirá poco esfuerzo físico para la realización de la actividad. Todas las pertenencias de los visitantes, como bolsos y mochilas, serán transportadas de la misma forma.',
    'La llegada será en una plataforma flotante, donde los turistas podrán prepararse para el paseo de Bote, realizado en el lago de aguas cristalinas y para que conozcan las formaciones geológicas, de vuelta al deck se preparan para la actividad de flotación o buceo, utilizando ropa y calzados de neopreno además de la máscara y snorkel ya incluidos en el paseo.',
    'Los visitantes deben comparecer obligatoriamente al CheckPoint del paseo realizado un día antes, en la oficina del Abismo, de las 09:00 a las 17:00h.'
  ],
  shortDescription: 'Aventura radical con descenso en rappel y flotación en lago subterráneo.',
  mainImage: img,
  durationInHours: 5,
  minAge: 5,
  distanceFromCity: '22km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  includedItems: ['Rappel eléctrico', 'Paseo en bote', 'Flotación', 'Equipos'],
  keywords: ['rappel', 'cueva', 'flotación', 'abismo', 'buceo'],
  categories: [adventureEs, cavesEs, aquaticEs],
  recommendedFor: [],
  city: bonito
};
