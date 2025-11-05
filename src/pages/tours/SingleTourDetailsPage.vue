<template>
  <q-page v-if="loading && !tour" class="flex flex-center">
    <q-spinner-dots color="primary" size="4em" />
  </q-page>

  <q-page v-else-if="tour" class="tour-details-page-v2 row">
    <div class="col-12 col-md-6 image-column" :style="{ backgroundImage: `url(${tour.mainImage})` }">
      <div class="image-overlay"></div>
    </div>

    <div class="col-12 col-md-6 content-column">
      <div class="content-wrapper q-pa-lg">
        <header class="q-mb-lg">
          <p class="text-overline text-primary">{{ tour.city.name }}</p>
          <h1 class="text-h3 text-weight-bold q-my-sm">{{ tour.name }}</h1>
        </header>

        <section class="q-mb-xl">
          <div class="key-info-grid">
            <div class="info-box">
              <q-icon name="mdi-clock-outline" size="md" />
              <div>
                <div class="text-subtitle2">{{ t(`duration`) }}</div>
                <div class="text-body1 text-weight-medium">{{ tour.durationInHours }} horas</div>
              </div>
            </div>
            <div class="info-box">
              <q-icon :name="getDifficultyInfo(tour.difficulty).icon" size="md"
                :color="getDifficultyInfo(tour.difficulty).color" />
              <div>
                <div class="text-subtitle2">Dificuldade</div>
                <div class="text-body1 text-weight-medium">{{ getDifficultyInfo(tour.difficulty).label }}</div>
              </div>
            </div>
            <div class="info-box" v-if="tour.distanceFromCity">
              <q-icon name="mdi-map-marker-distance" size="md" />
              <div>
                <div class="text-subtitle2">{{ t(`distance_from_city`) }}</div>
                <div class="text-body1 text-weight-medium">{{ tour.distanceFromCity }}</div>
              </div>
            </div>
          </div>
        </section>

        <q-card flat class="q-mb-xl description-card">
          <q-card-section>
            <p>{{ tour.description }}</p>
          </q-card-section>
        </q-card>

        <section class="q-mb-xl" v-if="tour.includedItems && tour.includedItems.length > 0">
          <h2 class="section-heading"><q-icon name="mdi-check-all" />{{ t(`what_is_included`) }}</h2>
          <q-list separator class="q-mt-md included-list">
            <q-item v-for="(item, index) in tour.includedItems" :key="index">
              <q-item-section avatar>
                <q-icon color="positive" name="mdi-check-circle-outline" />
              </q-item-section>
              <q-item-section>{{ item }}</q-item-section>
            </q-item>
          </q-list>
        </section>

        <section>
          <div v-if="tour.environments && tour.environments.length > 0" class="q-mb-lg">
            <h2 class="section-heading"><q-icon name="mdi-pine-tree" />{{ t(`environment`) }}</h2>
            <div class="tag-list q-mt-sm">

              <q-chip v-for="env in tour.environments" :key="env" color="green-1" text-color="green-10"
                :icon="environmentIcons[env] || defaultIcon">
                {{ t(`${env}`) }}
              </q-chip>

            </div>
          </div>
          <div v-if="tour.categories && tour.categories.length > 0" class="q-mb-lg">
            <h2 class="section-heading"><q-icon name="mdi-shape-outline" /> {{ t(`categories`) }} </h2>
            <div class="tag-list q-mt-sm">
              <q-chip v-for="category in tour.categories" :key="category.id" :icon="category.icon" color="primary"
                text-color="white">
                {{ category.name }}
              </q-chip>
            </div>
          </div>
          <div v-if="tour.recommendedFor && tour.recommendedFor.length > 0" class="q-mb-lg">
            <h2 class="section-heading"><q-icon name="mdi-heart-outline" />Recomendado Para</h2>
            <div class="tag-list q-mt-sm">
              <q-chip v-for="audience in tour.recommendedFor" :key="audience.id" :icon="audience.icon" color="secondary"
                text-color="white">
                {{ audience.name }}
              </q-chip>
            </div>
          </div>
        </section>

      </div>

      <div class="cta-footer q-pa-md">
        <q-btn class="full-width" size="lg" color="secondary" label="Consultar Disponibilidade" icon="mdi-whatsapp"
          :href="`https://wa.me/5567999022073?text=${encodedWhatsAppMessage}`" target="_blank" />
      </div>
    </div>
  </q-page>

  <q-page v-else class="flex flex-center">
    <div class="text-center">
      <q-icon name="mdi-alert-circle-outline" size="4rem" color="warning" />
      <p class="text-h6 q-mt-md">{{ t('tour_not_found') }}</p>
      <q-btn :to="`/${locale}`" :label="t('go_home')" color="primary" flat />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import { useMeta } from 'quasar';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useTourStore } from 'src/stores/useTourStore';
