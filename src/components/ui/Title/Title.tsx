import type { ReactNode } from 'react'

const Title = ({ children }:
{ children: ReactNode }) => {
  return (
    <div className="flex items-center mb-8 w-full gap-3 after:content-[''] after:h-px after:w-full after:bg-textColor-100">
      <h2 className="text-3xl shrink-0 font-bold before:content-['{'] before:text-accent-100 after:content-['}'] after:text-accent-100 text-textColor-300"> {children} </h2>
    </div>
  )
}

export default Title
