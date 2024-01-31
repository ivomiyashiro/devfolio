import type { ReactNode } from 'react'

const Title = ({ aligment = 'left', children }: {
  aligment?: 'left' | 'center'
  children: ReactNode
}) => {
  return (
    <div className={`flex items-center mb-8 w-full gap-3 after:content-[""] after:h-px after:w-full after:bg-textColor-100 ${aligment === 'center' && 'before:content-[""] before:h-px before:w-full before:bg-textColor-100'}`}>
      <h2 className="text-2xl tablet:text-3xl shrink-0 font-bold flex gap-3 before:content-['{'] before:text-accent-100 after:content-['}'] after:text-accent-100 text-textColor-300">
        {children}
      </h2>
    </div>
  )
}

export default Title
