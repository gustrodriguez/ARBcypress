
class loginPO{
    // constructor / elementos
    get = {
        usernameInput: ()=> cy.get("[data-test='username']"),
        passwordInput: ()=> cy.get("[data-test='password']"),
        submitButton: ()=> cy.get("[data-test='login-button']")
    }
    //funciones
    enterUsername(type){
        this.get.usernameInput().type(type)
    }

    enterPassword(type){
        this.get.passwordInput().type(type)
    }

    submitLogin(){
        this.get.submitButton().click()
    }
}
export const login = new loginPO;