import { useMemo } from 'react'
import { UDEMY_URL, UNIVERSITY_URL, IMT_URL } from 'src/constants'
import { useTranslation } from 'react-i18next'
import { EducationListType } from 'src/types'

export const useEducationList = () => {
  const { t } = useTranslation()

  const educationList: EducationListType[] = useMemo(
    () => [
      {
        id: 1,
        university: t('education.table.udemy.NAME'),
        position: t('education.table.udemy.POSITION'),
        date: '2021 - 2022',
        title: t('education.table.udemy.TITLE'),
        url: UDEMY_URL,
        description: t('education.table.udemy.DESCRIPTION'),
      },
      {
        id: 2,
        university: t('education.table.imt.NAME'),
        position: t('education.table.imt.POSITION'),
        date: '2021 - 2021',
        title: t('education.table.imt.TITLE'),
        url: IMT_URL,
        description: t('education.table.imt.DESCRIPTION'),
      },
      {
        id: 3,
        university: t('education.table.institute.NAME'),
        position: t('education.table.institute.POSITION'),
        date: '2015 - 2018',
        title: t('education.table.institute.TITLE'),
        url: UNIVERSITY_URL,
        description: t('education.table.institute.DESCRIPTION'),
      },
    ],
    [t],
  )

  return { educationList }
}
