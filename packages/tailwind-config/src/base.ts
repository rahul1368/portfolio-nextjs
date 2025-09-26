import type { Config } from 'tailwindcss';
import { config as baseConfig } from './index';

export const config: Config = {
  ...baseConfig,
  // This will be extended by other packages
};

export default config;