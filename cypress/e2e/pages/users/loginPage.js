export function validateTitle(expectedTitle) {
    cy.get('h3').should('have.text', expectedTitle)
}

export function validateFormInformation(expectedText) {
    cy.get('p').should('have.text', expectedText)
}

export function validateUsernamePlaceholderText(expectedText) {
    cy.get("[name='UserName']")
        .invoke('attr', 'placeholder').should('contain', expectedText)
}

export function validatePasswordPlaceholderText(expectedText) {
    cy.get("[name='Password']")
        .invoke('attr', 'placeholder').should('contain', expectedText)
}