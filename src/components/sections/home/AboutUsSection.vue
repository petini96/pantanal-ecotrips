<template>
  <section id="about-us-section" class="about-us-wrapper q-py-xl" :class="`theme-${currentTheme}`">
    <div class="container q-px-md">
      
      <!-- Top Section: Image & Story Container -->
      <div class="row q-col-gutter-xl items-center q-mb-xl">
        
        <!-- Left Column: Carousel with Floating Badge -->
        <div class="col-12 col-md-6 position-relative image-column" :class="{ 'slide-in-left': isVisibleLeft }" v-intersection.once="onIntersectionLeft">
          <div class="image-wrapper shadow-10">
            <q-carousel
              animated
              v-model="slide"
              infinite
              :autoplay="autoplay"
              arrows
              transition-prev="fade"
              transition-next="fade"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
              class="main-carousel bg-black"
            >
              <q-carousel-slide 
                v-for="(img, index) in carouselImages" 
                :key="index"
                :name="index" 
                class="q-pa-none flex flex-center"
              >
                <q-img
                  :src="img"
                  fit="contain"
                  class="full-height full-width"
                />
              </q-carousel-slide>
            </q-carousel>
            
            <!-- Glassmorphism Badge -->
            <div class="floating-badge glass-effect">
              <div class="badge-content text-center">
                <span class="text-h4 font-weight-bold text-primary">20+</span>
                <span class="text-caption text-weight-medium text-uppercase text-grey-8 block">Anos de<br>Experiência</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Story & CTA -->
        <div class="col-12 col-md-6 story-column" :class="{ 'slide-in-right': isVisibleRight }" v-intersection.once="onIntersectionRight">
          <div>
            <div class="text-overline text-secondary text-uppercase text-weight-bold q-mb-sm tracking-wide">
              {{ t('about_page_title') }}
            </div>
            
            <h2 class="text-h3 font-weight-bold q-mb-md section-title">
              {{ t('about_section_heading') }}
            </h2>
            
            <div class="decorative-line bg-secondary q-mb-lg"></div>

            <h3 class="text-h5 font-weight-bold q-mb-sm text-primary">
              <q-icon name="mdi-account-tie-outline" class="q-mr-sm" />{{ t('about_history_title') }}
            </h3>

            <!-- Founder's History List -->
            <ul class="history-list q-mb-xl text-content">
              <li>
                <q-icon name="mdi-check-circle-outline" color="secondary" class="q-mr-sm q-mt-xs" size="1.2rem"/>
                <span>{{ t('about_history_1') }}</span>
              </li>
              <li>
                <q-icon name="mdi-check-circle-outline" color="secondary" class="q-mr-sm q-mt-xs" size="1.2rem"/>
                <span>{{ t('about_history_2') }}</span>
              </li>
              <li>
                <q-icon name="mdi-check-circle-outline" color="secondary" class="q-mr-sm q-mt-xs" size="1.2rem"/>
                <span>{{ t('about_history_3') }}</span>
              </li>
            </ul>

            <q-btn
              color="secondary"
              text-color="white"
              unelevated
              rounded
              size="lg"
              class="cta-btn q-px-xl font-weight-bold shadow-4"
              :label="t('about_us_cta')"
              href="https://wa.me/5567991452985"
              target="_blank"
              icon="mdi-whatsapp"
              aria-label="Entre em contato pelo WhatsApp"
              @click="trackWhatsappClick"
            />
          </div>
        </div>
      </div>

      <!-- Bottom Section: Features Grid (Cards) -->
      <div class="row q-col-gutter-lg justify-center q-mt-lg" v-intersection.once="onIntersectionBottom">
        <div class="col-12 col-sm-4 feature-col" :class="{ 'fade-up-1': isVisibleBottom }">
          <q-card class="feature-card glass-card text-center" flat>
            <q-card-section class="q-pa-lg">
              <div class="icon-circle bg-primary-light q-mb-md mx-auto">
                <q-icon name="mdi-map-marker-path" size="2.5rem" color="primary" />
              </div>
              <h3 class="text-h6 font-weight-bold q-mb-sm">{{ t('about_card1_title') }}</h3>
              <p class="text-body2 text-grey-7 mb-0">{{ t('about_card1_desc') }}</p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-4 feature-col" :class="{ 'fade-up-2': isVisibleBottom }">
          <q-card class="feature-card glass-card text-center" flat>
            <q-card-section class="q-pa-lg">
              <div class="icon-circle bg-secondary-light q-mb-md mx-auto">
                <q-icon name="mdi-earth" size="2.5rem" color="secondary" />
              </div>
              <h3 class="text-h6 font-weight-bold q-mb-sm">{{ t('about_card2_title') }}</h3>
              <p class="text-body2 text-grey-7 mb-0">{{ t('about_card2_desc') }}</p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-4 feature-col" :class="{ 'fade-up-3': isVisibleBottom }">
          <q-card class="feature-card glass-card text-center" flat>
            <q-card-section class="q-pa-lg">
              <div class="icon-circle bg-accent-light q-mb-md mx-auto">
                <q-icon name="mdi-leaf-circle-outline" size="2.5rem" color="accent" />
              </div>
              <h3 class="text-h6 font-weight-bold q-mb-sm">{{ t('about_card3_title') }}</h3>
              <p class="text-body2 text-grey-7 mb-0">{{ t('about_card3_desc') }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { useAnalytics } from 'src/components/composables/useAnalytics';

const { t } = useI18n();
const { trackEvent } = useAnalytics();
const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);
// Load 49 images from the Ronaldo Minio Bucket
const carouselImages = computed(() => {
  const images: string[] = [];
  const baseUrl = 'https://minio-s3.pantanalecotrips.com.br/general-bucket/ronaldo';
  
  for (let i = 1; i <= 49; i++) {
    images.push(`${baseUrl}/img${i}.jpg`);
  }
  
  return images;
});

