import { useState } from 'react'

import { Title } from '@/components/ui'
import ProjectThumnails from './ProjectThumnails'
import ProjectsArticles from './ProjectsArticles'

import 'swiper/css'
import 'swiper/css/pagination'

const Projects = ({ title, projects }: {
  title: string
  projects: PROJECT_ITEM[]
}) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="flex flex-nowrap flex-col tablet:flex-row w-full tablet:h-screen tablet:max-h-[1000px]">
      <div className="w-full tablet:pl-8 tablet:h-full mb-12 tablet:mb-0 tabet:my-auto tablet:flex tablet:justify-center tablet:flex-col tablet:grow-0 tablet:basis-1/2">
        <Title>
          {title}
        </Title>
        <ProjectsArticles
          projects={projects}
          activeTab={activeTab}
          handleActiveTab={setActiveTab}
        />
      </div>
      <ProjectThumnails
        projects={projects}
        activeTab={activeTab}
      />
    </div>
  )
}

export default Projects
