import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: ReactNode
  isLink?: boolean
  href?: string
  variant?: 'default' | 'outlined'
}

const Button = ({
  children,
  isLink = false,
  variant = 'default',
  className,
  onClick,
  ...props
}: Props) => {
  let style = ''

  if (variant === 'default') {
    style = 'bg-btn-100 text-textColor-300 hover:bg-btn-150'
  }

  if (variant === 'outlined') {
    style = 'border border-btn-200 text-accent-200 hover:bg-btn-250'
  }

  const communStyles = `flex items-center justify-center rounded-[10px] px-[0.65em] py-[0.55em] transition text-sm tablet:text-md ${style} ${className}`

  if (isLink) {
    return (
      <a className={communStyles} onClick={onClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={communStyles} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
