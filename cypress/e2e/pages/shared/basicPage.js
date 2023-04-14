export function navigate() {
    cy.fixture('mock-data').then((mockData) => {
        cy.visit(mockData.homePageUrl)
    }) 
}

export function locateInputByName(inputNameAtrribute) {
    return cy.get(`[name='${inputNameAtrribute}']`)
}