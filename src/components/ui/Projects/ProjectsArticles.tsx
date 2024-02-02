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
          onSlideChange={({ activeIndex }) => { handleActiveTab(activeIndex) }}
        >
          { projects.map(({ NAME, DESCRIPTION, GITHUB_LINK, PROJECT_LINK }, index) => (
            <SwiperSlide
              key={index}
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
          {/* This slide let the swiper display all projects well */}
          <SwiperSlide className="max-w-[325px] tablet:max-w-none" />
        </Swiper>
      </div>
      <div className="hidden tablet:flex flex-col tablet:gap-8 w-full">
        { projects.map(({ NAME, DESCRIPTION, GITHUB_LINK, PROJECT_LINK }, index) => (
          <ProjectCard
            key={index}
            title={NAME}
            description={DESCRIPTION}
            githubLink={GITHUB_LINK}
            projectLink={PROJECT_LINK}
            isActive={activeTab === index}
            onClick={() => { handleActiveTab(index) }}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectsArticles
