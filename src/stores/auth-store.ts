// src/stores/auth-store.ts
import { defineStore } from 'pinia';
import { api } from 'boot/axios';
import { Cookies } from 'quasar';

interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null, // MUDANÇA: Inicia null. O boot/axios.ts que vai popular isso.
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    setToken(token: string) {
      this.token = token;
    },

    setUser(user: User) {
      this.user = user;
    },

    async login(credentials: Record<string, string>) {
      try {
        const response = await api.post('/api/login', credentials);
        const token = response.data.access_token || response.data.token;
        console.log('Token recebido:', token); // Debug para conferir no console

        if (!token) throw new Error('Token não encontrado na resposta');

        const user = response.data.user;

        this.token = token;
        this.user = user;

        // Configura cookie e header
        Cookies.set('auth_token', token, { expires: 1, path: '/' });
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return true;
      } catch (error) {
        console.error('Erro no login', error);
        throw error;
      }
    },

    async fetchUser() {
      if (!this.token) return;
      try {
        const response = await api.get('/api/user');
        this.user = response.data;
      } catch (error) { // Correção do Lint: remover variável não usada se não for logar
        console.error('Erro ao buscar usuário', error);
        void this.logout();
      }
    },

    async logout() {
      try {
        // 1. Tenta avisar a API que estamos saindo
        // (Isso revoga o token no banco de dados do Laravel, se configurado)
        await api.post('/api/logout');
      } catch (error) {
        // Se der erro (ex: API offline), ignoramos e deslogamos localmente mesmo assim
        console.warn('Erro ao notificar logout para API:', error);
      } finally {
        // 2. Limpeza Local (SEMPRE executa)
        this.token = null;
        this.user = null;
        
        // Remove o Cookie (Importante: use o mesmo path definido no login)
        Cookies.remove('auth_token', { path: '/' });
        
        // Remove o Header padrão do Axios para evitar requisições futuras com token velho
        delete api.defaults.headers.common['Authorization'];
      }
    }
  }
});