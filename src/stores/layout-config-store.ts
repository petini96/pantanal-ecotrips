import { defineStore } from 'pinia';
import { Cookies, Dark } from 'quasar';

type ThemeName = 'light' | 'dark';

export const useLayoutConfigStore = defineStore('layoutConfig', {
  state: () => ({
    // No SSR, o estado inicial deve ser 'light' (safe). 
    // A hidratação correta virá via setSsrTheme (no servidor) ou hydrateTheme (no cliente).
    theme: 'light' as ThemeName,
  }),

  actions: {
    // --- USADO NO SERVIDOR (SSR) ---
    // Chamado pelo seu HomeLayout.vue ou preFetch
    setSsrTheme(themeName: ThemeName) {
      // Apenas atualiza o estado interno da Store para que o HTML renderizado venha correto.
      // No servidor, não chamamos Dark.set() da mesma forma que no cliente.
      if (['light', 'dark'].includes(themeName)) {
        this.theme = themeName;
      }
    },

    // --- USADO NO CLIENTE (BOOT) ---
    // Chamado pelo seu boot/theme.ts
    hydrateTheme() {
      // Verifica se estamos no cliente para evitar erros
      if (typeof window !== 'undefined') {
        // 1. Tenta recuperar do Cookie no cliente (caso o SSR tenha falhado ou seja SPA navigation)
        const cookieTheme = Cookies.get('pantanal-theme');
        
        // Validação simples para evitar o erro do ESLint (unnecessary type assertion)
        const validTheme: ThemeName = (cookieTheme === 'dark' || cookieTheme === 'light') 
          ? cookieTheme 
          : 'light';

        this.theme = validTheme;
        
        // 2. Sincroniza o plugin Dark do Quasar com o estado da store
        Dark.set(this.theme === 'dark');
      }
    },

    // --- USADO PELO USUÁRIO (TOGGLE) ---
    toggleTheme() {
      const newTheme = this.theme === 'dark' ? 'light' : 'dark';
      this.setTheme(newTheme);
    },

    setTheme(themeName: ThemeName) {
      this.theme = themeName;
      
      // Atualiza visual
      Dark.set(themeName === 'dark');

      // Salva Cookie (funciona tanto no cliente quanto no SSR se configurado, 
      // mas geralmente essa ação é disparada por clique no cliente)
      if (typeof window !== 'undefined') {
        Cookies.set('pantanal-theme', themeName, { path: '/', expires: 365 });
      }
    },
  },
});