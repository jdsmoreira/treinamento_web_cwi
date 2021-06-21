const createAccountElements = require('../elements/createAccountElement').ELEMENTS

class CreateAccountPage{

    validarAcessoAoCadastroDeContas(){
        cy.get(createAccountElements.create_account_form)
        .should('exist');
    }

    preencherFormulario(){
        cy.get(createAccountElements.gender_Mr).check();
        cy.get(createAccountElements.first_name).type("Jeferson");
        cy.get(createAccountElements.last_name).type("Moreira");
        cy.get(createAccountElements.password).type("pwd123");
        cy.get(createAccountElements.day).select("2");
        cy.get(createAccountElements.month).select("April");
        cy.get(createAccountElements.year).select("1993");
        //cy.get(createAccountElements.first_name_address).type("Jeferson");
        //cy.get(createAccountElements.last_name_address).type("Moreira");
        cy.get(createAccountElements.address1).type("Rua Vermelha");
        cy.get(createAccountElements.city).type("Cascavel");
        cy.get(createAccountElements.country).select("United States");
        cy.get(createAccountElements.state).select("North Carolina");
        cy.get(createAccountElements.postcode).type("12345");        
        cy.get(createAccountElements.phone_mobile).type("45999225544");
        cy.get(createAccountElements.alias_address)
        .clear()
        .type("Endereço de casa");
    }

    clicarNoBotaoRegistrar(){
        cy.get(createAccountElements.submitAccount).click();
    }
}

export default new CreateAccountPage();