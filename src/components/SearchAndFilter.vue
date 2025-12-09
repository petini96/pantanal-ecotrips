<template>
  <div class="search-filter-container q-pa-md">
    <div class="row items-center q-gutter-md">
      <q-input
        v-model="filters.searchText"
        outlined
        rounded
        placeholder="Buscar por nome do roteiro ou passeio..."
        class="col"
        dense
        @update:model-value="emitFilters"
      >
        <template v-slot:prepend>
          <q-icon name="mdi-magnify" />
        </template>
      </q-input>

      <q-btn
        flat
        round
        dense
        :icon="showAdvanced ? 'mdi-chevron-up' : 'mdi-tune-variant'"
        @click="showAdvanced = !showAdvanced"
        class="q-ml-sm"
      >
        <q-tooltip>{{ showAdvanced ? 'Ocultar filtros' : 'Filtros avançados' }}</q-tooltip>
      </q-btn>
    </div>

    <q-slide-transition>
      <div v-show="showAdvanced" class="advanced-filters q-mt-md">
        <div class="row q-col-gutter-md">

          <div class="col-12 col-md-6">
            <q-select
              v-model="filters.region"
              :options="regionOptions"
              option-label="name"
              label="Região"
              outlined
              dense
              clearable
              @update:model-value="emitFilters"
            />
          </div>

          <div class="col-12 col-md-6">
            <q-select
              v-model="filters.cities"
              :options="cityOptions"
              option-label="name"
              label="Cidades"
              multiple
              use-chips
              outlined
              dense
              @update:model-value="emitFilters"
            />
          </div>

          <div class="col-12 col-md-6">
            <q-select
              v-model="filters.categories"
              :options="categoryOptions"
              option-label="name"
              label="Categorias"
              multiple
              use-chips
              outlined
              dense
              @update:model-value="emitFilters"
            />
          </div>

          <div class="col-12 col-md-6">
            <q-select
              v-model="filters.recommendedFor"
              :options="audienceOptions"
              option-label="name"
              label="Recomendado Para"
              multiple
              use-chips
              outlined
              dense
              @update:model-value="emitFilters"
            />
          </div>

        </div>
        <div class="text-right q-mt-md">
           <q-btn label="Limpar Filtros" flat color="primary" @click="clearFilters" />
        </div>
      </div>
    </q-slide-transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { bonitoSerraBodoquenaPt, pantanalSulPt } from 'src/data/regions/Regions';
import { couplesPt } from 'src/data/audiences/Couples';
import { familiesPt } from 'src/data/audiences/Families';
import { groupsPt } from 'src/data/audiences/Groups';
import { seniorsPt } from 'src/data/audiences/Seniors';
import { adventurePt } from 'src/data/categories/Adventuree';
import { aquaticPt } from 'src/data/categories/Aquaticc';
import { cavesPt } from 'src/data/categories/Cavess';
import { ecotourismPt } from 'src/data/categories/Ecotourismm';

// --- Lógica do Componente ---

const emit = defineEmits(['filter-change']);
const showAdvanced = ref(false);

// Objeto reativo para guardar todos os filtros selecionados
const filters = reactive({
  searchText: '',
  region: null,
  cities: [],
  categories: [],
  recommendedFor: [],
  // Adicione aqui difficulty e environments quando tiver os dados
});

// --- Carregamento das Opções para os Selects ---

const regionOptions = ref([bonitoSerraBodoquenaPt, pantanalSulPt]);

const cityOptions = computed(() => {
  if (filters.region) {
    // @ts-expect-error: a gente sabe que region tem a propriedade cities
    return filters.region.cities;
  }
  // Se nenhuma região for selecionada, mostra todas as cidades
  return regionOptions.value.flatMap(r => r.cities);
});

const categoryOptions = ref([adventurePt, aquaticPt, cavesPt, ecotourismPt]);
const audienceOptions = ref([couplesPt, familiesPt, groupsPt, seniorsPt]);

// --- Funções ---

// Emite os filtros atuais para o componente pai sempre que algo mudar
const emitFilters = () => {
  emit('filter-change', filters);
};

// Limpa todos os filtros e emite a mudança
const clearFilters = () => {
  filters.searchText = '';
  filters.region = null;
  filters.cities = [];
  filters.categories = [];
  filters.recommendedFor = [];
  emitFilters();
};
</script>

<style scoped lang="scss">
.search-filter-container {
  background-color: #f5f8f7;
  border-radius: 16px;
  max-width: 900px;
  margin: 0 auto 32px auto; // Centraliza e adiciona espaço abaixo
  box-shadow: 0 4px 15px rgba(77, 182, 172, 0.1);
}
.advanced-filters {
  border-top: 1px solid #e0e0e0;
  padding-top: 16px;
}
</style>