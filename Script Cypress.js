// Analytics.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test



context('Actions-page-inicial', () => {
  beforeEach(() => {
    cy.wait(1000)
    cy.visit('https://matheus-nb.github.io/GitPageForAnalytics/')
  })

  for (let index = 0; index < 30; index++) {
    let numberClass = Math.floor(Math.random() * (5 - 1)) + 1;
    it('.click() - click into a DOM element', () => {
      cy.get(`.btn-${numberClass}`).click()
    })
  }

  for (let index = 0; index < 15; index++) {
    let numberID = Math.floor(Math.random() * (11 - 6)) + 6;
    it('.click() - click into a DOM element', () => {
      cy.get(`#btn-${numberID}`).click()
    })
  }
})


context('Actions-page-ideias', () => {
  beforeEach(() => {
    cy.wait(1000)
    cy.visit('https://matheus-nb.github.io/GitPageForAnalytics/ideias.html')
  })

  for (let index = 0; index < 30; index++) {
    let numberClass = Math.floor(Math.random() * (11 - 1)) + 1;
    it('.click() - click into a DOM element', () => {
      cy.get(`.btn-${numberClass}`).click()
    })
  }
})


context('Actions-page-ideiaDaSemana', () => {
  beforeEach(() => {
    cy.wait(1000)
    cy.visit('https://matheus-nb.github.io/GitPageForAnalytics/IdeiaDaSemana.html')
  })

  for (let index = 0; index < 30; index++) {
    let numberClass = Math.floor(Math.random() * (11 - 1)) + 1;
    it('.click() - click into a DOM element', () => {
      cy.get(`.btn-${numberClass}`).click()
    })
  }
})

context('Actions-page-addIdeia', () => {
  beforeEach(() => {
    cy.wait(1000)
    cy.visit('https://matheus-nb.github.io/GitPageForAnalytics/ideiasNew.html')
  })

  for (let index = 0; index < 30; index++) {
    let numberClass = Math.floor(Math.random() * (11 - 1)) + 1;
    it('.click() - click into a DOM element', () => {
      cy.get(`.btn-${numberClass}`).click()
    })
  }


  for (let index = 0; index < 5; index++) {
    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
      cy.get('.title')
        .type('fake')

      cy.get('.category')
        .type('fake')

      cy.get('.image')
        .type('https://matheus-nb.github.io/GitPageForAnalytics/ideiasNew.html')

      cy.get('.description')
        .type('fake')

      cy.get('.url')
        .type('https://matheus-nb.github.io/GitPageForAnalytics/ideiasNew.html')


      cy.get('.btn-7').click()
    })
  }

})

context('Actions-page-contato', () => {
  beforeEach(() => {
    cy.wait(1000)
    cy.visit('https://matheus-nb.github.io/GitPageForAnalytics/contato.html')
  })

  for (let index = 0; index < 30; index++) {
    let numberClass = Math.floor(Math.random() * (11 - 1)) + 1;
    it('.click() - click into a DOM element', () => {
      cy.get(`.btn-${numberClass}`).click()
    })
  }

  for (let index = 0; index < 5; index++) {
    it('.type() - type into a DOM element', () => {
      cy.get('.title')
        .type('fake')

      cy.get('.category')
        .type('fake')

      cy.get('.description')
        .type('fake')

      cy.get('.url')
        .type('https://matheus-nb.github.io/GitPageForAnalytics/ideiasNew.html')

      cy.get('.btn-7').click()
    })
  }
})

context('Actions-page-avaliacao', () => {
  beforeEach(() => {
    cy.wait(1000)
    cy.visit('https://matheus-nb.github.io/GitPageForAnalytics/Avaliacao.html')
  })

  for (let index = 0; index < 30; index++) {
    let numberClass = Math.floor(Math.random() * (11 - 1)) + 1;
    it('.click() - click into a DOM element', () => {
      cy.get(`.btn-${numberClass}`).click()
    })

    it('.click() - click into a DOM element', () => {
      cy.get('.ratingButton').click()
    })
  }
})
