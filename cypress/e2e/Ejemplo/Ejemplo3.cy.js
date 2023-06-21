import 'cypress-file-upload'

describe('carga de archivo', ()=>{

    it('carga de archivo',()=>{
        cy.visit('https://testingqarvn.com.es/upload-files/')
        const ruta = 'imagenes/img.png'
        cy.get('#wsf-1-field-94').attachFile(ruta)
    })

    it('seleccion de dato', ()=>{
        cy.visit('https://testingqarvn.com.es/upload-files/')
        cy.get('[name="field_87[]"]').select('Mac').should('have.value', 'Mac')
    })

    it.only('metodo invoke borrando el artibuto', ()=>{
        cy.visit('https://www.mercadolibre.com.ar/')
        cy.get('#cb1-edit').type('Toyota hilux{enter}')
        cy.get('.ui-search-results').find('.ui-search-link').invoke('removeAttr', 'target')
        cy.get('.ui-search-results').find('.ui-search-item__group').contains('Toyota Hilux 2.8 Cd Srv 177cv 4x4 At').click()
    })
})