import { type Duration } from "src/model/Duration";
import { type Tour } from "src/model/Tour";

import imageTour1 from "src/assets/images/tours/tour_1.jpg";

export const cabanasArvorismoPt = {
  name: "CABANAS ARVORISMO",
  description: `
        Um percurso de 300m de extensão com altura variando de 4m a 15m do solo. São 20 estações de  dificuldades gradativas, com duas tirolesas, sendo a   última uma tirolesa aquática no rio Formoso. Antes do início  do passeio haverá um breve treinamento para familiarizar o visitante com os equipamentos e o percurso.
    `,
  duration: {
    hours: 12,
    minutes: 0,
  } as Duration,
  distance: "6,1km",
  keywords: ["tirolesas", "altura variando de 4m a 15m do solo", "treinamento"],
  minAgeYears: 6,
  mainImage: imageTour1,
  category: {
    name: 'Aventura',
    icon: 'mdi-shield-sun-outline'
  }
} as Tour;


// ENGLISH

export const cabanasArvorismoEn = {
  name: "CABANAS CANOPY TOUR",
  description: `
        A 300m long course with heights varying from 4m to 15m above the ground. There are 20 stations of increasing difficulty, with two zip-lines, the last one being an aquatic zip-line into the Formoso River. Before the tour begins, there will be a brief training session to familiarize visitors with the equipment and the course.
    `,
  duration: {
    hours: 12,
    minutes: 0,
  } as Duration,
  distance: "6.1km",
  keywords: ["zip-lines", "heights varying from 4m to 15m", "training"],
  minAgeYears: 6,
  mainImage: imageTour1,
  category: {
    name: 'Adventure',
    icon: 'mdi-shield-sun-outline'
  }
} as Tour;

// SPANISH

export const cabanasArvorismoEs = {
  name: "CABANAS ARBORISMO",
  description: `
        Un recorrido de 300m de extensión con una altura que varía de 4m a 15m del suelo. Son 20 estaciones de dificultad progresiva, con dos tirolesas, siendo la última una tirolesa acuática en el río Formoso. Antes del inicio de la excursión, habrá un breve entrenamiento para familiarizar al visitante con el equipo y el recorrido.
    `,
  duration: {
    hours: 12,
    minutes: 0,
  } as Duration,
  distance: "6,1km",
  keywords: ["tirolesas", "altura que varía de 4m a 15m", "entrenamiento"],
  minAgeYears: 6,
  mainImage: imageTour1,
  category: {
    name: 'Aventura',
    icon: 'mdi-shield-sun-outline'
  }
} as Tour;