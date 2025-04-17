import type { Meta, StoryObj } from "@storybook/react";
import { SortableList } from "./index";
import { fn } from "@storybook/test";

const meta = {
  title: "SortableList",
  component: SortableList.Root,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: { onChange: fn() },
} satisfies Meta<typeof SortableList.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <SortableList.Item id={0}>
        <>Item 1</>
      </SortableList.Item>,
      <SortableList.Item id={5}>
        <>Item 2</>
      </SortableList.Item>,
      <SortableList.Item id={2}>
        <>Item 3</>
      </SortableList.Item>,
      <SortableList.Item id={3}>
        <>Item 4</>
      </SortableList.Item>,
    ],
  },
};
