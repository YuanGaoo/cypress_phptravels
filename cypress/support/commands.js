// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('datePickerFrom', (date, month) => {
    cy.get('.datepicker.-bottom-left-.-from-bottom-.active').as('currentCal').find('.datepicker--nav div[class=datepicker--nav-title]').click()
    cy.get('.datepicker--cells.datepicker--cells-months div').contains(month).click()

    cy.get('@currentCal').find('div div div .datepicker--cell.datepicker--cell-day')
        .not('div div div .datepicker--cell.datepicker--cell-day.-other-month-').contains(date).click({ force: true })

})

Cypress.Commands.add('datePickerTo', (date, month) => {
    cy.get('.datepicker.-bottom-left-.-from-bottom-.active').as('currentCal').find('.datepicker--nav div[class=datepicker--nav-title]').click()
    cy.get(".datepicker.-bottom-left-.-from-bottom-.active [class='datepicker--cell datepicker--cell-month']").contains(month).click()

    cy.get('@currentCal').find('div div div .datepicker--cell.datepicker--cell-day')
        .not('div div div .datepicker--cell.datepicker--cell-day.-other-month-').contains(date).click({ force: true })
})

Cypress.Commands.add('addAdults', (peoples) => {
    cy.get("[class='col o2'] span button").eq(0).as('up')
    cy.get("[class='col o2'] span button").eq(1).as('down')
    if (peoples < 2) {
        cy.get('@down').click()
    }
    for (var i = 2; i < peoples; i++) {
        cy.get('@up').click()
    }
})

Cypress.Commands.add('addChilds', (childs) => {
    cy.get("[class='col 01'] span button").eq(0).as('up')
    cy.get("[class='col 01'] span button").eq(1).as('down')
    for (var i = 0; i < childs; i++) {
        cy.get('@up').click()
    }
})

Cypress.Commands.add('enterCity', (cityName) => {
    cy.get("[id='s2id_autogen16'] span[class='select2-chosen']").type(cityName)
    cy.get("[class='select2-results-dept-0 select2-result select2-result-unselectable select2-result-with-children'] ul span").contains(cityName).click()

})

Cypress.Commands.add('enterUsernamePwdandLogin', (usernmae, password) => {
    cy.get('.pure-material-textfield-outlined input[type=email]').type(usernmae, { force: true })
    cy.get(' .pure-material-textfield-outlined input[type=password]').type(password, { force: true })
    cy.get('#loginfrm > .btn-primary').as('loginBtn').click()
})

Cypress.Commands.add('clearUsernamePwd', () => {
    cy.get('.pure-material-textfield-outlined input[type=email]').clear()
    cy.get(' .pure-material-textfield-outlined input[type=password]').clear()

})