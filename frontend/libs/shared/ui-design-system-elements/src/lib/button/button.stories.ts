import { Meta, StoryObj } from "@storybook/angular";
import { Button } from "./button";

const meta: Meta<Button> = {
    title: 'Elements/Button',
    component: Button,
    tags: ['autodocs'],
    args: { 
        label: 'Click me!',
     },
};

export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {};