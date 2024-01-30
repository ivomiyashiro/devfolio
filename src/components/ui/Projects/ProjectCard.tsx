import { useSwiperSlide } from 'swiper/react'
import { GithubIcon, LinkIcon, ProjectIcon } from '@/components/ui/Icons'

const ProjectCard = ({ title, description, githubLink, projectLink, isActive = false, onClick }: {
  title: string
  description: string
  githubLink: string
  projectLink: string
  isActive?: boolean
  onClick?: () => void
}) => {
  const swiperSlide = useSwiperSlide()
  const isActiveArticle = isActive || swiperSlide?.isActive

  return (
    <article
      className={`flex items-start gap-3 flex-shrink-0 mk w-full max-w-[325px] tablet:max-w-none rounded-xl transition-all p-5 cursor-pointer desktop:min-w-[400px] desktop:flex-row desktop:gap-4 desktop:hover:bg-[#001E3C] ${isActiveArticle ? 'bg-btn-250 border border-accent-200 desktop:hover:bg-[#132F4C] scale-100 tablet:scale-100' : 'scale-90 tablet:scale-100'}`}
      onClick={onClick}
    >
      <ProjectIcon
        width="28px"
        height="28px"
        className={isActiveArticle ? 'fill-accent-100' : 'fill-textColor-200-200'}
      />
      <div className="mt-px text-left">
        <h3 className="font-semibold text-textColor-300">
          {title}
        </h3>
        <p className="mt-2 mb-4 text-sm">
          {description}
        </p>
        <div className="flex gap-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="hover:text-textColor-300 transition-colors"
          >
            <GithubIcon width="18px" height="18px" />
          </a>
          <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className="hover:text-textColor-300 transition-colors"
          >
            <LinkIcon width="18px" height="18px" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
