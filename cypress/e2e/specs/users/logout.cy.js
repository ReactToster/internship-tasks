import { navigate } from "../../pages/shared/basicPage"
import { typeTextIntoInput } from "../../pages/users/loginPage"
import { clickLogOutButton, validateInputsAreCleared, validateLogOutButton, validateLogOutMessage } from "../../pages/users/logoutPage"

describe('logout-tests', () => {
    beforeEach(()=> {
        navigate()
        typeTextIntoInput('UserName', 'user')
        typeTextIntoInput('Password', 'pwd')
        cy.login()
    })

    it('button is now logout', () => { 
        validateLogOutButton()
    })

    it('changes information and button on successful logout', () => {
        clickLogOutButton()

        validateLogOutMessage()
    })

    it('input username and password clear on successful logout', () => {
        clickLogOutButton()

        validateInputsAreCleared()
    })
})