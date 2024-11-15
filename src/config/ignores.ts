
import type { Config } from '../types'
import {pluginIgnore} from "../plugins";
const GLOB_NODE_MODULES = '**/node_modules' as const
const GLOB_DIST = '**/dist' as const
const GLOB_LOCKFILE = [
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',
]
export const GLOB_EXCLUDE = [
  GLOB_NODE_MODULES,
  GLOB_DIST,
  ...GLOB_LOCKFILE,

  '**/output',
  '**/coverage',
  '**/temp',
  '**/fixtures',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.output',
  '**/.vite-inspect',
  '**/.nitro',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
]
export const ignores: Config[] = [
  {
    ignores: GLOB_EXCLUDE,
    name: 'eqian/global-ignores',
  },
  {
    ...pluginIgnore({ strict: false }),
    name: 'eqian/gitignore',
  },
]
