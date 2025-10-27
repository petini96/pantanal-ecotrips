import { boot } from 'quasar/wrappers';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';

// Removemos 'app' e 'ssrContext' pois não são mais usados aqui.
export default boot(({ store }) => {
  const layoutConfigStore = useLayoutConfigStore(store);

   
    // A única responsabilidade deste arquivo agora é hidratar o tema no cliente.
    layoutConfigStore.hydrateTheme();
 

  // O bloco '$subscribe' foi removido pois não estava sendo utilizado,
  // o que causava os erros em 'mutation' e 'state'.
});