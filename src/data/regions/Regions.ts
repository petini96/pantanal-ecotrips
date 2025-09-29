// src/data/regions/Regions.ts
import { type Region } from 'src/model/Region';
import * as cities from './Cities';

// --- PT-BR ---
export const bonitoSerraBodoquenaPt: Region = {
  id: 'bonito-serra-bodoquena',
  name: 'Bonito / Serra da Bodoquena',
  icon: 'mdi-mountains',
  cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque, cities.guiaLopes, cities.belaVista, cities.portoMurtinho],
};

export const pantanalPt: Region = {
  id: 'pantanal',
  name: 'Pantanal',
  icon: 'mdi-alligator',
  cities: [cities.corumba, cities.aquidauana, cities.miranda, cities.anastacio, cities.ladario],
};

// --- EN-US ---
export const bonitoSerraBodoquenaEn: Region = {
  id: 'bonito-serra-bodoquena',
  name: 'Bonito / Bodoquena Ridge',
  icon: 'mdi-mountains',
  cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque, cities.guiaLopes, cities.belaVista, cities.portoMurtinho],
};

export const pantanalEn: Region = {
  id: 'pantanal',
  name: 'Pantanal',
  icon: 'mdi-alligator',
  cities: [cities.corumba, cities.aquidauana, cities.miranda, cities.anastacio, cities.ladario],
};

// --- ES ---
export const bonitoSerraBodoquenaEs: Region = {
  id: 'bonito-serra-bodoquena',
  name: 'Bonito / Sierra de Bodoquena',
  icon: 'mdi-mountains',
  cities: [cities.bonito, cities.bodoquena, cities.jardim, cities.nioaque, cities.guiaLopes, cities.belaVista, cities.portoMurtinho],
};

export const pantanalEs: Region = {
  id: 'pantanal',
  name: 'Pantanal',
  icon: 'mdi-alligator',
  cities: [cities.corumba, cities.aquidauana, cities.miranda, cities.anastacio, cities.ladario],
};