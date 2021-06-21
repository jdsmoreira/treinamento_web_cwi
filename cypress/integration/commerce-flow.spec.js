/// <reference types="cypress" />

// import homePage from '../support/pages/homePage'
// import categoryPage from '../support/pages/categoryPage'
// import loginPage from '../support/pages/loginPage'
// import myAccountPage from '../support/pages/myAccountPage'

import {     
    homePage,
    categoryPage,
    loginPage,
    myAccountPage,
    createAccountPage
} from '../support/pages/index.js'

describe('Fluxo do ecommerce', () => {
    categoryPage.CATEGORIES.forEach(category => {
        it.skip(`acessar categoria ${category}`, () => {
            homePage.acessarCategoria(category);
            categoryPage.validarAcessoACategoria(category);
        });
    });
        
    it.skip('realizar login', () =>{
        homePage.acessarLogin();
        loginPage.preencherLogin();
        myAccountPage.validarLoginRealizadoComSucesso();
        
    });

    it.skip('Cadastro email válido', () => {
        homePage.acessarLogin();
        loginPage.preencherEmailCradastro('jdwather123@gmail.com');
        loginPage.clicarNoBotaoCriarConta();
        createAccountPage.validarAcessoAoCadastroDeContas();
    });

    it.skip('Cadastro email inválido', () => {
        homePage.acessarLogin();
        loginPage.preencherEmailCradastro('jdwather123@gmail');
        loginPage.clicarNoBotaoCriarConta();
        loginPage.validarAlerta('Invalid email address.');
    });

    it('Cadastro com sucesso', () => {
        homePage.acessarLogin();
        loginPage.preencherEmailCradastro('jdwather123@gmail.com');
        loginPage.clicarNoBotaoCriarConta();
        createAccountPage.validarAcessoAoCadastroDeContas();
        createAccountPage.preencherFormulario();
        createAccountPage.clicarNoBotaoRegistrar();
        myAccountPage.validarLoginRealizadoComSucesso();
    });
    
});