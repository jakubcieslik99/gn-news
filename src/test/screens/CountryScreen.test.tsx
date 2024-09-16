import { it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import render from '../test-utils'
import CountryScreen from '../../screens/CountryScreen'

it('renders country screen when the route matches', () => {
  render(
    <MemoryRouter initialEntries={['/country/us']}>
      <CountryScreen />
    </MemoryRouter>,
  )

  const countryScreenElement = screen.getByTestId('country-screen')
  expect(countryScreenElement).toBeDefined()
})
