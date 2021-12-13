describe("some test", () => {
  it("should do something", () => {
    cy.visit("/");
    cy.contains(/joël/i);
  });
});
