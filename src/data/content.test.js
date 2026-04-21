import { describe, expect, it } from 'vitest'
import { platformApps, publicStats } from './content'

describe('platformApps', () => {
  it('includes Hifathi as a first-class platform', () => {
    const hifathi = platformApps.find((app) => app.id === 'hifathi')
    expect(hifathi).toMatchObject({
      name: 'Hifathi',
      url: 'https://hifathi.vercel.app',
    })
  })

  it('stores Android download links for every public platform', () => {
    expect(platformApps).toHaveLength(5)
    expect(platformApps.every((app) => app.download?.android?.url)).toBe(true)
  })
})

describe('publicStats', () => {
  it('reflects five connected platforms and the personal finance vertical', () => {
    expect(publicStats).toContainEqual({ label: 'Platforms Connected', value: '5' })
    expect(publicStats).toContainEqual({
      label: 'Business Verticals',
      value: 'Education, POS, Real Estate, Church, Personal Finance',
    })
  })
})
