import { useMemo } from 'react'
import { COMPANY_URL } from 'src/constants'
import { WorkListType } from 'src/types'
import { useTranslation } from 'react-i18next'
import { elementicaHomePage } from 'src/assets'

export const useWorkList = () => {
  const { t } = useTranslation()

  const workList: WorkListType[] = useMemo(
    () => [
      {
        id: 1,
        company: t('workHistory.table.elementica.NAME'),
        position: t('workHistory.table.elementica.POSITION'),
        date: '2022 - 2024',
        title: t('workHistory.table.elementica.TITLE'),
        url: COMPANY_URL,
        img: elementicaHomePage,
        description: t('workHistory.table.elementica.DESCRIPTION'),
      },
      {
        id: 2,
        company: t('workHistory.table.freelance.NAME'),
        position: t('workHistory.table.freelance.POSITION'),
        date: '2021 - 2022',
        title: t('workHistory.table.freelance.TITLE'),
        url: '#',
        img: '',
        description: t('workHistory.table.freelance.DESCRIPTION'),
      },
    ],
    [t],
  )

  return { workList }
}
