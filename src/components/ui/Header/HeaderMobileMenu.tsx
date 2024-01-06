import type { ReactNode, Dispatch, SetStateAction } from 'react'
import { SocialMedia } from '@/components/ui'

const HeaderMobileNavItem = ({ children, toSection, handleMenuOpen }: {
  children: ReactNode
  toSection: string
  handleMenuOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <li className="align-items-center cursor-pointer flex text-base font-semibold gap-6 py-2 px-1.5 relative transition duration-200">
      <a href={toSection} onClick={() => { handleMenuOpen(false) }}>
        <div className="flex items-center gap-[0.5em] px-[12px] py-[20px]">
          <p className="text-[1.65rem] font-semibold hover:text-textColor-300 transition-colors">{ children }</p>
          <span className="text-[1.5rem] text-accent-100">.</span>
        </div>
      </a>
    </li>
  )
}

const MobileMenu = ({ i18n, isOpen, handleMenuOpen }: {
  i18n: string[]
  isOpen: boolean
  handleMenuOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <menu className={
      `block w-full tablet:hidden h-screen fixed top-0 left-0 px-4 transition-all ${isOpen ? 'visible z-20' : 'translate-x-[-100%] delay-[.35s]'}
       after:content-[""] after:h-full after:left-0 after:absolute after:transition-transform after:duration-[.35s] after:w-full after:z-10 after:bg-accent-200 ${isOpen ? 'after:translate-x-0 after:delay-0' : 'after:translate-x-[-100%] after:delay-[.25s]'}
       before:content-[""] before:h-full before:left-0 before:absolute before:transition-transform before:duration-[.35s] before:w-full before:z-20 before:bg-slate-950 ${isOpen ? 'before:translate-x-0 before:delay-[.15s]' : 'before:translate-x-[-100%] before:delay-[.15s]'}
      `
    }>
      <ul className={`opacity-0 p-0 transition-all duration-[.3s] absolute top-[50%] z-50 translate-y-[-50%] left-[15%] ${isOpen ? 'opacity-100 delay-[.4s] translate-y-[-60%]' : ''}`}>
        { i18n.map((text, index) => (
          <HeaderMobileNavItem
            key={index}
            toSection={`#${text}`}
            handleMenuOpen={handleMenuOpen}>
            { text }
          </HeaderMobileNavItem>
        )) }
      </ul>
      <SocialMedia isOpen={isOpen} />
    </menu>
  )
}

export default MobileMenu
