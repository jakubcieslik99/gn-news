import { Transition } from '@headlessui/react'
import { ThreeDots } from 'react-loader-spinner'
import { useAppSelector } from '../../features/store'

interface LoaderProps {
  isOpen: boolean
}

export default function Loader(props: LoaderProps) {
  const { theme } = useAppSelector(state => state.appSettings)

  return (
    <Transition
      className="-mt-3 -mb-5"
      show={props.isOpen}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <ThreeDots
        height="64"
        width="64"
        radius="9"
        color={theme === 'dark' ? '#f9fafb' : '#1e3a8a'}
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </Transition>
  )
}
