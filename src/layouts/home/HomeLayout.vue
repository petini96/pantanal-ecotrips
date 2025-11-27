<template>
  <div class="full-height full-width">
    <q-layout 
      view="lHh Lpr lFf" 
      container 
      style="height: 100vh" 
      :class="['theme-' + currentTheme]"
    >
      <NavLayout />
      <q-page-container>
        <q-page ref="pageRef">
          <router-view />
          <q-scroll-observer @scroll="onScroll" />
        </q-page>
      </q-page-container>
      <FooterLayout />
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useScrollStore } from 'src/stores/scrollStore';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import NavLayout from 'src/components/layouts/home/NavLayout.vue';
import FooterLayout from 'src/components/layouts/home/FooterLayout.vue';
import { type ScrollDetails } from 'src/types/Scroll';
import { Cookies } from 'quasar';
import { storeToRefs } from 'pinia';
import { preFetch } from 'quasar/wrappers';

// Definimos o tipo aqui para não depender de arquivos externos
type ThemeName = 'light' | 'dark';

const scrollStore = useScrollStore();
const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore); // Reativo

const pageRef = ref<HTMLElement | null>(null);

// preFetch é executado no servidor ANTES da renderização.
// Sua única tarefa é popular a store do Pinia.
preFetch(({ store, ssrContext }) => {
  const piniaLayoutStore = useLayoutConfigStore(store);

  // Parseia os cookies do contexto SSR
  const cookies = Cookies.parseSSR(ssrContext);
  const themeFromCookie = cookies.get('pantanal-theme');

  // Valida e define o tema na store
  if (
    themeFromCookie &&
    ['light', 'dark'].includes(themeFromCookie)
  ) {
    piniaLayoutStore.setSsrTheme(themeFromCookie as ThemeName);
  }
  // Se não houver cookie, a store usará o valor padrão ('light'),
  // e o servidor renderizará a página com a classe correta.
});

const onScroll = (info: ScrollDetails) => {
  scrollStore.setScrollInfo(info);
};

onMounted(() => {
  // No cliente, sincroniza o tema caso ele venha do localStorage
  layoutConfigStore.hydrateTheme();
});
</script>