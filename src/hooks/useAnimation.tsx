import { useEffect, useState } from 'react'

interface Props {
  delay: number
  animation: string
}

const useAnimation = ({ delay, animation }: Props) => {
  const [animated, setAnimated] = useState('invisible')

  useEffect(() => {
    setTimeout(() => {
      setAnimated(animation)
    }, delay)
  }, [])

  return animated
}

export default useAnimation
