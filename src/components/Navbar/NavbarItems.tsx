import { NAVBAR_DATA } from '../../data'

import Button from '../Button'
import NavbarItem from './NavbarItem'

const NavbarItems = () => {
  return (
    <ul className="hidden gap-[2.5em] items-center tablet:flex">
      { NAVBAR_DATA.map(({ text, to }, index) => (
        <NavbarItem
          key={index}
          to={to}
          animationDelay={index * 150}
        >
          { index + 1 !== NAVBAR_DATA.length
            ? (
              <>
                <p className="font-mono font-medium">{ text }</p>
                <span className="bg-accent-100 bottom-0 h-[3px] absolute transition-width duration-200 w-0 group-hover:w-full" />
              </>)
            : (
              <Button>
                <span className="font-mono">
                  { text }
                </span>
              </Button>)
          }
        </NavbarItem>
      ))}
    </ul>
  )
}

export default NavbarItems
