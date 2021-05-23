
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 8;

context('Testing Edit Tag, Enter Metadata', () => { 
    
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

    it('press Expand Metadata', () => {
        cy.get(':nth-child(1) > .flex > :nth-child(2) > .gh-btn > span').first().click({force: true});
        cy.wait(2000)
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

     it('Enter data', () => {  
         cy.get('form').within(() => {
             cy.get('input[name="metaTitle"]').first().clear({ force: true });
             cy.get('input[name="metaTitle"]').first().type("Título de Metadata", { force: true });
             cy.get('textarea[name="metaDescription"]').first().clear( { force: true } )
             cy.get('textarea[name="metaDescription"]').first().type("Descripción de metadata", { force: true });
             cy.get('#canonical-url').first().clear( { force: true } );
             cy.get('#canonical-url').first().type("http://canonicaurl.com", { force: true });
             cy.get('.br3 > :nth-child(1) > :nth-child(1) > :nth-child(2) > .gh-btn > span').first().click({force: true});
             
             cy.wait(2000)
         })
     });
   
    it('press Save', () => {
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').first().click({force: true})
        cy.wait(2000)
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
   
    it('Button Back to page', () => {
        cy.get('a[href*="#/tags"]').first().click({force: true})
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
     
})
