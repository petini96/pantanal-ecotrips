import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventurePt } from '../../categories/adventuree';
import { cavesPt } from '../../categories/cavess';
import { aquaticPt } from '../../categories/aquaticc';
import { adventureEn } from '../../categories/adventuree';
import { cavesEn } from '../../categories/cavess';
import { aquaticEn } from '../../categories/aquaticc';
import { adventureEs } from '../../categories/adventuree';
import { cavesEs } from '../../categories/cavess';
import { aquaticEs } from '../../categories/aquaticc';

const img = `${TOURS_BUCKET_NAME}/abismo-anhumas/img1.webp`

const commonData = {
  id: 'TOUR-AA-01',
  slug: 'abismo-anhumas',
  mainImage: img,
  durationInHours: 5,
  minAge: 5,
  distanceFromCity: '22km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  city: bonito
};

export const abismoAnhumasPt: Tour = {
    ...commonData,
    name: 'Abismo Anhumas',
    description: [
        'A descida e a subida são realizadas através de um guincho (são 72 metros), o que exigirá pouco esforço físico para a realização da atividade. Todos os pertences dos visitantes, como bolsas e mochilas, serão transportados da mesma forma.',
        'A chegada será em uma plataforma flutuante, onde os turistas poderão se preparar para o passeio de Bote, realizado no lago de águas cristalinas e para que conheçam as formações geológicas, de volta ao deck se preparam para a atividade de flutuação ou mergulho, utilizando roupa e calçados de neoprene além da máscara e snorkel já inclusos no passeio.',
        'Os visitantes devem comparecer obrigatoriamente ao CheckPoint do passeio realizado um dia antes, no escritório do Abismo, das 09:00 as 17:00h.'
    ],
    shortDescription: 'Aventura radical com descida em rapel e flutuação em lago subterrâneo.',
    includedItems: ['Rapel elétrico', 'Passeio de bote', 'Flutuação', 'Equipamentos'],
    keywords: ['rapel', 'caverna', 'flutuação', 'abismo', 'mergulho'],
    categories: [adventurePt, cavesPt, aquaticPt],
    recommendedFor: []
};

export const abismoAnhumasEn: Tour = {
    ...commonData,
    name: 'Abismo Anhumas',
    description: [
        'The descent and ascent are carried out through a winch (it is 72 meters), which will require little physical effort to carry out the activity. All visitors\' belongings, such as bags and backpacks, will be transported in the same way.',
        'The arrival will be on a floating platform, where tourists can prepare for the Boat ride, held in the crystal clear water lake and to get to know the geological formations, back to the deck they prepare for the floating or diving activity, using neoprene clothing and shoes in addition to the mask and snorkel already included in the tour.',
        'Visitors must mandatorily attend the CheckPoint of the tour held the day before, at the Abismo office, from 09:00 to 17:00.'
    ],
    shortDescription: 'Radical adventure with rappel descent and snorkeling in an underground lake.',
    includedItems: ['Electric rappel', 'Boat ride', 'Snorkeling', 'Equipment'],
    keywords: ['rappel', 'cave', 'snorkeling', 'abyss', 'diving'],
    categories: [adventureEn, cavesEn, aquaticEn],
    recommendedFor: []
};

export const abismoAnhumasEs: Tour = {
    ...commonData,
    name: 'Abismo Anhumas',
    description: [
        'El descenso y el ascenso se realizan a través de un cabrestante (son 72 metros), lo que exigirá poco esfuerzo físico para la realización de la actividad. Todas las pertenencias de los visitantes, como bolsos y mochilas, serán transportadas de la misma forma.',
        'La llegada será en una plataforma flotante, donde los turistas podrán prepararse para el paseo de Bote, realizado en el lago de aguas cristalinas y para que conozcan las formaciones geológicas, de vuelta al deck se preparan para la actividad de flotación o buceo, utilizando ropa y calzados de neopreno además de la máscara y snorkel ya incluidos en el paseo.',
        'Los visitantes deben comparecer obligatoriamente al CheckPoint del paseo realizado un día antes, en la oficina del Abismo, de las 09:00 a las 17:00h.'
    ],
    shortDescription: 'Aventura radical con descenso en rappel y flotación en lago subterráneo.',
    includedItems: ['Rappel eléctrico', 'Paseo en bote', 'Flotación', 'Equipos'],
    keywords: ['rappel', 'cueva', 'flotación', 'abismo', 'buceo'],
    categories: [adventureEs, cavesEs, aquaticEs],
    recommendedFor: []
};
