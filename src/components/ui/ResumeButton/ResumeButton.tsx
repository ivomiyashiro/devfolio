import { Button } from '@/components/ui'

const ResumeButton = ({ className, variant = 'default', children }: {
  variant?: 'default' | 'outlined'
  className: string
  children: React.ReactNode
}) => {
  return (
    <Button
      href="https://drive.google.com/file/d/1_jb56rj__Ar93u6i-Sz2Gv59tJn0HhgL/view?usp=sharing"
      variant={variant}
      isLink={true}
      target="_blank"
      className={className}
    >
      {children}
    </Button>
  )
}

export default ResumeButton
