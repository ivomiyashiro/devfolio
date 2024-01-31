import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from '@/components/ui'

export const getSocialMedia = () => {
  return [
    {
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
}
