<template>
    <section class="hero-section" :style="sectionStyle">
        <div class="hero-background" :style="backgroundStyle"></div>
        <div class="hero-overlay"></div>
        
        <div class="hero-content text-center">
            <h1 class="hero-title">{{ hero_title }}</h1>
            <p class="hero-subtitle">{{ hero_subtitle }}</p>
            
            <q-btn
              v-if="hero_cta" 
              unelevated 
              :label="hero_cta" 
              size="lg" 
              class="hero-cta-button"
              @click="scrollToTours" 
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    hero_title?: string;
    hero_subtitle?: string;
    hero_cta?: string;
    hero_background: string; 

    height?: string;
}>(), {
    hero_background: '',
    height: '100vh'
});

const scrollToTours = () => document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });

const backgroundStyle = computed(() => ({
    backgroundImage: `url(${props.hero_background})`
}));

const sectionStyle = computed(() => ({
  height: props.height,
  minHeight: props.height === '100vh' ? '600px' : 'auto'
}));

</script>

<style scoped lang="scss">
.hero-section {
    position: relative;
    // height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background-size: cover;
    background-position: center;
    transition: background-image 0.5s ease-in-out;
    filter: brightness(0.7);
}

/* Gradiente para garantir leitura nas bordas */
.hero-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 50%, rgba(0,0,0,0.6));
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    padding: 20px;
    max-width: 900px;
}

/* FORÇANDO BRANCO E SOMBRA */
.hero-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: #FFFFFF !important; 
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.9);
}

.hero-subtitle {
    font-family: 'Lato', sans-serif;
    font-size: 1.4rem;
    margin: 0 auto 2.5rem auto;
    color: #FFFFFF !important;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
    opacity: 0.95;
}

/* Botão visível em qualquer fundo */
.hero-cta-button {
    background-color: var(--secondary-color) !important;
    color: #FFFFFF !important;
    font-weight: 700;
    border-radius: 50px;
    padding: 12px 36px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-3px);
        filter: brightness(1.1);
    }
}

/* Ajuste específico para Dark Mode no botão */
:global(body.body--dark) .hero-cta-button {
    background-color: var(--primary-color) !important;
    box-shadow: 0 0 15px rgba(2, 123, 227, 0.6);
}

/* AJUSTES RESPONSIVOS */
@media (max-width: 768px) {
    .hero-title { 
        font-size: 2.5rem; 
    }

    /* Reduz o tamanho do botão APENAS no mobile */
    .hero-cta-button {
        font-size: 0.95rem !important; /* Reduz a fonte */
        padding: 10px 24px !important; /* Reduz o padding gordo do desktop */
        min-height: auto !important;   /* Remove a altura forçada do size="lg" */
        width: auto;                   /* Garante que não estique 100% se não quiser */
        max-width: 80%;                /* Segurança para telas muito pequenas */
    }
}
</style>