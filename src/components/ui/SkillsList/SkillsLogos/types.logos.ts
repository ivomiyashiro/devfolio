import type { SVGProps } from 'react'

export interface LogosProps extends SVGProps<SVGSVGElement> {
  isActive: boolean
  inactiveColor: string
  className: string
}
