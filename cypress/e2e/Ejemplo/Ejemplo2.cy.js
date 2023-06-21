describe("Ejemplo", ()=>{
    before('',()=>{
        cy.log('Se ejecuta antes de toda la prueba')
    })

    beforeEach('',()=>{
        cy.log('Se ejecuta antes de cada caso')
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    afterEach('',()=>{
        cy.log('Se ejecuta despues de cada caso')
    })

    after('',()=>{
        cy.log('Se ejecuta despues de cada caso')
    })

    it('login1',()=>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('Seleccionar producto',()=>{
        cy.get('.inventory_list').find('.inventory_item_name').each(($el)=>{
            //cy.log($el.text())
            if ($el.text() == ('Sauce Labs Onesie')) {
                cy.wrap($el).click()
                
            }
        })
        
    })

    it('Seleccionar producto2',()=>{
        cy.get('.inventory_list').find('.inventory_item_name').contains('Sauce Labs Backpack').click()
    
    })
})