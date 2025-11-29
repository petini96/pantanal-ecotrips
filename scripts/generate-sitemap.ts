// scripts/generate-sitemap.ts

import { create } from 'xmlbuilder2';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // <-- ADICIONE ESTA LINHA

export interface TourSitemap {
  id: string;
}

export const tours: TourSitemap[] = [
  { id: 'safari_pantanal' },
  { id: 'flutuacao_prata' },
  { id: 'pantanal_jungle_lodge' },
  { id: 'combo_pantanal_bonito' },
  { id: 'cavalgada_pantaneira' },
  { id: 'outro_exemplo_1' },
  { id: 'outro_exemplo_2' },
];

// --- CORREÇÃO PARA __dirname EM ESM ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ------------------------------------

// --- CONFIGURAÇÕES ---
const BASE_URL = 'https://www.pantanalecotrips.com.br';
const LANGUAGES = ['pt', 'en', 'es'];
// O caminho de saída agora é construído a partir do __dirname corrigido
const OUTPUT_FILE = path.resolve(__dirname, '../public/sitemap.xml');
// --------------------

// Função auxiliar para criar o bloco xhtml:link para um grupo de URLs
const createAlternateLinks = (urls: { lang: string; url: string }[]) => {
  return urls.map((item: { lang: string; url: string }) => ({
    'xhtml:link': {
      '@rel': 'alternate',
      '@hreflang': item.lang,
      '@href': item.url,
    },
  }));
};



async function generateSitemap() {
  console.log('Gerando sitemap com o método ESM correto...');

  const root = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', {
      xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
      'xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
    });

  // 1. Adicionar as páginas principais (Home)
  const homeUrls = LANGUAGES.map(lang => ({
    lang,
    url: `${BASE_URL}/${lang}`,
  }));

  LANGUAGES.forEach(lang => {
    const urlEntry = root.ele('url');
    urlEntry.ele('loc').txt(`${BASE_URL}/${lang}`);
    urlEntry.ele('lastmod').txt(new Date().toISOString().split('T')[0] || new Date().toISOString());
    urlEntry.ele('changefreq').txt('weekly');
    urlEntry.ele('priority').txt(lang === 'pt' ? '1.0' : '0.8');
    createAlternateLinks(homeUrls).forEach(link => urlEntry.ele(link));
  });


  // 2. Adicionar as páginas de passeios
  tours.forEach(tour => {
    const tourUrls = LANGUAGES.map(lang => ({
      lang,
      url: `${BASE_URL}/${lang}/tours/${tour.id}`,
    }));

    LANGUAGES.forEach(lang => {
      const urlEntry = root.ele('url');
      urlEntry.ele('loc').txt(`${BASE_URL}/${lang}/tours/${tour.id}`);
      urlEntry.ele('lastmod').txt(new Date().toISOString().split('T')[0] || new Date().toISOString());
      urlEntry.ele('changefreq').txt('monthly');
      urlEntry.ele('priority').txt(lang === 'pt' ? '0.9' : '0.7');
      createAlternateLinks(tourUrls).forEach(link => urlEntry.ele(link));
    });
  });

  const xml = root.end({ prettyPrint: true });
  await fs.writeFile(OUTPUT_FILE, xml);

  console.log(`Sitemap gerado com sucesso em: ${OUTPUT_FILE}`);
}

generateSitemap().catch(console.error);