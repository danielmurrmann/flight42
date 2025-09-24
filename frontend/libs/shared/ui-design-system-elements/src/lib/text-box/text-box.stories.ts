import { Meta, StoryObj } from "@storybook/angular";
import { TextBox } from "./text-box";

const meta: Meta<TextBox> = {
    title: 'Elements/Text Box',
    component: TextBox,
    tags: ['autodocs'],
    args: { 
        name: 'textBox',
        label: 'A Text Box'
    },
};

export default meta;
type Story = StoryObj<TextBox>;

export const Basic: Story = {};

export const WithErrorHint: Story = {
    args: {
        errorHint: 'Error hint text'
    }
};