import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { argsToTemplate } from '@storybook/angular';
import { DataTable } from "./data-table";
import { DataTableStringItem } from "./data-table-string-item";
import { DataTableDateItem } from "./data-table-date-item";
import { DataTableSuccessItem } from "./data-table-success-item";

const testData = [{
        id: 1,
        from: 'Munich',
        to: 'Berlin',
        date: '2024-11-26T08:16',
        onTime: false
    }, {
        id: 2,
        from: 'Berlin',
        to: 'Munich',
        date: '2024-11-27T08:16',
        onTime: true
    }, {
        id: 3,
        from: 'Hamburg',
        to: 'Vienna',
        date: '2024-11-28T08:16',
        onTime: false
    }, {
        id: 4,
        from: 'Frankfurt',
        to: 'London',
        date: '2024-11-29T08:16',
        onTime: true
    }];

const meta: Meta<DataTable> = {
    title: 'Elements/Data Table',
    component: DataTable,
    subcomponents: {
      DataTableStringItem, 
      DataTableDateItem,
      DataTableSuccessItem
    },
    decorators: [
        moduleMetadata({ imports: [
          DataTable, 
          DataTableStringItem, 
          DataTableDateItem,
          DataTableSuccessItem
        ]})
      ],
    tags: ['autodocs'],
    args: { dataSource: testData },
};

export default meta;
type Story = StoryObj<DataTable>;

export const Basic: Story = {
    render: (args) => ({
        props: args,
        template:`
          <ds-data-table ${argsToTemplate(args)}>
            <ds-data-table-string-item label="From" key="from" />
            <ds-data-table-string-item label="To" key="to" />
          </ds-data-table>
        `
      })
};

export const WithDateItem: Story = {
    render: (args) => ({
        props: args,
        template:`
          <ds-data-table ${argsToTemplate(args)}>
            <ds-data-table-string-item label="From" key="from" />
            <ds-data-table-string-item label="To" key="to" />
            <ds-data-table-date-item label="Date" key="date" />
          </ds-data-table>
        `
      })
};

export const WithDateAndSuccessItem: Story = {
  render: (args) => ({
      props: args,
      template:`
        <ds-data-table ${argsToTemplate(args)}>
          <ds-data-table-string-item label="ID" key="id" />
          <ds-data-table-string-item label="From" key="from" />
          <ds-data-table-string-item label="To" key="to" />
          <ds-data-table-date-item label="Date" key="date" />
          <ds-data-table-success-item label="On Time" key="onTime" />
        </ds-data-table>
      `
    })
};