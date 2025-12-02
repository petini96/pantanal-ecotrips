<template>
  <section 
    class="testimonials-section q-py-xl" 
    :class="bgClass" 
    v-intersection.once="onIntersection"
    aria-label="Depoimentos de Clientes"
  >
    <div class="container q-px-md" :class="{ 'is-visible': isVisible }">
      
      <div class="row items-end justify-between q-mb-xl animated-item" style="--animation-delay: 0.1s;">
        <div class="col-12 col-md-8">
          <div class="row items-center q-mb-sm">
            <q-icon name="format_quote" size="2.5rem" color="secondary" class="q-mr-sm opacity-50" />
            <span class="text-overline text-secondary text-weight-bold tracking-wide">FEEDBACK</span>
          </div>
          <h2 class="text-h3 text-weight-bold q-my-none section-title">
            {{ t('testimonials_title', 'A experiência de quem já foi') }}
          </h2>
          <p class="text-subtitle1 text-grey-8 q-mt-sm" style="max-width: 600px;">
            {{ t('testimonials_subtitle', 'Veja o que nossos viajantes dizem sobre as aventuras no Pantanal e Bonito.') }}
          </p>
        </div>

        <div class="col-12 col-md-4 row justify-end items-end q-mt-md-none q-mt-sm gt-sm">
          <div class="q-gutter-x-sm">
            <q-btn 
              round 
              outline 
              color="secondary" 
              icon="mdi-arrow-left" 
              @click="scroll('left')" 
              aria-label="Ver depoimento anterior"
            />
            <q-btn 
              round 
              unelevated 
              color="secondary" 
              text-color="white" 
              icon="mdi-arrow-right" 
              @click="scroll('right')" 
              aria-label="Ver próximo depoimento"
            />
          </div>
        </div>
      </div>

      <div 
        ref="scrollContainer"
        class="reviews-scroller row no-wrap q-col-gutter-lg animated-item" 
        style="--animation-delay: 0.3s;"
      >
        <div 
          v-for="(review, index) in reviews" 
          :key="index" 
          class="review-item col-12 col-sm-6 col-md-4"
        >
          <article class="review-card full-height column no-shadow q-pa-lg" :class="cardClass">
            
            <div class="row items-center q-mb-md">
              <q-avatar size="50px" class="q-mr-md shadow-2" :color="avatarColor(index)" text-color="white">
                <span class="text-h6 text-weight-bold">{{ getInitials(review.author) }}</span>
              </q-avatar>
              <div>
                <h3 class="text-subtitle1 text-weight-bold q-my-none lh-tight">{{ review.author }}</h3>
                <div class="text-caption text-grey-7 row items-center">
                  <q-icon name="mdi-map-marker" size="12px" class="q-mr-xs" />
                  {{ review.location }}
                </div>
              </div>
            </div>

            <div class="row q-mb-md" aria-label="Avaliação de 5 estrelas">
              <q-icon v-for="n in 5" :key="n" name="mdi-star" color="amber-4" size="xs" />
            </div>

            <blockquote class="col-grow text-body1 review-text q-my-none" :class="textClass">
              "{{ review.text }}"
            </blockquote>

            <div class="q-mt-md text-caption text-grey-6 text-right">
               Viajou em {{ review.date || '2024' }}
            </div>
          </article>
        </div>
      </div>

      <div class="row justify-center q-mt-lg lt-md animated-item">
        <div class="q-gutter-x-md">
           <q-btn flat round color="secondary" icon="mdi-arrow-left" @click="scroll('left')" />
           <q-btn flat round color="secondary" icon="mdi-arrow-right" @click="scroll('right')" />
        </div>
      </div>

      <div class="text-center q-mt-xl animated-item" style="--animation-delay: 0.6s;">
        <div class="inline-block relative-position">
          <q-btn
            rounded
            unelevated
            size="lg"
            color="white"
            text-color="secondary"
            class="shadow-2"
            label="Ver avaliações no Google"
            icon="img:https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            href="https://www.google.com/search?q=pantanal+eco+trips+reviews" 
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div class="text-caption text-grey-6 q-mt-sm">
          Classificação média de <strong>5.0/5.0</strong> baseada em clientes reais
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMeta } from 'quasar';
import { useLayoutConfigStore } from 'src/stores/layout-config-store';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

// Configurações e Stores
const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);
const { t } = useI18n();

const isVisible = ref(false);
const scrollContainer = ref<HTMLElement | null>(null);

