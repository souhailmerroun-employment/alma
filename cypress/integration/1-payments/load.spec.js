/// <reference types="cypress" />

describe('/payments', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/payments')
  })

  it('GET 200 payments of 3', () => {
    cy.intercept('GET', 'https://cloudrun-frontend-recruitment-test-5hhyjiivra-ew.a.run.app/payments', { fixture: 'GET_200_payments_3.json' })
    cy.get('table tbody tr').should('have.length', 3)
  })
})
