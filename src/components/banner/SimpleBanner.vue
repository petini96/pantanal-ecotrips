<template>
    <section class="hero-section">
        <div class="hero-background" :style="backgroundStyle"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content text-center">
            <h1 class="hero-title">{{ hero_title }}</h1>
            <p class="hero-subtitle">{{ hero_subtitle }}</p>
            <!-- 
              REMOVIDO: color="secondary"
              ADICIONADO: class="hero-cta-button"
            -->
            <q-btn 
              unelevated 
              :label="hero_cta" 
              size="lg" 
              class="hero-cta hero-cta-button"
              @click="scrollToTours" 
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface SimpleBannerProps {
    hero_title: string;
    hero_subtitle: string;
    hero_cta: string;
    hero_background: string;
};

const props = withDefaults(defineProps<SimpleBannerProps>(), {});

const scrollToTours = () => document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' });

const backgroundStyle = computed(() => {
    return {
        backgroundImage: `url(${props.hero_background})`
    };
});

</script>
<style scoped lang="scss">
/* REMOVIDO: .q-btn[color="secondary"]
  ADICIONADO: .hero-cta-button
*/
.hero-cta-button {
    background-color: var(--secondary-color) !important;
    color: var(--text-secondary-color) !important; // Adicionado para garantir o contraste
}

/* Removida a regra .q-btn[color="primary"] que não estava sendo usada */

.hero-section {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
    animation: kenBurnsEffect 25s ease-in-out infinite alternate;
}


@keyframes kenBurnsEffect {
    0% {
        transform: scale(1.05) translate(0, 0);
    }

    100% {
        transform: scale(1.15) translate(-2%, 2%);
    }
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
}

.hero-content {
    position: relative;
    z-index: 2;
    padding: 20px;
}

.hero-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 3.5rem;
    text-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
    line-height: 1.2;
    margin-bottom: 1rem;
}

.hero-subtitle {
    font-family: 'Lato', sans-serif;
    font-size: 1.25rem;
    max-width: 550px;
    margin: 0 auto 2.5rem auto;
    opacity: 0.9;
}

.hero-cta {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    border-radius: 8px;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2.8rem;
    }

    .section-title {
        font-size: 2rem;
    }
}

@media (max-width: 600px) {
    .hero-title {
        font-size: 2.2rem;
    }
}
</style>