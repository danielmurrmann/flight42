import { Meta, StoryObj } from "@storybook/angular";
import { FlightInfoDto } from "@flight42/flight-domain";
import { FlightCard } from "./flight-card";

const testData: FlightInfoDto = {
        id: 1,
        from: 'Munich',
        to: 'Berlin',
        date: '2024-11-26T08:16',
        delay: 20
    };

const meta: Meta<FlightCard> = {
    title: 'Elements/Flight Card',
    component: FlightCard,
    tags: ['autodocs'],
    args: { flight: testData },
};

export default meta;
type Story = StoryObj<FlightCard>;

export const Basic: Story = {};