import { useRoutes, Navigate } from 'react-router-dom'
import { homepageRoutes } from '@features/homepage/homepageRoutes'
import { planetRoutes } from '@features/planet/planetRoutes'
import { personRoutes } from '@features/person/personRoutes'

export function App() {
  const routes = useRoutes([
    planetRoutes,
    personRoutes,
    {
      path: '*',
      element: <Navigate to={homepageRoutes.path} />,
    },
  ])

  return routes
}
