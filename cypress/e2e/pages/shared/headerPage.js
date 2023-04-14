export function validateLogoHref() {
    cy.get('.navbar-brand').should('have.attr', 'href', '/')
}

export function validateHamburgerIconIsVisible() {
    cy.get('.navbar-toggler').should('be.visible')
}

export function validateHamburgerIconIsNotVisible() {
    cy.get('.navbar-toggler').should('not.be.visible')
}