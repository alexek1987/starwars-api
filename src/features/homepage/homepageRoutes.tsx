import { HomePage } from '@features/homepage/pages/HomePage'
import { Outlet } from 'react-router-dom'
import { AppLayout } from '@components/AppLayout'
import PersonListPage from '@features/person/pages/PersonListPage/PersonListPage'
import PlanetListPage from '@features/planet/pages/PlanetListPage/PlanetListPage'

export const homepageRoutes = {
  path: '',
  element: (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
  children: [
    { path: '/', element: <HomePage /> },
    { path: '/people', element: <PersonListPage /> },
    { path: '/login', element: <PlanetListPage /> },
  ],
}
