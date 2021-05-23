
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 4;

context('Testing Create Post', () => { 

    before(() => {
        cy.visit('/#/signin')
        cy.wait(3000)
    })

    beforeEach(() => {        
        Cypress.Cookies.preserveOnce(cookieSessionName);
        i = i +1;
    })

    after( () => {
        cy.clearCookies();
    })

    it('Login General', () => {
        cy.get('input[name="identification"]').type(Cypress.config('user'))
        cy.get('input[name="password"]').type(Cypress.config('password'))
        cy.get('[id="ember12"]').click()
        cy.wait(1000)
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Test Page create post', () => {
        cy.get('a[href*="#/post"]').first().click()
        cy.wait(2000)  
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Button new post', () => {
        cy.get('a[href*="#/editor/post"]').first().click()
        cy.wait(2000) 
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Enter Title', () => {
        cy.get('textarea').first().type("New Title post");
        cy.wait(2000)
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    });    
   
   
    it('Button Back to page', () => {
        cy.get('a[href*="#/posts"]').first().click({force: true})
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
     
})
