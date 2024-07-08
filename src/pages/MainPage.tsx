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
        <Portfolio />
        <MySkills />
        <WorkHistory />
        <Education />
      </main>
      <Footer />
      <UserChat />
    </>
  )
}
