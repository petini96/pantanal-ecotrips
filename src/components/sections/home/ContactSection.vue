<template>
  <div class="contact-section q-py-xl" :class="bgClass" v-intersection.once="onIntersection">
    <div class="container q-px-md" :class="{ 'is-visible': isVisible }">

      <div class="text-center q-mb-xl animated-item" style="--animation-delay: 0.1s;">
        <h1 class="text-h3 text-weight-bold q-mb-sm section-title">
          {{ t('contact_title', 'Entre em Contato') }}
        </h1>
        <p class="text-subtitle1 text-grey-8" style="max-width: 700px; margin: 0 auto;">
          {{ t('contact_subtitle', 'Estamos prontos para planejar sua aventura no Pantanal e Bonito.') }}
        </p>
      </div>

      <div class="row q-col-gutter-xl">

        <div class="col-12 col-md-5 animated-item" style="--animation-delay: 0.3s;">
          <h2 class="text-h5 text-weight-bold q-mb-md">{{ t('contact_info_title', 'Canais de Atendimento') }}</h2>

          <div class="contact-card q-pa-md q-mb-md rounded-borders" :class="cardClass">
            <address class="no-font-style">
              <div class="row items-center q-mb-md">
                <q-icon name="mdi-map-marker" size="md" color="secondary" class="q-mr-md" />
                <div>
                  <div class="text-weight-bold">Pantanal Eco Trips</div>
                  <div class="text-grey-8">Rua 15 de Novembro, 1045 - Vila América</div>
                  <div class="text-grey-8">Bonito - Mato Grosso do Sul, Brasil</div>
                  <div class="text-caption text-grey-6">CEP: 79290-000</div>
                </div>
              </div>

              <q-separator class="q-my-md" />

              <div class="row items-center q-mb-md">
                <q-icon name="mdi-whatsapp" size="md" color="positive" class="q-mr-md" />
                <div>
                  <div class="text-weight-bold">WhatsApp (24h)</div>
                  <a href="https://api.whatsapp.com/send?phone=5567991452985" target="_blank"
                    rel="noopener noreferrer" class="text-body1 text-secondary text-weight-bold hover-underline"
                    aria-label="Falar no WhatsApp">
                    +55 67 99145-2985
                  </a>
                  <div class="text-caption text-grey-8">
                    Falar com <strong>Ronaldo</strong><br>
                    <span class="text-italic">Atendimento em Inglês e Espanhol</span>
                  </div>
                </div>
              </div>

              <div class="row items-center">
                <q-icon name="mdi-email-outline" size="md" color="primary" class="q-mr-md" />
                <div>
                  <div class="text-weight-bold">E-mail</div>
                  <a href="mailto:contact@pantanalecotrips.com.br"
                    class="block text-body2 text-grey-9 hover-underline">
                    contact@pantanalecotrips.com.br
                  </a>
                  <a href="mailto:pantanaltrips2004@hotmail.com"
                    class="block text-body2 text-grey-9 hover-underline">
                    pantanaltrips2004@hotmail.com
                  </a>
                </div>
              </div>
            </address>
          </div>

          <div class="row q-gutter-md justify-start q-mt-lg">
            <q-btn round color="blue-9" icon="mdi-facebook" type="a"
              href="https://www.facebook.com/profile.php?id=100018026087778" target="_blank" aria-label="Facebook" />
            <q-btn round color="purple-6" icon="mdi-instagram" type="a"
              href="https://www.instagram.com/pantanalecotrips2/" target="_blank" aria-label="Instagram" />
            <q-btn round color="green-6" icon="mdi-whatsapp" type="a"
              href="https://api.whatsapp.com/send?phone=5567991452985" target="_blank" aria-label="WhatsApp Direto" />
          </div>
        </div>

        <div class="col-12 col-md-7 animated-item" style="--animation-delay: 0.5s;">

          <q-card class="contact-action-card no-shadow" :class="cardClass">
            <q-tabs v-model="tab" dense class="text-grey" active-color="secondary" indicator-color="secondary"
              align="justify" narrow-indicator>
              <q-tab name="form" :label="t('contact_tab_msg', 'Enviar Mensagem')" icon="mdi-message-text-outline" />
              <q-tab name="map" :label="t('contact_tab_loc', 'Localização')" icon="mdi-map" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated :class="bgClass">
              <q-tab-panel name="form" class="q-pa-lg">
                <q-form @submit.prevent="onSubmit" class="q-gutter-y-lg">
                  
                  <div class="row q-col-gutter-lg">
                    <div class="col-12 col-sm-6">
                      <q-input 
                        v-model="form.name" 
                        :label="t('form_name', 'Seu Nome')"
                        color="secondary"
                        class="text-body1"
                        :rules="[val => !!val || t('req_field', 'Campo obrigatório')]" 
                      />
                    </div>
                    <div class="col-12 col-sm-6">
                      <q-input 
                        v-model="form.phone"
                        :label="t('form_phone', 'Telefone / WhatsApp')" 
                        mask="(##) #####-####" 
                        color="secondary"
                        class="text-body1"
                      />
                    </div>
                  </div>

                  <q-input 
                    v-model="form.email" 
                    :label="t('form_email', 'Seu E-mail')" 
                    type="email"
                    color="secondary"
                    class="text-body1"
                    :rules="[val => !!val && /.+@.+\..+/.test(val) || t('invalid_email', 'Email inválido')]" 
                  />

                  <q-input 
                    v-model="form.message"
                    :label="t('form_message', 'Como podemos ajudar? (Dúvidas, Reservas...)')" 
                    type="textarea"
                    rows="4" 
                    color="secondary"
                    class="text-body1"
                    :rules="[val => !!val || t('req_field', 'Campo obrigatório')]" 
                  />

                  <div class="row justify-end q-mt-md">
                    <q-btn 
                      :label="t('form_send', 'Enviar Mensagem')" 
                      type="submit" 
                      color="secondary"
                      icon-right="mdi-send" 
                      rounded 
                      unelevated 
                      size="md"
                      :loading="loading" 
                      class="q-px-xl" 
                    />
                  </div>
                </q-form>
              </q-tab-panel>
              <q-tab-panel name="map" class="q-pa-none">
                <div class="map-container">|
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.521816414726!2d-56.48842272551696!3d-21.13162217684791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947c5f19859086e7%3A0xfacfd010f6e41478!2spantanal%20ecotrips!5e0!3m2!1spt-BR!2sbr!4v1764638993104!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="350"
                    style="border:0;" 
                    allowfullscreen 
                    loading="lazy"
                    title="Mapa de Localização Pantanal Eco Trips em Bonito MS">
                  </iframe>
                </div>
                <div class="q-pa-sm text-center">
                  <q-btn flat color="secondary" icon="mdi-google-maps" label="Abrir no Google Maps" type="a"
                    href="https://goo.gl/maps/SeuLinkDoGoogleMapsAqui" target="_blank" />
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useQuasar, useMeta } from 'quasar';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { computed, ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

// Configurações e Stores
const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);
const { t } = useI18n();
const $q = useQuasar();

