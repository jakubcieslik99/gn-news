import { useRef, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { scroller } from 'react-scroll'
import { useAppSelector, useAppDispatch } from '../features/store'
import { getHomeNews } from '../features/newsSlices/getHomeNews'
import SingleNewsGrid from '../components/news/SingleNewsGrid'
import SingleNewsList from '../components/news/SingleNewsList'
import SingleNewsModal from '../components/news/SingleNewsModal'
import Error from '../components/universal/Error'
import LoadMoreButton from '../components/news/LoadMoreButton'
import Loader from '../components/universal/Loader'

export default function HomeScreen() {
  const getHomeNewsNextPageAbort = useRef<(reason?: string | undefined) => void>()

  const { displayMode, language } = useAppSelector(state => state.appSettings)
  const { loading, error, errorMessage, results, nextPage } = useAppSelector(state => state.getHomeNews)
  const dispatch = useAppDispatch()

  const [singleNews, setSingleNews] = useState<any | null>(null)
  const [showSingleNewsModal, setShowSingleNewsModal] = useState(false)

  const [searchParams] = useSearchParams()

  const showSingleNews = (id: number | null) => {
    if (id !== null && results.length && results[id]) {
      setSingleNews(results[id])
      setShowSingleNewsModal(true)
    } else {
      setShowSingleNewsModal(false)
      setTimeout(() => setSingleNews(null), 200)
    }
  }

  const getHomeNewsNextPage = () => {
    if (!loading && results.length && nextPage) {
      const getHomeNewsNextPagePromise = dispatch(
        getHomeNews({
          language,
          category: searchParams.get('category'),
          query: searchParams.get('searching'),
          nextPage,
          fresh: false,
        })
      )
      getHomeNewsNextPageAbort.current = getHomeNewsNextPagePromise.abort
    }
  }

  useEffect(() => {
    const getHomeNewsPromise = dispatch(
      getHomeNews({
        language,
        category: searchParams.get('category'),
        query: searchParams.get('searching'),
        fresh: true,
      })
    )
    return () => getHomeNewsPromise.abort() /**/
  }, [language, searchParams, dispatch])

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
    <div data-testid="home-screen" id="content" className="content">
      <div className="flex flex-col w-full">
        <div className="flex justify-center">
          <Error isOpen={error && errorMessage !== '' ? true : false} message={errorMessage} customStyle="mb-3" />
        </div>

        {displayMode === 'tiles' ? (
          <div className="grid w-full max-w-xs gap-3 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:max-w-none">
            {results.length
              ? results.map((result, index) => (
                  <SingleNewsGrid key={index} id={index} type="homeRes" result={result} showSingleNews={showSingleNews} />
                ))
              : null}
          </div>
        ) : (
          <div className="flex flex-col w-full max-w-4xl gap-2 mx-auto">
            {results.length
              ? results.map((result, index) => (
                  <SingleNewsList key={index} id={index} type="homeRes" result={result} showSingleNews={showSingleNews} />
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

        <div className="flex flex-col items-center justify-center pt-4">
          <LoadMoreButton
            isOpen={results.length && nextPage ? true : false}
            getNextPage={getHomeNewsNextPage}
            loading={loading}
          />

          <div id="loader">
            <Loader isOpen={loading} />
          </div>
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
