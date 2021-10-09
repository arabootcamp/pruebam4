// https://docs.cypress.io/api/introduction/api.html

describe('Test end to end', () => {

  const opinion = {
    name: 'James Logan',
    txt: 'Es un juego muy entretenido y para todo público ...'
  }

  it('Funcionamiento de la ruta estática "Home" tiene titulo: Lista de juegos Disponibles', () => {
    cy.visit('/home')
    cy.contains('h1', 'Lista de juegos Disponibles')
  })

  it('funcionamiento de la ruta estática "Administración" tiene el titulo: Administrando la Lista de Opiniones', () => {
    cy.visit('/administration')
    cy.contains('h1', 'Administrando la Lista de Opiniones')
  })

  it('Comprobar el funcionamiento de la ruta estática "Opiniones", titulo: Lista de Opiniones y ruta sea correcta', () => {
    cy.visit('/opinions')
    cy.contains('h1', 'Lista de Opiniones')
    cy.url().should('include', '/opinions');
  })

  it('Crear una nueva opinión y guardarla de forma automática, revisar que se encuentre disponible en la vista de opiniones y administración', () => {
    cy.visit('/')
    cy.get(':nth-child(1) > :nth-child(1) > .card > :nth-child(3) > .card-body > .btn').click()
    cy.get('#name-input').type('James Logan')
    cy.get('#opinion-input').type('Es un juego muy entretenido y para todo público ...')
    cy.get('#modal-prevent-closing___BV_modal_footer_ > .btn-primary').click()
    cy.get('#002opinions').click()
    cy.get('body').contains(opinion.name)
    cy.get('body').contains(opinion.txt)
    cy.get('#btn-0').click()
    cy.wait(2000)
    cy.get('#003administration').click()
    cy.get('body').contains(opinion.name)
    cy.get('body').contains(opinion.txt)
  })
})