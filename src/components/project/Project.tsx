import { useGetProjectById, useGoBack } from '../../hooks'
import { useParams } from 'react-router-dom'
import { Head } from './head/Head'
import { Content } from './content/Content'
import { StackList } from './stack-list/StackList'
import { FiExternalLink } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { APP_URL, ROUTES } from 'src/constants'
import { Section, PageWrapper, Title, SEO } from 'src/shared'
import styles from './Project.module.css'

export const Project = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const { handleBack } = useGoBack(-1)
  const { project: data } = useGetProjectById(+id!)

  return (
    <Section style={{ margin: 0 }}>
      <PageWrapper>
        <Head
          onClick={handleBack}
          projectTitle={data?.project}
          imgSrc={data?.src}
        />
        <Title size='sm' tag='h3'>
          {data?.title}
          <a
            className={styles.link}
            target='_blank'
            href={data?.link}
            rel='noreferrer'
          >
            {t('pages.project.LIVE_DEMO')} <FiExternalLink size='.8em' />
          </a>
        </Title>
        <Content aboutProject={data?.about} project={data} />
        <ul className={styles.stack}>
          {data?.about?.map((item, i) => (
            <StackList key={i} stackList={item?.stack} />
          ))}
        </ul>
      </PageWrapper>
      <SEO
        tabTitle={`${t('pages.project.MY_PROJECT')} | ${data?.project!}`}
        metaDescriptionContent='Platform where users could buy in-game currency and bet on their favorite team on live streams'
        metaOgTitleContent={data?.title!}
        metaOgDescriptionContent='About the project I developed'
        metaOgURLContent={`${APP_URL}${ROUTES.dynamic.projectId(data?.id!)}`}
        metaOgImageContent=''
      />
    </Section>
  )
}
