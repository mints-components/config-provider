import { createContext } from 'react';

export const initialTheme = {
  colorPrimary: '#292b3f',
};

export const Context = createContext<{
  theme: {
    colorPrimary: string;
  };
}>({
  theme: initialTheme,
});