import { DifficultyLevel } from 'src/model/Enums';
import {environmentIcons, defaultIcon} from 'src/model/Enums'
const route = useRoute();
const { t, locale } = useI18n();

const tourStore = useTourStore();
const { getTourBySlug, loading } = storeToRefs(tourStore);

const tourSlug = computed(() => route.params.slug as string);
const tour = computed(() => getTourBySlug.value(tourSlug.value));

const fetchData = async (langParam?: string | string[]) => {
  const lang = (langParam as string) || 'pt';
  if (locale.value !== lang) {
    locale.value = lang;
  }
  await tourStore.fetchTours(lang);
};

onMounted(async () => {
  await fetchData(route.params.lang);
});

watch(() => route.params.lang, async (newLang) => {
  await fetchData(newLang);
});

const encodedWhatsAppMessage = computed(() => {
  const tourName = tour.value?.name ?? 'este passeio';
  return encodeURIComponent(`Olá, gostaria de mais informações sobre o passeio ${tourName}.`);
});

const getDifficultyInfo = (level: DifficultyLevel) => {
  const difficultyMap = {
    [DifficultyLevel.EASY]: { label: t('difficulty_easy'), icon: 'mdi-emoticon-happy-outline', color: 'green-5' },
    [DifficultyLevel.MODERATE]: { label: t('difficulty_moderate'), icon: 'mdi-emoticon-neutral-outline', color: 'orange-5' },
    [DifficultyLevel.MEDIUM]: { label: t('difficulty_medium'), icon: 'mdi-emoticon-neutral-outline', color: 'orange-5' },
    [DifficultyLevel.HARD]: { label: t('difficulty_hard'), icon: 'mdi-emoticon-dead-outline', color: 'red-5' },
  };
  return difficultyMap[level];
};

useMeta(() => {
  if (!tour.value) {
    return { title: t('tour_not_found') };
  }
  return {
    title: `${tour.value.name} | Pantanal Ecotrips`,
    meta: {
      description: { name: 'description', content: tour.value.description },
    },
  };
});
</script>

<style scoped lang="scss">
.tour-details-page-v2 {
  background-color: #ffffff;
}

.image-column {
  height: 40vh;
  background-size: cover;
  background-position: center;
  position: relative;

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  }
}

.content-wrapper {
  // Adiciona um padding na base para o conteúdo não ficar escondido atrás do botão no desktop
  padding-bottom: 100px;
}

@media (min-width: $breakpoint-md-min) {
  .image-column {
    position: sticky;
    top: 0;
    height: 100vh;
  }
  .content-column {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
  }
  .content-wrapper {
    flex-grow: 1;
    overflow-y: auto;
  }
}

.text-h3 {
  line-height: 1.2;
  color: #1a2c4e;
}

.key-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.info-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background-color: #f7f9fc;
  border-radius: 8px;
  border: 1px solid #eef2f7;

  .q-icon {
    color: var(--q-primary);
  }

  .text-subtitle2 {
    color: #596e83;
  }

  .text-body1 {
    color: #1a2c4e;
  }
}

.description-card {
  background-color: transparent;
  border: none;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #596e83;
}

.section-heading {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--q-primary);
    border-radius: 2px;
  }
}

.included-list .q-item {
  color: #34495e;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/*
  AJUSTE: O botão agora é um bloco normal no fluxo da página por padrão (mobile).
  Apenas no desktop ele é "fixado" na base da coluna de conteúdo.
*/
.cta-footer {
  flex-shrink: 0; // Importante para o layout flex do desktop
  background-color: #ffffff;
  border-top: 1px solid #eef2f7;
}

@media (min-width: $breakpoint-md-min) {
  .cta-footer {
    // No desktop, a borda e a sombra não são necessárias, pois ele fica na base da coluna
    border-top: none;
    box-shadow: none;
  }
}
</style>