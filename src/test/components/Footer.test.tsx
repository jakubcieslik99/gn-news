import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import render from '../../test/test-utils'
import Footer from '../../components/footer/Footer'
import appStore from '../../features/store'

describe('Footer', () => {
  it('should render Footer component in Polish language with counter set to 0', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
      {
        preloadedState: {
          appSettings: {
            ...appStore.getState().appSettings,
            language: 'pl',
          },
          getHomeNews: appStore.getState().getHomeNews,
          getCountryNews: appStore.getState().getCountryNews,
        },
      }
    )

    expect(screen.getByText('Wyświetlane newsy:')).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('should render Footer component in English language with counter set to 1', () => {
    const mockResult = {
      title: 'Test title',
      description: 'Test description',
      link: 'https://www.example.com',
      pubDate: '2023-03-30 12:00:00',
      image_url: 'https://www.example.com/image.jpg',
    }

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
      {
        preloadedState: {
          appSettings: {
            ...appStore.getState().appSettings,
            language: 'en',
          },
          getHomeNews: {
            ...appStore.getState().getHomeNews,
            results: [mockResult],
          },
          getCountryNews: appStore.getState().getCountryNews,
        },
      }
    )

    expect(screen.getByText('Displayed news:')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
