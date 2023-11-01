describe('My first test', () => {

  beforeEach('Visit page',()=> {
    cy.visit('/')
  })

  it('Check if the page loaded correctly', () => {
    cy.contains('O banco com bugs e falhas do seu jeito')
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').should('be.visible')
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').should('be.visible')
  });

  it('Register a new account', () => {
    cy.get('.ihdmxA').click()
    cy.get(':nth-child(2) > .input__default').type('user@gmail.com', {force:true})
    cy.get(':nth-child(3) > .input__default').type('user_teste', {force:true})
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('password', {force:true})
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('password', {force:true})
    cy.get('#toggleAddBalance').click({force:true})
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
    cy.get('.styles__ContainerInformations-sc-8zteav-3').contains('foi criada com sucesso')
  });
})