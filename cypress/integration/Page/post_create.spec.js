
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"


context('Testing Create Post', () => { 
    
    before(() => {
        cy.visit('http://localhost:2380/ghost')
    })

    beforeEach(() => {        
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Login General', () => {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('misoharoldfuneme@gmail.com')
            cy.get('input[name="password"]').type('Miso-pruebas%')
            cy.get('[id="ember12"]').click()
            cy.wait(3000)
        })
    })

    it('Test Page crear post', () => {
        cy.get('[id="ember28"]').click()
        cy.wait(2000)  
    })

    it('Button new post', () => {
        cy.get('a[href*="#/editor/post"]').click().should('have.class', 'gh-btn-primary').first().click()
        cy.wait(2000) 
    })

    it('Enter Title and content', () => {
        cy.get('textarea').first().type("New Title post")
    })

    it('Button publish', () => {
        cy.get('div[class="gh-publishmenu ember-view"]').click()
        cy.wait(2000) 
        cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.wait(2000) 
    })

    it('Button Back to page', () => {
        cy.get('[div[class="f8 fw3 lh-copy tracked-2 ma0 pa0 h9 br b--lightgrey pl3 pr4 flex items-center br2 br--left bg-white"]').click()
        cy.wait(2000) 
    })
})
