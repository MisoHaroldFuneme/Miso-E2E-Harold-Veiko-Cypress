const faker = require('faker');
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

for (let i = 1; i <= Cypress.config('numeroDeInteracciones'); i++) {
describe(`Testing Page - Create_And_Publish - Escenario Random ${i}: Login OK e ingreso de Título y descripción - Faker`, () => {

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
        cy.get('a[class="ember-view gh-btn gh-btn-green"]').click();
        cy.wait(3000);
        
    })
    
    it('Test type title and content', () => {
        cy.get('textarea').first().type(faker.name.title());
        cy.get('.koenig-editor__editor').type(faker.lorem.paragraph());
        cy.wait(2000);
        //cy.get('a[href*="#/pages/"]').click();        
        cy.wait(1000);
    })
    
    it('Test Page Publish', () => {      
        cy.wait(2000);  
        cy.get('div[role="button"]').first().click({force: true});
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click( {force: true});
        cy.wait(2000);
        cy.get('div[class="f8 fw3 lh-copy tracked-2 ma0 pa0 h9 br b--lightgrey pl3 pr4 flex items-center br2 br--left bg-white"]').click();
    
    });       
   
    it('Button Back to page', () => {
        cy.get('a[href*="#/pages/"]').first().click({force: true})
        cy.get('a[href*="#/pages/"]').first().click({force: true})
        cy.wait(3000);
        
    })
   
  })
}