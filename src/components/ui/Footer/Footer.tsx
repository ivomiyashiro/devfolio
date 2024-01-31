import { getSocialMedia } from '@/helpers/getSocialMedia'

const Footer = ({ i18n }: { i18n: FOOTER }) => {
  const socialMedia = getSocialMedia()

  return (
    <footer className="mt-24 flex flex-col items-center justify-center py-6">
      <p className="text-xs font-mono">{ i18n.TEXT }</p>
      <ul className="flex gap-4 mt-3">
        { socialMedia.map(({ href, icon: Icon, target }, index) => (
          <li key={index}>
            <a href={href}>
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
