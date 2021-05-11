describe('Testing basic Angular registration', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2370/ghost/#/site')
        cy.wait(7000)
    })
    it('Test form feedback', () => {
        cy.get('button.btn.btn-primary').click()
        cy.wait(1000)
        cy.get('div.invalid-feedback').then(($divs)=>{
            expect($divs.length).to.equal(4)
        })
    })
  })