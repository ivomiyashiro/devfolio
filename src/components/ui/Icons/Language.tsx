import type { SVGProps } from 'react'

export const LanguageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={ 2 }
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 2.05S16 6 16 12c0 6-3 9.95-3 9.95M11 21.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5h18.74M2.63 8.5h18.74"
    />
  </svg>
)
