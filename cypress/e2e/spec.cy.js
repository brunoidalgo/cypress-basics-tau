describe('My first test', () => {

  beforeEach('Visitando página',()=> {
    // cy.visit('https://cypress.io')
  })

  it('Test', () => {
    cy.get('.osano-cm-accept')
  });
})