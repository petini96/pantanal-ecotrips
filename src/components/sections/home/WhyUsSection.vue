<template>
    <section id="why-us-section" class="q-py-xl content-section">
        <div class="container">
            <div class="text-center q-mb-xl">
                <h2 class="section-title">{{ t('why_us_title') }}</h2>
            </div>
            <div class="row q-col-gutter-lg justify-center items-stretch">
                <div class="col-12 col-sm-6 col-md-3" v-for="(item, index) in whyUsItems" :key="item.icon">
                    <q-intersection once transition="slide-up" :delay="index * 150" class="full-height">
                        <q-card class="feature-card text-center full-height" flat>
                            <q-card-section>
                                <q-icon :name="item.icon" size="3.5rem" class="feature-icon" aria-hidden="true" />
                                <h3 class="feature-title">{{ t(item.title) }}</h3>
                                <p>{{ t(item.desc) }}</p>
                            </q-card-section>
                        </q-card>
                    </q-intersection>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const whyUsItems = ref([
    { icon: 'mdi-map-marker-path', title: 'why_us_item1_title', desc: 'why_us_item1_desc' },
    { icon: 'mdi-trophy', title: 'why_us_item2_title', desc: 'why_us_item2_desc' },
    { icon: 'mdi-account-group-outline', title: 'why_us_item3_title', desc: 'why_us_item3_desc' },
    { icon: 'mdi-lifebuoy', title: 'why_us_item4_title', desc: 'why_us_item4_desc' }
]);

</script>

<style scoped lang="scss">
.feature-card {
    background-color: transparent;
    height: 100%;
}

.feature-icon {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.feature-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    color: var(--text-primary-color);
}

.feature-card p {
    color: var(--text-secondary-color);
}

</style>