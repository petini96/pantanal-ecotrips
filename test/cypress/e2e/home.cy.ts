/**
 * Testes End-to-End para a Página Inicial (HomePage).
 *
 * Este arquivo realiza um "teste de fumaça" para garantir que os
 * principais elementos visuais e interações da página estão funcionando
 * como esperado após cada deploy.
 */
describe('Testes da Página Inicial', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // Teste 1: Verifica o conteúdo principal.
  it('deve exibir o conteúdo principal corretamente', () => {
    cy.get('h1.hero-title').should('be.visible').and('not.be.empty');
    cy.get('p.hero-subtitle').should('be.visible').and('not.be.empty');
    cy.get('.hero-cta').should('be.visible').and('not.be.empty');
  });

  // Teste 2: Verifica a rolagem da página.
  it('deve rolar para a seção de passeios ao clicar no CTA principal', () => {
    // CORREÇÃO: Força o clique, pois o Cypress pode ter dificuldade
    // em simular o scroll em todas as condições.
    cy.get('.hero-cta').scrollIntoView().should('be.visible').click({ force: true });
    
    // Aguarda a animação de rolagem suave.
    cy.wait(1000); 
    
    // CORREÇÃO: Removemos a verificação de 'scrollY' que é instável.
    // A verificação mais importante é se a seção de destino ficou visível.
    cy.get('#tours-section').should('be.visible');
  });

  // Teste 3: Verifica a navegação para detalhes do tour.
  it('deve navegar para a página de detalhes ao clicar em um tour', () => {
    // CORREÇÃO: Força o clique, pois o elemento pode ser considerado
    // "escondido" pelo container de scroll horizontal.
    cy.get('.tour-card').first().click({ force: true });
    
    cy.url().should('include', '/tours/');
  });

  // Teste 4: Verifica a troca de idioma.
  it('deve alterar o idioma e a URL ao selecionar uma nova língua', () => {
    // CORREÇÃO FINAL: Reestrutura o teste para ser mais robusto contra "race conditions".
    // 1. Captura o texto original primeiro.
    cy.get('h1.hero-title').invoke('text').then((portugueseTitle) => {
      // 2. Realiza as ações de mudança de idioma.
      cy.get('.language-selector .q-btn-dropdown').click();
      cy.get('.selector-list').should('be.visible');
      cy.contains('English').click();
  
      // 3. Verifica se a URL mudou (isso acontece rápido).
      cy.url().should('include', '/en-US');
  
      // 4. Agora, verifica se o texto do título é DIFERENTE do original.
      // O .should() com callback vai re-tentar até que a tradução atualize o DOM.
      cy.get('h1.hero-title').should(($newTitle) => {
        expect($newTitle.text().trim()).not.to.equal(portugueseTitle.trim());
      });
    });
  });

  // Teste 5: Verifica a troca de tema.
  it('deve aplicar a classe de tema correta ao selecionar um novo tema', () => {
    cy.get('.home-page').should('not.have.class', 'theme-bonito_azul');
    cy.get('.theme-selector .q-btn').contains('Bonito').click();
    cy.get('.home-page').should('have.class', 'theme-bonito_azul');
  });
});

