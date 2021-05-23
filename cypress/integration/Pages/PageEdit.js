
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 3;

context('Testing Edit Page', () => { 
    
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

    it('Test go to page ', () => {
        cy.get('a[href*="#/pages/"]').click();
        cy.wait(2000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
    it('Test go to edit page ', () => {
        cy.get('li.gh-list-row.gh-posts-list-item').first().within(() => 
        {
            cy.get('a[href*="#/editor/page/"]').first().click({force: true})
        })
        // cy.get('a[class="permalink gh-list-data gh-post-list-featured ember-view"]').first().click();
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
        cy.wait(2000);
    })

    it('Test type title', () => {
        cy.get('textarea').first().clear()
        cy.get('textarea').first().type("New Title page");
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

   
    it('Test click update  page', () => { 
        cy.get('div[class="gh-btn gh-btn-outline gh-publishmenu-trigger ember-basic-dropdown-trigger ember-view"]').click()
        cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Button Back to page', () => {
        cy.get('a[href*="#/pages/"]').first().click({force: true})
        cy.get('a[href*="#/pages/"]').first().click({force: true})
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
     
    
})