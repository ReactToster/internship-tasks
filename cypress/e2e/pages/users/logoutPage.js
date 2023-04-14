import { locateInputByName } from "../shared/basicPage"

export function validateWelcomeMessage(username) {
    cy.get('#loginstatus').should('have.text', `Welcome, ${username}!`)
}

export function validateLogOutButton() {
    cy.get('#login').should('have.text', 'Log Out')
}

export function clickLogOutButton() {
    cy.get('#login').click()
}

export function validateLogOutMessage() {
    cy.get('#loginstatus').should('have.text', 'User logged out.')
}

export function validateInputsAreCleared() {
    locateInputByName('UserName').should('have.value', '')
    locateInputByName('Password').should('have.value', '')
}