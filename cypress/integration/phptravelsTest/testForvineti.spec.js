/// <reference types="Cypress" />

describe('This is task from Vineti', () => {
    beforeEach('url and test data', () => {
        cy.visit('https://www.phptravels.net/')
    })


    it('Search Holel and Verify and validate check box', () => {
        //Search for hotel in Chicago (Nov 1st - Nov 5th ) 3 Adults and 1 Child and click Search. 
        //Verify `No Results Found` text is displayed.
        cy.get('[data-name=hotels').click()
        cy.enterCity('Chicago')

        cy.get('#checkin').click()
        cy.datePickerFrom('1', 'Nov')
        cy.datePickerTo('5', 'Nov')
        cy.addAdults(3)
        cy.addChilds(1)
        cy.get('#hotels  button[type=submit]').click()

        cy.get("h2[class='text-center']").then(($el) => {
            var message = $el.text()
            expect(message).to.be.equal('No Results Found')
        })

        //Click on `Airport Transport`, `Guest House` and `High to Low` 
        //checkboxes and click search, verify those boxes are still checked after clicking search.

        cy.get("[id='Airport Transport']").as('AT').scrollIntoView().check({ force: true })
        cy.get("[id='Guest House']").scrollIntoView().as('GH').check({ force: true })
        cy.get("[id='priceOrderAsc']").scrollIntoView().as('Asc').check({ force: true })
        cy.get('.sidebar-box #searchform').click()
        cy.get('@AT').should('be.checked')
        cy.get('@GH').should('be.checked')
        cy.get('@Asc').should('be.checked')

    })

    it('Verify Login', () => {
        //Credentials: username: user@phptravels.com/ password: demouser


        cy.contains('My Account').click()
        cy.contains('Login').click()

        //incorrect  credential
        cy.enterUsernamePwdandLogin('user@phptravels.com', '123123123')
        cy.get('.alert.alert-danger').should('have.text', 'Invalid Email or Password')

        //correct credential
        cy.clearUsernamePwd()
        cy.enterUsernamePwdandLogin('user@phptravels.com', 'demouser')
        cy.get('.text-align-left').should('contain.text', 'Hi, Demo User')





    })

})