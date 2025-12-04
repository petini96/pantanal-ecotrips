import { boot } from 'quasar/wrappers';
import axios, { type AxiosInstance } from 'axios';
import { Cookies } from 'quasar';
import { useAuthStore } from 'stores/auth-store';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const api = axios.create({ baseURL: process.env.API_URL || 'http://localhost:8000' });

// ADIÇÃO IMPORTANTE: Adicione 'ssrContext' nos argumentos
export default boot(({ app, router, store, ssrContext }) => {
  const authStore = useAuthStore(store);

  // --- LÓGICA DE HIDRATAÇÃO CORRIGIDA (SSR + CLIENT) ---
  
  // No servidor, precisamos extrair os cookies do contexto da requisição.
  // No cliente, usamos o objeto Cookies padrão.
  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies;

  const token = cookies.get('auth_token');
  
  if (token) {
    authStore.setToken(token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  // ----------------------------------------------------

  api.interceptors.request.use((config) => {
    if (authStore.token) {
      config.headers.Authorization = `Bearer ${authStore.token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        void authStore.logout();
        // O void e o catch abaixo evitam erros de lint (floating promises)
        void router.push('/auth/login').catch(() => {});
      }
      return Promise.reject(error as Error);
    }
  );

  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };