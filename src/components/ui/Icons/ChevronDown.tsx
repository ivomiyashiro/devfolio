import type { SVGProps } from 'react'

export const ChevronDown = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={26}
      height={26}
      fill="none"
      strokeWidth={2}
      stroke={props.color}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m6 9 6 6 6-6"
      />
    </svg>
  )
}
