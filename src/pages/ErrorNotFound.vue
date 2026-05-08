<template>
  <q-page class="flex flex-center column q-pa-xl">
    <div class="text-center" style="max-width: 480px;">
      <q-icon name="mdi-map-marker-off-outline" size="6rem" color="primary" class="q-mb-md" />
      <h1 class="text-h4 text-weight-bold text-primary q-mb-sm">404</h1>
      <p class="text-h6 text-grey-7 q-mb-lg">{{ t('page_not_found') }}</p>
      <p class="text-body1 text-grey-6 q-mb-xl">{{ t('page_not_found_description') }}</p>
      <q-btn
        color="primary"
        size="lg"
        :label="t('go_home')"
        icon="mdi-home"
        :to="`/${locale}`"
        unelevated
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useMeta } from 'quasar';

const { t, locale } = useI18n();

useMeta({
  title: '404 - Page Not Found | Pantanal Ecotrips',
  meta: {
    robots: { name: 'robots', content: 'noindex, nofollow' },
  },
});
</script>
