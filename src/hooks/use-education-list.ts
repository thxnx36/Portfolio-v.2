import { useMemo } from 'react'
import { UDEMY_URL, UNIVERSITY_URL } from '../constants'
import { useTranslation } from 'react-i18next'
import { EducationListType } from '../types'

export const useEducationList = () => {
  const { t } = useTranslation()

  const educationList: EducationListType[] = useMemo(
    () => [
      {
        id: 1,
        university: t('education.table.udemy.NAME'),
        position: t('education.table.udemy.POSITION'),
        date: t('education.table.udemy.DATE'),
        title: t('education.table.udemy.TITLE'),
        url: UDEMY_URL,
        description: t('education.table.udemy.DESCRIPTION'),
      },
      {
        id: 2,
        university: t('education.table.institute.NAME'),
        position: t('education.table.institute.POSITION'),
        date: t('education.table.institute.DATE'),
        title: t('education.table.institute.TITLE'),
        url: UNIVERSITY_URL,
        description: t('education.table.institute.DESCRIPTION'),
      },
    ],
    [t],
  )

  return { educationList }
}