// Estado Local
const isVisible = ref(false);
const tab = ref('form');
const loading = ref(false);
const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
});

// Cores Computadas (Theme Aware)
const bgClass = computed(() => currentTheme.value === 'dark' ? 'bg-dark text-white' : 'bg-grey-1 text-dark');
const cardClass = computed(() => currentTheme.value === 'dark' ? 'bg-dark-page border-dark' : 'bg-white border-light shadow-1');

// Intersection Observer
const onIntersection = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) {
    isVisible.value = true;
  }
};

// Envio do Formulário
const onSubmit = async () => {
  loading.value = true;
  try {
    // Simulação de envio API
    await new Promise(resolve => setTimeout(resolve, 2000));

    $q.notify({
      color: 'positive',
      icon: 'mdi-check',
      message: t('msg_sent_success', 'Mensagem enviada com sucesso! Responderemos em breve.'),
      position: 'top'
    });

    // Limpar form
    form.name = '';
    form.email = '';
    form.phone = '';
    form.message = '';
  } catch (e) {
    console.error(e)
    $q.notify({
      color: 'negative',
      icon: 'mdi-alert',
      message: t('msg_error', 'Erro ao enviar. Tente pelo WhatsApp.')
    });
  } finally {
    loading.value = false;
  }
};

// --- SEO STRATEGY (Schema.org) ---
const metaData = {
  script: {
    ldJson: {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Pantanal Eco Trips",
        "image": "https://pantanalecotrips.com.br/logo.png",
        "url": "https://pantanalecotrips.com.br",
        "telephone": "+5567991452985",
        "email": "contact@pantanalecotrips.com.br",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua 15 de Novembro, 1045 - Vila América",
          "addressLocality": "Bonito",
          "addressRegion": "MS",
          "postalCode": "79290-000",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -21.125,
          "longitude": -56.483
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=100018026087778",
          "https://www.instagram.com/pantanalecotrips2/"
        ]
      })
    }
  }
};

useMeta(metaData);
</script>

<style scoped lang="scss">
.bg-dark-page { background-color: #1d1d1d; }
.border-light { border: 1px solid #e0e0e0; }
.border-dark { border: 1px solid #333; }

.contact-section {
  min-height: 80vh;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  position: relative;
  display: inline-block;
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: var(--q-secondary);
    margin: 8px auto 0;
    border-radius: 2px;
  }
}

.hover-underline {
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: var(--q-secondary);
  }
}

.map-container {
  overflow: hidden;
  border-radius: 4px;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animated-item { opacity: 0; }
.container.is-visible .animated-item {
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: var(--animation-delay, 0s);
}

@media (max-width: 599px) {
  .text-h3 { font-size: 2rem; }
  .contact-section { padding-top: 2rem; }
}
</style>