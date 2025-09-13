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
import NavLayout from 'src/components/layouts/home/NavLayout.vue';
import { onMounted, ref, nextTick } from 'vue';
import { type ScrollDetails } from 'src/types/Scroll';
import { useScrollStore } from 'src/stores/scrollStore';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import FooterLayout from 'src/components/layouts/home/FooterLayout.vue';

const scrollStore = useScrollStore();
const layoutConfigStore = useLayoutConfigStore();

const onScroll = (info: ScrollDetails) => {
  scrollStore.setScrollInfo(info);
};

const pageRef = ref<HTMLElement | null>(null);

onMounted(async () => {
  layoutConfigStore.initializeTheme();

  await nextTick();

});
</script>