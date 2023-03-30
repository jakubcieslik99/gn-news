import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAppSelector } from './features/store'
import { tr } from './translations/translations'
import Header from './components/header/Header'
import SideMenu from './components/sideMenu/SideMenu'
import Footer from './components/footer/Footer'
import HomeScreen from './screens/HomeScreen'
import CountryScreen from './screens/CountryScreen'
import NotFound from './components/universal/NotFound'

export default function App() {
  const { language } = useAppSelector(state => state.appSettings)

  useEffect(() => {
    document.documentElement.lang = language
    document.title = tr('title', language)
  }, [language])

  return (
    <BrowserRouter>
      <Header />

      <SideMenu />

      <main id="main">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/country/:country" element={<CountryScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}
