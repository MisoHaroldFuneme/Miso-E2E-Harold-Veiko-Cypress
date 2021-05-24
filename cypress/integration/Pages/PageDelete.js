const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 2;
for(let i = 1; i <= 5; i++){
describe(`Testing delete Page ${i}`, () => {

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

    it('Test go to page', () =>{
        cy.get('a[href*="#/pages/"]').first().click();
        cy.wait(2000);

        cy.get('li.gh-list-row.gh-posts-list-item').first().within(() => 
        {
            cy.get('a[href*="#/editor/page/"]').first().click({force: true})
        })
        // cy.get('li[class="gh-list-row gh-posts-list-item ember-view"]').click();
        cy.wait(3000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
    
    it('Test click post-settings and delete', () => {
        cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click();
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
        cy.wait(3000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
   
  })
}