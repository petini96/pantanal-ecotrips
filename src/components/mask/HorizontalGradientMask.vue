<template>
  <div
    class="scroll-mask"
    :class="{
      'show-left-gradient': showLeftGradient,
      'show-right-gradient': showRightGradient,
    }"
  >
    <div
      ref="scrollContainer"
      class="main-scroll-container"
      :class="{ 'cursor-grab active-scroll': isDown }"
      @mousedown="mouseDownHandler"
      @mouseleave="mouseLeaveHandler"
      @mouseup="mouseUpHandler"
      @mousemove="mouseMoveHandler"
      @scroll.passive="handleScroll"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const $q = useQuasar();
const emit = defineEmits(['item-click']);

// --- Refs para o container e controle de gradientes ---
const scrollContainer = ref<HTMLElement | null>(null);
const scrollPosition = ref(0);
const maxScroll = ref(0);

// --- Refs para a lógica de arrastar (drag-to-scroll) ---
const isDown = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const isDragging = ref(false);
const dragThreshold = 10; // Distância mínima para considerar um arrasto

// --- Lógica dos Gradientes ---
// $q.screen é seguro no SSR, ele usa um valor padrão no servidor.
const showLeftGradient = computed(
  () => $q.screen.gt.xs && scrollPosition.value > 10 // Adiciona um pequeno buffer
);
const showRightGradient = computed(
  () => $q.screen.gt.xs && scrollPosition.value < maxScroll.value - 10
);

// --- Funções de Eventos do Mouse (Drag-to-Scroll) ---
const mouseDownHandler = (e: MouseEvent) => {
  if (!$q.screen.gt.xs || !scrollContainer.value) return;
  isDown.value = true;
  isDragging.value = false; // Reseta o estado de arrasto a cada clique
  startX.value = e.pageX - scrollContainer.value.offsetLeft;
  scrollLeft.value = scrollContainer.value.scrollLeft;
};

const mouseLeaveHandler = () => {
  if (!$q.screen.gt.xs) return;
  isDown.value = false;
};

const mouseUpHandler = (e: MouseEvent) => {
  if ($q.screen.gt.xs) {
    // Lógica de desktop (arrastar)
    isDown.value = false;
    if (!isDragging.value) {
      handleCardClick(e);
    }
  } else {
    // No mobile, sempre trata como clique
    handleCardClick(e);
  }
};

const handleCardClick = (e: MouseEvent) => {
  const cardWrapper = (e.target as HTMLElement).closest('[data-slug]');
  if (cardWrapper instanceof HTMLElement) {
    const packageSlug = cardWrapper.dataset.slug;
    if (packageSlug) {
      emit('item-click', packageSlug);
    }
  }
};
const mouseMoveHandler = (e: MouseEvent) => {
  if (!isDown.value || !$q.screen.gt.xs || !scrollContainer.value) return;
  e.preventDefault();

  const x = e.pageX - scrollContainer.value.offsetLeft;
  const walk = x - startX.value;

  // Se o mouse se moveu mais que o threshold, ativa o modo de arrasto
  if (Math.abs(walk) > dragThreshold) {
    isDragging.value = true;
  }

  // Só move o scroll se estiver no modo de arrasto
  if (isDragging.value) {
    scrollContainer.value.scrollLeft = scrollLeft.value - walk * 1.5; // Multiplicador para acelerar o scroll
  }
};

// --- Funções de Scroll e Redimensionamento ---
const calculateMaxScroll = () => {
  if (scrollContainer.value) {
    maxScroll.value =
      scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth;
  }
};

const handleScroll = () => {
  if (scrollContainer.value) {
    scrollPosition.value = scrollContainer.value.scrollLeft;
  }
};

// ==========================================================
// A CORREÇÃO ESTÁ AQUI
// ==========================================================

// 1. Declaramos a variável do observer como nula.
//    Não inicializamos ela aqui, pois isso quebraria o SSR.
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  if (scrollContainer.value) {
    
    // 2. Criamos a instância do ResizeObserver DENTRO do onMounted.
    //    Este código só roda no navegador.
    resizeObserver = new ResizeObserver(() => {
      calculateMaxScroll();
      handleScroll(); // Atualiza a posição ao redimensionar
    });

    resizeObserver.observe(scrollContainer.value);
    
    // Calcula os valores iniciais
    calculateMaxScroll();
    handleScroll();
  }
});

onBeforeUnmount(() => {
  // 3. Verificamos se o observador existe antes de desconectar
  if (scrollContainer.value && resizeObserver) {
    resizeObserver.unobserve(scrollContainer.value);
  }
});
</script>

<style scoped lang="scss">
/* O CSS permanece o mesmo, pois já estava bem estruturado */
.scroll-mask {
  position: relative;
}

.main-scroll-container {
  /* No desktop, habilitamos o scroll horizontal e o cursor */
  @media (min-width: $breakpoint-sm-min) {
    display: flex;
    overflow-x: scroll;
    cursor: grab;
    padding-left: 32px; /* Espaço inicial para o primeiro card */

    /* Esconde a barra de rolagem visualmente */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, etc. */
    }

    &.active-scroll {
      cursor: grabbing;
      scroll-behavior: auto; /* Garante que o scroll por JS seja suave */
    }
  }
}

.scroll-mask::before,
.scroll-mask::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.scroll-mask::before {
  left: 0;
  background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
}

.scroll-mask::after {
  right: 0;
  background: linear-gradient(to left, white, rgba(255, 255, 255, 0));
}

.scroll-mask.show-left-gradient::before {
  opacity: 1;
}

.scroll-mask.show-right-gradient::after {
  opacity: 1;
}
</style>