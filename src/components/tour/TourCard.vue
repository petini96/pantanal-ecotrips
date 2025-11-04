<template>
  <q-card
    class="tour-card cursor-pointer column full-height"
    flat
    bordered
    @click="goToDetails"
  >
    <!-- 
      SEÇÃO DA IMAGEM
      - Relação 4/3 (menos 'gorda')
      - Chip de categoria sobreposto
    -->
    <q-img
      :src="tour.mainImage"
      :ratio="4 / 3"
      fit="cover"
      class="tour-card__image"
    >
      <!-- Chip da Categoria (Sobreposto) -->
      <q-chip
        v-if="firstCategory"
        dense
        color="primary"
        text-color="white"
        class="absolute-top-left q-ma-sm"
        style="z-index: 1"
      >
        {{ firstCategory }}
      </q-chip>

      <template #loading>
        <q-skeleton class="full-width full-height" />
      </template>
      <template #error>
        <div class="absolute-full flex flex-center bg-grey-3 text-grey-6">
          <q-icon name="o_image_not_supported" size="lg" />
          <span class="q-ml-sm text-caption">Sem foto</span>
        </div>
      </template>
    </q-img>

    <!-- SEÇÃO TÍTULO -->
    <q-card-section class="q-pb-sm">
      <div class="text-h6 text-weight-bold ellipsis-2-lines" :title="tour.name">
        {{ tour.name }}
      </div>
    </q-card-section>

    <!-- SEÇÃO DESCRIÇÃO (Resumida) -->
    <q-card-section class="q-pt-none q-pb-sm">
      <div class="text-body2 text-grey-8 ellipsis-3-lines">
        {{ tour.description }}
      </div>
    </q-card-section>

    <!-- 
      SEÇÃO DE INFORMAÇÕES (Local, Duração, Dificuldade)
      Organizadas com ícones e cores
    -->
    <q-card-section class="q-pt-none">
      <!-- Localização + Distância -->
      <div class="text-caption text-grey-7 row items-center no-wrap q-mb-xs">
        <q-icon name="o_location_on" size="sm" class="q-mr-xs flex-shrink-0" />
        <span class="ellipsis">{{ tour.city.name }} ({{ tour.distanceFromCity }})</span>
      </div>
      <!-- Duração -->
      <div class="text-caption text-grey-7 row items-center no-wrap q-mb-xs">
        <q-icon name="o_schedule" size="sm" class="q-mr-xs flex-shrink-0" />
        <span>Duração: {{ tour.durationInHours }}h</span>
      </div>
      <!-- Dificuldade (com cor) -->
      <div class="text-caption row items-center no-wrap">
        <q-icon :name="difficultyInfo.icon" size="sm" :color="difficultyInfo.color" class="q-mr-xs flex-shrink-0" />
        <span :class="`text-weight-medium text-${difficultyInfo.color}`">
          {{ difficultyInfo.label }}
        </span>
      </div>
    </q-card-section>
    
    <!-- q-space empurra as ações para o rodapé, alinhando os botões -->
    <q-space /> 
    
    <q-separator />

    <!-- AÇÕES (Botão) -->
    <q-card-actions align="right" class="q-pa-sm">
       <q-btn
         flat
         color="primary"
         label="Ver detalhes"
         icon-right="o_arrow_forward"
         no-caps
       />
    </q-card-actions>

  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { type Tour } from 'src/model/Tour';
import { DifficultyLevel } from 'src/model/Enums'; // Caminho baseado no seu arquivo
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  tour: Tour;
}>();

const router = useRouter();
const { locale, t } = useI18n(); // Usado para o helper de dificuldade

// --- NAVEGAÇÃO ---
function goToDetails() {
  void router.push({
    name: 'singleTourDetails',
    params: { lang: locale.value, slug: props.tour.slug },
  });
}

// --- HELPERS DE DIFICULDADE (com i18n e cores) ---
const difficultyLabels = {
  [DifficultyLevel.EASY]: t('difficulty.easy', 'Fácil'),
  [DifficultyLevel.MODERATE]: t('difficulty.moderate', 'Moderado'),
  [DifficultyLevel.MEDIUM]: t('difficulty.medium', 'Médio'),
  [DifficultyLevel.HARD]: t('difficulty.hard', 'Difícil'),
};

const difficultyInfo = computed(() => {
  const label = difficultyLabels[props.tour.difficulty] || props.tour.difficulty;
  
  switch (props.tour.difficulty) {
    case DifficultyLevel.EASY:
      return { label, color: 'green-6', icon: 'o_bar_chart' };
    case DifficultyLevel.MODERATE:
      return { label, color: 'orange-6', icon: 'o_bar_chart' };
    case DifficultyLevel.MEDIUM:
      return { label, color: 'deep-orange-6', icon: 'o_bar_chart' };
    case DifficultyLevel.HARD:
      return { label, color: 'red-6', icon: 'o_bar_chart' };
    default:
      return { label, color: 'grey-7', icon: 'o_help_outline' };
  }
});

// --- HELPER DE CATEGORIA ---
const firstCategory = computed(() => {
  // Pega o 'name' do primeiro item do array de categorias
  return props.tour.categories?.[0]?.name || null;
});

</script>

<style lang="scss" scoped>
.tour-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  
  // Garante que o card ocupe todo o espaço vertical no grid
  height: 100%; 

  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-6; // Sombra mais forte no hover
  }

  // Garante que o título tenha altura de 2 linhas
  .ellipsis-2-lines {
    min-height: 2.9em; // (line-height * 2) - ajuste se necessário
    line-height: 1.45em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  
  // Garante que a descrição tenha altura de 3 linhas
  .ellipsis-3-lines {
    min-height: 4.5em; // (line-height * 3)
    line-height: 1.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  
  // Garante que ícones não encolham ou quebrem o layout
  .flex-shrink-0 {
    flex-shrink: 0;
  }
}
</style>

