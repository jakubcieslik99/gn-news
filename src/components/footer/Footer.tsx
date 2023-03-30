import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../features/store'
import { tr } from '../../translations/translations'

export default function Footer() {
  const { language } = useAppSelector(state => state.appSettings)
  const { results: homeResults } = useAppSelector(state => state.getHomeNews)
  const { results: countryResults } = useAppSelector(state => state.getCountryNews)

  const [time, setTime] = useState('')

  const { pathname } = useLocation()

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString('pl-PL').slice(0, -3))
    }, 1000)
  }, [])

  return (
    <footer className="fixed bottom-0 z-20 flex items-center justify-between w-full px-6 py-1 text-sm bg-blue-900 dark:bg-gray-900">
      {pathname.split('/')[1] === '' ? (
        <div className="flex items-center gap-1">
          <div className="text-xs">{tr('footerCounter', language)}</div>
          <div className="font-medium">{homeResults.length}</div>
        </div>
      ) : pathname.split('/')[1] === 'country' ? (
        <div className="flex items-center gap-1">
          <div className="text-xs">{tr('footerCounter', language)}</div>
          <div className="font-medium">{countryResults.length}</div>
        </div>
      ) : (
        <div />
      )}

      <div className="font-medium">{time}</div>
    </footer>
  )
}
