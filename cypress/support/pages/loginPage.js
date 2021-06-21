const loginElements = require('../elements/loginElements').ELEMENTS;

class LoginPage {
    preencherLogin(){
        cy.get(loginElements.email).type('jdwather@gmail.com');
        cy.get(loginElements.password).type('pwd123');
        cy.get(loginElements.sign_in).click();
    }

    preencherEmailCradastro(email){
        cy.get(loginElements.email_create).type(email);
    }

    clicarNoBotaoCriarConta(){
        cy.get(loginElements.create_account).click();
    }

    validarAlerta(msg){
        cy.get(loginElements.alert).should('have.text',`${msg}`);
    }
}

export default new LoginPage();