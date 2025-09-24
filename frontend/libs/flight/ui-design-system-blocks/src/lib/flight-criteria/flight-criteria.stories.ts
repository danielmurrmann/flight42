import { Meta, StoryObj } from "@storybook/angular";
import { FlightCriteria } from "./flight-criteria";
import { fn } from "storybook/test";

const meta: Meta<FlightCriteria> = {
    title: 'Blocks/Flight Criteria',
    component: FlightCriteria,
    tags: ['autodocs'],
    args: { 
        criteria: { from: '', to: '' },
        searchFlights: fn()
    },
    argTypes: {
        criteria: { control: 'object' },
        searchFlights: { table: { disable: true } }
    }
};

export default meta;
type Story = StoryObj<FlightCriteria>;

export const Basic: Story = {};