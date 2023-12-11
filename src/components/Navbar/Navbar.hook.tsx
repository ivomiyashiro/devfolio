import { useCallback, useEffect, useState } from 'react'

const useNavbar = () => {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isContentVisible, setContentVisible] = useState(false)
  const [isWindowOnTop, setWindowOnTop] = useState(true)

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScrollY(window.scrollY)
    }
  }, [lastScrollY])

  useEffect(() => {
    if (typeof window !== 'undefined' && !isMobileMenuOpen) {
      window.addEventListener('scroll', controlNavbar)

      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY, controlNavbar, isMobileMenuOpen])

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset === 0
        ? setWindowOnTop(true)
        : setWindowOnTop(false)
    }

    return () => window.onscroll = null
  }, [])

  const toggleMenuVisibility = () => {
    setContentVisible(prev => !prev)

    if (!isMobileMenuOpen) {
      setMobileMenuOpen(true); return
    }

    setTimeout(() => {
      setMobileMenuOpen(prev => !prev)
    }, 200)
  }

  return {
    visible,
    isMobileMenuOpen,
    isContentVisible,
    isWindowOnTop,
    toggleMenuVisibility
  }
}

export default useNavbar
