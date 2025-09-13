<template>
    <section id="newsletter-section" class="q-py-xl newsletter-bg">
        <div class="container text-center text-white">
            <q-icon name="mdi-email-fast-outline" size="4rem" class="newsletter-icon" />
            <h2 class="section-title text-white">{{ t('newsletter_title') }}</h2>
            <p class="text-h6 q-mt-md" style="max-width: 650px; margin: auto; opacity: 0.9;">
                {{ t('newsletter_subtitle') }}
            </p>
            <q-form @submit.prevent="onNewsletterSubmit" class="q-mt-lg newsletter-form">
                <q-input v-model="newsletterEmail" :placeholder="t('newsletter_placeholder')" type="email"
                    :rules="[val => !!val && /.+@.+\..+/.test(val) || t('newsletter_invalid_email')]" dark
                    standout="bg-white text-black" input-class="text-black" class="newsletter-input">
                    <template v-slot:append>
                        <q-btn type="submit" color="secondary" :label="t('newsletter_cta')" unelevated
                            class="newsletter-btn" :loading="newsletterSubmitting" />
                    </template>
                </q-input>
            </q-form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const $q = useQuasar();

const newsletterEmail = ref('');
const newsletterSubmitting = ref(false);
const onNewsletterSubmit = () => {
    newsletterSubmitting.value = true;
    // Simula uma chamada de API
    setTimeout(() => {
        newsletterSubmitting.value = false;
        $q.notify({
            icon: 'mdi-check-circle',
            color: 'positive',
            message: t('newsletter_success'),
            position: 'top'
        });
        newsletterEmail.value = ''; // Limpa o campo
    }, 1500);
};

</script>

<style scoped lang="scss">
.newsletter-bg {
    position: relative;
    background-color: var(--primary-color);
    background-image:
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('~assets/images/wildlife_pattern.svg');
    background-size: 300px, 300px;
    background-attachment: scroll;
}

.newsletter-icon {
    color: var(--secondary-color);
    margin-bottom: 1rem;
}

.newsletter-form {
    max-width: 500px;
    margin: auto;
}

.newsletter-input .q-field__control {
    border-radius: 999px !important;
}

.newsletter-btn {
    border-radius: 999px;
    height: 100%;
}
</style>