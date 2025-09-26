import type { ShadcnConfig } from './base'
import { baseConfig } from './base'

export const config: ShadcnConfig = {
  ...baseConfig,
  tailwind: {
    ...baseConfig.tailwind,
    config: "@repo/tailwind-config",
  }
}

export { baseConfig } from './base'
export type { ShadcnConfig } from './base'
export default config