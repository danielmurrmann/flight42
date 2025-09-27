import { Meta, StoryObj } from "@storybook/angular";
import { DateTimePicker } from "./date-time-picker";

const meta: Meta<DateTimePicker> = {
    title: 'Elements/Date Time Picker',
    component: DateTimePicker,
    tags: ['autodocs'],
    args: { 
        name: 'dateTimePicker',
        label: 'A Date Time Picker'
    },
};

export default meta;
type Story = StoryObj<DateTimePicker>;

export const Basic: Story = {};

export const WithErrorHint: Story = {
    args: {
        errorHint: 'Error hint text'
    }
};