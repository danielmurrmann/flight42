import { Meta, StoryObj } from "@storybook/angular";
import { Flight } from "@flight42/flight-domain";
import { FlightSidePanel } from "./flight-side-panel";

const testData: Flight = {
        id: 1,
        connection: {
            from: 'Munich',
            to: 'Berlin',
            icaoFrom: 'EDDM',
            icaoTo: 'EDDB'
        },
        times: {
            takeOff: '2024-11-26T08:16',
            landing: '2024-11-26T09:46',
            delay: 15
        },
        operator: {
            name: 'Lufthansa',
            shortName: 'LH',
            aircraftId: 1
        },
        price: {
            seatReservationSurcharge: 15,
            classPrices: [
                { flightClass: 'economy', amount: 99 },
                { flightClass: 'business', amount: 299 }
            ]
        }
    };

const meta: Meta<FlightSidePanel> = {
    title: 'Blocks/Flight Side Panel',
    component: FlightSidePanel,
    tags: ['autodocs'],
    args: { flight: testData },
};

export default meta;
type Story = StoryObj<FlightSidePanel>;

export const Basic: Story = {};