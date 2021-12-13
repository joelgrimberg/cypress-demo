describe("some test", () => {
  it("should test client", () => {
    cy.visit("/");
    cy.contains(/joël/i);
  });
  it("should test server", () => {
    cy.visit("http://localhost:8000");
    cy.contains(/server/i);
  });
});
