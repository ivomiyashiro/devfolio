import type { ReactNode } from 'react'
import useAnimation from '@/hooks/useAnimation'
import { Button } from '@/components/ui'

const HeaderNavItem = ({ children, animationDelay, to }: {
  children: ReactNode
  to: string
  animationDelay: number
}) => {
  const animation = useAnimation({
    delay: animationDelay,
    animation: 'animate-zoomIn'
  })
  const handleScroll = () => {
    const section = document.querySelector(`${to.toLowerCase()}`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <li
      className={`${animation} cursor-pointer transition-colors py-[0.5em] relative group hover:text-textColor-300`}
      onClick={handleScroll}
    >
      { children }
    </li>
  )
}

const HeaderNavItems = ({ i18n }: { i18n: string[] }) => {
  return (
    <ul className="hidden gap-[2.5em] items-center tablet:flex">
      { i18n.map((text, index) => (
        <HeaderNavItem
          key={index}
          to={`#${text}`}
          animationDelay={index * 150}
        >
          { index + 1 !== i18n.length
            ? (
              <>
                <p>{ text }</p>
                <span className="bg-accent-100 bottom-0 h-[3px] absolute transition-width duration-200 w-0 group-hover:w-full" />
              </>)
            : (
              <Button variant="outlined" className="w-24 h-10">
                { text }
              </Button>)
          }
        </HeaderNavItem>
      ))}
    </ul>
  )
}

export default HeaderNavItems
