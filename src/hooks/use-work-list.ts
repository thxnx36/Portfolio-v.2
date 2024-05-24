import { useMemo } from 'react'
import { UDEMY_URL, UNIVERSITY_URL } from '../constans'
import { useTranslation } from 'react-i18next'

export const useWorkList = () => {
  const { t } = useTranslation()

  const workList = useMemo(
    () => [
      {
        id: 1,
        company: t('workHistory.table.elementica.NAME'),
        position: t('workHistory.table.elementica.POSITION'),
        date: t('workHistory.table.elementica.DATE'),
        title: t('workHistory.table.elementica.TITLE'),
        url: UDEMY_URL,
        description: t('workHistory.table.elementica.DESCRIPTION'),
      },
      {
        id: 2,
        company: t('workHistory.table.freelance.NAME'),
        position: t('workHistory.table.freelance.POSITION'),
        date: t('workHistory.table.freelance.DATE'),
        title: t('workHistory.table.freelance.TITLE'),
        url: UNIVERSITY_URL,
        description: t('workHistory.table.freelance.DESCRIPTION'),
      },
    ],
    [t],
  )

  return { workList }
}
