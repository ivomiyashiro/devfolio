import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'default' | 'outlined'
}

const Button = ({
  children,
  variant = 'default',
  className,
  ...props
}: Props) => {
  let style = ''

  if (variant === 'default') {
    style = 'bg-btn-100 text-textColor-300 hover:bg-btn-150'
  }

  if (variant === 'outlined') {
    style = 'border border-btn-200 text-accent-200 hover:bg-btn-250'
  }

  return (
    <button className={`flex items-center justify-center rounded-[10px] px-[0.65em] py-[0.55em] transition text-sm tablet:text-md ${style} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
