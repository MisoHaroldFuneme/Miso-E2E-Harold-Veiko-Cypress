import ApiSettingsDesign from './API-Moockaroo/API-SettingsDesignPositivo';
const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 1;

let DataApiSettingsDesign = new ApiSettingsDesign();
for (let index = 0; index < 10; index++) {

describe('Testing Settings Design', () => {

    before(()=>{
        cy.visit('/#/signin')
        cy.wait(2000);
     })

     beforeEach(() => {        
        Cypress.Cookies.preserveOnce(cookieSessionName);
        i = i +1;
    })

    after( () => {
        cy.clearCookies();
    })

    it('Test Data From Api',async () => {
        console.log('hfm', await DataApiSettingsDesign.getContent());
        cy.log("RES CUYPRESS: ",  DataApiSettingsDesign.response[index].navigation);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Test Login into', () => {
        cy.get('input[id="ember8"]').type(Cypress.config('user'));
        cy.get('input[name="password"]').type(Cypress.config('password'));
        cy.get('[id="ember12"]').click();
        cy.wait(2000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
    
    it('Test go to settings design', () =>{
        cy.get('a[href*="#/settings/design/"]').click();
        cy.wait(2000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
    
    it('Test type title and description', () => {
        cy.get('input[class="ember-text-field gh-input ember-view"]').eq(8).clear({force: true});
        cy.wait(200);
        cy.get('input[class="ember-text-field gh-input ember-view"]').eq(8).type( DataApiSettingsDesign.response[index].navigation,{force: true});
        cy.get('input[class="ember-text-field gh-input ember-view"]').eq(9).clear({force: true});
        cy.wait(200);
        cy.get('input[class="ember-text-field gh-input ember-view"]').eq(9).type( DataApiSettingsDesign.response[index].url_navigation,{force: true});
        cy.wait(2000);
        cy.get('button[class="gh-blognav-add"]').first().click({force: true});
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Test type secundary navigation and save', () => {
        cy.get('input[class="ember-text-field gh-input ember-view"]').eq(12).clear({force: true});
        cy.wait(200);
        cy.get('input[class="ember-text-field gh-input ember-view"]').eq(12).type(DataApiSettingsDesign.response[index].navigation_secundary,{force: true});
        cy.get('input[class="ember-text-field gh-input ember-view"]').eq(13).clear({force: true});
        cy.wait(200);
        cy.get('input[class="ember-text-field gh-input ember-view"]').eq(13).type(DataApiSettingsDesign.response[index].url_navigation_secundary,{force: true});
        cy.wait(2000);
        cy.get('button[class="gh-blognav-add"]').last().click({force: true});
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click({force: true});
        // cy.screenshot(`caso${caso}/Step-After-${i}`);

    })

    it('Button Back to site', () => {
        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.wait(3000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Test go to settings design for delete and save', () =>{
        cy.get('a[href*="#/settings/design/"]').click();
        cy.wait(2000);
        cy.get('button[class="gh-blognav-delete"]').eq(4).click({force: true});
        cy.get('button[class="gh-blognav-delete"]').last().click({force: true});
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click({force: true});
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
   
  })
}