import { AircraftInfoDto, FlightOperator, Flight, FlightPrice } from "./entities";

export const aircraftList: AircraftInfoDto[] = [
    { id: 1, registration: 'D-ABCD', type: 'Airbus A320' },
    { id: 2, registration: 'D-EFGH', type: 'Boeing 737' },
    { id: 3, registration: 'D-IJKL', type: 'Embraer E190' },
    { id: 4, registration: 'D-MNOP', type: 'Bombardier CRJ900' }
];

const CITY_NAMES = ['Berlin', 'Munich', 'Paris', 'London', 'Hamburg', 'Frankfurt'];

const OPERATOR_POOL: FlightOperator[] = [
    { name: 'Lufthansa', shortName: 'LH' },
    { name: 'EasyFly', shortName: 'EF' },
    { name: 'Continental Express', shortName: 'CX' },
    { name: 'SkyWays', shortName: 'SW' }
];

const rnd = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const choose = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
const future = (maxDays = 30) => {
    const d = rnd(1, maxDays), h = rnd(0, 23), m = rnd(0, 59);
    return new Date(Date.now() + (((d * 24 + h) * 60 + m) * 60000));
};
const durMin = () => rnd(30, 300);

export const generateFlights = (count: number): Flight[] => {
    const aircraftIds = aircraftList.map(a => a.id);
    return Array.from({ length: count }, (_, idx) => {
        const from = choose(CITY_NAMES);
        const to = choose(CITY_NAMES.filter(c => c !== from));
        const takeOff = future();
        const landing = new Date(takeOff.getTime() + durMin() * 60000);
        const operator = { ...choose(OPERATOR_POOL), aircraftId: choose(aircraftIds as unknown as number[]) } as FlightOperator;
        const price: FlightPrice = {
            classPrices: [
                { flightClass: 'economy', amount: Math.round((Math.random() * 150 + 50) * 100) / 100 },
                { flightClass: 'business', amount: Math.round((Math.random() * 450 + 150) * 100) / 100 },
                { flightClass: 'first', amount: Math.round((Math.random() * 850 + 450) * 100) / 100 }
            ],
            seatReservationSurcharge: Math.round((Math.random() * 25 + 5) * 100) / 100
        };
        const delay = Math.random() > 0.6 ? null : rnd(5, 120);
        return {
            id: idx + 1,
            connection: { from, to, icaoFrom: from.slice(0, 3).toUpperCase() + 'X', icaoTo: to.slice(0, 3).toUpperCase() + 'X' },
            times: { takeOff: takeOff.toISOString().slice(0, 16), landing: landing.toISOString().slice(0, 16), delay },
            operator,
            price
        } as Flight;
    });
};

export const flightList: Flight[] = generateFlights(1000);

export function getFlightById(id: number | string): Flight | undefined {
    if (typeof id === 'string') {
        id = parseInt(id);
    }
    return flightList.find(f => f.id === id);
}

export function findFlights(from: string | undefined, to: string | undefined, date: string | undefined): Flight[] {
    let filteredFlights = flightList; // in a real app, you'd filter based on from, to, date

    if (from) { // filter by from
        filteredFlights = filteredFlights.filter(f => f.connection.from.toLowerCase() === from.toLowerCase());
    }

    if (to) { // filter by to
        filteredFlights = filteredFlights.filter(f => f.connection.to.toLowerCase() === to.toLowerCase());
    }

    if (date) { // filter by date
        filteredFlights = filteredFlights.filter(f => new Date(f.times.takeOff).getTime() >= new Date().getTime());
    }

    filteredFlights = filteredFlights.sort((a, b) => new Date(a.times.takeOff).getTime() - new Date(b.times.takeOff).getTime());

    return filteredFlights;
}
