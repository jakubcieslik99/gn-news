import Moment from 'moment'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useAppSelector } from '../../features/store'
import { tr } from '../../translations/translations'
import noPhoto from '../../assets/no-photo.png'

interface SingleNewsListProps {
  id: number
  type: 'homeRes' | 'countryRes'
  result: any
  showSingleNews: (id: number) => void
}

export default function SingleNewsList(props: SingleNewsListProps) {
  const { language } = useAppSelector(state => state.appSettings)

  return (
    <div id={`result${props.id}`} className="flex flex-col gap-1 p-2 bg-gray-300 shadow dark:bg-gray-800 rounded-xl">
      <div className="flex gap-2 sm:gap-3">
        <div className="flex-none overflow-hidden rounded-xl">
          <img
            src={props.result.image_url || noPhoto}
            alt="News_cover"
            className="object-cover w-full h-full aspect-3/2  max-w-[147px]"
          />
        </div>

        <div className="flex flex-col items-start justify-center w-full">
          <div className="w-full mb-[2px] sm:line-clamp hidden sm:block">{props.result.title}</div>

          <div className="flex flex-col items-center justify-between sm:flex-row sm:gap-2">
            <div className="flex items-center gap-[6px]">
              <button
                onClick={() => props.showSingleNews(props.id)}
                className="px-[6px] py-[1px] border-2 border-blue-900 dark:border-gray-50 rounded-xl font-medium shadow transition active:scale-90"
              >
                {tr('singleNewsButton', language)}
              </button>

              <a
                href={props.result.link}
                target="_blank"
                rel="noreferrer"
                className="px-[6px] py-[2px] font-medium transition active:scale-90"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <div className="mt-3 sm:mt-[2px] text-sm text-gray-700 dark:text-gray-500">
              {Moment(props.result.pubDate).format('DD.MM.YYYY, HH:mm')}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full line-clamp sm:hidden">{props.result.title}</div>
    </div>
  )
}
