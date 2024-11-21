
import type { Config } from '../types'
import {pluginIgnore} from "../plugins";
const IGNORE_NODE_MODULES = '**/node_modules' as const
const IGNORE_DIST = '**/dist' as const
const IGNORE_LOCKFILE = [
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',
]
export const IGNORE_EXCLUDE = [
  IGNORE_NODE_MODULES,
  IGNORE_DIST,
  ...IGNORE_LOCKFILE,

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
    ignores: IGNORE_EXCLUDE,
    name: 'eqian/global-ignores',
  },
  {
    ...pluginIgnore({ strict: false }),
    name: 'eqian/gitignore',
  },
]
