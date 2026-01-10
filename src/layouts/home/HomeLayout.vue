<template>
  <q-layout view="lHh Lpr lFf" :class="['theme-' + currentTheme]">
    <NavLayout />
    <q-page-container>
      <q-page ref="pageRef">
        <router-view />
        <q-scroll-observer @scroll="onScroll" /> 

        <q-page-sticky position="bottom-right" :offset="[18, 18]" style="z-index: 2000;">
          <q-btn
            fab
            icon="mdi-whatsapp"
            color="green-6"
            text-color="white"
            :href="whatsappUrl"
            target="_blank"
            class="shadow-10 pulse-animation"
            aria-label="Contato via WhatsApp"
          />
        </q-page-sticky>
        </q-page>
    </q-page-container>
    <FooterLayout />
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'; // Adicionei computed
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
const { theme: currentTheme } = storeToRefs(layoutConfigStore); 

const pageRef = ref<HTMLElement | null>(null);

// Configuração da URL do WhatsApp
const whatsappNumber = '556791452985';
const whatsappMessage = 'Olá! Gostaria de mais informações sobre o Pantanal.';
const whatsappUrl = computed(() => 
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
);

preFetch(({ store, ssrContext }) => {
  const piniaLayoutStore = useLayoutConfigStore(store);
  const cookies = Cookies.parseSSR(ssrContext);
  const themeFromCookie = cookies.get('pantanal-theme');

  if (themeFromCookie && ['light', 'dark'].includes(themeFromCookie)) {
    piniaLayoutStore.setSsrTheme(themeFromCookie as ThemeName);
  }
});

const onScroll = (info: ScrollDetails) => {
  scrollStore.setScrollInfo(info);
};

onMounted(() => {
  layoutConfigStore.hydrateTheme();
});
</script>

<style lang="scss" scoped>
/* Animação opcional para chamar atenção levemente ao passar o mouse */
.pulse-animation:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}
</style>