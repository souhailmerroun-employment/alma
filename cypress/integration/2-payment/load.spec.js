/// <reference types="cypress" />

describe('/payment/:id', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/payments/random-id')
    })

    it('GET 200 payments of 3', () => {
        cy.intercept('GET', 'https://cloudrun-frontend-recruitment-test-5hhyjiivra-ew.a.run.app/payments/random-id', { fixture: 'GET_200_payment_3.json' })
        cy.get('table tbody tr').should('have.length', 3)
    })
})
