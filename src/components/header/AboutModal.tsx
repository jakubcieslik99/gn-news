import { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { FaInfo, FaTimes } from 'react-icons/fa'
import { useAppSelector } from '../../features/store'
import { tr } from '../../translations/translations'

interface AboutModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AboutModal(props: AboutModalProps) {
  const { language } = useAppSelector(state => state.appSettings)

  return (
    <Transition as={Fragment} appear show={props.isOpen}>
      <Dialog as="div" className="relative z-30" onClose={() => props.setIsOpen(false)}>
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
                <Dialog.Title className="flex items-center justify-between w-full text-xl font-semibold">
                  <div className="flex items-center gap-2">
                    <FaInfo />
                    <div>{tr('aboutModalTitle', language)}</div>
                  </div>

                  <button onClick={() => props.setIsOpen(false)} className="text-2xl transition active:scale-90">
                    <FaTimes />
                  </button>
                </Dialog.Title>

                {/*modal body*/}
                <div className="flex flex-col w-full mt-4 mb-5 internal-scroll">{'Hello World'}</div>

                {/*modal footer*/}
                <div className="flex justify-end w-full mb-1 italic">Jakub Cieślik</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
