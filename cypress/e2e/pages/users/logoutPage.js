export function validateWelcomeMessage(username) {
    cy.get('#loginstatus').should('have.text', `Welcome, ${username}!`)
}