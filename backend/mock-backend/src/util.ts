import { Flight, FlightInfoDto, Hypermedia } from "./entities";
import { Request } from "express";

export function flightsToFlightInfoDto(flights: Flight[]): FlightInfoDto[] {
    return flights.map(f => ({
        id: f.id,
        from: f.connection.from,
        to: f.connection.to,
        date: f.times.takeOff,
        delay: f.times.delay
    }));
}

export type LinkFn<TResource> = (resource: TResource) => void;

export type ResourceOrCollection<T> = T | T[];

export function linkResources<TResource>(req: Request, resourceOrCollection: ResourceOrCollection<TResource>, linkFn: LinkFn<TResource>): ResourceOrCollection<TResource> {
    const result = structuredClone(resourceOrCollection);
    if(req.headers['x-with-hypermedia'] === 'true') {
        if(Array.isArray(result)) {
            for(const resource of result) {
                linkFn(resource);
            }
        } else {
            linkFn(result);
        }
    }
    return result;
}

export function addFlightInfoHypermedia(flightInfo: FlightInfoDto) {
    const hypermedia: Hypermedia<FlightInfoDto> = flightInfo;
    hypermedia._links = {
        self: { href: `http://localhost:5100/api/flight-infos/${flightInfo.id}` },
        flight: { href: `http://localhost:5100/api/flights/${flightInfo.id}` }
    };
}

export function addFlightHypermedia(flight: Flight) {
    const hypermedia: Hypermedia<Flight> = flight;
    hypermedia._links = {
        self: { href: `http://localhost:5100/api/flights/${flight.id}` }
    };
    hypermedia.connection._actions = {
        update: { href: `http://localhost:5100/api/flights/${flight.id}/connection`, method: 'PUT' }
    };
    hypermedia.times._actions = {
        update: { href: `http://localhost:5100/api/flights/${flight.id}/times`, method: 'PUT' }
    };
    hypermedia.operator._actions = {
        update: { href: `http://localhost:5100/api/flights/${flight.id}/operator`, method: 'PUT' }
    };
    if(flight.operator.aircraftId) {
        hypermedia._links.aircraft = { href: `http://localhost:5100/api/aircraft-infos/${flight.operator.aircraftId}` };
    }
}
