const myAccountElements = require('../elements/myAccountElements').ELEMENTS

class MyAccountPage{
    validarLoginRealizadoComSucesso(){
        cy.get(myAccountElements.account).should('have.text', 'Jeferson Moreira');
    }
}

export default new MyAccountPage()