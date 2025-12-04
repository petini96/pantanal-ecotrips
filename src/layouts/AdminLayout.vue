<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Painel Administrativo</q-toolbar-title>
        <div class="q-gutter-sm">
           <span class="text-subtitle2">Olá, {{ user?.name }}</span>
           <q-btn flat round dense icon="logout" @click="handleLogout" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item clickable to="/admin" exact>
          <q-item-section avatar><q-icon name="dashboard" /></q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>
        </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMeta, useQuasar } from 'quasar';
import { useAuthStore } from 'stores/auth-store';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

// --- SEGURANÇA DE SEO ---
// Isso adiciona <meta name="robots" content="noindex, nofollow"> no head
useMeta({
  title: 'Admin',
  meta: {
    robots: { name: 'robots', content: 'noindex, nofollow' }
  }
});
const loggingOut = ref(false);
const leftDrawerOpen = ref(false);
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const router = useRouter(); // Instância do router
const $q = useQuasar();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

async function handleLogout() {
  console.log('Iniciando logout...'); // 1. Debug para ver se clicou
  
  try {
    loggingOut.value = true;
    $q.loading.show({ message: 'Saindo...' });

    // Tenta avisar a API
    await authStore.logout(); 
    console.log('Logout na store concluído'); // 2. Debug sucesso store

  } catch (error) {
    // Se der erro (ex: internet caiu), apenas loga e continua
    console.error('Erro ao processar logout:', error);
  } finally {
    // ESTE BLOCO SEMPRE EXECUTA
    $q.loading.hide();
    loggingOut.value = false;
    
    console.log('Redirecionando...'); // 3. Debug redirecionamento
    
    // Força a ida para o login
    void router.replace({ name: 'login' }).catch(err => {
      console.error('Erro de rota:', err);
      // Fallback: se o nome da rota estiver errado, tenta pelo caminho
      void router.replace('/auth/login'); 
    });
  }
}
 
</script>