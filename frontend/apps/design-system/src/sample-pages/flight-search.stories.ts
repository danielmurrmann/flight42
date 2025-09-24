import { Meta, StoryObj } from "@storybook/angular";
import { FlightSearch } from "./flight-search";

const meta: Meta<FlightSearch> = {
    title: 'Pages/Flight Search',
    component: FlightSearch,
    tags: ['autodocs'],
    args: { }
};

export default meta;
type Story = StoryObj<FlightSearch>;

export const Basic: Story = {};