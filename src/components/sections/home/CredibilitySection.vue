<template>
    <section id="credibility-section" class="q-py-xl content-section">
        <div class="container text-center">
            <h2 class="section-title">{{ t('credibility_title') }}</h2>
            <p class="text-subtitle1 text-grey-7 q-mb-xl">{{ t('credibility_subtitle') }}</p>
            <div class="row items-center justify-center q-col-gutter-xl">
                <div class="credibility-logo">
                    <q-img src="~assets/images/logo_cadastur.png" alt="Logo Cadastur" width="200px" />
                </div>
                <div class="credibility-logo">
                    <q-img src="~assets/images/logo_fodors.png" alt="Logo Fodor's Travel" width="180px" />
                </div>
                <div class="credibility-logo">
                    <q-img src="~assets/images/logo_petitfute.png" alt="Logo Petit Futé" width="220px" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped lang="scss">
.credibility-logo {
    filter: grayscale(100%);
    opacity: 0.6;
    transition: filter 0.3s ease, opacity 0.3s ease;
}

.credibility-logo:hover {
    filter: grayscale(0%);
    opacity: 1;
}
</style>