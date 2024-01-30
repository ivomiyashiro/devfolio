import { adaptProjectsData } from '@/helpers/adaptProjectData'

const ProjectThumnails = ({ projects, activeTab }: {
  projects: PROJECT_ITEM[]
  activeTab: number
}) => {
  const adaptedData = adaptProjectsData(projects)

  return (
    <>
      { adaptedData.map(({ IMAGES, LOGOS, NAME }, i) => (
        <div key={i} className={`w-full h-[300px] right-6 tablet:right-0 tablet:pl-8 tablet:h-auto relative max-w-[100%] tablet:max-w-[50%] tablet:grow-0 tablet:basis-1/2 ${activeTab === i ? 'block z-20' : 'hidden z-0'}`}>
          <div className="absolute h-full w-full z-20 flex md:flex-col lg:flex-row items-center justify-center gap-8 left-6">
            { LOGOS.map((Logo, i) => (
              <div
                key={i}
                className="min-h-[80px] min-w-[80px] tablet:min-h-[100px] tablet:min-w-[100px] bg-[rgba(255,255,255,0.9)] flex justify-center items-center rounded-full border-[6px] border-[#c0c0c0] shadow-2xl opacity-0 animate-fade"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <Logo className="w-[40px] h-[40px] tablet:w-[55px] tablet:h-[55px]" />
              </div>
            )) }
          </div>
          <div className={`
            overflow-hidden relative w-[calc(100vw-0.01em)] tablet:w-[50vw] transition-opacity h-full bg-slate-900 
            before:content-[''] before:block before:absolute before:tablet:w-full before:tablet:h-full before:w-[calc(100%_+_1px)] before:h-[calc(100%_+_1px)] before:opacity-60 before:top-0 before:bg-slate-900 before:z-10
            after:content-[''] after:block after:absolute after:w-[400px] after:h-full after:bg-gradient-to-r after:from-slate-900 after:to-transparent after:left-0 after:top-0 after:z-10
          `}>
            <div className="h-full relative" style={{ perspective: '1000px' }}>
              <div className="absolute left-[36%] tablet:left-[40%] flex" style={{ transform: 'translateX(-40%) rotateZ(30deg) rotateX(8deg) rotateY(-8deg)', transformOrigin: 'center center' }}>
                <div className="grid gap-12 tablet:gap-16 grid-rows-[min-content] w-[min-content] animate-slideDown">
                  { IMAGES.slice(0, 3).map((src: string, i: number) => (
                    <img
                      key={i}
                      src={src}
                      alt={NAME + ' - Project'}
                      className="rounded-2xl min-w-[230px] min-h-[139px] tablet:min-w-[300px] tablet:min-h-[164px] desktop:min-w-[450px] desktop:min-h-[247px] shadow-lg border-[6px] border-[#303740] opacity-0 animate-fade"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  )) }
                </div>
                <div className="grid gap-12 tablet:gap-16 ml-12 tablet:ml-16 grid-rows-[min-content] w-[min-content] animate-slideUp">
                  { IMAGES.slice(3, 6).map((src: string, i: number) => (
                    <img
                      key={i}
                      src={src}
                      alt={NAME + ' - Project'}
                      className="rounded-2xl min-w-[230px] min-h-[139px] tablet:min-w-[300px] tablet:min-h-[164px] desktop:min-w-[450px] desktop:min-h-[247px] shadow-lg border-[6px] border-[#303740] opacity-0 animate-fade"
                      style={{ animationDelay: `${i * 10}ms` }}
                    />
                  )) }
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectThumnails
