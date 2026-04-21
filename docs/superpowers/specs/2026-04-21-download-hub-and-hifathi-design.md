# Download Hub And Hifathi Design

## Summary

Update the public House Aurelius website so the download experience supports all current platforms instead of a single generic APK card. Add `Hifathi` as a first-class platform alongside `HAES`, `HAPOS`, `HARE`, and `Church-lib`, with consistent visibility on the home page, detail routing, and download page.

## Goals

- Replace the current one-app Android download block with a platform-tabbed download hub.
- Show one tab per platform: `HAES`, `HAPOS`, `HARE`, `Church-lib`, and `Hifathi`.
- Support the Android Google Drive downloads already provided by the user.
- Add `Hifathi` to the shared platform catalog so it appears everywhere the existing platforms do.
- Keep styling consistent with the current site rather than introducing a new visual system.

## Non-Goals

- Adding Windows, macOS, Linux, or iOS builds right now.
- Changing the top-level site navigation structure.
- Redesigning unrelated pages or app-detail layouts beyond the content required for `Hifathi`.
- Building backend download analytics or release management tooling.

## User Inputs Confirmed

- `Hifathi` is a full platform and should appear everywhere the existing platforms appear now.
- `Hifathi` purpose: tracking income, expenses, and giving advice on how users can manage income.
- `Hifathi` also includes a marketplace for users.
- `Hifathi` public webpage: `https://hifathi.vercel.app`
- Download links currently available are Android Google Drive links for all five platforms.

## Current State

The site currently stores platform metadata in `src/data/content.js`, renders the platform catalog from that shared data, and uses a dedicated `DownloadPage.jsx` that only exposes a single Android APK card via `apkInfo`. The homepage stats also assume four connected platforms and four business verticals.

## Recommended Approach

Use platform-level tabs on the download page and keep the current card-based site language underneath each tab. This matches the user request for "download tabs," keeps the page compact, and leaves room to add more operating systems under each platform later without restructuring the page again.

## Architecture

### Shared content model

Move download metadata into the same shared content layer that already powers the public platform catalog. Each platform entry should own its own download information so:

- the download page can render from `platformApps`
- the app detail page can stay aligned with the same platform source of truth
- new platforms can be added once instead of being repeated across separate page-specific constants

### Download page rendering

The download page should:

- read all platform download entries from shared content
- render a platform tab bar from the available apps
- store the selected platform tab in local component state
- show a focused download panel for the active tab

The active panel should show:

- platform name
- short description
- available Android build
- download button
- note that more platforms or installers can be added later when available

### Direct Google Drive downloads

The supplied URLs are share/view links. The UI should use direct-download URLs derived from the Drive file IDs so clicking the button starts a download flow instead of opening the preview screen when possible.

Expected URL form:

`https://drive.google.com/uc?export=download&id=<FILE_ID>`

## Data Design

Each platform record in `platformApps` should include enough download metadata for the tabbed download page. The design should support one or more installers later, but right now only Android entries are required.

Recommended shape:

```js
download: {
  android: {
    label: 'Android APK',
    url: 'direct-download-url'
  }
}
```

For `Hifathi`, add a full platform object with:

- `id`
- `name`
- `fullName`
- `description`
- `url`
- `marketplaceUrl`
- `image`
- `overview`
- `modules`
- `audience`
- `landing`
- `download`

The content tone should match the existing platform entries: practical, vertical-specific, and operational rather than generic marketing language.

## UI Design

### Download page

Keep the page centered and consistent with the current visual system.

Add:

- page heading for the download hub
- short supporting text explaining platform-specific Android downloads
- horizontal tab row that wraps cleanly on mobile
- one download panel for the active platform

The selected tab should be visually distinct using the site accent colors already used for buttons and navigation pills. On narrow screens, tabs should wrap without horizontal scrolling being required.

### Hifathi platform card and detail page

`Hifathi` should appear in:

- the homepage "Connected Platforms" grid
- its own app detail route via `AppDetailPage`
- the download hub tabs

Its detail page should mirror the structure already used by other platforms, including:

- headline
- subtext
- value block
- capability cards
- highlights
- impact metrics
- story blocks
- conversion copy

## Content Direction For Hifathi

`Hifathi` should be presented as a personal finance platform for African users who want structured control over income, expenses, budgeting advice, and marketplace participation.

Suggested capability themes:

- income tracking
- expense management
- personal finance advice
- spending visibility and budgeting
- marketplace access

Suggested audience themes:

- individuals
- families
- side-hustle earners
- small traders
- budget-conscious households

## Public Stats Updates

Update the shared public stats so the site reflects the new platform count and vertical list.

Expected changes:

- `Platforms Connected`: `5`
- `Business Verticals`: include personal finance alongside the existing sectors

If any API-backed aggregate metrics remain unchanged, the fallback values should still be correct when public metrics cannot load.

## Error Handling

- If a platform has no download metadata, the download page should avoid rendering a broken action for that platform.
- If only Android is available, the UI should say only Android is available rather than implying missing installers are broken.
- Drive link conversion should be deterministic from the supplied share URLs. If a file ID cannot be parsed, the original URL can remain as a safe fallback.

## Testing Strategy

Implementation should be driven by tests before production code changes.

Coverage should verify:

- `Hifathi` appears in the shared platform data
- the homepage platform count grows from four to five entries
- the download page renders one tab per platform
- selecting a tab updates the visible platform download content
- each Android download button uses a direct-download URL
- fallback stats reflect five connected platforms and include the personal finance vertical

If the current project has no component test setup, the work may begin by adding the smallest practical test coverage for the shared content helpers and the download tab behavior.

## Implementation Notes

- Prefer deriving the download page from `platformApps` instead of maintaining a separate `apkInfo` singleton.
- Keep edits scoped to the website content and styling files plus any new test files.
- Do not touch unrelated Android asset changes already present in the working tree.

## Acceptance Criteria

- The homepage shows five connected platforms including `Hifathi`.
- `Hifathi` has a fully populated detail page and opens via the existing platform routing.
- The download page shows tabs for `HAES`, `HAPOS`, `HARE`, `Church-lib`, and `Hifathi`.
- Each tab exposes the correct Android download button wired to the provided Google Drive file.
- Shared Drive links are converted to direct-download links when possible.
- The site styling remains visually consistent with the existing public website.

## Risks And Mitigations

### Risk: tab UI feels heavy on mobile

Mitigation: use compact pill-style tabs that wrap onto multiple lines and keep only one content panel visible at a time.

### Risk: inconsistent platform content quality for Hifathi

Mitigation: follow the structure and tone already established for the existing four platform entries and keep copy operationally specific.

### Risk: direct-download URL parsing fails for unexpected Drive link formats

Mitigation: implement parsing for the standard `/file/d/<id>/view` format and fall back to the original URL if parsing fails.

## Assumptions

- Only Android downloads are available at this time.
- The user wants "tabs" specifically on the download page, not in the main site navigation.
- `Hifathi` should be treated exactly like the existing platform entries in public-facing discovery and detail flows.
