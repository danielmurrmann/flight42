import { Meta, StoryObj } from "@storybook/angular";
import { FlightCriteria } from "./flight-criteria";
import { userEvent, within, fn, expect } from "storybook/test";

const meta: Meta<FlightCriteria> = {
    title: 'Blocks/Flight Criteria',
    component: FlightCriteria,
    tags: [],
    args: { 
        criteria: { from: '', to: '' },
        searchFlights: fn()
    },
    argTypes: {
        criteria: { control: 'object' },
        searchFlights: { table: { disable: true } }
    }
};

export default meta;
type Story = StoryObj<FlightCriteria>;

export const Basic: Story = {};

export const WithErrors: Story = {
  args: {
    criteria: {
      from: 'Mu',
      to: 'Be',
    },
  },
};

export const WithoutErrors: Story = {
  args: {
    criteria: {
      from: 'Munich',
      to: 'Berlin',
    },
  },
};

export const WithErrorsViaUserInput: Story = {
    play: async (context) => {
        const canvas = within(context.canvasElement);
        await userEvent.type(canvas.getByLabelText('From'), 'Mu');
        await userEvent.type(canvas.getByLabelText('To'), 'Be');
        await userEvent.click(canvas.getByRole('button', { name: 'Search' }));
        await expect(canvas.getByTestId('error-hint-from')).toBeInTheDocument();
        await expect(canvas.getByTestId('error-hint-to')).toBeInTheDocument();
        await expect(canvas.getByRole('button', { name: 'Search' })).toBeDisabled();
        await expect(context.args.searchFlights).not.toHaveBeenCalled()
      }
};

export const WithoutErrorsViaUserInput: Story = {
    play: async (context) => {
        const canvas = within(context.canvasElement);
        await userEvent.type(canvas.getByLabelText('From'), 'Munich');
        await userEvent.type(canvas.getByLabelText('To'), 'Berlin');
        await userEvent.click(canvas.getByRole('button', { name: 'Search' }));
      }
};
