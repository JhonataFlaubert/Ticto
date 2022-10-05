const el = require('./elements').ELEMENTS

class Write {

  naoInserirDados () {
    cy.get(el.btnRegister).contains('Cadastrar').click()
    cy.get(el.alert).should('contain', 'O campo Nome é obrigatório')
    cy.get(el.alert).should('contain', 'O campo Email é obrigatório.')
    cy.get(el.alert).should('contain', 'O campo Password é obrigatório')
  }

  verficaCampoEmail () {
    cy.get('h1').should('contain', 'Formulário')
    cy.get(el.inputName).type('Jhonata Flaubert')
    cy.get(el.inputEmail).type('jhonata@')
    cy.get(el.btnRegister).contains('Cadastrar').click({ force: true })
  }

  inserirDadosSucesso () {
    cy.get('h1').should('contain', 'Formulário')
    cy.get(el.inputName).type('Jhonata Flaubert')
    cy.get(el.inputEmail).type('jhonata@ticto.com.br')
    cy.get(el.inputPassword).type('123456789')
    cy.get(el.btnRegister).contains('Cadastrar').click({ force: true })
    cy.get(el.alertSucess).should('contain', 'Usuário cadastrado com sucesso.' )
    cy.get('td.text-truncate').contains('Jhonata Flaubert').siblings()
    cy.get('.text-truncate')
    .last()
    .contains('jhonata@ticto.com.br')

  }
  editarNome (){
    cy.get('td.text-truncate')
    .contains('Jhonata Flaubert')
    .siblings()
    .children()
    .filter(':contains("Ações")')
    .click()
    .contains('Editar')
    .click({ force: true })
    cy.get("[value*='Jhonata Flaubert']")
    .clear()
    .type('Jhonata Alves')
    cy.get("[class='btn btn-primary']").should('be.visible').click({force: true}) // existe varios elemntos iguais
    cy.contains('Usuário salvo com sucesso.').should('be.visible')
   }

  apagarFor() {
    cy.get('td.text-truncate')
    .contains('Jhonata Flaubert')
    .siblings()
    .children()
    .filter(':contains("Ações")')
    .click()
    .contains('Excluir')
    .click({ force: true, multiple: true })
    cy.get("[class='btn btn-danger']").contains('Excluir').click({force: true})
    cy.get(el.alertSucess).contains('Usuário removido com sucesso.')
    // cy.request('DELETE', 'https://qa-test.ticto.io/**')
    
   }
  }


export default new Write()