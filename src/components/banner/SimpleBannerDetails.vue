<template>
    <div class="hero-container">
        <q-img :src="hero_image" class="hero-image" :ratio="16 / 9">
            <div class="hero-overlay"></div>
            <div class="hero-content text-center">
                <h1 class="hero-title">{{ hero_title }}</h1>
                <p class="hero-subtitle">{{ hero_subtitle }}</p>
            </div>
        </q-img>
    </div>
</template>

<script setup lang="ts">

export interface SimpleBannerDetailsProps {
    hero_title: string;
    hero_subtitle: string;
    hero_image: string;
};

withDefaults(defineProps<SimpleBannerDetailsProps>(), {})

</script>

<style scoped lang="scss">
@keyframes infinitePan {
    0% {
        transform: scale(1.0) translate(0, 0);
    }

    50% {
        transform: scale(1.15) translate(-2%, 2%);
    }

    100% {
        transform: scale(1.0) translate(0, 0);
    }
}

@keyframes cinematicReveal {
    from {
        opacity: 0;
        filter: blur(5px);
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
    }
}

.hero-container {
    position: relative;
    height: 60vh;
    color: white;
    background-color: #1a1a1a;
    overflow: hidden;
}

.hero-image {
    height: 100%;
    width: 100%;

    ::v-deep(.q-img__image) {
        animation: infinitePan 40s ease-in-out infinite;
    }
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 10%, transparent 80%);
}

.hero-content {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 1000px;
    z-index: 2;
}

.hero-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: clamp(2rem, 4vw, 3rem);
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.7);
    line-height: 1.2;

    opacity: 0;
    animation: cinematicReveal 1.5s cubic-bezier(0.23, 1, 0.32, 1) 0.5s forwards;
}

.hero-subtitle {
    font-family: 'Lato', sans-serif;
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
    margin-top: 0.5rem;

    opacity: 0;
    animation: cinematicReveal 1.5s cubic-bezier(0.23, 1, 0.32, 1) 0.9s forwards;
}
</style>