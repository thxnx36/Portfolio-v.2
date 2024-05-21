import { useGetProjectById } from '../../hooks'
import { useParams, useNavigate } from 'react-router-dom'
import { PageWrapper, SEO, Section, Title } from '../../shared'
import { useCallback } from 'react'
import { Head } from './head/Head'
import { Content } from './content/Content'
import { StackList } from './stack-list/StackList'
import { FiExternalLink } from 'react-icons/fi'
import { text } from '../../localization'
import { APP_URL, ROUTES } from '../../constans'
import styles from './Project.module.css'

export const Project = () => {
  const { id } = useParams()
  const { project: data } = useGetProjectById(+id!)
  const navigate = useNavigate()

  const handleBack = useCallback(() => navigate(-1), [navigate])

  return (
    <Section sx={{ margin: 0 }}>
      <PageWrapper>
        <Head
          onClick={handleBack}
          projectTitle={data?.project}
          imgSrc={data?.src}
        />
        <Title size='sm' tag='h3'>
          {data?.title}
          <a className={styles.link} target='_blank' href={data?.link}>
            {text.pages.project.LIVE_DEMO} <FiExternalLink size='.8em' />
          </a>
        </Title>
        <Content aboutProject={data?.about} project={data} />
        <div className={styles.stack}>
          {data?.about?.map((item, i) => (
            <StackList key={i} stackList={item?.stack} />
          ))}
        </div>
      </PageWrapper>
      <SEO
        tabTitle={`${text.pages.project.MY_PROJECT} | ${data?.project!}`}
        metaDescriptionContent={text.pages.project.seo.PLATFORM_WHERE_USER}
        metaOgTitleContent={data?.title!}
        metaOgDescriptionContent={text.pages.project.seo.ABOUT_PROJECT}
        metaOgURLContent={`${APP_URL}${ROUTES.dynamic.projectId(data?.id!)}`}
        metaOgImageContent=''
      />
    </Section>
  )
}
