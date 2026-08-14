# Download Hub And Hifathi Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a platform-tabbed Android download hub and introduce Hifathi as a full platform across the public House Aurelius website.

**Architecture:** Keep platform discovery, app detail routing, and download data driven from the shared `platformApps` source of truth. Add a small Google Drive helper for direct-download URLs, then build the download tabs from shared platform metadata so future installers can be added without another page rewrite.

**Tech Stack:** React 19, React Router 7, Vite 8, Vitest, Testing Library, jsdom

---

### Task 1: Add a Minimal React Test Harness

**Files:**
- Modify: `package.json`
- Modify: `vite.config.js`
- Create: `src/test/setup.js`

- [ ] **Step 1: Write the failing test/tooling expectation**

Add the test script wiring first so running tests has a defined command surface.

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

- [ ] **Step 2: Run test command to verify the setup fails before dependencies/config exist**

Run: `npm test`

Expected: failure complaining that `vitest` is not installed or that the test configuration is missing.

- [ ] **Step 3: Add the minimal test dependencies and config**

Update `package.json` devDependencies and `vite.config.js` test settings:

```json
{
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@testing-library/user-event": "^14.5.2",
    "jsdom": "^25.0.1",
    "vitest": "^2.1.8"
  }
}
```

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
})
```

```js
import '@testing-library/jest-dom/vitest'
```

- [ ] **Step 4: Install dependencies and run tests to verify the harness works**

Run: `npm install`

Then run: `npm test`

Expected: Vitest starts successfully and reports no tests found yet, or a clean pass once later test files are added.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vite.config.js src/test/setup.js
git commit -m "test: add vitest harness for public site"
```

### Task 2: Add Google Drive Download Helpers

**Files:**
- Create: `src/utils/googleDrive.js`
- Create: `src/utils/googleDrive.test.js`

- [ ] **Step 1: Write the failing helper tests**

```js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/utils/googleDrive.test.js`

Expected: FAIL because `src/utils/googleDrive.js` does not exist yet.

- [ ] **Step 3: Write the minimal helper implementation**

```js
const GOOGLE_DRIVE_FILE_RE = /\/file\/d\/([^/]+)\//

export function extractGoogleDriveFileId(url) {
  const match = url.match(GOOGLE_DRIVE_FILE_RE)
  return match ? match[1] : null
}

export function toGoogleDriveDownloadUrl(url) {
  const fileId = extractGoogleDriveFileId(url)
  return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : url
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/utils/googleDrive.test.js`

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/utils/googleDrive.js src/utils/googleDrive.test.js
git commit -m "feat: add google drive download helpers"
```

### Task 3: Extend Shared Platform Data With Hifathi And Downloads

**Files:**
- Modify: `src/data/content.js`
- Create: `src/data/content.test.js`
- Use: `src/utils/googleDrive.js`

- [ ] **Step 1: Write the failing shared-content tests**

```js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/data/content.test.js`

Expected: FAIL because `Hifathi` and the new stats are not present yet.

- [ ] **Step 3: Write the minimal shared-data implementation**

Update `src/data/content.js` to:

```js
import { toGoogleDriveDownloadUrl } from '../utils/googleDrive'
```

Add `download.android` entries to existing platforms using `toGoogleDriveDownloadUrl(...)`, update `publicStats` to five platforms, and add a full `hifathi` platform object with:

```js
{
  id: 'hifathi',
  name: 'Hifathi',
  fullName: 'Hifathi Personal Finance',
  description: 'Personal finance platform for income, expenses, money advice, and marketplace access.',
  url: 'https://hifathi.vercel.app',
  marketplaceUrl: 'https://hifathi.vercel.app',
  download: {
    android: {
      label: 'Android APK',
      url: toGoogleDriveDownloadUrl(
        'https://drive.google.com/file/d/1ZVb6iK_HyRmc4lNefD4E_TDyxHLewtyu/view?usp=drivesdk',
      ),
    },
  },
}
```

Fill in the rest of the Hifathi fields using the same structure already used by the other platforms.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/data/content.test.js`

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/data/content.js src/data/content.test.js
git commit -m "feat: add Hifathi platform and shared download data"
```

### Task 4: Build The Download Tabs UI

**Files:**
- Modify: `src/pages/DownloadPage.jsx`
- Modify: `src/App.css`
- Create: `src/pages/DownloadPage.test.jsx`

- [ ] **Step 1: Write the failing download-page tests**

```jsx
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DownloadPage } from './DownloadPage'

