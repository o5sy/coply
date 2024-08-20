import resolveConfig from 'tailwindcss/resolveConfig';
import customConfig from 'tailwind.config';

const fullConfig = resolveConfig(customConfig);

export const getScreenSize = (): Record<
  'sm' | 'md' | 'lg' | 'xl' | 'doubleXl',
  string
> => {
  return {
    ...fullConfig.theme.screens,
    doubleXl: fullConfig.theme.screens['2xl'],
  };
};
