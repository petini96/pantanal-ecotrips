import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { scubaDivingPt, scubaDivingEn, scubaDivingEs } from "src/data/categories/scuba-diving";

const img = `${TOURS_BUCKET_NAME}/mergulho-rio-formoso/img1.webp`

const commonData = {
  id: 'TOUR-MRF-01',
  slug: 'mergulho-rio-formoso',
  mainImage: img,
  durationInHours: 4,
  minAge: 10,
  distanceFromCity: '6.6km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: bonito
};

export const mergulhoRioFormosoPt: Tour = {
    ...commonData,
    name: 'Mergulho com Cilindro (Rio Formoso)',
    description: [
        'Realizado em um dos trechos mais bonitos do Rio Formoso, este mergulho permite explorar a vida subaquática de forma única.',
        'O mergulho é feito no Bosque das Águas, onde é possível observar diversos cardumes de peixes, troncos submersos e formações calcárias.',
        'O percurso tem cerca de 600m com profundidade média de 4 metros. Não é necessária certificação para o mergulho diurno.',
        'Inclui treinamento prévio no deck exclusivo para a atividade. Idade mínima: 10 anos. Duração aproximada: 30 a 40 minutos de imersão.'
    ],
    shortDescription: 'Mergulho autônomo diurno em trecho preservado do Rio Formoso.',
    includedItems: ['Equipamento completo de mergulho', 'Treinamento inicial', 'Acompanhamento de instrutor', 'Seguro'],
    keywords: ['mergulho', 'scuba', 'rio formoso', 'bosque das aguas', 'peixes', 'aventura'],
    categories: [scubaDivingPt],
    recommendedFor: []
};

export const mergulhoRioFormosoEn: Tour = {
    ...commonData,
    name: 'Scuba Diving (Formoso River)',
    description: [
        'Carried out in one of the most beautiful sections of the Formoso River, this dive allows you to explore underwater life in a unique way.',
        'The dive takes place at Bosque das Águas, where you can observe various schools of fish, submerged logs, and limestone formations.',
        'The route is about 600m long with an average depth of 4 meters. No certification is required for daytime diving.',
        'Includes prior training on the exclusive deck for the activity. Minimum age: 10 years old. Approximate duration: 30 to 40 minutes of immersion.'
    ],
    shortDescription: 'Daytime scuba diving in a preserved section of the Formoso River.',
    includedItems: ['Complete diving equipment', 'Initial training', 'Instructor accompaniment', 'Insurance'],
    keywords: ['scuba diving', 'scuba', 'rio formoso', 'bosque das aguas', 'fish', 'adventure'],
    categories: [scubaDivingEn],
    recommendedFor: []
};

export const mergulhoRioFormosoEs: Tour = {
    ...commonData,
    name: 'Buceo con Cilindro (Río Formoso)',
    description: [
        'Realizado en uno de los tramos más bellos del río Formoso, este buceo permite explorar la vida subacuática de forma única.',
        'El buceo se realiza en el Bosque das Águas, donde es posible observar diversos bancos de peces, troncos sumergidos y formaciones calizas.',
        'El recorrido tiene unos 600 m de longitud con una profundidad media de 4 metros. No se requiere certificación para el buceo diurno.',
        'Incluye entrenamiento previo en la plataforma exclusiva para la actividad. Edad mínima: 10 años. Duración aproximada: 30 a 40 minutos de inmersión.'
    ],
    shortDescription: 'Buceo autónomo diurno en tramo preservado del río Formoso.',
    includedItems: ['Equipo completo de buceo', 'Entrenamiento inicial', 'Acompañamiento de instructor', 'Seguro'],
    keywords: ['buceo', 'scuba', 'rio formoso', 'bosque das aguas', 'peces', 'aventura'],
    categories: [scubaDivingEs],
    recommendedFor: []
};
