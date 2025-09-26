import { createOutputSpy } from 'cypress/angular';
import { FlightCriteria } from "./flight-criteria"

it('shows error hints if form is not correctly filled and search button is disabled', () => {
    cy.mount(FlightCriteria, {
        componentProperties: {
            searchFlights: createOutputSpy('searchFlightsSpy')
        },
    });

    cy.get('input[aria-label=From]').type('Mu');
    cy.get('input[aria-label=To]').type('Be');

    cy.contains('button', 'Search').click({force: true});

    cy.get('p[data-testid=error-hint-from]').should('be.visible');
    cy.get('p[data-testid=error-hint-to]').should('be.visible');

    cy.contains('button', 'Search').should('be.disabled');
    
    cy.get('@searchFlightsSpy').should('not.have.callCount');
});
