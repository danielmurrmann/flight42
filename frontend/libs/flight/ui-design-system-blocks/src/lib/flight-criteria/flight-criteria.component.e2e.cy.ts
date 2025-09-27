describe('Flight Criteria ', () => {
  it('shows error hints if form is not correctly filled and search button is disabled', () => {
    cy.visit('http://localhost:4400/iframe.html?id=blocks-flight-criteria--basic&viewMode=story');

    cy.get('input[aria-label=From]').type('Mu');
    cy.get('input[aria-label=To]').type('Be');

    cy.contains('button', 'Search').click({ force: true });

    cy.get('p[data-testid=error-hint-from]').should('be.visible');
    cy.get('p[data-testid=error-hint-to]').should('be.visible');
    cy.contains('button', 'Search').should('be.disabled');
  });
  
  it('shows no erros if form is entered correctly and search button is enabled', () => {
    cy.visit('http://localhost:4400/iframe.html?id=blocks-flight-criteria--basic&viewMode=story');

    cy.get('input[aria-label=From]').type('Munich');
    cy.get('input[aria-label=To]').type('Berlin');

    cy.contains('button', 'Search').click();

    cy.get('p[data-testid=error-hint-from]').should('not.exist');
    cy.get('p[data-testid=error-hint-to]').should('not.exist');
    cy.contains('button', 'Search').should('be.enabled');
  });
})