describe('DownloadPage', () => {
  it('renders a tab for every platform with an Android download', () => {
    render(
      <MemoryRouter>
        <DownloadPage />
      </MemoryRouter>,
    )

    expect(screen.getByRole('button', { name: 'HAES' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'HAPOS' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'HARE' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Church-lib' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Hifathi' })).toBeInTheDocument()
  })

  it('switches the active panel when a platform tab is clicked', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <DownloadPage />
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('button', { name: 'Hifathi' }))

    expect(screen.getByRole('heading', { name: /Hifathi/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Download Android APK/i })).toHaveAttribute(
      'href',
      'https://drive.google.com/uc?export=download&id=1ZVb6iK_HyRmc4lNefD4E_TDyxHLewtyu',
    )
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/pages/DownloadPage.test.jsx`

Expected: FAIL because the current page only renders one generic APK card.

- [ ] **Step 3: Write the minimal download-tab implementation**

Replace the single `apkInfo` dependency with tabbed rendering based on `platformApps`:

```jsx
import { useMemo, useState } from 'react'
import { platformApps } from '../data/content'

export function DownloadPage() {
  const downloadableApps = useMemo(
    () => platformApps.filter((app) => app.download?.android?.url),
    [],
  )
  const [activeId, setActiveId] = useState(downloadableApps[0]?.id ?? null)
  const activeApp = downloadableApps.find((app) => app.id === activeId) ?? downloadableApps[0]

  return (
    <section className="section download">
      <h1>Download House Aurelius Apps</h1>
      <div className="download-tabs">
        {downloadableApps.map((app) => (
          <button
            key={app.id}
            type="button"
            className={`download-tab${app.id === activeApp.id ? ' active' : ''}`}
            onClick={() => setActiveId(app.id)}
          >
            {app.name}
          </button>
        ))}
      </div>
      <div className="download-card">
        <p className="tag">{activeApp.name}</p>
        <h2>{activeApp.fullName}</h2>
        <p className="muted">{activeApp.description}</p>
        <p><strong>Available build:</strong> {activeApp.download.android.label}</p>
        <p><strong>Platform:</strong> Android</p>
        <p><strong>Web app:</strong> {activeApp.url}</p>
      </div>
      <a className="button primary top-space" href={activeApp.download.android.url} target="_blank" rel="noreferrer">
        Download Android APK
      </a>
    </section>
  )
}
```

Add matching `.download-tabs` and `.download-tab` styles in `src/App.css`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/pages/DownloadPage.test.jsx`

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/pages/DownloadPage.jsx src/pages/DownloadPage.test.jsx src/App.css
git commit -m "feat: add platform tabs to download page"
```

### Task 5: Verify Hifathi Flows Through Existing Platform Routing

**Files:**
- Create: `src/pages/AppDetailPage.test.jsx`
- Rely on: `src/data/content.js`

- [ ] **Step 1: Write the failing route/detail test**

```jsx
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { AppDetailPage } from './AppDetailPage'

describe('AppDetailPage', () => {
  it('renders the Hifathi detail page from the shared platform route', () => {
    render(
      <MemoryRouter initialEntries={['/apps/hifathi']}>
        <Routes>
          <Route path="/apps/:appId" element={<AppDetailPage />} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: /Hifathi/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Open Hifathi/i })).toHaveAttribute(
      'href',
      'https://hifathi.vercel.app',
    )
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/pages/AppDetailPage.test.jsx`

Expected: FAIL because the `hifathi` platform record does not yet exist or is incomplete.

- [ ] **Step 3: Write the minimal implementation**

No separate routing code should be needed if the shared `platformApps` entry is complete. If the test still fails, fix the Hifathi content fields in `src/data/content.js` so:

```js
{
  id: 'hifathi',
  name: 'Hifathi',
  url: 'https://hifathi.vercel.app',
  landing: {
    headline: 'Take Control of Income, Expenses, and Everyday Decisions',
    // ...
  },
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/pages/AppDetailPage.test.jsx`

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/pages/AppDetailPage.test.jsx src/data/content.js
git commit -m "test: verify Hifathi detail route"
```

### Task 6: Final Verification

**Files:**
- Verify: `package.json`
- Verify: `src/data/content.js`
- Verify: `src/pages/DownloadPage.jsx`
- Verify: `src/App.css`

- [ ] **Step 1: Run the full test suite**

Run: `npm test`

Expected: all tests pass with 0 failures.

- [ ] **Step 2: Run lint**

Run: `npm run lint`

Expected: clean exit with 0 errors.

- [ ] **Step 3: Run production build**

Run: `npm run build`

Expected: Vite build succeeds and writes the production bundle to `dist/`.

- [ ] **Step 4: Review diff for scope**

Run: `git diff -- src package.json vite.config.js docs/superpowers/plans`

Expected: only the download flow, Hifathi platform content, test harness, tests, and styles are changed.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vite.config.js src docs/superpowers/plans
git commit -m "feat: add download hub and Hifathi platform"
```
