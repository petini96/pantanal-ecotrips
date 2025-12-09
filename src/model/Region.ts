// src/model/Region.ts
import { type City } from './City';
import { type TranslatableTag } from './Tags';

export interface Region extends TranslatableTag {
  id: string;
  slug: string; // Essencial para a rota /destinations/{slug}
  name: string;
  subtitle?: string; // Uma frase de impacto
  description: string; // O texto de overview completo
  coverImage: string; // Imagem de destaque (hero)
  galleryImages: string[]; // Para a galeria futura
  icon: string;
  cities: City[];
  highlights: string[];
}