import { defineBoot } from '#q-app/wrappers';
// 1. A importação volta ao original, sem 'gtag'
import { createGtag } from 'vue-gtag';

// Tipagem para o this.$gtag (para uso em componentes)
type GtagFunction = (command: 'event', action: string, params?: any) => void;

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $gtag: GtagFunction;
  }
}

// 2. Informamos ao TypeScript que a propriedade 'gtag' existirá no 'window'
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const ANALYTICS_GTAG = `${process.env.ANALYTICS_GTAG}`;

export default defineBoot(({ app, router }) => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!ANALYTICS_GTAG || ANALYTICS_GTAG === 'undefined' || ANALYTICS_GTAG === '') {
    console.warn('Google Analytics GTAG ID não está definida no arquivo .env');
    return;
  }

  app.use(createGtag({
    tagId: ANALYTICS_GTAG,
  }));

  router.afterEach((to) => {
    // 3. A chamada é feita através do objeto 'window'
    window.gtag('event', 'page_view', {
      page_path: to.fullPath,
      page_title: document.title,
      page_location: window.location.href,
    });
  });
});