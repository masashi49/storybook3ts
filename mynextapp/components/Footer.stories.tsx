import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const snsMapping = Template.bind({});
snsMapping.args = {
  sns: ['Jane Doe', 'hello', 'hello', 'hello', 'hello'],
};

export const snsMapping2 = Template.bind({});
snsMapping2.args = {
  sns: ['車', '家'],
};
