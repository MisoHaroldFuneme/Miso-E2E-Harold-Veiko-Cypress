const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 1;

describe('Testing Settings Integration', () => {

    before(()=>{
        cy.visit('/#/signin')
        cy.wait(1000);
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
    
    it('Test go to settings integration', () =>{
        cy.get('a[href*="#/settings/integrations/"]').click();
        cy.wait(2000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
    
    it('Test click add integration', () => {
        cy.get('a[href*="#/settings/integrations/new/"]').click();
        cy.wait(200);
        cy.get('#new-integration-name').type('Test new integration',{force: true});
        cy.wait(200);
        cy.get('button[class="gh-btn gh-btn-green gh-btn-icon ember-view"]').click();
        cy.get('#integration_description').type('Test description integration ',{force: true});
        cy.wait(200);
        cy.get('.ml1').click();
        cy.get('#webhook-name').type('Test new webhoook name',{force: true});
        cy.wait(700);
        cy.get('select').select('post.added',{force: true});
        cy.wait(700);
        cy.get('#webhook-targetUrl').type('http://localhost:2368/ghost/#/settings/integrations/webhooks/newTest',{force: true});
        cy.wait(700);
        cy.get('button[class="gh-btn gh-btn-green gh-btn-icon ember-view"]').click({force: true});
        cy.wait(3000);
        
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click();
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
    
    
    it('Button Back to site', () => {
        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.wait(3000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
    
    it('Test go to settings integration for delete and save', () =>{
        cy.get('a[href*="#/settings/integrations/"]').click();
        cy.wait(700);
        cy.get('figure[class="apps-card-app-icon flex items-center"]').first().click({force: true});
        cy.wait(700);
        cy.get('.gh-btn-red > span').click();
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.wait(3000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
   
  })