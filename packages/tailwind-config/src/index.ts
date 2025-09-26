import type { Config } from 'tailwindcss';
import { colors, spacing, typography } from './tokens';

export const config: Config = {
  content: [],
  theme: {
    extend: {
      colors,
      spacing,
      ...typography,
    },
  },
  plugins: [],
};

export { colors, spacing, typography } from './tokens'
export type { DesignTokens } from './tokens';