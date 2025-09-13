<template>
    <section id="faq-section" class="q-py-xl content-section">
        <div class="container">
            <div class="text-center q-mb-xl">
                <h2 class="section-title">{{ t('faq_title') }}</h2>
            </div>
            <div class="faq-list-container">
                <q-list bordered class="rounded-borders">
                    <q-expansion-item v-for="faq in faqItems" :key="faq.question" group="faqGroup" :icon="faq.icon"
                        :label="t(faq.question)" header-class="faq-question" class="faq-item">
                        <q-card>
                            <q-card-section class="faq-answer">
                                {{ t(faq.answer) }}
                            </q-card-section>
                        </q-card>
                    </q-expansion-item>
                </q-list>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const faqItems = ref([
    { icon: 'mdi-calendar-check', question: 'faq_q1', answer: 'faq_a1' },
    { icon: 'mdi-weather-partly-cloudy', question: 'faq_q2', answer: 'faq_a2' },
    { icon: 'mdi-airplane', question: 'faq_q3', answer: 'faq_a3' },
    { icon: 'mdi-credit-card-outline', question: 'faq_q4', answer: 'faq_a4' },
    { icon: 'mdi-account-multiple-plus', question: 'faq_q5', answer: 'faq_a5' }
]);

</script>

<style lang="scss" scoped>
.faq-list-container {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    border-bottom: 1px solid var(--border-color);

    &:first-child {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }

    &:last-child {
        border-bottom: none;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
    }
}

.faq-question {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary-color);
}

.faq-answer {
    background-color: var(--page-bg-color);
    color: var(--text-secondary-color);
    line-height: 1.6;
}
</style>