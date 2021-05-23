const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 1;

describe('Testing Settings General', () => {

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
        cy.wait(2000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
    
    it('Test go to settings general', () =>{
        cy.get('a[href*="#/settings/general/"]').click();
        cy.wait(2000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
    
    it('Test type title and description', () => {
        cy.get('.mt2 > .gh-setting-first > .gh-setting-action > .gh-btn > span').click({force: true});
        cy.wait(2000);
        cy.get('input[class="ember-text-field gh-input ember-view"]').first().clear({force: true});
        cy.get('input[class="ember-text-field gh-input ember-view"]').first().type('Test nombre del sitio web',{force: true});
        cy.get('input[class="ember-text-field gh-input ember-view"]').last().clear({force: true});
        cy.get('input[class="ember-text-field gh-input ember-view"]').last().type('Test Metadatos para busqueda',{force: true});
        cy.get('.mt2 > .gh-setting-first > .gh-setting-action > .gh-btn > span').click({force: true});
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Test type site TimeZone', () => {
        cy.get('.gh-setting > .gh-setting-action > .gh-btn > span').click({force: true});
        cy.wait(3000);
        cy.get('select').select('America/Bogota',{force: true});
        cy.wait(2000);
        cy.get('.gh-setting > .gh-setting-action > .gh-btn > span').click({force: true});
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
    
    it('Test type publication Language', () => {
        cy.get('.mt2 > .gh-setting-last > .gh-setting-action > .gh-btn > span').click({force: true});
        cy.wait(3000);
        cy.get('input[class="ember-text-field gh-input ember-view"]').first().clear({force: true});
        cy.get('input[class="ember-text-field gh-input ember-view"]').first().type('Español',{force: true});
        cy.wait(2000);
        cy.get('.mt2 > .gh-setting-last > .gh-setting-action > .gh-btn > span').click({force: true});
        cy.get('[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click({force: true});
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Button Back to site', () => {
        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.wait(3000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
   
  })