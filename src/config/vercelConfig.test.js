import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

describe('vercel.json', () => {
  it('uses a valid SPA catch-all rewrite source for Vercel', () => {
    const config = JSON.parse(readFileSync(resolve('vercel.json'), 'utf8'))

    expect(config.rewrites).toContainEqual({
      source: '/(.*)',
      destination: '/',
    })
    expect(config.rewrites.some((rewrite) => rewrite.source === '/**')).toBe(false)
  })
})
