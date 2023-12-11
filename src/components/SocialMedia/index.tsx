import { SOCIAL_MEDIA } from '../../data'
import SocialMediaItem from './SocialMediaItem'

interface Props {
  isOpen?: boolean
}

const SocialMedia = ({ isOpen }: Props) => {
  return (
    <ul className={`
      flex items-center gap-[1.5em] bottom-[90px] opacity-0 transition-opacity duration-[.3s] w-full mt-28 absolute z-50 translate-y-[-50%] 
      ${(isOpen !== undefined && isOpen) ? 'opacity-100 delay-[.4s] translate-y-[-60%]' : ''}
      tablet:opacity-100 tablet:fixed tablet:flex-col tablet:mt-0 tablet:w-auto tablet:bottom-0 tablet:justify-center tablet:px-12 tablet:translate-y-0
    `}>
      { SOCIAL_MEDIA.map(({ href, icon: Icon }, index) => (
        <SocialMediaItem
          key={index}
          icon={Icon}
          href={href}
          animationDelay={index * 150}
        />
      )) }
      <span className="h-px w-full bg-gray-500 ml-6 tablet:w-px tablet:h-[120px] tablet:ml-0" />
    </ul>
  )
}

export default SocialMedia
