import { argsToTemplate, Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { matHomeOutline, matRestorePageOutline, matSettingsOutline } from '@ng-icons/material-icons/outline';
import { provideIcons } from "@ng-icons/core";
import { AppMenu } from "./app-menu";
import { AppMenuItem } from "./app-menu-item";

const meta: Meta<AppMenu> = {
    title: 'Elements/App Menu',
    component: AppMenu,
    subcomponents: {
      AppMenuItem, 
    },
    decorators: [
        moduleMetadata({
            imports: [ AppMenuItem],
            providers: [ provideIcons( { matHomeOutline, matRestorePageOutline, matSettingsOutline }) ]
        })
    ],
    tags: ['autodocs'],
    args: { 
        appTitle: 'App Title'
    }
};

export default meta;
type Story = StoryObj<AppMenu>;

export const TitleOnly: Story = {};

export const WithItems: Story = {
render: (args) => ({
      props: args,
      template:`
        <ds-app-menu ${argsToTemplate(args)}>
          <ds-app-menu-item label="Home" iconName="matHomeOutline" />
          <ds-app-menu-item label="Restore" iconName="matRestorePageOutline" />
          <ds-app-menu-item label="Settings" iconName="matSettingsOutline" />
        </ds-app-menu>
      `
    })
}

