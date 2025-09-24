import { Meta, StoryObj } from "@storybook/angular";
import { argsToTemplate } from '@storybook/angular';
import { SearchLayout } from "./search-layout";
import { fn } from "storybook/test";

const meta: Meta<SearchLayout> = {
    title: 'Layouts/Search Layout',
    component: SearchLayout,
    tags: ['autodocs'],
    args: {
      title: 'Search Item Name',
      resetPage: fn()
     }
};

export default meta;
type Story = StoryObj<SearchLayout>;

export const Basic: Story = {
    render: (args) => ({
        props: args,
        template:`
          <ds-search-layout ${argsToTemplate(args)}>
            <div search-criteria style="background-color: var(--primary-block-color); text-align: center; line-height: 150px;">Search Criteria</div>
            <div search-result style="background-color: var(--primary-block-color); text-align: center; line-height: 250px;">Search Result</div>
          </ds-search-layout>
        `
      })
};

export const WithSidePanel: Story = {
    render: (args) => ({
        props: args,
        template:`
          <ds-search-layout ${argsToTemplate(args)}>
            <div search-criteria style="background-color: var(--primary-block-color); text-align: center; line-height: 150px;">Search Criteria</div>
            <div search-result style="background-color: var(--primary-block-color); text-align: center; line-height: 450px;">Search Result</div>
            <div side-panel style="background-color: var(--primary-block-color); text-align: center; line-height: 621px;">Side Panel</div>
          </ds-search-layout>
        `
      })
};

