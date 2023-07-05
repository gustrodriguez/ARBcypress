import {login} from "../../support/POM/loginPO"
//const {login} = require("../../support/POM/loginPO")

const {user, pass} = Cypress.env("credenciales")

//const data = require("../../fixtures/dataDriven/data.json")
const msg = require("../../fixtures/DOM/loginmsg.json")

let data
describe("Login", ()=>{
    beforeEach("Ingresar al link de prueba", ()=>{
        cy.visit("/")
        cy.fixture("dataDriven/data").then((d)=>{
            data = d
        })
    })

    it("Login exitoso", ()=>{
        login.enterUsername(user)
        login.enterPassword(pass)
        login.submitLogin()

        cy.url().should("include", "/inventory.html")
    })

    it("Login fallido dejando campos user vacio", ()=>{
        login.enterPassword(data.data.password)
        login.submitLogin()

        cy.get(msg.error)
        .should("be.visible")
        .should("have.text", msg.loginError.usernameRequire)
    })

    it("Login blocked user", ()=>{
        login.enterUsername(data.invalidDate.lockedUser)
        login.enterPassword(data.data.password)
        login.submitLogin()

        cy.get("[data-test='error']")
        .should("be.visible")
        .should("have.text", msg.loginError.msgPassBlocked)
    })

    it("Login problem_user", ()=>{
        login.enterUsername(data.invalidDate.problemUser)
        login.enterPassword(data.data.password)
        login.submitLogin()
    })

})