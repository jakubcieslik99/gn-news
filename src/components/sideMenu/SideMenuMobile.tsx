import { Fragment } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Transition, Dialog } from '@headlessui/react'
import { FaGlobe, FaTimes } from 'react-icons/fa'
import { FlagIcon, FlagIconCode } from 'react-flag-kit'
import { useAppSelector } from '../../features/store'
import { tr } from '../../translations/translations'

interface SideMenuMobileProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  countries: {
    name: string
    link: string
    code: string
  }[]
}

export default function SideMenuMobile(props: SideMenuMobileProps) {
  const { language } = useAppSelector(state => state.appSettings)

  const { pathname } = useLocation()

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

        <div className="fixed inset-0">
          <div className="flex items-center justify-start min-h-full py-6 pr-16 text-center md:pt-16 md:pb-32">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300 transition-transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="ease-in duration-200 transition-transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="flex flex-col w-full max-w-sm px-5 py-4 overflow-hidden text-blue-900 shadow-md dark:text-gray-50 bg-gray-50 dark:bg-gray-700 rounded-r-xl side-menu-mobile">
                {/*modal header*/}
                <Dialog.Title className="flex items-center justify-between w-full text-lg font-semibold">
                  <div className="flex items-center gap-2">
                    <FaGlobe />
                    <div>{tr('sideMenuCountry', language)}</div>
                  </div>

                  <button onClick={() => props.setIsOpen(false)} className="text-2xl transition active:scale-90">
                    <FaTimes />
                  </button>
                </Dialog.Title>

                {/*modal body*/}
                <div className="flex flex-col w-full mt-3 internal-scroll">
                  <ul className="flex flex-col">
                    {props.countries.map(country => (
                      <li key={country.code}>
                        <Link
                          to={`/country/${country.link}`}
                          onClick={() => props.setIsOpen(false)}
                          className={`flex items-center gap-2 px-3 py-1 transition-transform active:scale-90 ${
                            pathname.slice(9, 11) === country.link
                              ? 'font-bold text-gray-50 rounded-xl bg-blue-900 dark:bg-gray-800'
                              : 'font-medium'
                          }`}
                        >
                          <FlagIcon code={country.code as FlagIconCode} size={16} className="h-[11px]" />
                          <div>{country.name}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
