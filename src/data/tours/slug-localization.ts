/**
 * Slug localization map for tour URLs.
 *
 * Each entry maps the canonical (PT) slug to its EN/ES equivalents.
 * Place names (Bonito, Miranda, Boca da Onça, Rio da Prata, etc.) are kept
 * identical across languages — only activity verbs are translated.
 * Pantanal-area tours (Miranda) include "pantanal" suffix for SEO.
 *
 * Tours not listed here use the same slug across all languages.
 */
export interface SlugTranslation {
  en: string;
  es: string;
}

export const tourSlugLocalization: Record<string, SlugTranslation> = {
  // ----- Tours with PT "em" connector — translated activity verbs -----
  'observacao-das-aves-em-miranda': {
    en: 'birdwatching-miranda-pantanal',
    es: 'observacion-aves-miranda-pantanal',
  },
  'boca-da-onca-em-bonito': {
    en: 'boca-da-onca-bonito',
    es: 'boca-da-onca-bonito',
  },
  'bote-rio-formoso-em-bonito': {
    en: 'rafting-rio-formoso-bonito',
    es: 'rafting-rio-formoso-bonito',
  },
  'buraco-das-araras-em-bonito': {
    en: 'buraco-das-araras-bonito',
    es: 'buraco-das-araras-bonito',
  },
  'cabanas-arvorismo-em-bonito': {
    en: 'tree-climbing-cabanas-bonito',
    es: 'cabanas-arborismo-bonito',
  },
  'canoagem-em-miranda': {
    en: 'canoeing-miranda-pantanal',
    es: 'canotaje-miranda-pantanal',
  },
  'pescaria-piranha-em-miranda': {
    en: 'piranha-fishing-chalana-miranda-pantanal',
    es: 'pesca-piranha-chalana-miranda-pantanal',
  },
  'safari-fotografico-em-miranda': {
    en: 'photo-safari-miranda-pantanal',
    es: 'safari-fotografico-miranda-pantanal',
  },
  'caminhada-ecologica-em-miranda': {
    en: 'ecological-walk-miranda-pantanal',
    es: 'caminata-ecologica-miranda-pantanal',
  },
  'estancia-mimosa-em-bonito': {
    en: 'estancia-mimosa-bonito',
    es: 'estancia-mimosa-bonito',
  },
  'safari-fluvial-em-miranda': {
    en: 'river-safari-miranda-pantanal',
    es: 'safari-fluvial-miranda-pantanal',
  },
  'gruta-do-lago-azul-em-bonito': {
    en: 'gruta-do-lago-azul-bonito',
    es: 'gruta-del-lago-azul-bonito',
  },
  'cavalgada-em-miranda': {
    en: 'horseback-riding-miranda-pantanal',
    es: 'cabalgata-miranda-pantanal',
  },
  'safari-onca-pintada-em-miranda': {
    en: 'jaguar-safari-miranda-pantanal',
    es: 'safari-jaguar-miranda-pantanal',
  },
  'jeep-safari-nhecolandia-em-miranda': {
    en: 'jeep-safari-nhecolandia-pantanal',
    es: 'jeep-safari-nhecolandia-pantanal',
  },
  'acampamento-na-selva-em-miranda': {
    en: 'jungle-camping-miranda-pantanal',
    es: 'campamento-selva-miranda-pantanal',
  },
  'passeio-de-barco-motor-em-miranda': {
    en: 'motor-boat-trip-miranda-pantanal',
    es: 'paseo-barco-motor-miranda-pantanal',
  },
  'focagem-notura-animais-em-miranda': {
    en: 'nocturnal-wildlife-spotlighting-pantanal',
    es: 'focagem-nocturna-animales-pantanal',
  },
  'pesca-piranha-em-miranda': {
    en: 'piranha-fishing-miranda-pantanal',
    es: 'pesca-piranha-miranda-pantanal',
  },
  'flutuacao-rio-prata-em-jardim': {
    en: 'rio-da-prata-snorkeling-jardim',
    es: 'flotacion-rio-da-prata-jardim',
  },
  'flutuacao-rio-miranda': {
    en: 'river-floating-miranda-pantanal',
    es: 'flotacion-rio-miranda-pantanal',
  },
  'pousada-aguape': {
    en: 'pousada-aguape-pantanal',
    es: 'pousada-aguape-pantanal',
  },
  'pousada-xaraes': {
    en: 'pousada-xaraes-pantanal',
    es: 'pousada-xaraes-pantanal',
  },
  // Tours 22-60 (place-name-only slugs) keep the same slug in all languages.
};

const reverseMap: Record<string, string> = {};
for (const [pt, trans] of Object.entries(tourSlugLocalization)) {
  reverseMap[trans.en] = pt;
  reverseMap[trans.es] = pt;
}

/**
 * Returns the canonical (PT) slug for any localized slug.
 * If the slug is not a known localized form, returns it unchanged.
 */
export function getCanonicalSlug(slug: string): string {
  return reverseMap[slug] ?? slug;
}

/**
 * Returns the localized slug for a given canonical PT slug + language.
 * Falls back to the canonical slug if no translation exists.
 */
export function getLocalizedSlug(canonicalSlug: string, lang: string): string {
  if (lang === 'pt') return canonicalSlug;
  const trans = tourSlugLocalization[canonicalSlug];
  if (!trans) return canonicalSlug;
  if (lang === 'en') return trans.en;
  if (lang === 'es') return trans.es;
  return canonicalSlug;
}

/**
 * Returns the URL path segment ("passeio" / "tour" / "excursion") for tours
 * in a given language.
 */
export const TOUR_PATH_BY_LANG: Record<string, string> = {
  pt: 'passeio',
  en: 'tour',
  es: 'excursion',
};
