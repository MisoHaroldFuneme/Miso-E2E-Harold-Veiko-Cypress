
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"


context('Testing Edit Tag', () => { 
    
    before(() => {
        cy.visit('/#/signin')
        cy.wait(3000)
    })

    beforeEach(() => {        
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Login General', () => {
        cy.get('input[name="identification"]').type(Cypress.config('user'))
        cy.get('input[name="password"]').type(Cypress.config('password'))
        cy.get('[id="ember12"]').click()
        cy.wait(7000)
    })

    it('Test Page edit tag', () => {
        cy.get('a[href*="#/tags/"]').first().click()
        cy.wait(7000)  
    })

    it('edit first tag', () => {        
        cy.get('h3[class="gh-tag-list-name"]').first().click({force: true})
        cy.wait(7000) 
    })

    it('Enter new Name and Description', () => {  
        cy.get('form').within(() => {
            cy.get('input[name="name"]').first().clear()
            cy.get('input[name="name"]').first().type("New Name Edited in tag", { force: true })
            cy.get('textarea[name="description"]').first().clear()
            cy.get('textarea[name="description"]').first().type("New Description Edited in tag", { force: true })
            cy.wait(2000)
        })
    });
   
    it('press Save', () => {
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').first().click({force: true})
        cy.wait(4000)
    })
   
    it('Button Back to page', () => {
        cy.get('a[href*="#/tags"]').first().click({force: true})
    })
     
})
