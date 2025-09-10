// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your e2e test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';
import '@cypress/code-coverage/support';

// Este é um ótimo lugar para colocar configurações globais.

// O código abaixo escuta por erros não tratados que vêm da sua aplicação.
Cypress.on('uncaught:exception', (err) => {
  // Verificamos se a mensagem de erro é a que esperamos do Typebot.
  if (err.message.includes('<typebot-standard> element not found')) {
    // Retornar `false` aqui impede que o Cypress
    // falhe o teste por causa deste erro específico.
    // Assim, o teste pode continuar e verificar o resto da página.
    return false;
  }
  
  // Se for qualquer outro erro, deixamos o Cypress falhar o teste
  // como faria normalmente.
  return true;
});
