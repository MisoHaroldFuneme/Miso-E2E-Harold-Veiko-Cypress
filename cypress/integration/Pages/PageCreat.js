const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 1;

describe('Testing create Page', () => {

    before(()=>{
        cy.visit('/#/signin')
        cy.wait(3000);
     })

     beforeEach(() => {        
        Cypress.Cookies.preserveOnce(cookieSessionName);
        i = i +1;
    })

    after( () => {
        cy.clearCookies();
    })

    it('Test Login into', () => {
        cy.get('input[id="ember8"]').type(Cypress.config('user'));
        cy.get('input[name="password"]').type(Cypress.config('password'));
        cy.get('[id="ember12"]').click();
        cy.wait(3000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Test go to page and new page', () =>{
        cy.get('a[href*="#/pages/"]').click();
        cy.wait(2000);
        cy.get('a[class="ember-view gh-btn gh-btn-green"]').click();
        cy.wait(3000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
        
    })
    
    it('Test type title and content', () => {
        cy.get('textarea').first().type("Title page");
        cy.get('.koenig-editor__editor').type("Hola");
        cy.wait(2000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Button Back to page', () => {
        cy.get('a[href*="#/pages/"]').first().click({force: true})
        cy.get('a[href*="#/pages/"]').first().click({force: true})
        cy.wait(3000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
   
  })