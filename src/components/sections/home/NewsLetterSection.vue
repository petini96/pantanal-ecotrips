<template>
  <section class="nl" v-intersection.once="onIntersect" :class="{ 'is-visible': visible }">
    <div class="nl__noise" />

    <div class="nl__inner">
      <div class="nl__icon animated-el" style="--d:0.08s">
        <q-icon name="mdi-email-fast-outline" size="2rem" />
      </div>

      <h2 class="nl__title animated-el" style="--d:0.18s">
        {{ t('newsletter_title') }}
      </h2>

      <p class="nl__sub animated-el" style="--d:0.3s">
        {{ t('newsletter_subtitle') }}
      </p>

      <q-form @submit.prevent="onNewsletterSubmit" class="nl__form animated-el" style="--d:0.42s">
        <div class="nl__row">
          <input
            v-model="newsletterEmail"
            type="email"
            :placeholder="t('newsletter_placeholder')"
            class="nl__input"
            required
          />
          <button type="submit" class="nl__btn" :disabled="newsletterSubmitting">
            <q-spinner v-if="newsletterSubmitting" color="white" size="1.1rem" />
            <span v-else>{{ t('newsletter_cta') }}</span>
          </button>
        </div>

        <div class="nl__success" v-if="submissionSuccess">
          <q-icon name="mdi-check-circle-outline" />
          {{ t('newsletter_success') }}
        </div>
      </q-form>

      <p class="nl__privacy animated-el" style="--d:0.54s">
        <q-icon name="mdi-shield-check-outline" size="xs" />
        Sem spam — cancele quando quiser.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const $q = useQuasar();

const visible = ref(false);
const newsletterEmail = ref('');
const newsletterSubmitting = ref(false);
const submissionSuccess = ref(false);

const onIntersect = (e: IntersectionObserverEntry) => {
  if (e.isIntersecting) visible.value = true;
};

const subscribeToNewsletterAPI = (email: string): Promise<void> => {
  console.log(`Inscrevendo ${email}...`);
  return new Promise((resolve) => setTimeout(resolve, 1500));
};

const onNewsletterSubmit = async () => {
  if (!newsletterEmail.value || !/.+@.+\..+/.test(newsletterEmail.value)) return;
  newsletterSubmitting.value = true;
  submissionSuccess.value = false;
  try {
    await subscribeToNewsletterAPI(newsletterEmail.value);
    submissionSuccess.value = true;
    newsletterEmail.value = '';
    $q.notify({
      icon: 'mdi-check-circle',
      color: 'positive',
      message: t('newsletter_success_short') || 'Inscrição realizada!',
      position: 'top-right',
    });
  } catch (error) {
    console.error('Falha na inscrição da newsletter:', error);
    $q.notify({
      icon: 'mdi-alert-circle-outline',
      color: 'negative',
      message: t('newsletter_error') || 'Ocorreu um erro. Tente novamente.',
      position: 'top-right',
    });
  } finally {
    newsletterSubmitting.value = false;
  }
};
</script>

<style scoped lang="scss">
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

.nl {
  position: relative;
  overflow: hidden;
  background: linear-gradient(158deg, #0c2017 0%, #0f2a1c 50%, #091810 100%);
  padding: 100px 0;

  :global(body.body--dark) & {
    background: linear-gradient(158deg, #070f0b 0%, #0a1a11 50%, #060d09 100%);
  }
}

.nl__noise {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
}

.nl__inner {
  position: relative;
  z-index: 1;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.nl__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 18px;
  background: rgba(111,207,151,0.12);
  color: #6fcf97;
  margin-bottom: 28px;
}

.nl__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  line-height: 1.1;
  color: #ffffff;
  margin: 0 0 14px;
}

.nl__sub {
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(255,255,255,0.6);
  margin: 0 0 36px;
}

.nl__form {
  margin-bottom: 18px;
}

.nl__row {
  display: flex;
  border-radius: 50px;
  overflow: hidden;
  background: rgba(255,255,255,0.07);
  border: 1.5px solid rgba(255,255,255,0.14);
  transition: border-color 0.22s;

  &:focus-within {
    border-color: rgba(111,207,151,0.45);
  }
}

.nl__input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  padding: 15px 22px;
  font-size: 0.95rem;
  color: #ffffff;
  font-family: inherit;
  min-width: 0;

  &::placeholder { color: rgba(255,255,255,0.36); }
}

.nl__btn {
  background: #6fcf97;
  color: #0b2016;
  border: none;
  border-radius: 0 48px 48px 0;
  padding: 15px 26px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.88rem;
  letter-spacing: 0.2px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;

  &:hover:not(:disabled) { background: #86d9a8; }
  &:disabled { opacity: 0.7; cursor: not-allowed; }
}

.nl__success {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
  font-size: 0.9rem;
  color: #6fcf97;
  font-weight: 600;
}

.nl__privacy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 0.77rem;
  color: rgba(255,255,255,0.3);
  margin: 0;
}

.animated-el { opacity: 0; }
.nl.is-visible .animated-el {
  animation: fadeUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: var(--d, 0s);
}

@media (max-width: 540px) {
  .nl { padding: 72px 0; }

  .nl__row {
    flex-direction: column;
    border-radius: 16px;
  }

  .nl__btn {
    border-radius: 0 0 14px 14px;
    justify-content: center;
    padding: 14px 24px;
  }
}
</style>
