import { Transition } from '@headlessui/react'
import { useAppSelector } from '../../features/store'
import { tr } from '../../translations/translations'

interface ErrorProps {
  isOpen: boolean
  message: string
  customStyle?: string
}

export default function Error(props: ErrorProps) {
  const { language } = useAppSelector(state => state.appSettings)

  return (
    <Transition
      className={`px-3 py-1 font-semibold text-red-600 bg-red-200 border-2 border-red-600 rounded-xl break-words leading-[1.12rem] w-full max-w-[320px] md:max-w-[554px] ${
        props.customStyle ? props.customStyle : ''
      }`}
      show={props.isOpen}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {tr(props.message, language)}
    </Transition>
  )
}
