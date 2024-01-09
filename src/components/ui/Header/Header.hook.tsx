import { useEffect, useState } from 'react'

const useHeader = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let lastScrollPosition = window.scrollY

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY

      if (currentScrollPosition > lastScrollPosition) {
        // Scrolleando hacia abajo
        setVisible(false)
      } else if (currentScrollPosition < lastScrollPosition) {
        // Scrolleando hacia arriba
        setVisible(true)
      }

      lastScrollPosition = currentScrollPosition
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return visible
}

export default useHeader
