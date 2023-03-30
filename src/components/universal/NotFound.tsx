import { useAppSelector } from '../../features/store'
import { tr } from '../../translations/translations'

export default function NotFound() {
  const { language } = useAppSelector(state => state.appSettings)

  return (
    <div data-testid="not-found" className="content">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="font-bold text-8xl">404</h1>
        <h2 className="text-3xl font-semibold">{tr('notFound', language)}</h2>
      </div>
    </div>
  )
}
