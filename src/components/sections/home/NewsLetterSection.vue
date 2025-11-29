<template>
  <div
    class="q-py-xl newsletter-bg bg-theme"
    v-intersection.once="onIntersection"
  >
    <div class="container text-center q-px-md" :class="{ 'is-visible': isVisible }">
      <q-icon
        name="mdi-email-fast-outline"
        size="4rem"
        :color="iconColor"
        class="q-mb-md animated-item"
        style="--animation-delay: 0.2s;"
      />

      <h2
        class="text-h3 text-weight-bold q-my-none animated-item"
        style="--animation-delay: 0.4s; line-height: 1.2;"
      >
        {{ t('newsletter_title') }}
      </h2>

      <p
        class="text-h6 q-mt-md text-grey-8 animated-item"
        style="max-width: 650px; margin-left: auto; margin-right: auto; --animation-delay: 0.6s;"
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
          :bg-color="inputTextBgColor"
          class="newsletter-input"
          aria-label="Email para newsletter"
        >
          <template v-slot:append>
            <q-btn
              type="submit"
              :label="t('newsletter_cta')"
              icon-right="mdi-send"
              rounded
              unelevated
              color="secondary"
              text-color="white"
              class="newsletter-btn"
              :loading="newsletterSubmitting"
              aria-label="Inscrever na newsletter"
            />
          </template>
        </q-input>

        <div class="q-mt-md text-positive text-weight-medium success-message" v-if="submissionSuccess">
          <q-icon name="mdi-check-circle" />
          {{ t('newsletter_success') }}
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

const { t } = useI18n();
const $q = useQuasar();

const isVisible = ref(false);
const newsletterEmail = ref('');
const newsletterSubmitting = ref(false);
const submissionSuccess = ref(false);
 
const iconColor = computed(() => {
  return currentTheme.value === 'dark' ? "white" : "#1B5E20";
});

const inputTextBgColor = computed(() => {
  return currentTheme.value === 'dark' ? "#214183" : "white";
});

// const inputBgColor = computed(() => {
//   return currentTheme.value === 'dark' ? "white" : "#1B5E20";
// });

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
.bg-theme{
  background-color: var(--bg-primary);
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

.newsletter-form {
  max-width: 500px;
  margin: 1.5rem auto 0;
}

.newsletter-input {
  /* O bg-color="white" no template cuida da cor, aqui ajustamos a borda */
  border-radius: 28px; 
  :deep(.q-field__control) {
    border-color: rgba(0, 0, 0, 0.1);
  }
}

.newsletter-btn {
  transition: all 0.3s ease;
  
  /* Sombra dinâmica baseada na cor do botão */
  &:hover {
    transform: translateY(-2px);
    /* Usa a cor secundária com transparência para a sombra */
    box-shadow: 0 4px 10px change-color($secondary, $alpha: 0.4);
  }
}

.success-message {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>