// Intersection Observers for scroll animations
const isVisibleLeft = ref(false);
const isVisibleRight = ref(false);
const isVisibleBottom = ref(false);

const slide = ref(0);
const autoplay = ref(true);

const onIntersectionLeft = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) isVisibleLeft.value = true;
};

const onIntersectionRight = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) {
    isVisibleRight.value = true;
    trackEvent('view_section', {
      section_name: 'About Us (Landing Page)',
      section_content: 'Historia e Diferenciais'
    });
  }
};

const onIntersectionBottom = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) isVisibleBottom.value = true;
};

const trackWhatsappClick = () => {
  trackEvent('click_whatsapp', {
    local_clique: 'secao_sobre_nos_landing',
    tipo_botao: 'cta_institucional'
  });
};
</script>

<style lang="scss" scoped>
/* ========================
   BASE LAYOUT & TYPOGRAPHY
   ======================== */
.about-us-wrapper {
  background-color: var(--q-grey-1);
  overflow: hidden; // Prevent horizontal scroll on animations
  transition: background-color 0.3s ease;

  &.theme-dark {
    background-color: var(--q-dark);
    .text-content { color: rgba(255, 255, 255, 0.85); }
    .section-title { color: white; }
    .glass-card {
      background: rgba(40, 40, 40, 0.85); /* Increased contrast for dark mode */
      border: 1px solid rgba(255, 255, 255, 0.1); /* Lighter border in dark mode */
      box-shadow: 0 10px 40px rgba(0,0,0,0.5) !important;
      h3 { color: white; }
      p { color: rgba(255, 255, 255, 0.85) !important; }
    }
    .floating-badge {
      background: rgba(30, 30, 30, 0.85);
      border-color: rgba(255, 255, 255, 0.1);
      span.text-primary { color: var(--q-secondary) !important; }
      span.text-grey-8 { color: rgba(255,255,255,0.7) !important; }
    }
  }
}

.font-weight-bold { font-weight: 700; }
.font-weight-medium { font-weight: 500; }
.tracking-wide { letter-spacing: 1.5px; }

.section-title {
  color: var(--q-primary);
  line-height: 1.2;
}

.text-content {
  color: var(--q-grey-8);
  font-size: 1.1rem;
  line-height: 1.6;
}

.decorative-line {
  height: 4px;
  width: 60px;
  border-radius: 2px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

/* ========================
   HISTORY LIST STYLES
   ======================== */
.history-list {
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;
}

.history-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.history-list span {
  flex: 1;
}

/* ========================
   IMAGE & BADGE STYLES
   ======================== */
.position-relative { position: relative; }

.image-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);

  .theme-dark & {
    border-color: #333333;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
  
  .main-carousel {
    height: 500px;
    width: 100%;
    border-radius: 20px;
  }
}

.floating-badge {
  position: absolute;
  bottom: 30px;
  right: -20px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  z-index: 2;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
}

.glass-effect {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

/* ========================
   FEATURE CARDS
   ======================== */
.glass-card {
  height: 100%;
  border-radius: 16px;
  background: white; /* Changed from semi-transparent */
  border: 1px solid rgba(0, 0, 0, 0.05); /* Grey border to contrast light bg */
  box-shadow: 0 10px 40px rgba(0,0,0,0.06); /* Larger, softer shadow */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0,0,0,0.15) !important;
  }
  
  .theme-dark &:hover {
    box-shadow: 0 16px 32px rgba(0,0,0,0.6) !important;
  }
}

.icon-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-primary-light { background-color: rgba(0, 150, 136, 0.1); }
.bg-secondary-light { background-color: rgba(255, 152, 0, 0.1); }
.bg-accent-light { background-color: rgba(156, 39, 176, 0.1); }

/* ========================
   ANIMATIONS
   ======================== */
/* Left Column */
.image-column, .story-column, .feature-col {
  opacity: 0;
}

.slide-in-left {
  animation: slideInLeft 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}

.slide-in-right {
  animation: slideInRight 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}

.fade-up-1 { animation: fadeUp 0.6s ease-out 0.2s forwards; }
.fade-up-2 { animation: fadeUp 0.6s ease-out 0.4s forwards; }
.fade-up-3 { animation: fadeUp 0.6s ease-out 0.6s forwards; }

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ========================
   RESPONSIVE Ajustes
   ======================== */
@media (max-width: 1023px) {
  .floating-badge {
    right: 20px; /* Bring it inside on tablets */
  }
  .image-wrapper .main-carousel {
    height: 400px;
  }
  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 599px) {
  .image-wrapper .main-carousel {
    height: 300px;
  }
  .floating-badge {
    width: 100px;
    height: 100px;
    bottom: 10px;
    right: 10px;
    
    .text-h4 { font-size: 1.5rem; }
    .text-caption { font-size: 0.7rem; }
  }
}
</style>