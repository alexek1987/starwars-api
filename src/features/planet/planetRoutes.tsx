import ProtectedRoute from '@components/ProtectedRoutes/ProtectedRoutes'
import { Outlet } from 'react-router-dom'
import { AppLayout } from '@components/AppLayout'
import PlanetListPage from '@features/planet/pages/PlanetListPage/PlanetListPage'
import PlanetInfoPage from './pages/PlanetInfoPage/pages/PlanetInfoPage'

export const planetRoutes = {
  path: 'planets',
  element: (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
  children: [
    { path: '/', element: <ProtectedRoute Component={PlanetListPage} /> },
    { path: '/:id', element: <ProtectedRoute Component={PlanetInfoPage} /> },
  ],
}
