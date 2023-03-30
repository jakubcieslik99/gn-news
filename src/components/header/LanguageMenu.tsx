import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FlagIcon } from 'react-flag-kit'
import { FaFlag } from 'react-icons/fa'
import { useAppSelector, useAppDispatch } from '../../features/store'
import { changeLanguage } from '../../features/appSlices/appSettings'
import { AvailableCodes } from '../../constants/AppSettings'
import { LanguageMenuOption, languageMenuOptions } from '../../constants/LanguageMenuOptions'

export default function LanguageMenu() {
  const { language } = useAppSelector(state => state.appSettings)
  const dispatch = useAppDispatch()

  const [languageOption, setLanguageOption] = useState(
    languageMenuOptions.find(option => option.value === language) || languageMenuOptions[0]
  )

  const languageHandler = (option: LanguageMenuOption) => {
    dispatch(changeLanguage(option.value))
    setLanguageOption(option)
  }

  return (
    <div className="flex gap-1">
      <div className="flex items-center mr-1">
        <FlagIcon
          code={languageMenuOptions.find(option => option.value === language)?.code as AvailableCodes}
          size={16}
          className="h-[11px] shadow"
        />
      </div>

      <Listbox value={languageOption} onChange={option => languageHandler(option)}>
        <div className="relative">
          <Listbox.Button className="p-[6px] border-2 rounded-xl border-gray-50 transition active:scale-90 shadow">
            <FaFlag />
          </Listbox.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-30 w-[66px] overflow-hidden text-blue-900 bg-gray-300 cursor-pointer dark:text-gray-50 dark:bg-gray-700 top-10 -left-4 rounded-xl shadow-xl">
              {languageMenuOptions.map(option => (
                <Listbox.Option as={Fragment} key={option.id} value={option}>
                  {({ selected }) => (
                    <li
                      className={`${selected && 'bg-black/20'} pr-3 pl-2 py-[6px] hover:bg-black/20 flex items-center gap-2`}
                    >
                      <div className="flex justify-end w-[21px]">{option.name}</div>
                      <FlagIcon code={option.code} size={16} className="h-[11px]" />
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
