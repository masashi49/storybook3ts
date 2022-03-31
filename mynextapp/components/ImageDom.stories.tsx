import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ImageDom } from './ImageDom';

export default {
  title: 'Example/ImageDom',
  component: ImageDom,
} as ComponentMeta<typeof ImageDom>;

const Template: ComponentStory<typeof ImageDom> = (args) => <ImageDom {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imgData: {
    src: 'https://iconbu.com/wp-content/uploads/2019/09/01-12.png',
    alt: "画像"
  }
};
