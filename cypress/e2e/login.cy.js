
describe("testing login funcionality", () => {
  it("if user don´t exist redirect to /login", () => {
    const userState = null;
    cy.clearLocalStorage().then(() => {
      window.localStorage.setItem("loginUser",  JSON.stringify(userState));
    });
    cy.visit("http://localhost:3000").then(() => {
      const user = JSON.parse(window.localStorage.getItem("loginUser"));
      expect(user).to.deep.equal(userState);
    });
    cy.url().should('include', '/login')
  });
  it("if user exist redirect to /", () => {
    const userState = { 
      userName: "Juan",
      email: "Juan@gmail.com",
      password: "juan123", 
    };
    cy.clearLocalStorage().then(() => {
      window.localStorage.setItem("loginUser",  JSON.stringify(userState));
    });
    cy.visit("http://localhost:3000").then(() => {
      const user = JSON.parse(window.localStorage.getItem("loginUser"));
      expect(user).to.deep.equal(userState);
    });
    cy.url().should('include', '/')
  });
  it("when click button logout user", () => {
    const userState = {   
      userName: "Juan",
      email: "Juan@gmail.com",
      password: "juan123", 
    };
    
    cy.clearLocalStorage().then(() => {
      window.localStorage.setItem("loginUser",  JSON.stringify(userState));
    });
    cy.visit("http://localhost:3000").then(() => {
      cy.get('[data-cy="logout"]').click({userState: null})
      window.localStorage.setItem("loginUser",  JSON.stringify(userState));
      const user = JSON.parse(window.localStorage.getItem("loginUser"));
      expect(user).to.deep.equal(userState);
    });
    
   
  });
});
