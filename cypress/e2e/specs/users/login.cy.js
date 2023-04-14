/// <reference types="cypress" />

import { navigate } from "../../pages/shared/basicPage"
import { validateFormInformation, validatePasswordPlaceholderText, validateTitle, validateUsernamePlaceholderText } from "../../pages/users/loginPage"

describe('login-tests', () => {
    beforeEach(() => {
        navigate("http://uitestingplayground.com/sampleapp")
    })

    context('validating web elements', () => {
        it('title Sample App', () => {
            validateTitle('Sample App')
        })

        it('fill in form informations', () => {
            validateFormInformation('Fill in and submit the form. For successfull login use any non-empty user name and `pwd` as password.')
        })

        it('username has placeholder text', () => {
            validateUsernamePlaceholderText('User Name')
        })

        it('password has placeholder text', () => {
            validatePasswordPlaceholderText('********')
        })
    })

    context('logging actions', () => {
        it('incorrect password and username', () => {

        })

        it('navigates to logout on successful login', () => {
            
        })
    })
})