const homeElements = require('../elements/homeElements').ELEMENTS

class HomePage {
    acessarCategoria(category){    
        cy.get(`a[title=${ category }]`).last().click();
    }

    acessarLogin(){
        cy.get(homeElements.sign_in).click();
    }    
}

export default new HomePage();