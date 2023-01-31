import { urls, welkomsttekst, zoekveld, titeltekst } from "../page_objects/wikipedia.po"

describe('Wikipedia', () => {
  it('checks that I can visit wikipedia', () => {
    cy.visit(urls.basicUrl)
  })

  it('Checks that I can find the Platypus page on the English Wikipedia', () => {
    // go to the English Wikipedia page
    cy.visit(urls.englishUrl)
    // check that the page is in English
    cy.get(welkomsttekst).contains('Welcome to')
    // search for the Platypus
    cy.get(zoekveld).type('Platypus')
    cy.contains('button', 'Search').click()
    // check that the Platypus page was found
    cy.get(titeltekst).should('be.visible')
    cy.get(titeltekst).should('have.text', 'Platypus')
  })
})
