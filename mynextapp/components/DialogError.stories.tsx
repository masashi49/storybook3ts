import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DialogError } from './DialogError';

export default {
  title: 'Dialog/DialogError',
  component: DialogError,
} as ComponentMeta<typeof DialogError>;

const Template: ComponentStory<typeof DialogError> = (args) => <DialogError {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  error: "エラーです"
};

export const Succese = Template.bind({});
Succese.args = {
  error: "成功です"
};
