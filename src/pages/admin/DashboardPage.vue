<template>
  <q-page padding>
    <div class="text-h4 q-mb-md">Dashboard</div>
    
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-4">
        <q-card class="my-card bg-secondary text-white">
          <q-card-section>
            <div class="text-h6">Vendas do Mês</div>
            <div class="text-h2">{{ stats.sales || 0 }}</div>
          </q-card-section>
        </q-card>
      </div>
      
      </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from 'boot/axios';

const stats = ref<any>({});

onMounted(async () => {
  try {
    // Esta requisição já vai com o Bearer Token automaticamente
    const response = await api.get('/api/admin/stats'); 
    stats.value = response.data;
  } catch (error) {
    console.error('Erro ao carregar dashboard', error);
  }
});
</script>