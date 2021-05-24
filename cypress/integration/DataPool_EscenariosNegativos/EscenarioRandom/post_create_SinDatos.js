const faker = require('faker');
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

for (let i = 1; i <= Cypress.config('numeroDeInteracciones'); i++) {
context(`Testing create Post (Draft) - Escenario Random ${i}: Login OK y no ingreso de datos - Faker`, () => { 

    before(() => {
        cy.visit('/#/signin')
        cy.wait(3000)
    })

    beforeEach(() => {        
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    after( () => {
        cy.clearCookies();
    })

    it('Login General', () => {
        cy.get('input[name="identification"]').type(Cypress.config('user'))
        cy.get('input[name="password"]').type(Cypress.config('password'))
        cy.get('[id="ember12"]').click()
        cy.wait(1000)
    })

    it('Test Page create post', () => {
        cy.get('a[href*="#/post"]').first().click()
        cy.wait(2000)  
       
    })

    it('Button new post', () => {
        cy.get('a[href*="#/editor/post"]').first().click()
        cy.wait(2000) 
        
    })

    it('Enter Title', () => {
        cy.wait(2000)
       
    });    
   
   
    it('Button Back to page', () => {
        cy.get('a[href*="#/posts"]').first().click({force: true})
        
    })
     
})
}