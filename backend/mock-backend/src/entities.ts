export type AircraftInfoDto = {
    id: number,
    registration: string,
    type: string
}

export type FlightConnection = {
    from: string;
    to: string;
    icaoFrom: string;
    icaoTo: string;
};

export type FlightTimes = {
    takeOff: string;
    landing: string;
    delay: null | number;
};

export type FlightOperator = {
    name: string;
    shortName: string;
    aircraftId?: number;
};

export type FlightClassPrice = {
    flightClass: string;
    amount: number;
}

export type FlightPrice = {
    classPrices: FlightClassPrice[];
    seatReservationSurcharge: number;
};

export type Flight = {
    id: number;
    connection: FlightConnection;
    times: FlightTimes;
    operator: FlightOperator;
    price: FlightPrice | undefined;
};

export type FlightInfoDto = {
    id: number;
    from: string;
    to: string;
    date: string;
    delay: null | number;
}

export type LinksCollection = { [k in string]: { href: string } };
export type ActionsCollection = { [k in string]: { href: string, method: 'POST' | 'PUT' | 'DELETE' } };

export type Metadata = {
    _links?: LinksCollection;
    _actions?: ActionsCollection;
};

export type Hypermedia<T> = T & { 
    [k in keyof T]: T[k] extends Array<infer InnerType> ? Array<Hypermedia<InnerType>> : T[k] extends object ? { [subkey in keyof T[k]]: Hypermedia<T[k][subkey]> } & Metadata : T[k]
} & Metadata;