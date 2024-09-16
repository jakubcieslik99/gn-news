import { it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import render from '../test-utils'
import HomeScreen from '../../screens/HomeScreen'

it('renders home screen when the route matches', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <HomeScreen />
    </MemoryRouter>,
  )

  const homeScreenElement = screen.getByTestId('home-screen')
  expect(homeScreenElement).toBeDefined()
})
