import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    load: 'languageOnly',
    lng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          skills: 'Skills',
          'skills-subtitle': 'Yo I have skillz',
          school: 'Education',
          'school-subtitle': 'Yo I have education',
          work: 'Work',
          'work-subtitle': 'Yo I have worked',
          projects: 'Projects',
          'projects-subtitle': 'Yo I made stuff',
        },
      },
      fr: {
        translation: {
          skills: 'Compétences',
          'skills-subtitle': "Les compétences que j'ai acquéri au fil du temps",
          school: 'Education',
          'school-subtitle': "Les formations que j'ai effectué",
          work: 'Travail',
          'work-subtitle': 'Mes expériences professionnelles',
          projects: 'Projets',
          'projects-subtitle': 'Mes projets personnels',
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
