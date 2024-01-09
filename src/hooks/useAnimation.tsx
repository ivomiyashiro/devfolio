import { useEffect, useState } from 'react'

// animation prop gets an animation name from tailwind.config
const useAnimation = ({ delay, animation }: {
  delay: number
  animation: string
}) => {
  const [animated, setAnimated] = useState('invisible')

  useEffect(() => {
    setTimeout(() => {
      setAnimated(animation)
    }, delay)
  }, [])

  return animated
}

export default useAnimation
