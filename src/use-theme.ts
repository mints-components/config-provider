import { useConfigProvider } from './use-config-provider';

export const useTheme = () => {
  const { theme } = useConfigProvider();
  return theme;
};
