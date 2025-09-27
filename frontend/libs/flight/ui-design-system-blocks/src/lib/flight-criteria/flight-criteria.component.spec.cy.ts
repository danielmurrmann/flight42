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

it('should emit searchFlights event if form is entered correctly and search is pressed', () => {
    cy.mount(FlightCriteria, {
        componentProperties: {
            searchFlights: createOutputSpy('searchFlightsSpy')
        },
    });

    cy.get('input[aria-label=From]').type('Munich');
    cy.get('input[aria-label=To]').type('Berlin');

    cy.get('p[data-testid=error-hint-from]').should('not.exist');
    cy.get('p[data-testid=error-hint-to]').should('not.exist');

    cy.contains('button', 'Search').should('be.enabled');

    cy.contains('button', 'Search').click();

    cy.get('@searchFlightsSpy').should('have.been.called');
});
