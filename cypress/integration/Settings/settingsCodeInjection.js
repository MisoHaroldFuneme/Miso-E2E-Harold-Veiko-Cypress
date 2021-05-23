const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
var i = 0;
var caso = 1;

describe('Testing Settings Code Injection', () => {

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
    
    it('Test go to settings code injection', () =>{
        cy.get('a[href*="#/settings/code-injection/"]').click();
        cy.wait(2000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
    
    it('Test type site Header', () => {

        cy.get('#ghost-head > .CodeMirror > .CodeMirror-scroll').click({force: true})
        .wait(2000).type(' beforeEach(() =>\n { \n cy.get(\'a[href*="#/settings/code-injection/"]\').click(); \n})', { parseSpecialCharSequences: false })
        .type('{enter}')
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Test type site Footer', () => {

        cy.get('#ghost-foot > .CodeMirror > .CodeMirror-scroll').click({force: true})
        .wait(2000).type(' beforeEach(() =>\n { \n cy.get(\'a[href*="#/settings/code-injection/"]\').click(); \n})', { parseSpecialCharSequences: false })
        .type('{enter}');
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    
    it('Test save code', () => {
        cy.get('[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click({force: true});
        cy.wait(2000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Button Back to site', () => {
        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.wait(2000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })

    it('Test go to settings code injection an delete code', () =>{
        cy.get('a[href*="#/settings/code-injection/"]').click();
        cy.wait(2000);

        cy.get('#ghost-head > .CodeMirror > .CodeMirror-scroll').click({force: true})
        .wait(2000)
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}');
   

        cy.get('#ghost-foot > .CodeMirror > .CodeMirror-scroll').click({force: true})
        .wait(2000)
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}')
        .type('{alt}{backspace}').type('{alt}{backspace}').type('{alt}{backspace}');

        cy.get('[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click({force: true});
        cy.wait(2000);

        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.get('a[href*="#/site/"]').first().click({force: true})
        cy.wait(2000);
        // cy.screenshot(`caso${caso}/Step-After-${i}`);
    })
   
  })