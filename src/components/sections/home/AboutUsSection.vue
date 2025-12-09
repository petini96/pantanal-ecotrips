<template>
  <q-parallax class="about-us-parallax-section" :height="viewportHeight">
    <template v-slot:media>
      <img :src="backgroundImage" alt="Pousada no Pantanal">
      <div class="parallax-overlay"></div>
    </template>

    <template v-slot:content>
      <div class="parallax-content-container">
        <div
          id="about-us-content"
          class="container text-center text-white q-px-md"
          :class="{ 'is-visible': isVisible }"
          v-intersection.once="onIntersection"
        >
          <h2
            class="section-title text-white animated-item"
            style="--animation-delay: 0.2s;"
          >
            {{ t('about_us_title') }}
          </h2>

          <div class="row q-mt-xl justify-center q-col-gutter-lg">
            <div class="col-12 col-sm-6 col-md-4 animated-item" style="--animation-delay: 0.4s;">
              <q-card class="feature-card text-center" flat>
                <q-card-section>
                  <q-icon name="mdi-nature-people" size="3.5rem" class="feature-icon" aria-hidden="true" />
                  <h3 class="feature-title">{{ t('our_mission_title') }}</h3>
                  <p class="feature-description">{{ t('our_mission_subtitle') }}</p>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-6 col-md-4 animated-item" style="--animation-delay: 0.6s;">
              <q-card class="feature-card text-center" flat>
                <q-card-section>
                  <q-icon name="mdi-medal-outline" size="3.5rem" class="feature-icon" aria-hidden="true" />
                  <h3 class="feature-title">Experiência Comprovada</h3>
                  <p class="feature-description">O fundador, Ronaldo Mendoza Ribeiro, atua no setor desde 2000, com trajetória sólida como agente, guia bilíngue e organizador de excursões.</p>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-6 col-md-4 animated-item" style="--animation-delay: 0.8s;">
              <q-card class="feature-card text-center" flat>
                <q-card-section>
                  <q-icon name="mdi-leaf" size="3.5rem" class="feature-icon" aria-hidden="true" />
                  <h3 class="feature-title">Turismo Sustentável</h3>
                  <p class="feature-description">Nosso objetivo é transformar sua viagem em uma experiência inesquecível, revelando a beleza única deste paraíso natural com um foco em turismo sustentável e responsável.</p>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <q-btn
            id="about-us-contact-cta"
            color="secondary"
            text-color="white"
            unelevated
            size="lg"
            class="q-mt-xl q-mb-lg animated-item about-us-btn"
            :label="t('about_us_cta')"
            href="https://wa.me/5567999022073"
            target="_blank"
            icon="mdi-whatsapp"
            style="--animation-delay: 1.0s;"
            aria-label="Entre em contato pelo WhatsApp"
            @click="trackWhatsappClick"
          />
        </div>
      </div>
    </template>
  </q-parallax>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import imgDay from 'src/assets/images/packages/joungle-lodge-package.webp';
import imgNight from 'src/assets/images/packages/joungle-lodge-package-dark.webp';
import { useAnalytics } from 'src/components/composables/useAnalytics';

const { t } = useI18n(); // Internacionalização preservada
const { trackEvent } = useAnalytics(); // Hook de rastreamento

const isVisible = ref(false);

const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

// Use as variáveis importadas aqui
const backgroundImage = computed(() => {
  // Ajustei a lógica: Se o tema é dark, usa a imagem dark (imgNight)
  return currentTheme.value === 'dark' ? imgNight : imgDay;
});

const onIntersection = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) {
    isVisible.value = true;

    // RASTREAMENTO 1: Visualização da Seção
    trackEvent('view_section', {
      section_name: 'About Us (Parallax)',
      section_content: 'Missão, Experiência, Sustentabilidade'
    });
  }
};

// RASTREAMENTO 2: Clique no WhatsApp
const trackWhatsappClick = () => {
  trackEvent('click_whatsapp', {
    local_clique: 'secao_sobre_nos_parallax',
    tipo_botao: 'cta_institucional'
  });
};

const viewportHeight = ref(0);

const updateHeight = () => {
  if (typeof window !== 'undefined') {
    viewportHeight.value = window.innerHeight;
  }
};

onMounted(() => {
  updateHeight(); 
  window.addEventListener('resize', updateHeight);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateHeight);
});

</script>

<style lang="scss" scoped>
/* Estilos originais mantidos integralmente */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-item {
  opacity: 0;
}

.container.is-visible .animated-item {
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: var(--animation-delay, 0s);
}

.about-us-parallax-section {
  width: 100%;
}

.parallax-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.parallax-content-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  padding: 48px 0;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 2rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.feature-card {
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
}

.feature-icon {
  color: var(--secondary-color);
  margin-bottom: 1rem;
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.4));
}

.feature-title {
  font-weight: 600;
  font-size: 1.4rem;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.feature-description {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}

.about-us-btn {
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 172, 193, 0.4);
  }
}

@media (max-width: $breakpoint-sm-max) {
  .section-title {
    font-size: 2.2rem;
  }
  .feature-title {
    font-size: 1.2rem;
  }
}
</style>