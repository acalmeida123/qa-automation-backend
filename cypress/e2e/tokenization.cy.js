/// <reference types="Cypress"/>

const tokenRequest = require('../support/pojos/tokenRequest');

describe('Tokenização API', () => {
  before(() => {
    cy.getAuthToken();
  });

  it('Deve realizar a tokenização com sucesso', () => {
    cy.get('@authToken').then((authToken) => {
      cy.request({
        method: 'POST',
        url: 'https://api-homologacao.getnet.com.br/v1/cards/tokenization',
        headers: {
          // Authorization: `Bearer ${Cypress.env('authToken')}`
          Authorization: `Bearer ${authToken}`
        },
        body: tokenRequest
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('number_token');
      });
    });
  });

  it('Deve falhar com campos obrigatórios ausentes', () => {
    cy.request({
      method: 'POST',
      url: 'https://api-homologacao.getnet.com.br/v1/cards/tokenization',
      headers: {
        Authorization: `Bearer ${Cypress.env('authToken')}`
      },
      failOnStatusCode: false,
      body: {
        card_number: '',
        customer_id: '12345',
        expiration_month: '12',
        expiration_year: '24',
        security_code: '123'
      }
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error');
    });
  });

  it('Deve validar o contrato da resposta', () => {
    cy.request({
      method: 'POST',
      url: 'https://api-homologacao.getnet.com.br/v1/cards/tokenization',
      headers: {
        Authorization: `Bearer ${Cypress.env('authToken')}`
      },
      body: tokenRequest
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('number_token');
      expect(response.body).to.have.property('card_id');
    });
  });
});