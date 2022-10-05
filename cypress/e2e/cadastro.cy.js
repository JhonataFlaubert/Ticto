/// <reference types="cypress" />
import whrite from '../support/pages'

describe('Analista QA', () => {
  beforeEach(() => {
    cy.visit('https://qa-test.ticto.io/')
  })
 it('Validas as mensagens de erro de todos os campos', () => {
    whrite.naoInserirDados()
  });
  it('Validar a mensagem de erro do email', () => {
    whrite.verficaCampoEmail()
  });
   

 it('Validar o cadastro de um novo usuário', () => {
   whrite.inserirDadosSucesso()
 }); 

 it('Validar a ediçãod de um cadastro', () => {
   whrite.editarCad()
 });

it('Validar após editar um cadastro excluir o mesmo', () => {
  whrite.apagarCad()
});

});
