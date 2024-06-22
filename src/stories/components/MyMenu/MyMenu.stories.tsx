import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MyMenu } from "./MyMenu";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/MyMenu",
  component: MyMenu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: { control: "text" },
    handleClick: { actions: { argTypesRegex: "^on.*" } },
    products: { control: "object" },
    placement: {
      control: {
        type: "select",
        options: ["top", "bottom", "middle"],
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { handleClick: fn() },
} satisfies Meta<typeof MyMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "Buy",
    products: [
      {
        name: "Product 1",
        description: "Description 1",
        price: 100,
        tags: ["tag1", "tag2"],
      },
      {
        name: "Product 2",
        price: 200,
        tags: ["tag3", "tag4"],
      },
      {
        name: "Product 3",
        tags: ["tag3", "tag4"],
      },
      {
        name: "Product 4",
        description: "Description 4",
      },
    ],
    placement: "top",
  },
};
