import { useAppSelector } from '../../features/store'

export default function CornersStyle() {
  const { theme } = useAppSelector(state => state.appSettings)

  return (
    <>
      <div
        className={`fixed w-4 h-4 top-[181px] md:top-[58px] left-1 md:left-[176px] ${
          theme === 'dark' ? 'corner-lt-dark' : 'corner-lt'
        }`}
      />
      <div
        className={`fixed w-4 h-4 top-[181px] md:top-[58px] right-1 md:right-[6px] ${
          theme === 'dark' ? 'corner-rt-dark' : 'corner-rt'
        }`}
      />
      <div
        className={`fixed w-4 h-4 bottom-[24px] left-1 md:left-[176px] ${theme === 'dark' ? 'corner-lb-dark' : 'corner-lb'}`}
      />
      <div
        className={`fixed w-4 h-4 bottom-[24px] right-1 md:right-[6px] ${theme === 'dark' ? 'corner-rb-dark' : 'corner-rb'}`}
      />
    </>
  )
}
