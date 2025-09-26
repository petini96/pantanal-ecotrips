<template>
  <div class="full-height full-width">
    <q-layout view="lHh Lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
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
import { ref, onMounted, nextTick } from 'vue';
import { useScrollStore } from 'src/stores/scrollStore';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { type ThemeName, themeVariables } from 'src/utils/theme-utils';
import NavLayout from 'src/components/layouts/home/NavLayout.vue';
import FooterLayout from 'src/components/layouts/home/FooterLayout.vue';
import { type ScrollDetails } from 'src/types/Scroll';
import { type QSsrContext } from '@quasar/app-vite';
import { Cookies } from 'quasar';

interface QSsrContextWithMeta extends QSsrContext {
  _meta?: {
    headTags?: string;
  };
}

defineOptions({
  preFetch({ store, ssrContext }) {
    const layoutConfigStore = useLayoutConfigStore(store);
    let theme: ThemeName = 'pantanal_verde';

    if (ssrContext) {
      const contextWithMeta = ssrContext as QSsrContextWithMeta;

      const cookies = Cookies.parseSSR(contextWithMeta);
      const themeFromCookie = cookies.get('pantanal-theme');

      if (themeFromCookie && ['pantanal_verde', 'bonito_azul'].includes(themeFromCookie)) {
        theme = themeFromCookie as ThemeName;
      }
      
      layoutConfigStore.setSsrTheme(theme);

      const variables = themeVariables[theme];
      const styleString = Object.entries(variables)
        .map(([key, value]) => `${key}: ${value};`)
        .join(' ');

      if (contextWithMeta._meta) {
        contextWithMeta._meta.headTags = (contextWithMeta._meta.headTags ?? '') + 
          `<style id="theme-vars">:root { ${styleString} }</style>`;
      }
    }
  }
});

const scrollStore = useScrollStore();
const layoutConfigStore = useLayoutConfigStore();
const pageRef = ref<HTMLElement | null>(null);

const onScroll = (info: ScrollDetails) => {
  scrollStore.setScrollInfo(info);
};

onMounted(async () => {
  layoutConfigStore.hydrateTheme();
  await nextTick();
});
</script>