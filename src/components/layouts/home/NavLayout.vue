<template>
  <nav 
    :class="['main-nav', { 'nav-overlay': isHomePage }]"
    :style="navbarStyle"
    aria-label="Navegação Principal"
  >
    
    <div class="nav-section start">
      <LogoLink />
    </div>

    <div class="nav-section center gt-sm">
      <template v-for="link in navLinks" :key="link.label">
        
        <q-btn-dropdown
          v-if="link.children"
          flat
          rounded
          no-caps
          class="nav-link-btn"
          :label="link.label"
          content-class="bg-white text-primary" 
        >
          <q-list>
            <q-item 
              v-for="child in link.children" 
              :key="child.label" 
              clickable 
              v-close-popup 
              @click="handleNavClick($event, child)"
            >
              <q-item-section>
                <q-item-label>{{ child.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn
          v-else
          flat
          rounded
          no-caps
          class="nav-link-btn"
          :href="getLinkUrl(link)" 
          :target="link.external ? '_blank' : '_self'"
          @click="handleNavClick($event, link)"
          :aria-label="link.ariaLabel || link.label"
        >
          {{ link.label }}
        </q-btn>

      </template>

      <q-btn flat dense round
        href="https://www.tripadvisor.com.br/Attraction_Review-g303349-d33955815-Reviews-Pantanal_Ecotrips-Bonito_State_of_Mato_Grosso_do_Sul.html"
        target="_blank" 
        rel="noopener noreferrer" 
        class="q-ml-md"
      >
        <img src="/tripadvisor-logo.svg" alt="TripAdvisor" style="height: 32px; width: auto;">
      </q-btn>
    </div>

    <div class="nav-section end">
      <PageControls />
      
      <q-btn flat round dense icon="menu" color="white" class="lt-md q-ml-sm" aria-label="Abrir Menu">
        <q-menu fit anchor="bottom right" self="top right" class="mobile-menu-dropdown">
          <q-list style="min-width: 200px">
            
            <template v-for="link in navLinks" :key="link.label">
              
              <q-expansion-item
                v-if="link.children"
                expand-separator
                :label="link.label"
                group="nav-group"
              >
                <q-item 
                  v-for="child in link.children"
                  :key="child.label"
                  clickable 
                  v-close-popup
                  @click="handleNavClick($event, child)"
                  class="q-pl-lg"
                >
                   <q-item-section>{{ child.label }}</q-item-section>
                </q-item>
              </q-expansion-item>

              <q-item 
                v-else
                clickable 
                v-close-popup
                :href="getLinkUrl(link)"
                :target="link.external ? '_blank' : '_self'"
                @click="handleNavClick($event, link)"
              >
                <q-item-section>{{ link.label }}</q-item-section>
                <q-item-section avatar v-if="link.external">
                  <q-icon name="open_in_new" size="xs" />
                </q-item-section>
              </q-item>

            </template>

          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { scroll } from 'quasar';
import PageControls from 'src/components/controls/PageControls.vue';
import LogoLink from 'src/components/logo/LogoLink.vue';
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useLayoutConfigStore } from 'src/stores/layout-config-store'; 

// Ajuste os caminhos das suas imagens
import SimpleBannerBackgroundLight from 'src/assets/images/boca_onca_remake.webp'; 
import SimpleBannerBackgroundDark from 'src/assets/images/boca_onca_remake_dark.webp';

const { t } = useI18n(); 
const { getScrollTarget, setVerticalScrollPosition } = scroll;
const router = useRouter();
const route = useRoute();
const layoutConfigStore = useLayoutConfigStore();
const { theme: currentTheme } = storeToRefs(layoutConfigStore);

const isHomePage = computed(() => route.name === 'home');

const currentBannerBg = computed(() => {
  return currentTheme.value === 'dark' ? SimpleBannerBackgroundDark : SimpleBannerBackgroundLight;
});

// --- CORREÇÃO AQUI ---
const navbarStyle = computed(() => {
  // Se for Home, não faz nada via inline (deixa o CSS .nav-overlay cuidar)
  if (isHomePage.value) {
    return {}; 
  }

  // Se for Interna, aplica o GRADIENTE + IMAGEM manualmente
  return {
    // A ordem é crucial: O gradiente vem PRIMEIRO (por cima), a imagem DEPOIS (por baixo)
    backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%), 
      url(${currentBannerBg.value})
    `,
    
    // Isso corrige o zoom: força a imagem a ter a largura da janela, igual ao banner da home
    backgroundSize: '100vw auto', 
    
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)' // Sombra extra para destacar
  };
});

interface NavLink {
  label: string;
  url?: string;
  routeName?: string;
  external?: boolean;
  ariaLabel?: string;
  children?: NavLink[];
  params?: Record<string, string>;
}

const navLinks = computed<NavLink[]>(() => [
  { 
    label: t('destinations'), 
    children: [
      { label: 'Bonito', routeName: 'destinations', params: { slug: 'bonito' } },
      { label: 'Pantanal Norte', routeName: 'destinations', params: { slug: 'pantanal-norte' } },
      { label: 'Pantanal Sul', routeName: 'destinations', params: { slug: 'pantanal-sul' } },
      { label: 'Amazônia', routeName: 'destinations', params: { slug: 'amazonia' } }
    ]
  },
  { label: t("packages"), url: '#packages-section' },
  { label: t("gallery"), url: '#mosaic-gallery-section' },
  { label: t("questions"), url: '#faq-section' },
  { label: t("contact"), url: '#contato' }
]);

const currentLang = computed(() => (route.params.lang as string) || 'pt');

const getLinkUrl = (link: NavLink): string => {
  if (link.external && link.url) return link.url;
  
  if (link.routeName) {
    try {
      const resolved = router.resolve({ 
        name: link.routeName, 
        params: { lang: currentLang.value, ...link.params } 
      });
      return resolved.href;
    } catch (e) {
      console.error(e)
      return '#';
    }
  }
  return link.url || '#';
};

const handleNavClick = async (ev: Event, link: NavLink) => {
  if (link.children) return; 
  if (link.external) return;

  ev.preventDefault();
  
  if (link.routeName) {
    const isSameRoute = route.name === link.routeName;
    const sameParams = !link.params || JSON.stringify(route.params) === JSON.stringify({ ...route.params, ...link.params });
    if (isSameRoute && sameParams) {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      await router.push({ name: link.routeName, params: { lang: currentLang.value, ...link.params } });
    }
    return;
  }
  
  if (link.url?.startsWith('#')) {
    if (route.name !== 'home') {
        await router.push({ name: 'home', params: { lang: currentLang.value } });
        setTimeout(() => scrollToId(link.url!), 300);
    } else {
        scrollToId(link.url);
    }
  }
};

const scrollToId = (id: string) => {
  const targetId = id.substring(1);
  const el = document.getElementById(targetId);
  if (el) {
    const target = getScrollTarget(el);
    const offset = el.offsetTop - 100; 
    const duration = 500;
    setVerticalScrollPosition(target, offset, duration);
  }
};
</script>

<style scoped lang="scss">
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  z-index: 2000;
  
  position: absolute;
  top: 0;
  left: 0;

  /* Alterado para 'background' para animar tudo junto se possível, 
     embora animar gradiente+imagem seja limitado pelos navegadores */
  transition: background-color 0.3s ease-in-out; 
}
.nav-overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
}
.nav-section {
  display: flex;
  align-items: center;
  &.start { flex: 0 0 auto; }
  &.center { flex: 1; justify-content: center; gap: 16px; }
  &.end { flex: 0 0 auto; justify-content: flex-end; }
}

.nav-link-btn {
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 0.8;
    background: rgba(255,255,255,0.1);
  }
}

@media (max-width: 599px) {
  .main-nav { padding: 10px 15px; }
}
</style>