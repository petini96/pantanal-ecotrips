import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { resortsPt, resortsEn, resortsEs } from "src/data/categories/resorts";

const img = `${TOURS_BUCKET_NAME}/refugio-da-barra/img1.webp`

const commonData = {
  id: 'TOUR-RDB-01',
  slug: 'refugio-da-barra',
  mainImage: img,
  durationInHours: 8,
  minAge: 0,
  distanceFromCity: '17km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  city: bonito
};

export const refugioDaBarraPt: Tour = {
    ...commonData,
    name: 'Balneário Refúgio da Barra',
    description: [
        'O Refúgio da Barra está localizado em um dos trechos mais privilegiados do Rio Formoso, logo após o seu encontro com o Rio Sucuri.',
        'O balneário oferece águas extremamente calmas e cristalinas, sendo o lugar perfeito para um banho relaxante em meio à natureza.',
        'Com um limite controlado de visitantes, o local garante uma experiência tranquila e exclusiva para famílias e casais.',
        'Conta com infraestrutura de restaurante, quiosques, áreas de descanso e decks de fácil acesso ao rio. Idade mínima: Livre.'
    ],
    shortDescription: 'Águas calmas e cristalinas no encontro dos rios Sucuri e Formoso com lazer exclusivo.',
    includedItems: ['Acesso ao balneário', 'Uso dos decks de banho', 'Área de descanso', 'Estacionamento'],
    keywords: ['refugio da barra', 'balneario', 'rio formoso', 'rio sucuri', 'banho', 'familia'],
    categories: [resortsPt],
    recommendedFor: []
};

export const refugioDaBarraEn: Tour = {
    ...commonData,
    name: 'Refúgio da Barra Resort',
    description: [
        'Refúgio da Barra is located in one of the most privileged sections of the Formoso River, just after its meeting with the Sucuri River.',
        'The resort offers extremely calm and crystal-clear waters, making it the perfect place for a relaxing swim in the midst of nature.',
        'With a controlled limit of visitors, the site guarantees a peaceful and exclusive experience for families and couples.',
        'It features restaurant infrastructure, kiosks, resting areas, and easy-access decks to the river. Minimum age: Free.'
    ],
    shortDescription: 'Calm, crystal-clear waters at the meeting of the Sucuri and Formoso rivers with exclusive leisure.',
    includedItems: ['Resort access', 'Use of bathing decks', 'Resting area', 'Parking'],
    keywords: ['refugio da barra', 'resort', 'rio formoso', 'rio sucuri', 'swimming', 'family'],
    categories: [resortsEn],
    recommendedFor: []
};

export const refugioDaBarraEs: Tour = {
    ...commonData,
    name: 'Balneario Refúgio da Barra',
    description: [
        'Refúgio da Barra se encuentra en uno de los tramos más privilegiados del río Formoso, justo después de su encuentro con el río Sucuri.',
        'El balneario ofrece aguas extremadamente tranquilas y cristalinas, siendo el lugar perfecto para un baño relajante en plena naturaleza.',
        'Con un límite controlado de visitantes, el lugar garantiza una experiencia tranquila y exclusiva para familias y parejas.',
        'Cuenta con infraestructura de restaurante, quioscos, zonas de descanso y plataformas de fácil acceso al río. Edad mínima: Libre.'
    ],
    shortDescription: 'Aguas tranquilas y cristalinas en el encuentro de los ríos Sucuri y Formoso con ocio exclusivo.',
    includedItems: ['Acceso al balneario', 'Uso de plataformas de baño', 'Zona de descanso', 'Estacionamiento'],
    keywords: ['refugio da barra', 'balneario', 'rio formoso', 'rio sucuri', 'baño', 'familia'],
    categories: [resortsEs],
    recommendedFor: []
};
