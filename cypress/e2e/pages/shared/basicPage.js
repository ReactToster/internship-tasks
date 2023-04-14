export function navigate(url) {
    cy.visit(url)
}

export function locateInputByName(inputNameAtrribute) {
    return cy.get(`[name='${inputNameAtrribute}']`)
}