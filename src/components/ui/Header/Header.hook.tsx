import { useState } from 'react'

const useHeader = () => {
  const [visible, setVisible] = useState(true)

  return {
    visible
  }
}

export default useHeader
