export type FlightConnection = {
    from: string;
    to: string;
    icaoFrom: string;
    icaoTo: string;
};

export const initialFlightConnection: FlightConnection = {
    from: '',
    to: '',
    icaoFrom: '',
    icaoTo: ''
};

export type FlightTimes = {
    takeOff: string;
    landing: string;
    delay: null | number;
};

export const initialFlightTimes: FlightTimes = {
    takeOff: '',
    landing: '',
    delay: null
};

export type FlightOperator = {
    name: string;
    shortName: string;
    aircraftId: number;
};

export const initialFlightOperator: FlightOperator = {
    name: '',
    shortName: '',
    aircraftId: 0
};

export type FlightClassPrice = {
    flightClass: string;
    amount: number;
}

export const initialFlightClassPrice: FlightClassPrice = {
    flightClass: '',
    amount: 0
};

export type FlightPrice = {
    classPrices: FlightClassPrice[];
    seatReservationSurcharge: number;
};

export const initialFlightPrice: FlightPrice = {
    classPrices: [],
    seatReservationSurcharge: 0
};

export type Flight = {
    id: number;
    connection: FlightConnection;
    times: FlightTimes;
    operator: FlightOperator;
    price: FlightPrice;
};

export const initialFlight: Flight = {
    id: 0,
    connection: initialFlightConnection,
    times: initialFlightTimes,
    operator: initialFlightOperator,
    price: initialFlightPrice
};
