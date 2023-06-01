import { When, Then} from '@badeball/cypress-cucumber-preprocessor'

When("タイムラインを表示したとき", () => {
  console.log("test")
  console.log(Cypress.env('SITE_URL'))
  cy.visit(Cypress.env('SITE_URL'))
})

When("ツイートが一つもない", () => {
  cy.get('.tweet').should($tweets => {
    expect($tweets).to.have.length(0)
  })
})

Then("タイムラインに{string}と表示される", () => {
  cy.get('.first-message').should($message => {
    expect($message).to.contain('今何してる？')
  })
})
