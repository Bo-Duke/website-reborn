import { useCallback, useState } from 'react'

export const useDarkMode = () => {
  const [value, setValue] = useState(false)
  return [value, useCallback(() => setValue(v => !v), [])]
}
