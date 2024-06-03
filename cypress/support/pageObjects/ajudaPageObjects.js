import { ELEMENTS } from '../elements/ajudaPage.elements';

class AjudaPage {
    search(keyword) {
        cy.get(ELEMENTS.searchInput).type(`${keyword}{enter}`);
    }

    selectResult() {
        cy.xpath(ELEMENTS.searchResult).click();
    }

    verifyModalContent(expectedText) {
        cy.get(ELEMENTS.modalContent).should('be.visible');
        cy.get(ELEMENTS.modalContent).should('contain.text', expectedText);
    }
}

export default new AjudaPage();
