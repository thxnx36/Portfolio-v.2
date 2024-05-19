import {
  tutiffy,
  asx,
  maven,
  tutiffyPageRirst,
  tutiffyPageSecond,
  asxPageFirst,
  asxPageSecond,
  mavenPageRirst,
  mavenPageSecond,
} from '../assets'
import { ASX_URL, MAVEN_URL, TUTTIFY_URL } from '../constans'

export const portfolio = [
  {
    id: 1,
    link: TUTTIFY_URL,
    srcPageFirst: tutiffyPageRirst,
    srcPageSecond: tutiffyPageSecond,
    src: tutiffy,
    project: 'Tuttify',
    title: 'Multilingual and multiuser educational platform',
    about: [
      {
        paragraphFirst: {
          textOne: `Front-end team - 4 developers.
          Back-end team - 4 developers.
          QA team - 2 developers.`,
          textTwo:
            'Main goal of this app is to empower children and students to explore, imagine and engage with ideas as they learn and to help parents or family members to communicate with children by participating in lessons, games, and even sharing story time.',
          textThree:
            'Project had a complex structure with 6 front-end apps and 7 back-end microservices on Node.js and Python. Core features - live chat/video streams, live activities between users, multitenancy, internationalization, user generated content, moderation, kids accounts, payments, automated/manual tests, CI/CD, etc.',
        },
        paragraphSecond: {
          textOne:
            'On the project, I focused on interface development, including creating user-friendly navigation, designing and placing educational content, and interacting with the back-end through REST API or GraphQL.',
          textTwo:
            'Additionally, I worked on enhancing the user experience by adding animations, intuitive controls, and optimized workflows.',
          textThree:
            'Overall, working on the project was an interesting and productive experience that helped me develop skills in front-end development, multilingual support, and web application performance optimization.',
        },
        stack: [
          '#React #TypeScript #Redux Toolkit #RTK Query #Apollo GraphQL #Material-UI',
        ],
      },
    ],
  },
  {
    id: 2,
    link: ASX_URL,
    srcPageFirst: asxPageFirst,
    srcPageSecond: asxPageSecond,
    src: asx,
    project: 'ASX Sports',
    title: 'Sports betting platform',
    about: [
      {
        paragraphFirst: {
          textOne: `Front-end team - 2 developers.
          Back-end team - 2 developers.
          QA team - 1 developer.`,
          textTwo:
            'Platform where users could register their account, buy in-game currency and bet on their favorite team on live streams.',
          textThree:
            'The project consisted of a core platform as well as an admin panel through which the administrator could fully manage the core application and user support.',
        },
        paragraphSecond: {
          textOne:
            'The app is developed using Next for the front-end part and Express for the back-end part.',
          textTwo:
            'On the project I was engaged in development of UI components, implementation of new features such as - full user registration using Keycloack, connection of Stripe payment system, connection of SumSab library for user verification, etc. I also got experience in the back-end.',
          textThree:
            'What I found interesting was participating in rallies with the CTO and the customer where we discussed the business logic of the application. I also enjoyed expressing my ideas, which in the future were turned into reality.',
        },
        stack: [
          '#Next #TypeScript #Redux Toolkit #RTK Query #Styled-components #Express',
        ],
      },
    ],
  },
  {
    id: 3,
    link: MAVEN_URL,
    srcPageFirst: mavenPageRirst,
    srcPageSecond: mavenPageSecond,
    src: maven,
    project: 'Maven 11',
    title: 'Landing page for a crypto-native fund',
    about: [
      {
        paragraphFirst: {
          textOne: 'Front-end team - 1 developer. QA team - 1 developer.',
          textTwo:
            'Landing page for a foundation, main goal to attract new clients.',
          textThree:
            'The project is implemented using HTML, SCSS, and the GSAP library. The task I was given was to create a dynamic website using animations. ',
        },
        paragraphSecond: {
          textOne:
            ' On the project, I did the development on my own under the guidance of the CTO. I solved all the technical tasks and problems myself, which gave me experience in organizing projects. ',
          textTwo:
            'The interesting and challenging part for me was working with the GSAP library, where it took a lot of time to learn all the intricacies and the right approach, which gave me additional experience in developing complex animations. ',
          textThree:
            'Also together with QA we conducted functional testing and fixed all the issues in a short period of time.',
        },
        stack: ['#HTML #JavaScript #SCSS #GSAP'],
      },
    ],
  },
]
