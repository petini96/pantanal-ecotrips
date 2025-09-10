describe('Google Analytics Health Check', () => {
  it('deve enviar um hit de page_view para o Google Analytics', () => {
    // 1. Intercepte a requisição POST para o endpoint do Google Analytics.
    //    Damos um apelido ('googleAnalytics') para poder esperá-la depois.
    cy.intercept('POST', '**/google-analytics.com/g/collect?**').as('googleAnalytics');

    // 2. Visite a página que deve disparar o evento.
    cy.visit('/');

    // 3. Espere a requisição que interceptamos acontecer.
    //    O Cypress aguardará o tempo limite padrão para que esta requisição seja feita.
    cy.wait('@googleAnalytics', { timeout: 10000 }).then((interception) => {
      // 4. Verifique se os dados enviados na requisição estão corretos.
      //    O corpo da requisição é uma string de parâmetros de URL.
      const requestBody = interception.request.body;

      // Verificamos o nome do evento (en=event name)
      expect(requestBody).to.include('en=page_view');

      // Verificamos o caminho da página (dp=document path)
      // O valor deve ser a URL codificada, ex: '/minha-pagina' vira '%2Fminha-pagina'
      expect(requestBody).to.include('dp=%2F'); 
    });
  });
});