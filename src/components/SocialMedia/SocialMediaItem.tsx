import { useEffect, useState } from 'react'

interface Props {
  icon: any
  href: string
  animationDelay: number
}

const SocialMediaItem = ({ icon: Icon, href, animationDelay }: Props) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, animationDelay)
  }, [])

  return (
    <li className={`animate__animated ${visible ? 'animate__zoomIn' : 'invisible'} cursor-pointer hover:text-textColor-300 transition-colors`}>
      <a href={href} target="_blank" rel="noreferrer">
        <Icon height={24} width={24} />
      </a>
    </li>
  )
}

export default SocialMediaItem
