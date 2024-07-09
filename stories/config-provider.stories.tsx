import type { Meta, StoryObj } from '@storybook/react';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';

import { ConfigProvider as Component, useTheme } from '../src';

const meta = {
  title: 'Components/ConfigProvider',
  component: Component,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const Children = () => {
  const { colorPrimary } = useTheme();

  return (
    <div>
      <div style={{ width: 50, height: 50, backgroundColor: colorPrimary }} />
      <p>You set theme color primary is: {colorPrimary}</p>
    </div>
  );
};

export const ConfigProvider: TypeWithDeepControls<Story> = {
  args: {
    theme: {
      colorPrimary: 'red',
    },
    children: <Children />,
  },
  argTypes: {
    'theme.colorPrimary': {
      control: 'color',
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
