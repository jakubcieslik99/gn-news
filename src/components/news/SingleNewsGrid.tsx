import Moment from 'moment'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useAppSelector } from '../../features/store'
import { tr } from '../../translations/translations'
import noPhoto from '../../assets/no-photo.png'

interface SingleNewsGridProps {
  id: number
  type: 'homeRes' | 'countryRes'
  result: any
  showSingleNews: (id: number) => void
}

export default function SingleNewsGrid(props: SingleNewsGridProps) {
  const { language } = useAppSelector(state => state.appSettings)

  return (
    <div
      id={`result${props.id}`}
      className="flex flex-col justify-between gap-1 p-2 bg-gray-300 shadow dark:bg-gray-800 rounded-xl"
    >
      <div className="overflow-hidden rounded-xl">
        <img src={props.result.image_url || noPhoto} alt="News_cover" className="object-cover w-full h-full aspect-3/2" />
      </div>

      <div className="w-full mb-[2px] line-clamp">{props.result.title}</div>

      <div className="flex items-center justify-between">
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

        <div className="mt-[2px] text-sm text-gray-700 dark:text-gray-500">
          {Moment(props.result.pubDate).format('DD.MM.YYYY, HH:mm')}
        </div>
      </div>
    </div>
  )
}
