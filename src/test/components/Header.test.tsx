import { it, expect } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import render from '../../test/test-utils'
import Header from '../../components/header/Header'

describe('Header', () => {
  it('switches the theme on button click', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    const switchThemeButton = screen.getByTestId('switch-theme-button')
    expect(switchThemeButton).toBeInTheDocument()
    expect(document.documentElement).not.toHaveClass('dark')

    fireEvent.click(switchThemeButton)
    expect(document.documentElement).toHaveClass('dark')

    fireEvent.click(switchThemeButton)
    expect(document.documentElement).not.toHaveClass('dark')
  })
})
