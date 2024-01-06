import useAnimation from '@/hooks/useAnimation'
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, LanguageIcon } from '@/components/ui'

const SocialMediaItem = ({ icon: Icon, href, target, animationDelay }: {
  icon: any
  href?: string
  target: string
  animationDelay: number
}) => {
  const animation = useAnimation({
    delay: animationDelay,
    animation: 'animate-zoomIn'
  })

  return (
    <li className={`${animation} cursor-pointer hover:text-textColor-300 transition-colors`}>
      <a href={href} target={target} rel="noreferrer">
        <Icon height={20} width={20} />
      </a>
    </li>
  )
}

const SocialMedia = ({ currentLocale, isOpen }: {
  currentLocale?: string
  isOpen?: boolean
}) => {
  const ITEMS = [
    {
      name: 'Lagunage',
      href: `/${currentLocale === 'es' ? '' : 'es'}`,
      target: '_self',
      icon: LanguageIcon
    }, {
      name: 'Github',
      href: 'https://github.com/IvoMiyashiro',
      target: '_blank',
      icon: GithubIcon
    }, {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/ivanmiyashiro/',
      target: '_blank',
      icon: LinkedinIcon
    }, {
      name: 'Instagram',
      href: 'https://github.com/IvoMiyashiro',
      target: '_blank',
      icon: InstagramIcon
    }, {
      name: 'Email',
      href: 'mailto: ivo.miyashiro1@gmail.com',
      target: '_blank',
      icon: MailIcon
    }
  ]

  return (
    <ul className={`
      flex items-center gap-[1.5em] bottom-[90px] opacity-0 transition-opacity duration-[.3s] w-full mt-28 absolute z-50 translate-y-[-50%] 
      ${(isOpen !== undefined && isOpen) ? 'opacity-100 delay-[.4s] translate-y-[-60%]' : ''}
      tablet:opacity-100 tablet:fixed tablet:flex-col tablet:mt-0 tablet:w-auto tablet:bottom-0 tablet:justify-center tablet:px-12 tablet:translate-y-0
    `}>
      { ITEMS.map(({ href, icon: Icon, target }, index) => (
        <SocialMediaItem
          key={index}
          icon={Icon}
          href={href}
          target={target}
          animationDelay={index * 150}
        />
      )) }
      <span className="h-px w-full bg-gray-500 ml-6 tablet:w-px tablet:h-[120px] tablet:ml-0" />
    </ul>
  )
}

export default SocialMedia
