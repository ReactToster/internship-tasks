import { navigate } from "../../pages/shared/basicPage"
import { validateHamburgerIconIsNotVisible, validateHamburgerIconIsVisible, validateLogoHref } from "../../pages/shared/headerPage"

describe('header-tests', () => {
    beforeEach(() => {
        navigate()
    })

    it('logo navigates on click to /', () => {
        validateLogoHref()
    })

    context('hamburger icon on different viewports', () => {
        it('appears on iphone 6+', () => {
            cy.viewport('iphone-6+')
            validateHamburgerIconIsVisible()
        })

        it('appears on ipad 2', () => {
            cy.viewport('ipad-2')
            validateHamburgerIconIsVisible()
        })

        it('does not appear on macbook 13', () => {
            cy.viewport('macbook-13')
            validateHamburgerIconIsNotVisible()
        })
    })
})