import { describe, expect, it } from 'vitest'
import { extractGoogleDriveFileId, toGoogleDriveDownloadUrl } from './googleDrive'

describe('extractGoogleDriveFileId', () => {
  it('reads the file id from a standard Google Drive share URL', () => {
    expect(
      extractGoogleDriveFileId(
        'https://drive.google.com/file/d/1m9MgjzW0J6x0PGead_Z-DOM9EBnakUWa/view?usp=drivesdk',
      ),
    ).toBe('1m9MgjzW0J6x0PGead_Z-DOM9EBnakUWa')
  })

  it('returns null for a non-Drive URL', () => {
    expect(extractGoogleDriveFileId('https://example.com/app.apk')).toBeNull()
  })
})

describe('toGoogleDriveDownloadUrl', () => {
  it('converts a share URL into a direct download URL', () => {
    expect(
      toGoogleDriveDownloadUrl(
        'https://drive.google.com/file/d/1CPpTkz2ssaVWs9Ev9bMu8oeRQOueCINH/view?usp=drivesdk',
      ),
    ).toBe('https://drive.google.com/uc?export=download&id=1CPpTkz2ssaVWs9Ev9bMu8oeRQOueCINH')
  })

  it('falls back to the original URL when parsing fails', () => {
    expect(toGoogleDriveDownloadUrl('https://example.com/app.apk')).toBe(
      'https://example.com/app.apk',
    )
  })
})
