import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { FlagIcon, FlagIconCode } from 'react-flag-kit'
import { FaGlobe, FaTh, FaList } from 'react-icons/fa'
import { useAppSelector, useAppDispatch } from '../../features/store'
import { switchDisplayMode } from '../../features/appSlices/appSettings'
import { tr } from '../../translations/translations'
import SideMenuMobile from './SideMenuMobile'
import { sideMenuCountries } from '../../constants/SideMenuCountries'

export default function SideMenu() {
  const { displayMode, language, theme } = useAppSelector(state => state.appSettings)
  const dispatch = useAppDispatch()

  const [showSideMenuMobile, setShowSideMenuMobile] = useState(false)

  const { pathname } = useLocation()

  const switchDisplayModeHandler = () => {
    dispatch(switchDisplayMode(displayMode === 'tiles' ? 'list' : 'tiles'))
  }

  return (
    <nav
      data-testid="side-menu"
      className="fixed top-0 left-0 w-full md:w-[180px] bg-blue-900 dark:bg-gray-900 z-10 md:h-full pt-[133px] md:pt-[62px] md:pb-[28px] flex flex-col"
    >
      <div className="flex items-center justify-center gap-3 px-2 py-3 md:pt-[10px] md:pb-[14px]">
        <button
          onClick={() => setShowSideMenuMobile(true)}
          className="md:hidden px-[8px] py-[2px] border-2 rounded-xl border-gray-50 transition active:scale-90 text-sm flex gap-[5px] items-center shadow"
        >
          <FaGlobe />
          <div>{tr('sideMenuCountry', language)}</div>
        </button>

        <button
          onClick={switchDisplayModeHandler}
          className="px-[8px] py-[2px] border-2 rounded-xl border-gray-50 transition active:scale-90 text-sm flex items-center gap-[6px] shadow"
        >
          {displayMode === 'tiles' ? <FaList /> : <FaTh />}
          <div>{tr('sideMenuView', language)}</div>
        </button>
      </div>

      <ul className="hidden h-full pl-3 md:flex md:flex-col internal-scroll">
        {sideMenuCountries[language as keyof typeof sideMenuCountries].map(country => (
          <li key={country.code}>
            <Link
              to={`/country/${country.link}`}
              className={`relative flex px-3 py-1 ${
                pathname.slice(9, 11) === country.link
                  ? 'font-bold text-blue-900 dark:text-gray-50 rounded-l-xl bg-gray-50 dark:bg-gray-700'
                  : 'font-medium'
              }`}
            >
              <div className="flex items-center w-full gap-2 transition-transform active:scale-90">
                <FlagIcon code={country.code as FlagIconCode} size={16} className="h-[11px]" />
                <div className="truncate">{country.name}</div>
              </div>

              <div
                className={`absolute right-0 w-4 h-4 -bottom-4 ${theme === 'dark' ? 'side-rb-dark' : 'side-rb'} ${
                  pathname.slice(9, 11) !== country.link && 'hidden'
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>

      <SideMenuMobile
        isOpen={showSideMenuMobile}
        setIsOpen={setShowSideMenuMobile}
        countries={sideMenuCountries[language as keyof typeof sideMenuCountries]}
      />
    </nav>
  )
}
