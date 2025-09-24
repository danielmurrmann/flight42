import { Meta, StoryObj } from "@storybook/angular";
import { FlightInfoDto } from "@flight42/flight-domain";
import { FlightList } from "./flight-list";

const testData: FlightInfoDto[] = [{
        id: 1,
        from: 'Munich',
        to: 'Berlin',
        date: '2024-11-26T08:16',
        delay: null
    }, {
        id: 2,
        from: 'Berlin',
        to: 'Munich',
        date: '2024-11-27T08:16',
        delay: 15
    }, {
        id: 3,
        from: 'Hamburg',
        to: 'Vienna',
        date: '2024-11-28T08:16',
        delay: null
    }, {
        id: 4,
        from: 'Frankfurt',
        to: 'London',
        date: '2024-11-29T08:16',
        delay: 20
    }];

const meta: Meta<FlightList> = {
    title: 'Blocks/Flight List',
    component: FlightList,
    tags: ['autodocs'],
    args: { data: testData },
};

export default meta;
type Story = StoryObj<FlightList>;

export const Basic: Story = {};