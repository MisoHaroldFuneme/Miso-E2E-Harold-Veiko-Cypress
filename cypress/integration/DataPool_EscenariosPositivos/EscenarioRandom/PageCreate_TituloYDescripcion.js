const faker = require('faker');
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"

for (let i = 1; i <= Cypress.config('numeroDeInteracciones'); i++) {
describe(`Testing create Page (Draft) - Escenario Random ${i}: Login OK e ingreso de Título y descripción - Faker`, () => {

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
    })

    it('Button Back to page', () => {
        cy.get('a[href*="#/pages/"]').first().click({force: true})
        cy.get('a[href*="#/pages/"]').first().click({force: true})
        cy.wait(3000);
    })
   
  })
}