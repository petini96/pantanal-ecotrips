<template>
  <div class="destinations-highlight-section q-py-xl">
    <div class="container text-center q-mb-xl">
      <span class="dest-label" :class="{ 'dest-label--dark': isDark }">
        <span class="dest-label-line" />Pantanal EcoTrips
      </span>
      <h2 class="dest-section-title" :class="isDark ? 'text-white' : ''">
        {{ t('explore_destinations_title') }}
      </h2>
      <p class="dest-section-sub q-mb-none" :class="isDark ? 'text-white opacity-70' : ''">
        {{ t('explore_destinations_subtitle') }}
      </p>
    </div>

    <div class="destinations-grid container">
      <router-link
        v-for="dest in destinations"
        :key="dest.slug"
        :to="getLink(dest.slug)"
        class="dest-card"
        :aria-label="`${t('see_attractions_btn')} — ${dest.name}`"
      >
        <q-img
          :src="dest.coverImage"
          :alt="dest.name"
          height="340px"
          fit="cover"
          class="dest-card__img"
          loading="lazy"
        >
          <template #loading>
            <q-skeleton height="340px" square />
          </template>

          <div class="dest-card__overlay absolute-full" />

          <div class="dest-card__content absolute-bottom">
            <div class="dest-card__chips row q-gutter-xs q-mb-sm">
              <span
                v-for="highlight in dest.highlights.slice(0, 3)"
                :key="highlight"
                class="dest-chip"
              >
                {{ highlight }}
              </span>
            </div>

            <h3 class="dest-card__name">{{ dest.name }}</h3>
            <p class="dest-card__subtitle">{{ dest.subtitle }}</p>

            <div class="dest-card__cta">
              <span class="dest-card__cta-text">
                {{ t('see_attractions_btn') }}
              </span>
              <q-icon name="mdi-arrow-right" size="xs" class="q-ml-xs" />
            </div>
          </div>
        </q-img>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { allRegionsPt, allRegionsEn, allRegionsEs } from 'src/data/regions/all';

const { t, locale } = useI18n();
const route = useRoute();
const layoutConfigStore = useLayoutConfigStore();
const { theme } = storeToRefs(layoutConfigStore);

const isDark = computed(() => theme.value === 'dark');

const DESTINATION_ORDER = ['bonito', 'pantanal-sul', 'pantanal-norte', 'bolivia'];

const destinations = computed(() => {
  const dataByLang: Record<string, typeof allRegionsPt> = {
    pt: allRegionsPt,
    en: allRegionsEn,
    es: allRegionsEs,
  };
  const regions = dataByLang[locale.value] ?? allRegionsPt;
  return DESTINATION_ORDER
    .map(slug => regions.find(r => r.slug === slug))
    .filter(Boolean) as typeof allRegionsPt;
});

const currentLang = computed(() => (route.params.lang as string) || 'pt');

const getLink = (slug: string) => {
  const lang = currentLang.value;
  const typeMap: Record<string, string> = { pt: 'destinos', en: 'destinations', es: 'destinations' };
  const type = typeMap[lang] ?? 'destinos';
  return { name: 'destinations', params: { lang, type, slug }, hash: '#attractions-section' };
};
</script>

<style scoped lang="scss">
.destinations-highlight-section {
  background-color: var(--page-bg-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Section header */
.dest-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #2e8b57;
  margin-bottom: 14px;
}
.dest-label--dark { color: #6fcf97; }
.dest-label-line {
  display: inline-block;
  width: 28px;
  height: 1.5px;
  background: currentColor;
  border-radius: 1px;
}
.dest-section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: clamp(1.9rem, 3.5vw, 3rem);
  line-height: 1.1;
  color: #0d2614;
  margin: 0 0 14px;
}
.dest-section-sub {
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(0,0,0,0.52);
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
}

.dest-card {
  display: block;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;

  &:hover .dest-card__img {
    transform: scale(1.04);
  }

  &:hover .dest-card__cta-text {
    text-decoration: underline;
  }
}

.dest-card__img {
  border-radius: 20px;
  transition: transform 0.4s ease;
  display: block;
}

.dest-card__overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.82) 0%,
    rgba(0, 0, 0, 0.35) 55%,
    transparent 100%
  );
}

.dest-card__content {
  padding: 20px 22px 22px;
  color: #fff;
}

.dest-card__chips {
  flex-wrap: wrap;
}

.dest-chip {
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
  padding: 3px 10px;
  border-radius: 50px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  white-space: nowrap;
}

.dest-card__name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2;
  margin: 6px 0 4px;
  color: #fff;
}

.dest-card__subtitle {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.82);
  margin: 0 0 14px;
  line-height: 1.4;
}

.dest-card__cta {
  display: inline-flex;
  align-items: center;
  background: var(--q-primary);
  color: #fff;
  padding: 7px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.dest-card__cta-text {
  line-height: 1;
}
</style>
