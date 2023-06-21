import 'cypress-file-upload'
describe('ejemplo', ()=>{
    it('ingresar a la pagina de prueba', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
        cy.get('.app_logo').should('have.text', 'Swag Labs')
        //cy.go('back')
        cy.wait(3000)
        cy.reload()
    })

    it('buscar por ID', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')

    })

    it('buscar por class y atributo', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('.input_error[data-test="username"]').should('be.visible').type('standard_user')
        cy.get('.input_error[data-test="password"]').should('be.visible').type('secret_sauce')

    })

    it('buscar por posición', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('input').first().type('standard_user')
        cy.get('input').eq(1).type('secret_sauce')
        cy.get('input').last().click()
    })

})




