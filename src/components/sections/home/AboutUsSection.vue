<template>
    <section id="about-us-section" class="q-py-xl content-section about-us-bg">
        <div class="container text-center text-white">
            <h2 class="section-title text-white">{{ t('about_us_title') }}</h2>
            <p class="text-h6 q-mt-md" style="max-width: 800px; margin: auto; opacity: 0.9;">
                {{ t('about_us_content') }}
            </p>
            <q-btn id="about-us-contact-cta" color="secondary" text-color="white" unelevated size="lg" class="q-mt-xl"
                :label="t('about_us_cta')" href="https://wa.me/5567999022073" target="_blank" icon="mdi-whatsapp" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.about-us-bg {
    position: relative;
    background-image: url('~assets/images/pantanal_background.jpg');
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
}

.about-us-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
}

.about-us-bg .container {
    position: relative;
    z-index: 2;
}
</style>