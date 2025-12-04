<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from 'stores/auth-store';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const email = ref('');
const password = ref('');
const loading = ref(false);

const authStore = useAuthStore();
const router = useRouter();
const $q = useQuasar();

async function onSubmit() {
  loading.value = true;
  try {
    await authStore.login({ email: email.value, password: password.value });
    $q.notify({ type: 'positive', message: 'Login realizado com sucesso!' });
    
    // MUDANÇA: Adicionado void
    void router.push({ name: 'dashboard' }); 
  } catch { 
    // MUDANÇA: Removido (error) já que não estávamos usando
    $q.notify({ type: 'negative', message: 'Falha ao entrar. Verifique suas credenciais.' });
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card style="width: 400px; max-width: 90vw;">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Acesso Restrito</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input filled v-model="email" label="E-mail" type="email" />
          <q-input filled v-model="password" label="Senha" type="password" />
          <div class="row justify-end">
            <q-btn label="Entrar" type="submit" color="primary" :loading="loading" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>