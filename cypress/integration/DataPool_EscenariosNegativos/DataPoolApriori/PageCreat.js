import MOCK_DATA from './schemas/PageCreateNegative.json'
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session";
const faker = require('faker');


var i = 0;
var caso = 1;
let titles = MOCK_DATA;
for( let index in titles){

describe(`Testing create Page DataPoolApriori ESC Negative ${index}`, () => {
    
    before(()=>{
        cy.visit('/')
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

    it('Test go to page and new page', () =>{
        cy.get('a[href*="#/pages/"]').click();
        cy.wait(2000);
        cy.get('a[class="ember-view gh-btn gh-btn-green"]').click();
        cy.wait(2000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
        
    })
    
    it('Test type title and content', () => {
        cy.get('textarea').first().type(titles[index].title);
        cy.wait(2000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Button Back to page', () => {
        cy.get('a[href*="#/pages/"]').first().click({force: true})
        cy.get('a[href*="#/pages/"]').first().click({force: true})
        cy.wait(3000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
    
    it('Assert if the page was create', () => {
        expect(cy.contains('titles[index].title'), `La pagina con el nombre ${titles[index].title} No se logró crear`).to.exist;
       
        // expect(true, "Mensaje que saldra si falla").to.be.true;
        // expect(true).to.be.false;
        // expect(1).to.be.lessThan(2);
        // expect(1).to.be.greaterThan(2);
        // expect(true).to.exist;
        cy.wait(1000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

   
  })
}