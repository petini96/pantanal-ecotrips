// src/model/Region.ts
import { type City } from './City';
import { type TranslatableTag } from './Tags';

export interface Region extends TranslatableTag {
  cities: City[];
}