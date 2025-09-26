import { type Duration } from "src/model/Duration";
import { type Tour } from "src/model/Tour";

import imageTour1 from "src/assets/images/tours/tour_1.jpg";

export const estanciaMimosaPt = {
  name: "ESTÂNCIA MIMOSA",
  description: `
        A caminhada de 2.800m na mata ciliar do rio Mimoso em meio a árvores centenárias e animais silvestres, com vista privilegiada do cerrado e morraria da região. Com paradas para banho em cachoeiras com piscinas naturais, plataforma para salto e um passeio de 500m no barco a remo.
    `,
  rules: ["Uso obrigatório de tênis"],
  duration: {
    hours: 23,
    minutes: 59,
  } as Duration,
  distance: "22,6 km",
  keywords: [
    "árvores centenárias",
    "animais silvestres",
    "cerrado",
    "morraria",
    "cachoeiras",
    "piscinas naturais",
    "passeio barco a remo",
  ],
  minAgeYears: 3,
  mainImage: imageTour1,
  category: {
    name: 'Cachoeiras',
    icon: 'mdi-waterfall'
  }
} as Tour;

// ENGLISH

export const estanciaMimosaEn = {
  name: "ESTÂNCIA MIMOSA",
  description: `
        A 2,800m walk through the riparian forest of the Mimoso River, amidst centenary trees and wild animals, with a privileged view of the region's cerrado (Brazilian savanna) and hills. With stops for swimming in waterfalls with natural pools, a jumping platform, and a 500m rowboat ride.
    `,
  rules: ["Mandatory use of sneakers"],
  duration: {
    hours: 23,
    minutes: 59,
  } as Duration,
  distance: "22.6 km",
  keywords: [
    "centenary trees",
    "wild animals",
    "cerrado",
    "hills",
    "waterfalls",
    "natural pools",
    "rowboat ride",
  ],
  minAgeYears: 3,
  mainImage: imageTour1,
  category: {
    name: 'Waterfalls',
    icon: 'mdi-waterfall'
  }
} as Tour;

// SPANISH

export const estanciaMimosaEs = {
  name: "ESTÂNCIA MIMOSA",
  description: `
        Una caminata de 2.800m por el bosque de ribera del río Mimoso, entre árboles centenarios y animales silvestres, con una vista privilegiada del cerrado y las colinas de la región. Con paradas para bañarse en cascadas con piscinas naturales, una plataforma para saltar y un paseo de 500m en bote de remos.
    `,
  rules: ["Uso obligatorio de zapatillas"],
  duration: {
    hours: 23,
    minutes: 59,
  } as Duration,
  distance: "22,6 km",
  keywords: [
    "árboles centenarios",
    "animales silvestres",
    "cerrado",
    "colinas",
    "cascadas",
    "piscinas naturales",
    "paseo en bote de remos",
  ],
  minAgeYears: 3,
  mainImage: imageTour1,
  category: {
    name: 'Cascadas',
    icon: 'mdi-waterfall'
  }
} as Tour;