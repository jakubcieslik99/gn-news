import { vi, describe, it, expect } from 'vitest'
import { act } from 'react-dom/test-utils'
import render from '../../test/test-utils'
import SingleNewsModal from '../../components/news/SingleNewsModal'

describe('SingleNewsModal', () => {
  const mockResult = {
    title: 'Test title',
    description: 'Test description',
    link: 'https://www.example.com',
    pubDate: '2023-03-30 12:00:00',
    image_url: 'https://www.example.com/image.jpg',
  }

  it('renders correctly when isOpen is true', async () => {
    const setIsOpen = vi.fn()

    const { getByText, getByAltText } = render(<SingleNewsModal isOpen={true} setIsOpen={setIsOpen} result={mockResult} />)

    await act(async () => {
      expect(getByText(mockResult.title)).toBeInTheDocument()
      expect(getByAltText('News_cover')).toBeInTheDocument()
      expect(getByText(mockResult.description)).toBeInTheDocument()
      expect(getByText(mockResult.link)).toHaveAttribute('href', mockResult.link)
      expect(getByText('30.03.2023, 12:00')).toBeInTheDocument()
    })
  })

  it('does not render when isOpen is false', async () => {
    const setIsOpen = vi.fn()
    const { queryByText, queryByAltText } = render(
      <SingleNewsModal isOpen={false} setIsOpen={setIsOpen} result={mockResult} />
    )

    await act(async () => {
      expect(queryByText(mockResult.title)).toBeNull()
      expect(queryByAltText('News_cover')).toBeNull()
      expect(queryByText(mockResult.description)).toBeNull()
      expect(queryByText(mockResult.link)).toBeNull()
      expect(queryByText('30.03.2023, 12:00')).toBeNull()
    })
  })
})
