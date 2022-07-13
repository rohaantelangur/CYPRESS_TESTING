describe('CYPRESS TESTING-1', () => {
  it('should visit the page', () => {
    cy.visit('http://localhost:3000')
  })

  it('input should be auto-focused', () => {
    cy.visit('http://localhost:3000')
    cy.get('.task-input').focus().should('have.class', 'task-input')
  })

  it('should have be the same as the typed value', () => {
    cy.visit('http://localhost:3000')
    const text = "BUY BREAD"
    cy.get('.task-input').type(text).should('have.value', text)
  })
})