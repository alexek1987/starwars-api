import { useRoutes, Navigate } from 'react-router-dom'
import { planetRoutes } from '@features/planet/planetRoutes'
import { personRoutes } from '@features/person/personRoutes'
import { homepageRoutes } from '@features/homepage/homepageRoutes'
import { starshipRoutes } from '@features/starship/pages/starshipRoutes'

export function App() {
  const routes = useRoutes([
    planetRoutes,
    personRoutes,
    homepageRoutes,
    // starshipRoutes,
  ])

  return routes
}
