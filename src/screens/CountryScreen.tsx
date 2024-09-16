import { useRef, useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { AnyAction } from 'redux'
import { scroller } from 'react-scroll'
import { useAppSelector, useAppDispatch } from '../features/store'
import { getCountryNews } from '../features/newsSlices/getCountryNews'
import SingleNewsGrid from '../components/news/SingleNewsGrid'
import SingleNewsList from '../components/news/SingleNewsList'
import SingleNewsModal from '../components/news/SingleNewsModal'
import Error from '../components/universal/Error'
import LoadMoreButton from '../components/news/LoadMoreButton'
import Loader from '../components/universal/Loader'

export default function CountryScreen() {
  const getCountryNewsAbort = useRef<(reason?: string | undefined) => void>()
  const getCountryNewsNextPageAbort = useRef<(reason?: string | undefined) => void>()

  const { displayMode } = useAppSelector(state => state.appSettings)
  const { loading, error, errorMessage, results, nextPage } = useAppSelector(state => state.getCountryNews)
  const dispatch = useAppDispatch()

  const [singleNews, setSingleNews] = useState(null)
  const [showSingleNewsModal, setShowSingleNewsModal] = useState(false)

  const params = useParams()
  const [searchParams] = useSearchParams()

  const showSingleNews = (id: number | null) => {
    if (id && results.length && results[id]) {
      setSingleNews(results[id])
      setShowSingleNewsModal(true)
    } else {
      setShowSingleNewsModal(false)
      setTimeout(() => setSingleNews(null), 200)
    }
  }

  const getCountryNewsNextPage = () => {
    if (params.country && !loading && results.length && nextPage) {
      const getCountryNewsNextPagePromise = dispatch(
        getCountryNews({
          country: params.country,
          category: searchParams.get('category'),
          query: searchParams.get('searching'),
          nextPage,
          fresh: false,
        }) as unknown as AnyAction,
      )
      getCountryNewsNextPageAbort.current = getCountryNewsNextPagePromise.abort
    }
  }

  useEffect(() => {
    if (params.country) {
      const getCountryNewsPromise = dispatch(
        getCountryNews({
          country: params.country,
          category: searchParams.get('category'),
          query: searchParams.get('searching'),
          fresh: true,
        }) as unknown as AnyAction,
      )
      getCountryNewsAbort.current = getCountryNewsPromise.abort
    }
    return () => getCountryNewsAbort.current?.() /**/
  }, [params.country, searchParams, dispatch])

  useEffect(() => {
    if (!loading && results.length) {
      scroller.scrollTo(`result${results.length >= 10 ? results.length - 10 : 0}`, {
        spy: true,
        smooth: 'easeInOutCubic',
        offset: window.innerWidth < 768 ? -197 : -74,
        duration: 500,
      })
    }
  }, [loading, results.length])

  return (
    <div data-testid="country-screen" id="content" className="content">
      <div className="flex flex-col w-full">
        <div className="flex justify-center">
          <Error isOpen={error && errorMessage !== '' ? true : false} message={errorMessage} customStyle="mb-3" />
        </div>

        {displayMode === 'tiles' ? (
          <div className="grid w-full max-w-xs gap-2 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:max-w-none">
            {results.length
              ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                results.map((result: any, index: number) => (
                  <SingleNewsGrid key={index} id={index} type="countryRes" result={result} showSingleNews={showSingleNews} />
                ))
              : null}
          </div>
        ) : (
          <div className="flex flex-col w-full max-w-4xl gap-2 mx-auto">
            {results.length
              ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                results.map((result: any, index: number) => (
                  <SingleNewsList key={index} id={index} type="countryRes" result={result} showSingleNews={showSingleNews} />
                ))
              : null}
          </div>
        )}

        <div className="flex justify-center">
          <Error
            isOpen={results.length && error && errorMessage !== '' ? true : false}
            message={errorMessage}
            customStyle="mt-3"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-1 pt-3">
          <LoadMoreButton
            isOpen={results.length && nextPage ? true : false}
            getNextPage={getCountryNewsNextPage}
            loading={loading}
          />

          <Loader isOpen={loading} />
        </div>
      </div>

      <SingleNewsModal
        isOpen={showSingleNewsModal && singleNews ? true : false}
        setIsOpen={showSingleNews}
        result={singleNews}
      />
    </div>
  )
}
