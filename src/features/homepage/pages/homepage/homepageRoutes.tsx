import { Outlet } from 'react-router-dom'
import { AppLayout } from '@components/AppLayout'
import { HomePage } from './pages/HomePage'
import PlanetListPage from '@features/planet/pages/PlanetListPage/PlanetListPage'
import PersonListPage from '@features/person/pages/PersonListPage/PersonListPage'

export const sampleRoute = {
  path: '',
  element: (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
  children: [
    { path: '/', element: <HomePage /> },
    { path: '/planets', element: <PlanetListPage /> },
    { path: '/people', element: <PersonListPage /> },
  ],
}
