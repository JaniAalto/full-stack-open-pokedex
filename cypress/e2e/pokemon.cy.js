describe('Pokedex', function () {
  it('Front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Pokemon page can be navigated to', function () {
    //cy.visit('http://localhost:5000/pokemon/venusaur')
    // cannot directly visit page for some reason; returns 404

    cy.visit('http://localhost:5000')
    cy.get('.list-item:first').click()
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})