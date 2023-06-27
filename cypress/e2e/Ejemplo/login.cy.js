import {login} from "../../support/POM/loginPO"
//const {login} = require("../../support/POM/loginPO")

describe("Login", ()=>{
    beforeEach("Ingresar al link de prueba", ()=>{
        cy.visit("/")
    })

    it("Login exitoso", ()=>{
        login.enterUsername("standard_user")
        login.enterPassword("secret_sauce")
        login.submitLogin()

        cy.url().should("include", "/inventory.html")
    })

    it("Login fallido dejando campos user vacio", ()=>{
        login.enterPassword("secret_sauce")
        login.submitLogin()

        cy.get("[data-test='error']")
        .should("be.visible")
        .should("have.text", "Epic sadface: Username is required")
    })
})






