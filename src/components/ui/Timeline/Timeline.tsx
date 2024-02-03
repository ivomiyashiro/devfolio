import { useEffect, useRef, useState } from 'react'
import { Button, ChevronDown } from '@/components/ui'

const DEFAULT_MAX_HEIGHT = 525

const useTimeline = () => {
  const [isExpanded, setExpanded] = useState(false)
  const [height, setHeight] = useState(DEFAULT_MAX_HEIGHT)
  const timelineRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (timelineRef.current === null) return
    setHeight(isExpanded ? timelineRef.current.scrollHeight : DEFAULT_MAX_HEIGHT)
  }, [isExpanded])

  return {
    isExpanded,
    height,
    timelineRef,
    handleExpanded: setExpanded
  }
}

const Timeline = ({ i18n }: { i18n: EXP }) => {
  const { timelineRef, height, isExpanded, handleExpanded } = useTimeline()

  return (
    <>
      <ul
        ref={timelineRef}
        className="relative overflow-y-hidden transition-height before:bg-textColor-200 before:inline before:absolute before:left-[12px] before:w-px before:top-[0px] before:mt-[0.4em] before:h-[calc(100%-0.4em)] z-10"
        style={{ height }}
      >
        { i18n.EXPERIENCES.map(({ JOB_TITLE, COMPANY, FROM_DATE, TO_DATE, RESPONSIBILITIES }, index) => (
          <li
            key={index}
            className="pl-10 pb-3 last:pb-0 before:bg-[#111827] before:inline before:absolute before:rounded-full before:border-2 before:border-accent-200 before:left-1 before:mt-[0.4em] before:w-[17px] before:h-[17px]"
          >
            <h3 className="text-textColor-300 text-lg text-medium">
              {JOB_TITLE}
              <span className="text-accent-100 ml-1">
                @
                <a
                  href={COMPANY.LINK}
                  target="_blank"
                  className="relative after:absolute after:w-0 after:h-px after:bg-accent-100 after:bottom-0 after:left-0 after:hover:w-full after:transition-all ml-1" rel="noreferrer"
                >
                  {COMPANY.NAME}
                </a>
              </span>
            </h3>
            <div className="font-mono text-xs my-px">
              <time dateTime={FROM_DATE}>
                {FROM_DATE}
              </time>
              <span>-</span>
              <time dateTime={TO_DATE}>
                {TO_DATE}
              </time>
            </div>
            <ul className="mt-2">
              {RESPONSIBILITIES.map((responsability, index) => (
                <li key={index} className="relative pl-7 mb-2 before:content-['⭐️'] before:absolute before:left-0">
                  {responsability}
                </li>
              ))}
            </ul>
          </li>
        )) }
      </ul>
      <div className="z-10 w-full py-6 flex justify-center">
        <Button
          variant="outlined"
          className="flex gap-1 w-[135px] tablet:h-[45px]"
          onClick={() => { handleExpanded(prev => !prev) }}
        >
          { isExpanded ? 'See Less' : 'See More'}
          <ChevronDown
            width={18}
            color="#0080ff"
            className={`${isExpanded ? 'rotate-180' : 'rotate-0'} transition-transform`}
          />
        </Button>
      </div>
    </>
  )
}

export default Timeline
