const categoryElements = require('../elements/categoryElements').ELEMENTS

class CategoryPage {
    CATEGORIES = [
        'T-shirts',
        'Dresses',
        'Women'
    ];
    
    validarAcessoACategoria(category){
        cy.get(categoryElements.breadcrumb).should('contain.text', `${category}`);
    }
}

export default new CategoryPage();