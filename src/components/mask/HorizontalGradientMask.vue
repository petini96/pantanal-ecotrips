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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const emit = defineEmits(['item-click', 'scroll']);

const scrollContainer = ref<HTMLElement | null>(null);
const scrollPosition = ref(0);
const maxScroll = ref(0);

const isDown = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const isDragging = ref(false);
const dragThreshold = 10;

const showLeftGradient = computed(
  () => scrollPosition.value > 10
);
const showRightGradient = computed(
  () => scrollContainer.value ? scrollPosition.value < maxScroll.value - 10 : false
);

const mouseDownHandler = (e: MouseEvent) => {
  if (!scrollContainer.value) return;
  isDown.value = true;
  isDragging.value = false;
  startX.value = e.pageX - scrollContainer.value.offsetLeft;
  scrollLeft.value = scrollContainer.value.scrollLeft;
};

const mouseLeaveHandler = () => {
  isDown.value = false;
};

const mouseUpHandler = (e: MouseEvent) => {
  isDown.value = false;
  if (!isDragging.value) {
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
  if (!isDown.value || !scrollContainer.value) return;
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

const handleScroll = (e?: Event) => {
  if (scrollContainer.value) {
    scrollPosition.value = scrollContainer.value.scrollLeft;
    emit('scroll', e);
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

const scrollBy = (amount: number) => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: amount, behavior: 'smooth' });
  }
};

const scrollTo = (position: number) => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({ left: position, behavior: 'smooth' });
  }
};

defineExpose({
  scrollBy,
  scrollTo,
  scrollContainer
});
</script>

<style scoped lang="scss">
  
.scroll-mask {
  position: relative;
}

.main-scroll-container {
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

.scroll-mask::before,
.scroll-mask::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  
  @media (max-width: 599px) {
    width: 40px;
  }

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