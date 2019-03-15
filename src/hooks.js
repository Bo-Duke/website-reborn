import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const useDarkMode = () => {
  const [value, setValue] = useState(false)
  return [value, useCallback(() => setValue(v => !v), [])]
}

export const useLanguage = () => {
  const { i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')
  }

  return [i18n.language, toggle]
}
