import { locateInputByName } from "../shared/basicPage"

export function validateTitle(expectedTitle) {
    cy.get('h3').should('have.text', expectedTitle)
}

export function validateFormInformation(expectedText) {
    cy.get('p').should('have.text', expectedText)
}

export function validateUsernamePlaceholderText(expectedText) {
    locateInputByName('UserName')
        .invoke('attr', 'placeholder').should('contain', expectedText)
}

export function validatePasswordPlaceholderText(expectedText) {
    locateInputByName('Password')
        .invoke('attr', 'placeholder').should('contain', expectedText)
}

export function typeTextIntoInput(inputName, text) {
    locateInputByName(inputName).type(text)
}

export function clickLoginButton() {
    cy.get('#login').click()
}

export function validateErrorMessage(expectedText) {
    cy.get('#loginstatus').should('have.text', expectedText)
}

