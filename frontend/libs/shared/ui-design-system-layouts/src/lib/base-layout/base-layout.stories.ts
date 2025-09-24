import { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from '@storybook/angular';
import { BaseLayout } from "./base-layout";

const meta: Meta<BaseLayout> = {
    title: 'Layouts/Base Layout',
    component: BaseLayout,
    tags: ['autodocs'],
    args: {
      title: 'View Name',
     }
};

export default meta;
type Story = StoryObj<BaseLayout>;

export const Basic: Story = {
    render: (args) => ({
        props: args,
        template:`
          <ds-base-layout ${argsToTemplate(args)}>
            <div content style="background-color: var(--primary-block-color); text-align: center; line-height: 250px;">Content</div>
          </ds-base-layout>
        `
      })
};

