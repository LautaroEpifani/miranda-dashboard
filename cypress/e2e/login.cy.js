describe("testing login funcionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it("if try go to / redirect to /login", () => {
    cy.url().should('eq', 'http://localhost:3000/login')
  });

  it("if wrong user stay in /login", () => {
    cy.get('[data-cy="email"]').type("asd@asd.com")
    cy.get('[data-cy="password"]').type("asd")
    cy.get('[data-cy="login"]').click()
    cy.get('[data-cy="login"]').click()
    cy.url().should('eq', 'http://localhost:3000/login')
  });

   it("if correct user  redirect to /", () => {
    cy.get('[data-cy="email"]').type("asd@asd.com")
    cy.get('[data-cy="password"]').type("asdasd")
    cy.get('[data-cy="login"]').click()
    cy.get('[data-cy="login"]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  });
});
