import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { DownloadPage } from './DownloadPage'

describe('DownloadPage', () => {
  it('renders a tab for every platform with an Android download', () => {
    render(
      <MemoryRouter>
        <DownloadPage />
      </MemoryRouter>,
    )

    expect(screen.getByRole('tab', { name: 'HAES' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'HAPOS' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'HARE' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Church-lib' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Hifathi' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Mkulima' })).toBeInTheDocument()
  })

  it('switches the active panel when a platform tab is clicked', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <DownloadPage />
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('tab', { name: 'Hifathi' }))

    expect(
      screen.getByRole('heading', { level: 2, name: 'Hifathi Personal Finance' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Download Android APK/i })).toHaveAttribute(
      'href',
      'https://drive.google.com/uc?export=download&id=1ZVb6iK_HyRmc4lNefD4E_TDyxHLewtyu',
    )
  })

  it('shows the Mkulima Android download when the Mkulima tab is selected', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <DownloadPage />
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('tab', { name: 'Mkulima' }))

    expect(screen.getByRole('heading', { level: 2, name: 'Mkulima Farm Management' }))
      .toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Download Android APK/i })).toHaveAttribute(
      'href',
      'https://drive.google.com/uc?export=download&id=1It0ZXCkDi_2BToHEK4xX3T1oyJrQaYfX',
    )
  })
})
