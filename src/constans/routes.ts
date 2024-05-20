export const ROUTES = {
  notFound: '*',
  main: '/',
  aboutMe: '/about',
  project: '/project/:id',
  dynamic: {
    projectId: (id: string) => `/project/${id}`,
  },
}
