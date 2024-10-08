import { it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import render from './test-utils'
import App from '../App'
import HomeScreen from '../screens/HomeScreen'

it('renders header', () => {
  render(<App />)

  const headerElement = screen.getByTestId('header')
  expect(headerElement).toBeDefined()
})

it('renders side menu', () => {
  render(<App />)

  const sideMenuElement = screen.getByTestId('side-menu')
  expect(sideMenuElement).toBeDefined()
})

it('renders footer', () => {
  render(<App />)

  const footerElement = screen.getByTestId('footer')
  expect(footerElement).toBeDefined()
})

it('renders home screen by default', () => {
  render(
    <MemoryRouter>
      <HomeScreen />
    </MemoryRouter>,
  )

  const homeScreenElement = screen.getByTestId('home-screen')
  expect(homeScreenElement).toBeDefined()
})
