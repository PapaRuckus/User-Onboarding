describe('Goes to the', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  })

  it("sanity check", () => {
    expect(1 + 1).to.equal(2)
    expect(1 + 2).not.equal(4)
  })

  const fnameInput = () => cy.get("input[name=fname]")
  const lnameInput = () => cy.get("input[name=lname]")
  const emailInput = () => cy.get("input[name=email]")
  const passwordInput = () => cy.get("input[name=password]")
  const tosInput = () => cy.get("input[name=tos]")
  const submitBtn = () => cy.get("input[type=submit]")

  it("Proper elements were made", () => {
    fnameInput().should("exist")
    lnameInput().should("exist")
    emailInput().should("exist");
    passwordInput().should("exist");
    tosInput().should("exist");
    submitBtn().should("exist")

    cy.contains(/make your team/i).should("exist")
  })

  it("Enter your Details", () => {
    fnameInput().should("have.value", "").type("Calvin").should("have.value", "Calvin")
    lnameInput().should("have.value", "").type("Knaub").should("have.value", "Knaub")
    emailInput().should("have.value", "").type("calvin@email.com").should("have.value", "calvin@email.com")
    passwordInput().should("have.value", "").type("password").should("have.value", "password")
    tosInput().should("not.be.checked").check().should("be.checked")
    submitBtn().click()
    cy.contains("Calvin Knaub, calvin@email.com")
  })
})