const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"


context('Testing Page features', () => {
    const PAGE_URL = "http://localhost:2368/ghost/#/signin";

    before(()=>{
        cy.visit(PAGE_URL);
         cy.wait(3000);
     })

     beforeEach(() => {        
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Test Login into', () => {
        cy.get('input[id="ember8"]').type('misoharoldfuneme@gmail.com');
        cy.get('input[name="password"]').type('Miso-pruebas%');
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