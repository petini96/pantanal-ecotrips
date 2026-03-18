import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { jardim } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { scubaDivingPt, scubaDivingEn, scubaDivingEs } from "src/data/categories/scuba-diving";

const img = `${TOURS_BUCKET_NAME}/mergulho-rio-da-prata/img1.webp`

const commonData = {
  id: 'TOUR-MRDP-01',
  slug: 'mergulho-rio-da-prata',
  mainImage: img,
  durationInHours: 4,
  minAge: 10,
  distanceFromCity: '45km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: jardim
};

export const mergulhoRioDaPrataPt: Tour = {
    ...commonData,
    name: 'Mergulho com Cilindro (Rio da Prata)',
    description: [
        'O mergulho no Rio da Prata é fascinante pelas águas extremamente cristalinas que impressionam até mergulhadores experientes.',
        'Durante a atividade, o visitante experimenta a sensação de estar imerso em meio a variados cardumes de peixes e vegetação subaquática exuberante.',
        'O percurso tem cerca de 600m com profundidades variando entre 5 e 7 metros. É um mergulho de batismo, não sendo necessária certificação prévia.',
        'A atividade na água dura aproximadamente 40 minutos. Idade mínima: 10 anos. Almoço opcional no atrativo.'
    ],
    shortDescription: 'Mergulho de batismo em águas cristalinas com abundância de peixes no Rio da Prata.',
    includedItems: ['Equipamento completo de mergulho', 'Instrução básica (briefing)', 'Acompanhamento de instrutor', 'Seguro'],
    keywords: ['mergulho', 'scuba', 'rio da prata', 'batismo', 'peixes', 'cristalino'],
    categories: [scubaDivingPt],
    recommendedFor: []
};

export const mergulhoRioDaPrataEn: Tour = {
    ...commonData,
    name: 'Scuba Diving (Rio da Prata)',
    description: [
        'Diving in the Rio da Prata is fascinating due to the extremely crystal-clear waters that impress even experienced divers.',
        'During the activity, visitors experience the sensation of being immersed in various schools of fish and lush underwater vegetation.',
        'The route is about 600m long with depths varying between 5 and 7 meters. It is a discovery dive (baptism), and no prior certification is required.',
        'Water activity lasts approximately 40 minutes. Minimum age: 10 years old. Optional lunch at the attraction.'
    ],
    shortDescription: 'Discovery dive in crystal-clear waters with abundance of fish at Rio da Prata.',
    includedItems: ['Complete diving equipment', 'Basic instruction (briefing)', 'Instructor accompaniment', 'Insurance'],
    keywords: ['scuba diving', 'scuba', 'rio da prata', 'discovery dive', 'fish', 'crystal clear'],
    categories: [scubaDivingEn],
    recommendedFor: []
};

export const mergulhoRioDaPrataEs: Tour = {
    ...commonData,
    name: 'Buceo con Cilindro (Rio da Prata)',
    description: [
        'El buceo en el río da Prata es fascinante por sus aguas extremadamente cristalinas que impresionan incluso a buceadores experimentados.',
        'Durante la actividad, el visitante experimenta la sensación de estar inmerso entre variados bancos de peces y una exuberante vegetación subacuática.',
        'El recorrido tiene unos 600 m de longitud con profundidades que varían entre 5 y 7 metros. Es un buceo de bautismo, no se requiere certificación previa.',
        'La actividad en el agua dura aproximadamente 40 minutos. Edad mínima: 10 años. Almuerzo opcional en el atractivo.'
    ],
    shortDescription: 'Buceo de bautismo en aguas cristalinas con abundancia de peces en el río da Prata.',
    includedItems: ['Equipo completo de buceo', 'Instrucción básica (briefing)', 'Acompañamiento de instructor', 'Seguro'],
    keywords: ['buceo', 'scuba', 'rio da prata', 'bautismo', 'peces', 'cristalino'],
    categories: [scubaDivingEs],
    recommendedFor: []
};
