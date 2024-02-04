import type { ReactNode } from 'react'
import useAnimation from '@/hooks/useAnimation'

import { scrollTo, adaptHeaderItems } from '@/helpers'

import { ResumeButton } from '@/components/ui'

const HeaderNavItem = ({ children, animationDelay, toSection }: {
  children: ReactNode
  toSection: string
  animationDelay: number
}) => {
  const animation = useAnimation({
    delay: animationDelay,
    animation: 'animate-zoomIn'
  })

  return (
    <li
      className={`${animation} cursor-pointer transition-colors py-[0.5em] relative group hover:text-textColor-300`}
      onClick={() => { scrollTo(toSection, 'center') }}
    >
      { children }
    </li>
  )
}

const HeaderNavItems = ({ i18n }: { i18n: string[] }) => {
  const adaptedHeaderItems = adaptHeaderItems(i18n)

  return (
    <ul className="hidden gap-[2.5em] items-center tablet:flex">
      { adaptedHeaderItems.map(({ text, id }, index) => (
        <HeaderNavItem
          key={index}
          toSection={`#${id}`}
          animationDelay={index * 150}
        >
          { index + 1 !== i18n.length
            ? (
              <>
                <p>{ text }</p>
                <span className="bg-accent-100 bottom-0 h-[3px] absolute transition-width duration-200 w-0 group-hover:w-full" />
              </>)
            : (
              <ResumeButton variant="outlined" className="!px-6 h-10">
                { text }
              </ResumeButton>)
          }
        </HeaderNavItem>
      ))}
    </ul>
  )
}

export default HeaderNavItems
