import { useEffect, useRef, useState } from 'react'
import { DotNetLogo, MongoLogo, TypeScriptLogo, NextLogo, ReactLogo, TailwindLogo, NestLogo, PrismaLogo, SQLServerLogo, ExpressLogo } from './SkillsLogos'

const SKILLS_LIST = [
  { id: '-', logo: TypeScriptLogo },
  { id: 'TypeScript', logo: TypeScriptLogo },
  { id: 'Tailwind', logo: TailwindLogo },
  { id: 'React', logo: ReactLogo },
  { id: 'Next', logo: NextLogo },
  { id: 'Express', logo: ExpressLogo },
  { id: 'Nest', logo: NestLogo },
  { id: '.NET', logo: DotNetLogo },
  { id: 'SQL Server', logo: SQLServerLogo },
  { id: 'Mongo DB', logo: MongoLogo },
  { id: 'Prisma', logo: PrismaLogo }
]

const useSkillsList = () => {
  const [activeSkill, setActiveSkill] = useState<string>(SKILLS_LIST[1].id)
  const [isPaused, setPaused] = useState(false)
  let lastRandomSkill = ''
  const spanRef = useRef<HTMLSpanElement>(null)

  // Inside the SkillSelector component
  useEffect(() => {
    const autoSelect = setInterval(() => {
      if (!isPaused) {
      // Select a random skill from the list excluding the first item
        const randomIndex = Math.floor(Math.random() * (SKILLS_LIST.length - 1)) + 1
        let randomSkill = SKILLS_LIST[randomIndex]

        // Ensure the same randomIndex is not repeated consecutively
        while (randomSkill.id === lastRandomSkill) {
          const randomIndex = Math.floor(Math.random() * (SKILLS_LIST.length - 1)) + 1
          randomSkill = SKILLS_LIST[randomIndex]
        }

        lastRandomSkill = randomSkill.id

        // Apply the fade-out effect using useRef
        spanRef.current?.classList.add('opacity-0')

        // After the fade-out animation, update the selected skill
        setTimeout(() => {
          setActiveSkill(randomSkill.id)
        }, 500) // Adjust the timeout to match the transition duration

        // Remove the fade-out class after the transition ends
        setTimeout(() => {
          spanRef.current?.classList.remove('opacity-0')
        }, 500)
      }
    }, 3000)

    return () => {
      clearInterval(autoSelect)
    }
  }, [isPaused, lastRandomSkill])

  return {
    activeSkill,
    spanRef,
    handleActiveSkill: setActiveSkill,
    handlePause: setPaused
  }
}

const SkillsList = ({ title }: { title: string }) => {
  const {
    activeSkill,
    spanRef,
    handleActiveSkill,
    handlePause
  } = useSkillsList()

  return (
    <>
      <ul className="grid grid-cols-3 mobile:grid-cols-3 tablet:grid-cols-4 tablet:grid-rows-3 w-full gap-px bg-slate-900 p-px rounded-lg">
        { SKILLS_LIST.map(({ id, logo: Logo }, index) => {
          if (index === 0) {
            return (
              <li key={id} className="flex items-center py-6 justify-center col-span-3 mobile:col-span-3 tablet:col-span-2 w-full h-full bg-slate-950 rounded-lg">
                <h2
                  aria-label={title}
                  className="font-bold text-white text-skills whitespace-nowrap text-center tablet:text-left"
                >
                  {title}
                  <br className="tablet:block"/>
                  <span ref={spanRef} className="gap-2 flex justify-center tablet:justify-normal before:content-['{'] before:text-accent-100 after:content-['}'] after:text-accent-100 transition-opacity duration-500">
                    { activeSkill }
                  </span>
                </h2>
              </li>
            )
          }

          return (
            <li
              key={id}
              className={`relative flex items-center justify-center w-full h-full bg-slate-950 aspect-square rounded-lg ${index === 4 || index === 10 ? 'col-span-2 aspect-auto tablet:col-span-1 tablet:aspect-square' : ''}`}
              onMouseOver={() => { handleActiveSkill(id); handlePause(true) }}
              onMouseLeave={() => { handlePause(false) }}
            >
              <Logo
                isActive={id === activeSkill}
                inactiveColor="#1e293b" // slate-800
                width="40%"
                height="40%"
                className={`${activeSkill === id ? 'scale-105 blur-[15px] [background:_inherit]' : '!fill-slate-800'} transition-all max-w-[70px] absolute`}
              />
              <Logo
                isActive={id === activeSkill}
                inactiveColor="#1e293b" // slate-800
                width="40%"
                height="40%"
                className={`${activeSkill === id ? '' : '!fill-slate-800'} transition-all max-w-[70px] relative z-10`}
              />
            </li>
          )
        }) }
      </ul>
    </>
  )
}

export default SkillsList
