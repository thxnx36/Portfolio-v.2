import {
  Header,
  MyServices,
  Portfolio,
  WorkHistory,
  Education,
  Footer,
  UserChat,
  Navigation,
  MySkills,
} from 'src/components'

export const MainPage = () => {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <MyServices />
        <Portfolio sectionId='portfolio' />
        <MySkills sectionId='skills' />
        <WorkHistory sectionId='work-history' />
        <Education sectionId='education' />
      </main>
      <Footer />
      <UserChat />
    </>
  )
}
