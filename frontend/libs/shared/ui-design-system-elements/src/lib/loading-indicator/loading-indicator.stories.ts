import { Meta, StoryObj } from "@storybook/angular";
import { LoadingIndicator } from "./loading-indicator";

const meta: Meta<LoadingIndicator> = {
    title: 'Elements/Loading Indicator',
    component: LoadingIndicator,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<LoadingIndicator>;

export const Primary: Story = {};

export const Animated: Story = {
    args: {
        showLoading: true
    }
};