import { type ReactNode, useEffect, useState } from 'react'

interface Props {
  children: ReactNode
  to: string
  animationDelay: number
}

const NavbarItem = ({ children, to, animationDelay }: Props) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, animationDelay)
  }, [])

  return (
    <li className={`animate__animated ${visible ? 'animate__zoomIn' : 'invisible'} cursor-pointer transition-colors py-[0.5em] relative group hover:text-textColor-300`}>
      { children }
    </li>
  )
}

export default NavbarItem
