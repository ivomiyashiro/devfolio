import { Menu, Xmark } from 'iconoir-react'

import useNavbar from './Navbar.hook'

import NavbarItems from './NavbarItems'
import Button from '../Button'
import MobileMenu from '../MobileMenu'

const Navbar = () => {
  const {
    visible,
    isContentVisible,
    isMobileMenuOpen,
    isWindowOnTop,
    toggleMenuVisibility
  } = useNavbar()

  return (
    <header className={`flex fixed top-0 items-center backdrop-filter backdrop-blur-md shadow-md ${isWindowOnTop ? 'bg-transparent' : 'bg-theme-color-navbar-shadow'} fixed h-20 justify-between w-full z-50 transform transition-transform ${visible ? 'translate-y-0' : '-translate-y-full'} duration-250 tablet:h-[70px]`}>
      <nav className="w-full mx-auto">
        <div className="flex items-center justify-between p-4 tablet:p-12 relative top-0 z-50">
          <div className="cursor-pointer">
            <a href="/">
              <p className="text-[2rem] font-bold text-textColor-300 relative left-0 z-10 tablet:text-[2.5rem]">
              Dev<span className="text-accent-200">.</span>
              </p>
            </a>
          </div>
          <NavbarItems />
          <div className="relative left-0 z-10 tablet:hidden">
            <Button onClick={toggleMenuVisibility}>
              { !isMobileMenuOpen
                ? <Menu width={ 20 } />
                : <Xmark width={ 20 } />
              }
            </Button>
          </div>
        </div>
        <MobileMenu isOpen={isContentVisible} handleMenuOpen={toggleMenuVisibility} />
      </nav>
    </header>
  )
}

export default Navbar
