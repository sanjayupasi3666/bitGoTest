describe("test bitGo", () => {
  it("validate total transactions", () => {
    cy.intercept("GET", "**/block/*/txs/*").as("waitForTransactions")
    cy.visit("/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732")
    cy.wait("@waitForTransactions")

    cy.get(".transactions").find("h3").should("have.text", `25 of 2875 Transactions`)
    // to generalise above validation with n inputs and m transaction
    // cy.get(".transactions").find("h3").should("have.text",`${n} of ${m} Transactions`)
  })

  it("log transactions with 1 input and 2 outputs ", () => {
    cy.get(".transaction-box").each((e1) => {
      cy.wrap(e1)
        .find(".vin")
        .then((e2) => {
          const inputs = e2.length
          cy.wrap(e1)
            .find(".vout")
            .then((e3) => {
              const outputs = e3.length
              if (inputs === 1 && outputs === 2) {
                cy.wrap(e1)
                  .find(".txn")
                  .invoke("text")
                  .then((txt) => {
                    cy.log(txt)
                  })
              }
            })
        })
    })
  })
})
