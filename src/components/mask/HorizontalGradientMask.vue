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

const scrollContainer = ref<HTMLElement | null>(null);
const scrollPosition = ref(0);
const maxScroll = ref(0);

const isDown = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const isDragging = ref(false);
const dragThreshold = 10;

const showLeftGradient = computed(
  () => $q.screen.gt.xs && scrollPosition.value > 10
);
const showRightGradient = computed(
  () => $q.screen.gt.xs && scrollPosition.value < maxScroll.value - 10
);

const mouseDownHandler = (e: MouseEvent) => {
  if (!$q.screen.gt.xs || !scrollContainer.value) return;
  isDown.value = true;
  isDragging.value = false;
  startX.value = e.pageX - scrollContainer.value.offsetLeft;
  scrollLeft.value = scrollContainer.value.scrollLeft;
};

const mouseLeaveHandler = () => {
  if (!$q.screen.gt.xs) return;
  isDown.value = false;
};

const mouseUpHandler = (e: MouseEvent) => {
  if ($q.screen.gt.xs) {
    isDown.value = false;
    if (!isDragging.value) {
      handleCardClick(e);
    }
  } else {
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
  
  if (Math.abs(walk) > dragThreshold) {
    isDragging.value = true;
  }
  
  if (isDragging.value) {
    scrollContainer.value.scrollLeft = scrollLeft.value - walk * 1.5;
  }
};

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

let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  if (scrollContainer.value) {
    
    resizeObserver = new ResizeObserver(() => {
      calculateMaxScroll();
      handleScroll();
    });

    resizeObserver.observe(scrollContainer.value);
    
    calculateMaxScroll();
    handleScroll();
  }
});

onBeforeUnmount(() => {
  
  if (scrollContainer.value && resizeObserver) {
    resizeObserver.unobserve(scrollContainer.value);
  }
});
</script>

<style scoped lang="scss">
  
.scroll-mask {
  position: relative;
}

.main-scroll-container {
  
  @media (min-width: $breakpoint-sm-min) {
    display: flex;
    overflow-x: scroll;
    cursor: grab;
    padding-left: 32px;
    
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    &.active-scroll {
      cursor: grabbing;
      scroll-behavior: auto;
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