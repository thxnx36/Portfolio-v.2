export const ROUTES = {
  notFound: '*',
  main: '/',
  project: '/project/:id',
  dynamic: {
    projectId: (id: string) => `/project/${id}`,
  },
}
