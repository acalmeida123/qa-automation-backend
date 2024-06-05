
Cypress.Commands.add('getAuthToken', () => {
  cy.request({
    method: 'POST',
    url: 'https://api-homologacao.getnet.com.br/auth/oauth/v2/token',
    form: true,
    body: {
      scope: 'oob',
      grant_type: 'client_credentials',
      client_id: Cypress.env('client_id'),
      client_secret: Cypress.env('client_secret')
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    // Cypress.env('authToken', response.body.access_token);
    cy.wrap(response.body.access_token).as('authToken');

  });
});



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite''
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//Cypress.Commands.add('vcngerados', () => {
  //cy.visit('https://vcn.dev.bee2pay.com/vcns');
  //cy.get('seu-elemento').should('contain', 'Vcn gerados');
//});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })