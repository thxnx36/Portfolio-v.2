export type MyInfoType = {
  education: {
    id: number
    university: string
    position: string
    date: string
    title: string
    url: string
    description: string
  }[]
  languages: {
    id: number
    skill: string
    progress: number
  }[]
  portfolio: {
    id: number
    link: string
    srcPageFirst: string
    srcPageSecond: string
    src: string
    project: string
    title: string
    about: {
      paragraphFirst: {
        textOne: string
        textTwo: string
        textThree: string
      }
      paragraphSecond: {
        textOne: string
        textTwo: string
        textThree: string
      }
      stack: string[]
    }[]
  }[]
  recommendations: {
    id: number
    rating: number
    user: string
    title: string
    comment: string
    userPhoto: string
  }[]
  skills: {
    id: number
    skill: string
    progress: number
  }[]
  workHistory: {
    id: number
    company: string
    position: string
    date: string
    title: string
    url: string
    description: string
  }[]
}
