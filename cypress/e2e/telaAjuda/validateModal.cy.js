import telaInicial from '../../support/pageObjects/telaInicial.pageObjects';
import ajudaPage from '../../support/pageObjects/ajudaPageObjects';

describe('Acessar a página da Getnet e verificar funcionalidade de busca', () => {
    beforeEach(() => {
        telaInicial.visit();
    });

    it('Deve verificar a funcionalidade de busca na Central de Ajuda', () => {
        // "Central de Ajuda"
        telaInicial.openAjuda();

        // “Boleto”
        ajudaPage.search('Boleto');

        // “Eu concluí a negociação, de que forma receberei meu boleto?”
        ajudaPage.selectResult();

        // Verificar modal
        ajudaPage.verifyModalContent('o texto explicativo a dúvida selecionada');
    });
});
