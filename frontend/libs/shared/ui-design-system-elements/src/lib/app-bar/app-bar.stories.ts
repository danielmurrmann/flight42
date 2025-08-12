import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { AppBar } from "./app-bar";
import { matHomeOutline, matRestorePageOutline, matSettingsOutline } from '@ng-icons/material-icons/outline';
import { provideIcons } from "@ng-icons/core";

const meta: Meta<AppBar> = {
    title: 'Elements/App Bar',
    component: AppBar,
    decorators: [
        moduleMetadata({
            providers: [ provideIcons( { matHomeOutline, matRestorePageOutline, matSettingsOutline }) ]
        })
    ],
    tags: ['autodocs'],
    args: { 
        title: 'App or View Title'
    }
};

export default meta;
type Story = StoryObj<AppBar>;

export const TitleOnly: Story = {};

export const WithActions: Story = {
    args: {
        ...TitleOnly.args,
        items: [
            { type: 'action', iconName: 'matHomeOutline', tap: () => undefined },
            { type: 'action', iconName: 'matRestorePageOutline', tap: () => undefined },
            { type: 'action', iconName: 'matSettingsOutline', tap: () => undefined },
        ]
    }
}

export const WithActionsAndSearch: Story = {
    args: {
        ...TitleOnly.args,
        items: [
            { type: 'search', placeholder: 'Search for...', executeSearch: () => undefined },
            { type: 'action', iconName: 'matHomeOutline', tap: () => undefined },
            { type: 'action', iconName: 'matRestorePageOutline', tap: () => undefined },
            { type: 'action', iconName: 'matSettingsOutline', tap: () => undefined },
        ]
    }
}

