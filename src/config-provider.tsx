import { Context, initialTheme } from './context';

interface Props {
  theme?: {
    colorPrimary?: string;
  };
  children: React.ReactNode;
}

export const ConfigProvider = ({ theme = {}, children }: Props) => {
  return (
    <Context.Provider
      value={{
        theme: {
          ...initialTheme,
          ...theme,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
