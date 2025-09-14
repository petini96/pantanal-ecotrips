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

withDefaults(defineProps<SimpleBannerDetailsProps>(),{})

</script>

<style scoped lang="scss">

.hero-container {
  position: relative;
  height: 60vh;
  color: white;
}

.hero-image {
  height: 100%;
  width: 100%;
}


.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, transparent 100%);
}

.hero-content {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  z-index: 2;
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
  line-height: 1.2;
}

.hero-subtitle {
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  opacity: 0.9;
}

</style>