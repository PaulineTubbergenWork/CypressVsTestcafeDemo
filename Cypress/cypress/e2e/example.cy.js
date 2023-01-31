describe('Wikipedia', () => {
  it('checks that I can visit wikipedia', () => {
    cy.visit('https://www.wikipedia.org')
  })

  it('Checks that I can find the Platypus page on the English Wikipedia', () => {
    // go to the English Wikipedia page
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')
    // check that the page is in English
    cy.get('span.mw-headline').contains('Welcome to')
    // search for the Platypus
    cy.get('#searchInput[aria-label="Search Wikipedia"]').type('Platypus')
    cy.contains('button', 'Search').click()
    // check that the Platypus page was found
    cy.get('h1.firstHeading > span').should('be.visible')
    cy.get('h1.firstHeading > span').should('have.text', 'Platypus')
  })
})
