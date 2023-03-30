import { Fragment } from 'react'
import Moment from 'moment'
import { Transition, Dialog } from '@headlessui/react'
import { FaTimes, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa'
import { useAppSelector } from '../../features/store'
import { tr } from '../../translations/translations'

interface SingleNewsModalProps {
  isOpen: boolean
  setIsOpen: (id: number | null) => void
  result: any
}

export default function SingleNewsModal(props: SingleNewsModalProps) {
  const { language } = useAppSelector(state => state.appSettings)

  return (
    <Transition as={Fragment} appear show={props.isOpen}>
      <Dialog as="div" className="relative z-30" onClose={() => props.setIsOpen(null)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 internal-scroll">
          <div className="flex items-center justify-center min-h-full px-4 py-6 text-center md:pt-16 md:pb-32">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex flex-col w-full max-w-md px-5 py-4 overflow-hidden text-blue-900 shadow-md dark:text-gray-50 bg-gray-50 dark:bg-gray-700 rounded-xl">
                {/*modal header*/}
                <Dialog.Title className="flex items-start justify-between w-full gap-3 text-lg font-semibold">
                  <div className="leading-snug text-left">{props.result?.title}</div>

                  <button onClick={() => props.setIsOpen(null)} className="mt-[2px] text-2xl transition active:scale-90">
                    <FaTimes />
                  </button>
                </Dialog.Title>

                {/*modal body*/}
                <div className="flex flex-col w-full gap-3 my-4">
                  {props.result?.image_url && (
                    <div className="overflow-hidden shadow rounded-xl">
                      <img src={props.result.image_url} alt="News_cover" className="object-cover w-full h-full aspect-3/2" />
                    </div>
                  )}

                  <div className="leading-snug text-justify">{props.result?.description}</div>

                  <div className="flex flex-col w-full">
                    <div className="flex items-center gap-2 font-bold text-start">
                      <FaExternalLinkAlt /> {tr('singleNewsModalButton', language)}
                    </div>
                    <a href={props.result?.link} target="_blank" rel="noreferrer" className="font-medium underline truncate">
                      {props.result?.link}
                    </a>
                  </div>
                </div>

                {/*modal footer*/}
                <div className="flex items-center justify-end w-full gap-[6px] mb-1 text-gray-700 dark:text-gray-400">
                  <FaCalendarAlt />
                  {Moment(props.result?.pubDate).format('DD.MM.YYYY, HH:mm')}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
