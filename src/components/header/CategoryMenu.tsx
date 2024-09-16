import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FaAngleDown } from 'react-icons/fa'
import { useAppSelector } from '../../features/store'
import { categoryMenuOptions, CategoryMenuOption } from '../../constants/CategoryMenuOptions'

interface CategoryMenuProps {
  categoryOption: CategoryMenuOption
  categoryHandler: (option: CategoryMenuOption) => void
}

export default function CategoryMenu(props: CategoryMenuProps) {
  const { language } = useAppSelector(state => state.appSettings)

  return (
    <>
      <Listbox value={props.categoryOption} onChange={option => props.categoryHandler(option)}>
        <div className="relative w-[258px] md:w-[150px] h-8">
          <Listbox.Button className="absolute flex items-center justify-between w-full py-[2px] pl-3 border-2 rounded-xl shadow">
            <div className="truncate">{props.categoryOption.name}</div>
            <div className="flex items-center justify-center flex-none transition w-9 active:scale-90">
              <FaAngleDown className="text-xl ml-[1px] mt-[1px]" />
            </div>
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
            <Listbox.Options className="absolute z-30 w-full overflow-hidden text-blue-900 bg-gray-300 shadow-xl cursor-pointer dark:text-gray-50 dark:bg-gray-700 top-10 rounded-xl">
              {categoryMenuOptions[language as keyof typeof categoryMenuOptions].map(option => (
                <Listbox.Option key={option.id} value={option} className="px-3 py-[6px] truncate hover:bg-black/20">
                  {option.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  )
}
