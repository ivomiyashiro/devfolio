import { getSocialMedia } from '@/helpers/getSocialMedia'
import { LanguageIcon } from '@/components/ui'

const Footer = ({ currentLocale, i18n }: {
  currentLocale?: string
  i18n: FOOTER
}) => {
  const socialMedia = getSocialMedia()
  const items = [
    {
      name: 'Lagunage',
      href: `/${currentLocale === 'es' ? '' : 'es'}`,
      target: '_self',
      icon: LanguageIcon
    },
    ...socialMedia
  ]

  return (
    <footer className="mt-24 flex flex-col items-center justify-center py-6">
      <p className="text-xs font-mono">{ i18n.TEXT }</p>
      <ul className="flex gap-4 mt-3">
        { items.map(({ href, icon: Icon, target }, index) => (
          <li key={index}>
            <a href={href} target={target}>
              { <Icon
                width={16}
                height={16}
              /> }
            </a>
          </li>
        )) }
      </ul>
    </footer>
  )
}

export default Footer
