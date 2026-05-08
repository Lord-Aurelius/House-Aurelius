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

  it('includes PIOS as a first-class platform', () => {
    const pios = platformApps.find((app) => app.id === 'pios')
    expect(pios).toMatchObject({
      name: 'PIOS',
      url: 'https://pios-three.vercel.app',
    })
    expect(pios.modules).toContain('IEBC data uploads for GIS political mapping')
    expect(pios.landing.capabilities.map((item) => item.title)).toContain('AI Analytics')
  })

  it('stores Android download links for platforms with released mobile builds', () => {
    expect(platformApps).toHaveLength(7)
    const androidDownloads = platformApps.filter((app) => app.download?.android)
    expect(androidDownloads).toHaveLength(6)
    expect(androidDownloads.every((app) => app.download.android.url)).toBe(true)
  })
})

describe('publicStats', () => {
  it('reflects seven connected platforms and the political analytics vertical', () => {
    expect(publicStats).toContainEqual({ label: 'Platforms Connected', value: '7' })
    expect(publicStats).toContainEqual({
      label: 'Business Verticals',
      value:
        'Education, POS, Real Estate, Church, Personal Finance, Agriculture, Political Analytics',
    })
  })
})
