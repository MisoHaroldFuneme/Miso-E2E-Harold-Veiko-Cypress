const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"


describe('Testing Page features', () => {

    before(()=>{
        cy.visit('/#/signin')
        cy.wait(3000);
     })

     beforeEach(() => {        
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    after( () => {
        cy.clearCookies();
    })

    it('Test Login into', () => {
        cy.get('input[id="ember8"]').type(Cypress.config('user'));
        cy.get('input[name="password"]').type(Cypress.config('password'));
        cy.get('[id="ember12"]').click();
        cy.wait(3000);
    })

    it('Test go to page and new page', () =>{
        cy.get('a[href*="#/pages/"]').click();
        cy.wait(2000);
        cy.get('a[class="gh-btn gh-btn-green ember-view"]').click();
    })
    
    it('Test type title and content', () => {
        cy.get('textarea').first().type("New Title page");
        // Falta ver como resolver el tema de los dos _ _ que aparecen al guardar o recargar la pagina
    })
   
  })