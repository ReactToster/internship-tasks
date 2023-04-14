Cypress.Commands.add('login', () => {
    cy.window().invoke('Login')
})