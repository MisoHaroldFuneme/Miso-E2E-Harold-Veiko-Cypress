
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 8;

context('Testing Delete Tag', () => { 
    
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

    it('Test Page edit tag', () => {
        cy.get('a[href*="#/tags/"]').first().click()
        cy.wait(2000)  
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('edit first tag', () => {        
        cy.get('h3[class="gh-tag-list-name"]').first().click({force: true})
        cy.wait(2000) 
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
   
    it('press Delete tag', () => {
        cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.mb15').first().click({force: true})
        cy.wait(2000)
        cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').first().click({force: true})
        cy.wait(2000)
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
   
    it('Button Back to page', () => {
        cy.get('a[href*="#/tags"]').first().click({force: true})
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
     
})
