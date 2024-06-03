import { ELEMENTS } from '../elements/telaInicial.elements.js';

class TelaInicial {
    visit() {
        cy.visit('https://site.getnet.com.br/');
    }

    validarLabel(texto) {
        cy.get(ELEMENTS.validateLabel)
            .should('be.visible')
            .and('contain.text', texto);
    }

    openAjuda() {
        cy.xpath(ELEMENTS.helpMenu).click();
        cy.xpath(ELEMENTS.helpCenter).click();
    }
}

export default new TelaInicial();
