<template>
  <div class="attractions-section">
    <div class="header-section text-center q-mb-lg">
      <h2 class="text-h4 text-weight-bold text-primary">{{ t('attractions_title') || 'Atrativos' }}</h2>
      <p class="text-subtitle1 text-grey-8">{{ t('attractions_subtitle') || 'Explore os melhores passeios da região' }}</p>
    </div>

    <!-- Filtros e Controles (se necessário, ou simplificado como solicitado) -->
    
    <!-- Slider Navigation (Above or Below) -->
    <div v-if="filteredTours.length > 0" class="row justify-end q-mb-md q-pr-md">
       <q-btn
        round
        color="primary"
        text-color="white"
        icon="mdi-chevron-left"
        class="slider-nav-btn shadow-2 q-mr-sm"
        :disable="!showLeftArrow"
        :class="{ 'disabled-btn': !showLeftArrow }"
        @click="scrollLeft"
        aria-label="Anterior"
      />
      <q-btn
        round
        color="primary"
        text-color="white"
        icon="mdi-chevron-right"
        class="slider-nav-btn shadow-2"
        :disable="!showRightArrow"
         :class="{ 'disabled-btn': !showRightArrow }"
        @click="scrollRight"
        aria-label="Próximo"
      />
    </div>

    <HorizontalGradientMask
      ref="scrollRef"
      v-if="filteredTours.length"
      @scroll="handleScroll"
    >
      <div
        v-for="tour in filteredTours"
        :key="tour.id"
        class="col-12"
        :class="$q.screen.gt.xs ? 'q-pr-lg' : 'q-pr-md'"
        :style="$q.screen.gt.xs ? { width: '320px', flexShrink: 0 } : { width: '85vw', flexShrink: 0 }"
      >
        <q-card class="tour-card" flat bordered>
          <q-img
            :src="tour.mainImage"
            :alt="tour.name"
            height="220px"
            fit="cover"
            class="card-image"
            loading="lazy"
          >
             <template v-slot:loading>
                <q-spinner-puff color="primary" />
             </template>
             <div class="absolute-bottom-left bg-transparent q-pa-md image-overlay">
                <div class="tour-category-badge shadow-3" v-if="tour.categories.length">
                  {{ tour.categories[0]?.name }}
                </div>
             </div>
          </q-img>

          <q-card-section class="card-content-section">
            <div class="row items-center justify-between no-wrap q-mb-sm">
                <div class="row items-center text-grey-7 text-caption">
                    <q-icon name="mdi-clock-outline" size="xs" class="q-mr-xs"/>
                    <span>{{ tour.durationInHours }}h</span>
                    <q-separator vertical class="q-mx-sm" />
                    <q-icon name="mdi-map-marker-distance" size="xs" class="q-mr-xs"/>
                    <span>{{ tour.distanceFromCity }}</span>
                </div>
            </div>

            <h3 class="card-title">{{ tour.name }}</h3>
            
            <p class="card-description">{{ tour.shortDescription }}</p>

            <div class="row q-mt-auto q-pt-sm">
                 <div class="col-12">
                    <q-btn
                        :label="t('view_details') || 'Saiba Mais'"
                        class="full-width cta-button"
                        unelevated
                        no-caps
                        color="primary"
                        outline
                        :to="getTourLink(tour.slug)" 
                    /> 
                    <!-- Note: Route might need adjustment depending on router setup for tours vs packages -->
                 </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </HorizontalGradientMask>

    <div v-else class="text-center q-pa-xl text-grey">
        <q-spinner-dots size="2em" color="primary" v-if="loading"/>
        <span v-else>{{ t('no_attractions_found') || 'Nenhum atrativo encontrado.' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import HorizontalGradientMask from 'src/components/mask/HorizontalGradientMask.vue';
import type { Tour } from 'src/model/Tour';

import { useRoute } from 'vue-router';

const props = defineProps<{
  tours: Tour[];
  loading?: boolean;
}>();

const { t } = useI18n();
const route = useRoute();
const scrollRef = ref<InstanceType<typeof HorizontalGradientMask> | null>(null);
const showLeftArrow = ref(false);
const showRightArrow = ref(true);

const getTourLink = (slug: string) => {
  return {
    name: 'singleTourDetails',
    params: {
      lang: route.params.lang || 'pt',
      slug: slug
    }
  };
};

const filteredTours = computed(() => props.tours);

const handleScroll = () => {
  if (!scrollRef.value?.scrollContainer) return;
  const { scrollLeft, scrollWidth, clientWidth } = scrollRef.value.scrollContainer;
  showLeftArrow.value = scrollLeft > 10;
  showRightArrow.value = scrollLeft < scrollWidth - clientWidth - 10;
};

const scrollLeft = () => {
  scrollRef.value?.scrollBy(-300);
};

const scrollRight = () => {
  scrollRef.value?.scrollBy(300);
};

watch(filteredTours, () => {
  setTimeout(() => handleScroll(), 100);
});
</script>

<style scoped lang="scss">
.attractions-section {
  padding: 0 0;
}

.tour-card {
  border-radius: 24px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-color: rgba(0,0,0,0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
}

.card-image {
    position: relative;
}

.image-overlay {
    width: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
}

.tour-category-badge {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(4px);
  color: var(--primary-color);
  padding: 6px 12px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  display: inline-block;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.card-content-section {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.2;
  margin: 0 0 10px 0;
  color: var(--text-primary-color);
  
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(1.25rem * 1.2 * 2); 
}

.card-description {
  font-size: 0.9rem;
  color: var(--text-secondary-color);
  line-height: 1.5;
  margin-bottom: 20px;
  
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cta-button {
    border-radius: 12px;
    font-weight: 600;
    border-width: 1.5px;
    
    &:hover {
        background-color: var(--primary-color) !important;
        color: white !important;
    }
}

.slider-nav-btn {
  transition: all 0.3s ease;
  
  &.disabled-btn {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:not(.disabled-btn):hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
}
</style>
