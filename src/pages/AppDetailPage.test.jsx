import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
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

    expect(
      screen.getByRole('heading', { level: 1, name: 'Hifathi Personal Finance' }),
    ).toBeInTheDocument()
    const openLinks = screen.getAllByRole('link', { name: 'Open Hifathi' })
    expect(openLinks.length).toBeGreaterThan(0)
    openLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://hifathi.vercel.app')
    })
  })
})
