
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 5;

context('Testing Delete Post', () => { 
    
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

    it('Test Page delete post', () => {
        cy.get('a[href*="#/post"]').first().click()
        cy.wait(2000)  
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('edit first post', () => {
        cy.get('li.gh-list-row.gh-posts-list-item').first().within(() => 
        {
            cy.get('a[href*="#/editor/post/"]').first().click({force: true})
        })
        cy.wait(2000) 
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('entry settings', () => {
        cy.get('button.post-settings').click()
        cy.wait(2000) 
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('press Delete post', () => {
        cy.get('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
        cy.wait(2000) 
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('press Delete', () => {
        cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').first().click({force: true})
        cy.wait(4000) 
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
    
     
    it('Button Back to page', () => {
        cy.get('a[href*="#/posts"]').first().click({force: true});
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
     
})
