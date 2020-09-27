import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Footer } from '.';

const Template: Story = (args) => <Footer {...args} />;

export default {
  title: 'organisms/Footer',
  component: Footer,
} as Meta;

export const Test = Template.bind({});
Test.args = { width: '3px', height: '5px', margin: '0' };
