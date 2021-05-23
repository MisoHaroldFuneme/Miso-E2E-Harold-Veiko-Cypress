
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 7;

context('Testing Create Tag', () => { 
    
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
        cy.wait(2000)
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Test Page create tag', () => {
        cy.get('a[href*="#/tags"]').first().click()
        cy.wait(2000)  
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Button new tag', () => {
        cy.get('a[href*="#/tags/new"]').first().click()
        cy.wait(2000) 
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Enter Name and Description', () => {  
        cy.get('form').within(() => {
        cy.get('input[name="name"]').type("New tag", { force: true })
        cy.get('textarea[name="description"]').type("Description of new tag", { force: true })
        cy.wait(2000)
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
        })
    });
   
    it('press Save', () => {
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').first().click({force: true})
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
   
    it('Button Back to site', () => {
        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.wait(3000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
     
})
