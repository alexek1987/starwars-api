import { Outlet } from 'react-router-dom'
import { AppLayout } from '@components/AppLayout'
import PlanetListPage from '@features/planet/pages/PlanetListPage/PlanetListPage'

export const planetRoutes = {
  path: 'planets',
  element: (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
  children: [{ path: '/', element: <PlanetListPage /> }],
}
