<template>
    <q-img :src="imageSrc" class="card-banner" :style="{ height: height }">
        <template v-slot:default>
            <div class="overlay-content column flex-center text-center">
                <div v-if="subtitle" class="banner-subtitle">{{ subtitle }}</div>
                <h1 class="banner-title" v-html="formattedTitle"></h1>
            </div>
        </template>
    </q-img>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    imageSrc: string;
    subtitle?: string;
    title: string;
    height?: string;
}>(), {
    subtitle: '',
    height: '220px',
});

const formattedTitle = computed(() => props.title.replace(/\n/g, '<br>'));
</script>

<style scoped lang="scss">
.card-banner {
    width: 100%;
    position: relative;
    border-radius: 12px 12px 0 0;
}

.overlay-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    background-color: rgba(0, 0, 0, 0.35);
    color: white;
    
    padding: 1rem;
}

.banner-subtitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    opacity: 0.9;
    
    font-size: 0.7rem; 
    letter-spacing: 0.15em;
    margin-bottom: 0.5rem;
}

.banner-title {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
    text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.6);
    font-size: 2.8rem; 
}

@media (max-width: $breakpoint-md-max) {
    .banner-title {
        font-size: 2.5rem;
    }
}

@media (max-width: $breakpoint-sm-max) {
    .banner-title {
        font-size: 2.2rem;
    }

    .banner-subtitle {
        font-size: 0.65rem;
    }
}
</style>