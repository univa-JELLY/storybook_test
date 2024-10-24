import type { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton.component";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    selected: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const SelectedTrue: Story = {
  args: {
    selected: true,
    disabled: false,
    children: "Radio Button",
  },
};

export const SelectedFalse: Story = {
  args: {
    selected: false,
    disabled: false,
    children: "Radio Button",
  },
};

export const Disabled: Story = {
  args: {
    selected: false,
    disabled: true,
    children: "Radio Button",
  },
};
