<template>
  <div
    class="q-py-xl newsletter-bg theme-light"
    v-intersection.once="onIntersection"
  >
    <div class="container text-center q-px-md" :class="{ 'is-visible': isVisible }">
      <q-icon
        name="mdi-email-fast-outline"
        size="4rem"
        class="newsletter-icon animated-item"
        style="--animation-delay: 0.2s;"
      />

      <h2
        class="section-title animated-item"
        style="--animation-delay: 0.4s;"
      >
        {{ t('newsletter_title') }}
      </h2>

      <p
        class="text-h6 q-mt-md animated-item"
        style="max-width: 650px; margin: auto; opacity: 0.8; --animation-delay: 0.6s;"
      >
        {{ t('newsletter_subtitle') }}
      </p>

      <q-form
        @submit.prevent="onNewsletterSubmit"
        class="q-mt-lg newsletter-form animated-item"
        style="--animation-delay: 0.8s;"
      >
        <q-input
          v-model="newsletterEmail"
          :placeholder="t('newsletter_placeholder')"
          type="email"
          :rules="[val => !!val && /.+@.+\..+/.test(val) || t('newsletter_invalid_email')]"
          outlined
          rounded
          class="newsletter-input"
          aria-label="Email para newsletter"
        >
          <template v-slot:append>
            <!-- 
              REMOVIDO: color="secondary"
              ADICIONADO: class="newsletter-cta-button"
            -->
            <q-btn
              type="submit"
              :label="t('newsletter_cta')"
              icon-right="mdi-send"
              rounded
              unelevated
              class="newsletter-btn newsletter-cta-button"
              :loading="newsletterSubmitting"
              aria-label="Inscrever na newsletter"
            />
          </template>
        </q-input>

        <div class="q-mt-md text-positive success-message" v-if="submissionSuccess">
          <q-icon name="mdi-check-circle" />
          {{ t('newsletter_success') }}
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const $q = useQuasar();

const isVisible = ref(false);
const newsletterEmail = ref('');
const newsletterSubmitting = ref(false);
const submissionSuccess = ref(false);

const onIntersection = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) {
    isVisible.value = true;
  }
};

const subscribeToNewsletterAPI = (email: string): Promise<void> => {
  console.log(`Inscrevendo ${email}...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
};

const onNewsletterSubmit = async () => {
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
      position: 'top-right'
    });
  } catch (error) {
    console.error('Falha na inscrição da newsletter:', error);
    $q.notify({
      icon: 'mdi-alert-circle-outline',
      color: 'negative',
      message: t('newsletter_error') || 'Ocorreu um erro. Tente novamente.',
      position: 'top-right'
    });
  } finally {
    newsletterSubmitting.value = false;
  }
};
</script>

<style scoped lang="scss">
/* ADICIONADO: Regra de estilo para o botão
*/
.newsletter-cta-button {
  background-color: var(--secondary-color) !important;
  color: var(--text-secondary-color) !important;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-item {
  opacity: 0;
}

.container.is-visible .animated-item {
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: var(--animation-delay, 0s);
}

.theme-light {
  background-color: #f0fbf8; 
  background-image: url('~assets/images/wildlife_pattern.svg');
  background-size: 300px;
  background-repeat: repeat;
  background-position: center;

  .section-title, p {
    color: #2c3e50;
  }
}

.newsletter-bg {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: inherit;
    background-size: inherit;
    background-repeat: inherit;
    background-position: inherit;
    opacity: 0.05;
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1;
  }
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
}

.newsletter-icon {
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.newsletter-form {
  max-width: 500px;
  margin: 1.5rem auto 0;
}

.newsletter-input {
  background-color: #ffffff;
  border-radius: 28px; 
  :deep(.q-field__control) {
    border-color: rgba(0, 0, 0, 0.2);
  }
}

.newsletter-btn {
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 172, 193, 0.4);
  }
}

.success-message {
  font-weight: 500;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>