// scripts/generate-sitemap.ts

import { create } from 'xmlbuilder2';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { tourSlugLocalization } from '../src/data/tours/slug-localization.js';

// --- CONFIGURATIONS ---
const BASE_URL = 'https://www.pantanalecotrips.com.br';
const LANGUAGES = ['pt', 'en', 'es'];
const DEFAULT_LANG = 'en';

function localizedTourSlug(canonicalSlug: string, lang: string): string {
  if (lang === 'pt') return canonicalSlug;
  const trans = tourSlugLocalization[canonicalSlug];
  if (!trans) return canonicalSlug;
  return lang === 'en' ? trans.en : trans.es;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_FILE = path.resolve(__dirname, '../public/sitemap.xml');

// --- DATA (Manually listed to avoid ESM import issues in this environment) ---
const tourSlugs = [
  'observacao-das-aves-em-miranda', 'boca-da-onca-em-bonito', 'bote-rio-formoso-em-bonito',
  'buraco-das-araras-em-bonito', 'cabanas-arvorismo-em-bonito', 'canoagem-em-miranda',
  'pescaria-piranha-em-miranda', 'safari-fotografico-em-miranda', 'caminhada-ecologica-em-miranda',
  'estancia-mimosa-em-bonito', 'safari-fluvial-em-miranda', 'gruta-do-lago-azul-em-bonito',
  'cavalgada-em-miranda', 'safari-onca-pintada-em-miranda', 'jeep-safari-nhecolandia-em-miranda',
  'acampamento-na-selva-em-miranda', 'passeio-de-barco-motor-em-miranda', 'focagem-notura-animais-em-miranda',
  'pesca-piranha-em-miranda', 'flutuacao-rio-prata-em-jardim', 'flutuacao-rio-miranda',
  'aquario-natural', 'barra-do-sucuri', 'lagoa-misteriosa', 'nascente-azul', 'rio-sucuri',
  'gruta-do-mimoso', 'abismo-anhumas', 'porto-da-ilha', 'ceita-core', 'parque-rio-formoso',
  'balneario-municipal', 'grutas-sao-miguel', 'estrela-do-formoso', 'balneario-do-sol',
  'rio-do-peixe', 'fazenda-san-francisco', 'projeto-jiboia', 'bio-park', 'canions-do-salobra',
  'rotta-zagaia', 'trilha-boiadeira', 'quadriciclo-da-serra', 'boia-cross-rio-formoso',
  'cavalgada-rio-formoso', 'trilha-do-formoso', 'adventure-rio-formoso', 'lagoa-formosa',
  'rota-aventura-bike', 'escalada-bonito', 'cavalgada-do-peao', 'serra-da-bodoquena',
  'parque-das-cachoeiras', 'eco-serrana-park', 'gruta-catedral', 'mergulho-rio-da-prata',
  'mergulho-rio-formoso', 'praia-da-figueira', 'bosque-das-aguas', 'refugio-da-barra', 'jardim-ecopark'
];

const packageSlugs = [
  'tour-bonito-amizade', 'tour-familia-feliz', 'fazenda-san-francisco-coati',
  'fazenda-san-francisco-ararinha', 'fazenda-san-francisco-anta', 'fazenda-san-francisco-aguia',
  'jungle-lodge-lontra', 'jungle-lodge-caiman', 'jungle-lodge-anaconda', 'jungle-lodge-eagle',
  'noite-feliz-em-bonito', 'reveillon-bonito'
];

const hotelSlugs = ['jungle-lodge', 'san-francisco'];

const regionSlugs = ['bonito', 'pantanal-norte', 'pantanal-sul'];

const SECTIONS = [
  // Tour-listing index page. Path varies by language.
  {
    pathByLang: { pt: '/passeios', en: '/all-tours', es: '/excursiones' } as Record<string, string>,
    priority: '0.9',
  },
];

// --- HELPERS ---
const PATH_MAPS: Record<string, Record<string, string>> = {
  tour: { pt: 'passeio', en: 'tour', es: 'excursion' },
  package: { pt: 'pacotes', en: 'packages', es: 'packages' },
  hotel: { pt: 'hoteis', en: 'hotels', es: 'hoteles' },
  region: { pt: 'destinos', en: 'destinations', es: 'destinations' }
};

function createAlternateLinks(type: string, slug: string): any[] {
  const links = LANGUAGES.map(lang => {
    const typePath = PATH_MAPS[type] ? PATH_MAPS[type][lang] : type;
    const localizedSlug = type === 'tour' ? localizedTourSlug(slug, lang) : slug;
    const path = localizedSlug ? `/${typePath}/${localizedSlug}` : (type ? `/${typePath}` : '');
    return {
      'xhtml:link': {
        '@rel': 'alternate',
        '@hreflang': lang,
        '@href': `${BASE_URL}/${lang}${path}`,
      }
    };
  });

  const xDefaultType = PATH_MAPS[type] ? PATH_MAPS[type][DEFAULT_LANG] : type;
  const xDefaultLocalizedSlug = type === 'tour' ? localizedTourSlug(slug, DEFAULT_LANG) : slug;
  const xDefaultPath = xDefaultLocalizedSlug ? `/${xDefaultType}/${xDefaultLocalizedSlug}` : (type ? `/${xDefaultType}` : '');

  links.push({
    'xhtml:link': {
      '@rel': 'alternate',
      '@hreflang': 'x-default',
      '@href': `${BASE_URL}/${DEFAULT_LANG}${xDefaultPath}`,
    }
  });

  return links;
}

async function generateSitemap() {
  console.log('Generating dynamic sitemap with localized paths...');

  const root = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', {
      xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
      'xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
    });

  const lastmod = new Date().toISOString().split('T')[0] || '';

  // 1. Home Pages
  LANGUAGES.forEach(lang => {
    const urlEntry = root.ele('url');
    urlEntry.ele('loc').txt(`${BASE_URL}/${lang}`);
    urlEntry.ele('lastmod').txt(lastmod);
    urlEntry.ele('changefreq').txt('weekly');
    urlEntry.ele('priority').txt('1.0');
    createAlternateLinks('', '').forEach(link => {
        urlEntry.ele(link);
    });
  });

  // 2. Sections (lang-aware path: /passeios, /all-tours, /excursiones)
  SECTIONS.forEach(sec => {
    LANGUAGES.forEach(lang => {
      const sectionPath = sec.pathByLang[lang] || sec.pathByLang[DEFAULT_LANG]!;
      const urlEntry = root.ele('url');
      urlEntry.ele('loc').txt(`${BASE_URL}/${lang}${sectionPath}`);
      urlEntry.ele('lastmod').txt(lastmod);
      urlEntry.ele('changefreq').txt('weekly');
      urlEntry.ele('priority').txt(sec.priority);

      LANGUAGES.forEach(l => {
        const altPath = sec.pathByLang[l] || sec.pathByLang[DEFAULT_LANG]!;
        urlEntry.ele('xhtml:link', {
          rel: 'alternate',
          hreflang: l,
          href: `${BASE_URL}/${l}${altPath}`,
        });
      });
      urlEntry.ele('xhtml:link', {
        rel: 'alternate',
        hreflang: 'x-default',
        href: `${BASE_URL}/${DEFAULT_LANG}${sec.pathByLang[DEFAULT_LANG]}`,
      });
    });
  });

  // 3. Tours — use localized slug per language for <loc>, with hreflang alternates.
  tourSlugs.forEach(slug => {
    LANGUAGES.forEach(lang => {
      const typePath = PATH_MAPS.tour![lang];
      const localizedSlug = localizedTourSlug(slug, lang);
      const urlEntry = root.ele('url');
      urlEntry.ele('loc').txt(`${BASE_URL}/${lang}/${typePath}/${localizedSlug}`);
      urlEntry.ele('lastmod').txt(lastmod);
      urlEntry.ele('changefreq').txt('monthly');
      urlEntry.ele('priority').txt('0.8');
      createAlternateLinks('tour', slug).forEach(link => urlEntry.ele(link));
    });
  });

  // 4. Packages
  packageSlugs.forEach(slug => {
    LANGUAGES.forEach(lang => {
      const typePath = PATH_MAPS.package![lang];
      const urlEntry = root.ele('url');
      urlEntry.ele('loc').txt(`${BASE_URL}/${lang}/${typePath}/${slug}`);
      urlEntry.ele('lastmod').txt(lastmod);
      urlEntry.ele('changefreq').txt('monthly');
      urlEntry.ele('priority').txt('0.9');
      createAlternateLinks('package', slug).forEach(link => urlEntry.ele(link));
    });
  });

  // 5. Hotels
  hotelSlugs.forEach(slug => {
    LANGUAGES.forEach(lang => {
      const typePath = PATH_MAPS.hotel![lang];
      const urlEntry = root.ele('url');
      urlEntry.ele('loc').txt(`${BASE_URL}/${lang}/${typePath}/${slug}`);
      urlEntry.ele('lastmod').txt(lastmod);
      urlEntry.ele('changefreq').txt('monthly');
      urlEntry.ele('priority').txt('0.7');
      createAlternateLinks('hotel', slug).forEach(link => urlEntry.ele(link));
    });
  });

  // 6. Regions
  regionSlugs.forEach(slug => {
    LANGUAGES.forEach(lang => {
      const typePath = PATH_MAPS.region![lang];
      const urlEntry = root.ele('url');
      urlEntry.ele('loc').txt(`${BASE_URL}/${lang}/${typePath}/${slug}`);
      urlEntry.ele('lastmod').txt(lastmod);
      urlEntry.ele('changefreq').txt('monthly');
      urlEntry.ele('priority').txt('0.7');
      createAlternateLinks('region', slug).forEach(link => urlEntry.ele(link));
    });
  });

  const xml = root.end({ prettyPrint: true });
  await fs.writeFile(OUTPUT_FILE, xml);
  console.log(`Sitemap generated successfully at: ${OUTPUT_FILE}`);
}

generateSitemap().catch(console.error);