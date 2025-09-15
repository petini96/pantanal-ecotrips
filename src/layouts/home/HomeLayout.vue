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

<script lang="ts">
import { Cookies } from 'quasar';

export default {
  preFetch({ store, ssrContext }) {
    const layoutConfigStore = useLayoutConfigStore(store);

    if (ssrContext) {
      const cookies = Cookies.parseSSR(ssrContext);
      const themeFromCookie = cookies.get('pantanal-theme');

      // By performing a runtime check, we satisfy the linter and make the code safer.
      if (themeFromCookie === 'pantanal_verde' || themeFromCookie === 'bonito_azul') {
        layoutConfigStore.setSsrTheme(themeFromCookie);
      }
    }
  }
}
</script>

<script setup lang="ts">
import NavLayout from 'src/components/layouts/home/NavLayout.vue';
import { onMounted, ref, nextTick, computed } from 'vue';
import { useMeta } from 'quasar';
import { type ScrollDetails } from 'src/types/Scroll';
import { useScrollStore } from 'src/stores/scrollStore';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import FooterLayout from 'src/components/layouts/home/FooterLayout.vue';
import { themeVariables } from 'src/utils/theme-utils';
import { storeToRefs } from 'pinia';

const scrollStore = useScrollStore();
const layoutConfigStore = useLayoutConfigStore();

const { theme } = storeToRefs(layoutConfigStore);

const onScroll = (info: ScrollDetails) => {
  scrollStore.setScrollInfo(info);
};

const pageRef = ref<HTMLElement | null>(null);

onMounted(async () => {
  layoutConfigStore.hydrateTheme();
  await nextTick();
});

// --- NEW: Reactive Meta for Style Injection ---
const themeStyle = computed(() => {
  const variables = themeVariables[theme.value];
  const css = Object.entries(variables)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ');
  return `:root { ${css} }`;
});

useMeta(() => {
  const css = themeStyle.value;
  const encodedCss = encodeURIComponent(css);

  return {
    link: {
      themeVars: {
        rel: 'stylesheet',
        href: `data:text/css,${encodedCss}`
      }
    }
  }
});
</script>