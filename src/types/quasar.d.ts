// src/types/quasar.d.ts

// Importa os tipos do Quasar para que possamos usá-los.
// Usamos 'import type' porque QuasarStatic é usado apenas para anotação de tipo,
// o que é uma boa prática para otimização e clareza.
import type { QuasarStatic } from 'quasar'

// Este é o "módulo mágico" do Vue que nos permite adicionar propriedades globais
declare module '@vue/runtime-core' {
  // Define a interface para as propriedades customizadas dos componentes
  interface ComponentCustomProperties {
    // Adiciona a propriedade '$q' e diz ao TypeScript que ela
    // terá o tipo 'QuasarStatic', que contém todas as
    // funcionalidades do Quasar (dark, notify, platform, etc.).
    $q: QuasarStatic
  }
}

