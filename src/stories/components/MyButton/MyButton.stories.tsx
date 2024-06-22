import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MyButton } from "./MyButton";
import { AddShoppingCart as AddShoppingCartIcon } from "@mui/icons-material";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/MyButton",
  component: MyButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    description: { control: "text" },
    label: { control: "text" },
    onClick: { action: "clicked" },
    price: { control: "text" },
    startIcon: { control: "object" },
    tags: { control: "object" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "Button Text",
    startIcon: <AddShoppingCartIcon />,
    price: 10,
    tags: ["tag1", "tag2"],
    description: "Button description",
  },
};
