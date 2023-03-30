import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { scroller } from 'react-scroll'
import { FaSun, FaMoon, FaInfo, FaSearch } from 'react-icons/fa'
import { useAppSelector, useAppDispatch } from '../../features/store'
import { switchTheme } from '../../features/appSlices/appSettings'
import { tr } from '../../translations/translations'
import CategoryMenu from './CategoryMenu'
import { categoryMenuOptions, CategoryMenuOption } from '../../constants/CategoryMenuOptions'
import LanguageMenu from './LanguageMenu'
import AboutModal from './AboutModal'
import Logo from '../../assets/logo.png'

interface URLStructure {
  searching?: string
  category?: string
}

const URL = {} as URLStructure

export default function Header() {
  const { language, theme } = useAppSelector(state => state.appSettings)
  const dispatch = useAppDispatch()

  const [showAboutModal, setShowAboutModal] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const [searching, setSearching] = useState(searchParams.get('searching') || '')
  const [category, setCategory] = useState(searchParams.get('category') || categoryMenuOptions[language][0].value)
  const [categoryOption, setCategoryMenuOption] = useState(categoryMenuOptions[language][0])

  const filterURL = (searchingFilter: string, categoryFilter: string) => {
    if (searchingFilter !== '') URL.searching = searchingFilter
    else if (URL.searching) delete URL.searching

    if (categoryFilter !== '') URL.category = categoryFilter
    else if (URL.category) delete URL.category

    setSearchParams({ ...URL })
  }

  const searchingHandler = (e: any) => {
    e.preventDefault()
    filterURL(searching, category)
  }
  const categoryHandler = (option: CategoryMenuOption) => {
    setCategory(option.value)
    setCategoryMenuOption(option)
    filterURL(searching, option.value)
  }

  const scrollToTopHandler = () => {
    setSearching('')
    setCategory(categoryMenuOptions[language][0].value)
    setCategoryMenuOption(categoryMenuOptions[language][0])
    filterURL('', categoryMenuOptions[language][0].value)

    scroller.scrollTo('main', {
      spy: true,
      smooth: 'easeInOutCubic',
      duration: 500,
    })
  }

  const switchThemeHandler = () => {
    dispatch(switchTheme(theme === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    setCategoryMenuOption(categoryMenuOptions[language][categoryOption.id - 1])
  }, [language, categoryOption.id])

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <header className="fixed top-0 flex flex-wrap flex-row justify-between w-full md:h-[62px] bg-blue-900 dark:bg-gray-900 md:items-center md:flex-row z-20 realtive">
      <div className="flex items-center justify-between order-1 py-2 pl-2 md:pr-2">
        <Link to="/" onClick={scrollToTopHandler} className="max-w-[155px] md:max-w-[170px] transition active:scale-90">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center order-4 gap-3 mx-auto md:flex-row md:order-2">
        <form onSubmit={searchingHandler} className="relative">
          <input
            type="text"
            placeholder={tr('headerSearching', language)}
            className="pl-[11px] pr-[32px] py-[2px] truncate bg-transparent border-2 rounded-xl border-gray-50 focus:outline-none w-[258px] md:w-auto shadow"
            value={searching}
            onChange={e => setSearching(e.target.value)}
          />
          <button
            type="submit"
            className="absolute -top-[3px] right-[1px] flex items-center justify-center flex-none transition w-[38px] h-[38px] active:scale-90"
          >
            <FaSearch />
          </button>
        </form>

        <CategoryMenu categoryOption={categoryOption} categoryHandler={categoryHandler} />
      </div>

      <div className="order-3 h-0 basis-full md:order-4" />

      <div className="flex items-center order-2 gap-2 pr-4 md:pl-2 md:gap-1 md:order-3">
        <LanguageMenu />
        <button
          onClick={switchThemeHandler}
          className="p-[6px] border-2 rounded-xl border-gray-50 transition active:scale-90 shadow"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <button
          onClick={() => setShowAboutModal(!showAboutModal)}
          className="p-[6px] border-2 rounded-xl border-gray-50 transition active:scale-90 shadow"
        >
          <FaInfo />
        </button>
      </div>

      <AboutModal isOpen={showAboutModal} setIsOpen={setShowAboutModal} />
    </header>
  )
}
