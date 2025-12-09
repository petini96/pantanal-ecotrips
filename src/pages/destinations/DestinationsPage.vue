<template>
  <q-page padding>
    <div class="container q-py-lg">
      <h1>{{t("destinations")}} {{destinationsSlug}}</h1>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useMeta } from 'quasar';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { t} = useI18n();
const destinationsSlug = computed(() => route.params.slug as string);

// --- META TAGS ---
useMeta(() => {
  const pageTitle = t('destinations_title') || 'Destinos';
  const desc = t('destinations_description') || 'Lista de destinos';
  return {
    title: `${pageTitle} | Pantanal Ecotrips`,
    meta: { description: { name: 'description', content: desc } }
  };
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
</style>