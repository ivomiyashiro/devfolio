import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectCard from './ProjectCard'

const ProjectsArticles = ({ projects, activeTab, handleActiveTab }: {
  projects: PROJECT_ITEM[]
  activeTab: number
  handleActiveTab: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (
    <>
      <div className="tablet:hidden">
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          pagination={{ clickable: true }}
          className="flex flex-col"
        >
          { projects.map(({ NAME, DESCRIPTION, GITHUB_LINK, PROJECT_LINK }, i) => (
            <SwiperSlide
              key={i}
              className="max-w-[325px] tablet:max-w-none"
            >
              <ProjectCard
                title={NAME}
                description={DESCRIPTION}
                githubLink={GITHUB_LINK}
                projectLink={PROJECT_LINK}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide className="max-w-[325px] tablet:max-w-none" />
        </Swiper>
      </div>
      <div className="hidden tablet:flex flex-col tablet:gap-8 w-full">
        { projects.map(({ NAME, DESCRIPTION, GITHUB_LINK, PROJECT_LINK }, i) => (
          <ProjectCard
            key={i}
            title={NAME}
            description={DESCRIPTION}
            githubLink={GITHUB_LINK}
            projectLink={PROJECT_LINK}
            isActive={activeTab === i}
            onClick={() => { handleActiveTab(i) }}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectsArticles
