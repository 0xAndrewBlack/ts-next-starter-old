describe("Basic Test (Checks the page for visibility)", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the resources text", () => {
    cy.get("p").contains("Get started by editing");
  });

  it("renders the Netlify logo image", () => {
    cy.get("img")
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});

export {};
