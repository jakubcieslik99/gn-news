import { it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import render from '../test-utils'
import NotFound from '../../components/universal/NotFound'

it('renders not found component for unknown route', () => {
  render(
    <MemoryRouter initialEntries={['/unknown']}>
      <NotFound />
    </MemoryRouter>
  )

  const notFoundElement = screen.getByTestId('not-found')
  expect(notFoundElement).toBeInTheDocument()
})
