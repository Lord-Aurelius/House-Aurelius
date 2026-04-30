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

  it('includes Mkulima as a first-class platform', () => {
    const mkulima = platformApps.find((app) => app.id === 'mkulima')
    expect(mkulima).toMatchObject({
      name: 'Mkulima',
      url: 'https://mkulima-three.vercel.app',
    })
    expect(mkulima.modules).toContain('QR-based care tracking for animals and plants')
  })

  it('stores Android download links for every public platform', () => {
    expect(platformApps).toHaveLength(6)
    expect(platformApps.every((app) => app.download?.android?.url)).toBe(true)
  })
})

describe('publicStats', () => {
  it('reflects six connected platforms and the agriculture vertical', () => {
    expect(publicStats).toContainEqual({ label: 'Platforms Connected', value: '6' })
    expect(publicStats).toContainEqual({
      label: 'Business Verticals',
      value: 'Education, POS, Real Estate, Church, Personal Finance, Agriculture',
    })
  })
})
