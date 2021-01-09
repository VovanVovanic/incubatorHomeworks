import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import HW12 from "../p2-homeworks/h12/HW12";
import { ReduxHWProviderDecorator } from "./decorators/reduxHW12";

export default {
  title: "Tasks/Task 12",
  component: HW12,

  decorators: [ReduxHWProviderDecorator],
  
} as Meta;

const Template: Story = (args) => <HW12 {...args} />;

// const toggleTheme = action('The theme is toggled')

export const HW12Example = Template.bind({});
HW12Example.args = {};