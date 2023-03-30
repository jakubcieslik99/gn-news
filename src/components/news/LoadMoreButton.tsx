import { scroller } from 'react-scroll'
import { Transition } from '@headlessui/react'
import { useAppSelector } from '../../features/store'
import { tr } from '../../translations/translations'

interface LoadMoreButtonProps {
  isOpen: boolean
  getNextPage: () => void
  loading: boolean
}

export default function LoadMoreButton(props: LoadMoreButtonProps) {
  const { language } = useAppSelector(state => state.appSettings)

  const scrollToHandler = (id: string) => {
    props.getNextPage()

    scroller.scrollTo(id, {
      spy: true,
      smooth: 'easeInOutCubic',
      duration: 500,
    })
  }

  return (
    <Transition
      as="button"
      onClick={() => scrollToHandler('loader')}
      disabled={props.loading}
      className="flex items-center justify-around px-2 py-1 font-medium transition border-2 border-blue-900 shadow dark:border-gray-50 rounded-xl active:scale-90"
      show={props.isOpen}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {tr('loadMoreButton', language)}
    </Transition>
  )
}