// Dados (Mantidos os originais)
const reviews = [
  {
    author: 'Gloria Bastos',
    location: 'Portugal',
    date: '2016',
    text: 'Ronaldo, obrigada pela disponibilidade e profissionalismo com que pudemos contar durante a nossa viagem a Bonito e Pantanal. O pessoal todo adorou! Muito sucesso para o seu trabalho.',
    rating: 5
  },
  {
    author: 'Tony Bordin',
    location: 'Campinas, SP',
    date: '2016',
    text: 'Obrigado por organizar de maneira excelente minha viagem para o Pantanal e Chapada dos Guimarães. Tudo como planejado, sucesso!',
    rating: 5
  },
  {
    author: 'Carla Guttner',
    location: 'Argentina',
    date: '2016',
    text: 'Excelente servicio! Atención personalizada desde el primer momento... Hoteles súper cómodos, guías muy educados. Servicio 100% recomendable.',
    rating: 5
  },
  {
    author: 'Martine Renwart',
    location: 'Bélgica', 
    date: '2017',
    text: 'A viagem foi uma experienca maravilhosa, tudo foi muito bem organizado. Valeu tudo e o Ronaldo que foi um organizador perfeito!',
    rating: 5
  },
  {
    author: 'Thiago Comanduci',
    location: 'Belo Horizonte, MG',
    date: '2018',
    text: 'Ronaldo só tenho a agradecer pelo atendimento, dedicação e profissionalismo! Foi tudo perfeito e com certeza recomendo a todos!',
    rating: 5
  },
    {
    author: 'Família Silva',
    location: 'São Paulo, SP',
    date: '2023',
    text: 'Experiência única no Pantanal. Ver as onças de perto foi indescritível. A organização da Pantanal Eco Trips foi impecável.',
    rating: 5
  }
];

// Estilos Computados
const bgClass = computed(() => currentTheme.value === 'dark' ? 'bg-dark' : 'bg-grey-1');
const cardClass = computed(() => currentTheme.value === 'dark' ? 'bg-dark-page border-dark' : 'bg-white shadow-1');
const textClass = computed(() => currentTheme.value === 'dark' ? 'text-grey-4' : 'text-grey-8');

// Lógica de Scroll
const scroll = (direction: 'left' | 'right') => {
  if (!scrollContainer.value) return;
  
  // Calcula a largura de um card para rolar exatamente 1 item
  const cardWidth = scrollContainer.value.firstElementChild?.clientWidth || 300;
  const gap = 24; // q-col-gutter-lg é aprox 24px
  const scrollAmount = cardWidth + gap;

  scrollContainer.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
};

// Intersection Observer para animação de entrada
const onIntersection = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) {
    isVisible.value = true;
  }
};

// Helpers Visuais
const getInitials = (name: string) => {
  return name.split(' ').map((n) => n[0]).join('').substring(0, 2).toUpperCase();
};

const avatarColor = (index: number) => {
  const colors = ['secondary', 'orange-9', 'blue-8', 'teal-7', 'deep-purple-6'];
  return colors[index % colors.length];
};

// --- SEO AVANÇADO (Schema.org) ---
const structuredReviews = reviews.map(review => ({
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": review.author
  },
  "datePublished": `${review.date}-01-01`, // Data aproximada formato ISO
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "reviewBody": review.text,
  "itemReviewed": {
    "@type": "TravelAgency",
    "name": "Pantanal Eco Trips",
    "image": "https://pantanalecotrips.com.br/pantanal_ecotrips_logo.png",
    "telephone": "+5567991452985",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bonito",
      "addressRegion": "MS",
      "addressCountry": "BR"
    }
  }
}));

const metaData = {
  script: {
    ldJson: {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Pantanal Eco Trips",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": reviews.length.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": structuredReviews
      })
    }
  }
};

useMeta(metaData);
</script>

<style scoped lang="scss">
// Definições de Tema
.bg-dark-page { background-color: #1d1d1d; }
.border-dark { border: 1px solid #333; }

.container {
  max-width: 1240px;
  margin: 0 auto;
}

// Scroller Horizontal (O segredo do layout)
.reviews-scroller {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 2rem; // Espaço para sombra não cortar
  -webkit-overflow-scrolling: touch;
  
  // Esconder barra de rolagem mas manter funcionalidade
  scrollbar-width: none; // Firefox
  &::-webkit-scrollbar {
    display: none; // Chrome/Safari
  }
}

.review-item {
  scroll-snap-align: start;
  flex: 0 0 auto; // Impede encolhimento
  // Ajuste fino para mobile e desktop no CSS grid do Quasar
}

// Estilo do Card
.review-card {
  border-radius: 20px;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  // No Light mode, borda sutil
  &:not(.bg-dark-page) {
    border-color: rgba(0,0,0,0.05);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.08) !important;
    border-color: var(--q-secondary);
  }
}

.review-text {
  line-height: 1.6;
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 6; // Limita linhas se for texto gigante
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-style: italic;
}

.lh-tight {
  line-height: 1.2;
}

.opacity-50 {
  opacity: 0.5;
}

// Animação de Entrada
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animated-item { opacity: 0; }
.container.is-visible .animated-item {
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: var(--animation-delay, 0s);
}
</style>