// https://docs.cypress.io/api/introduction/api.html

describe('Test end to end', () => {
  it('Funcionamiento de la ruta estática "Home" tiene titulo: Lista de juegos Disponibles', () => {
    cy.visit('/home')
    cy.contains('h1', 'Lista de juegos Disponibles')
  })

  it('funcionamiento de la ruta estática "Administración" tiene el titulo: Administrando la Lista de Opiniones', () => {
    cy.visit('/administration')
    cy.contains('h1', 'Administrando la Lista de Opiniones')
  })



  it('Crear una nueva opinión y guardarla de forma automática', () => {
    cy.visit('/')
    cy.get(':nth-child(1) > :nth-child(1) > .card > :nth-child(3) > .card-body > .btn').click()
    cy.get('#name-input').type('James Logan')
    cy.get('#opinion-input').type('Es un juego muy entretenido y para todo público ...')
    cy.get('#modal-prevent-closing___BV_modal_footer_ > .btn-primary').click()
  })

  it('Corroborar que la opinión creada y guardada en el test anterior se encuentra disponible en la vista de administración', () => {
    cy.visit('/opinions')
    cy.get('#btn-0').contains('James Logan')
    cy.get('#btn-0').contains('Es un juego muy entretenido y para todo público ...')
  })

})