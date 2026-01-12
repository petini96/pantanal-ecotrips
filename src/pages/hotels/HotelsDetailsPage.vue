<template>
  <q-page class="bg-grey-1">

    <div v-if="store.loading && !hotel" class="flex flex-center window-height">
      <q-spinner-dots color="positive" size="4em" />
    </div>

    <div v-else-if="!store.loading && !hotel" class="flex flex-center column window-height">
      <q-icon name="search_off" size="4em" color="grey-5" />
      <h3 class="text-grey-7">Hotel não encontrado</h3>
      <q-btn to="/hotels" label="Ver todos os hotéis" color="positive" outline class="q-mt-md" />
    </div>

    <div v-else class="relative-position animate-fade">

      <div class="relative-position">
        <q-img :src="hotel?.heroImage" :alt="hotel?.name" height="450px" class="header-image">
          <div class="absolute-full flex flex-center column bg-black-transparent">
            <h1 class="text-h3 text-weight-bold text-white q-mb-sm text-center q-px-md">
              {{ hotel?.name }}
            </h1>
            <p class="text-h6 text-white text-center q-px-md" style="max-width: 800px">
              {{ hotel?.shortDescription }}
            </p>
          </div>
        </q-img>
      </div>

      <div class="container q-pa-md q-mt-md" style="max-width: 1200px; margin: 0 auto;">

        <div class="q-mb-lg">
          <q-breadcrumbs active-color="positive" class="text-grey-7">
            <q-breadcrumbs-el label="Home" icon="home" :to="`/${currentLang}`" />
            <q-breadcrumbs-el label="Hotéis" :to="`/${currentLang}/hotels`" />
            <q-breadcrumbs-el :label="hotel?.name" />
          </q-breadcrumbs>
        </div>

        <div class="row q-col-gutter-xl">

          <div class="col-12 col-md-8">

            <section class="q-mb-xl">
              <div class="flex items-center q-mb-md">
                <q-icon name="apartment" color="positive" size="2em" class="q-mr-sm" />
                <h2 class="text-h5 text-weight-bold text-grey-9 q-my-none">Sobre a Hospedagem</h2>
              </div>
              <q-separator class="q-mb-md bg-positive" style="height: 3px; width: 50px;" />

              <div class="text-body1 text-grey-8 spaced-text text-justify">
                <p v-for="(paragraph, index) in hotel?.description" :key="index">
                  {{ paragraph }}
                </p>
              </div>

              <div class="row q-col-gutter-sm q-mt-md" v-if="hotel?.accommodations?.galleryImage?.length">
                <div v-for="(img, idx) in hotel?.accommodations.galleryImage.slice(0, 4)" :key="idx"
                  class="col-6 col-sm-3">
                  <q-img :src="img.src" :ratio="1" class="rounded-borders shadow-2 cursor-pointer hover-scale">
                    <q-tooltip>{{ img.alt }}</q-tooltip>
                  </q-img>
                </div>
              </div>
            </section>

            <section class="q-mb-xl relative-position">
              <div class="section-marker-line"></div>

              <div class="flex items-center q-mb-md">
                <q-btn round color="positive" icon="bed" size="sm" class="q-mr-md z-top" unelevated />
                <h3 class="text-h5 text-weight-bold text-grey-9 q-my-none">Acomodações</h3>
              </div>

              <div class="q-pl-xl">
                <div class="bg-white q-pa-md rounded-borders shadow-1 border-left-positive">
                  <h4 class="text-h6 text-positive q-mt-none q-mb-sm">
                    {{ hotel?.accommodations.name }}
                  </h4>
                  <ul>
                    <li v-for="(desc, i) in hotel?.accommodations.description" :key="i"
                      class="text-body1 text-grey-8 q-mb-xs">
                      {{ desc }}
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div class="row q-col-gutter-lg q-mb-xl">

              <div class="col-12 col-sm-6" v-if="hotel?.commonAreas?.length">
                <div class="flex items-center q-mb-sm">
                  <q-icon name="deck" color="positive" size="1.8em" class="q-mr-sm" />
                  <span class="text-h6 text-weight-bold">Áreas Comuns</span>
                </div>
                <q-list bordered separator class="bg-white rounded-borders">
                  <q-item v-for="area in hotel?.commonAreas" :key="area" class="q-py-sm">
                    <q-item-section avatar style="min-width: 40px;">
                      <q-icon name="check_circle" color="positive" size="sm" />
                    </q-item-section>
                    <q-item-section>{{ area }}</q-item-section>
                  </q-item>
                </q-list>
              </div>

              <div class="col-12 col-sm-6" v-if="hotel?.gastronomy?.length">
                <div class="flex items-center q-mb-sm">
                  <q-icon name="restaurant" color="positive" size="1.8em" class="q-mr-sm" />
                  <span class="text-h6 text-weight-bold">Gastronomia</span>
                </div>
                <q-list bordered separator class="bg-white rounded-borders">
                  <q-item v-for="food in hotel?.gastronomy" :key="food" class="q-py-sm">
                    <q-item-section avatar style="min-width: 40px;">
                      <q-icon name="check_circle" color="positive" size="sm" />
                    </q-item-section>
                    <q-item-section>{{ food }}</q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>

            <section class="q-mb-xl">
              <div class="flex items-center q-mb-md">
                <q-icon name="place" color="positive" size="2em" class="q-mr-sm" />
                <h2 class="text-h5 text-weight-bold text-grey-9 q-my-none">Localização</h2>
              </div>

              <p class="text-body1 q-mb-sm">
                <strong>Endereço:</strong> {{ hotel?.location.address }}
              </p>

              <div class="rounded-borders overflow-hidden shadow-1" style="height: 350px; background: #eee;">

                <iframe v-if="mapUrl" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0"
                  marginwidth="0" :src="mapUrl" style="border: 0;"></iframe>

                <div v-else class="full-height flex flex-center text-grey-7">
                  <div class="text-center">
                    <q-spinner-grid color="positive" size="3em" />
                    <div class="q-mt-sm">Carregando mapa...</div>
                  </div>
                </div>

              </div>
              <div class="text-caption q-mt-xs text-grey-6 text-right">
                <a :href="`https://www.openstreetmap.org/?mlat=${hotel?.location?.lat}&mlon=${hotel?.location?.lng}#map=15/${hotel?.location?.lat}/${hotel?.location?.lng}`"
                  target="_blank" class="text-positive" style="text-decoration: none;">
                  Ver mapa ampliado <q-icon name="open_in_new" />
                </a>
              </div>
            </section>

          </div>

          <div class="col-12 col-md-4">
            <div class="sticky-sidebar">
              <q-card class="shadow-3">
                <q-card-section class="bg-positive text-white">
                  <div class="text-h6">Faça sua Reserva</div>
                  <div class="text-subtitle2">Garanta sua estadia no Pantanal</div>
                </q-card-section>

                <q-card-section class="q-pt-md">
                  <div class="text-caption text-grey">Consulte condições para</div>
                  <div class="text-h5 text-weight-bold text-positive q-my-xs">
                    {{ hotel?.name }}
                  </div>

                  <q-separator class="q-my-md" />

                  <div class="q-gutter-y-sm">
                    <div class="row items-center">
                      <q-icon name="wifi" class="q-mr-sm text-positive" /> Wi-fi nas áreas comuns
                    </div>
                    <div class="row items-center">
                      <q-icon name="local_parking" class="q-mr-sm text-positive" /> Estacionamento Gratuito
                    </div>
                  </div>
                </q-card-section>

                <q-card-actions vertical class="q-pa-md">
                  <q-btn color="positive" class="full-width q-py-sm text-weight-bold shadow-1"
                    label="Solicitar Orçamento" icon="whatsapp" type="a" target="_blank"
                    href="https://wa.me/5567999999999" />
                </q-card-actions>
              </q-card>

              <q-card class="q-mt-md shadow-1 bg-green-1">
                <q-card-section>
                  <div class="text-subtitle2 text-weight-bold flex items-center text-green-9">
                    <q-icon name="eco" color="green-9" class="q-mr-sm" /> Turismo Sustentável
                  </div>
                  <p class="text-caption q-mb-none text-green-8 q-mt-xs">
                    Apoiamos hospedagens que preservam a natureza local.
                  </p>
                </q-card-section>
              </q-card>
            </div>
          </div>

        </div>
      </div>

      <q-page-sticky position="bottom" :offset="[0, 18]" class="lt-md z-top">
        <q-btn fab-mini label="Reservar Agora" icon="whatsapp" color="positive"
          class="q-px-xl text-weight-bold shadow-5" type="a" href="#" />
      </q-page-sticky>

    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useHotelStore } from 'src/stores/useHotelStore';
import { onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({
  name: 'HotelsDetailsPage'
});

const route = useRoute();
const store = useHotelStore();

const currentLang = computed(() => (route.params.lang as string) || 'pt');
const slug = computed(() => route.params.slug as string);

const hotel = computed(() => store.getHotelBySlug(slug.value));

const initData = async () => {
  await store.fetchHotels(currentLang.value);
};

onMounted(() => {
  void initData();
});

const mapUrl = computed(() => {
  if (!hotel.value?.location) return '';

  const lat = Number(hotel.value.location.lat);
  const lng = Number(hotel.value.location.lng);
  
  const delta = 0.005;

  // Cria a caixa de visualização (bbox)
  const bbox = `${lng - delta},${lat - delta},${lng + delta},${lat + delta}`;

  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
});

// Se o usuário trocar de idioma na URL, recarregamos
watch(currentLang, () => {
  store.clearHotels(); // Opcional: limpa para forçar reload ou remove para cache
  void initData();
});
</script>

<style scoped lang="scss">
.bg-black-transparent {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%);
}

.header-image {
  // Garante que a imagem fique fixa no topo bonito
  border-bottom: 4px solid var(--q-positive);
}

.sticky-sidebar {
  position: sticky;
  top: 100px; // Altura do seu navbar + margem
  transition: top 0.3s;
}

.hover-scale {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
    z-index: 2;
  }
}

.spaced-text p {
  margin-bottom: 16px;
  line-height: 1.6;
}

// Elemento decorativo vertical (estilo timeline)
.section-marker-line {
  position: absolute;
  left: 11px;
  top: 40px;
  bottom: 0;
  width: 2px;
  background-color: #e0e0e0;
  border-left: 2px dashed var(--q-positive);
  z-index: 0;
}

.border-left-positive {
  border-left: 5px solid var(--q-positive);
}

.z-top {
  z-index: 10;
}

// Animação suave de entrada
.animate-fade {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>