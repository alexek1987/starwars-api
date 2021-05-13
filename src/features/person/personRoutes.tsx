import { Outlet } from 'react-router-dom'
import { AppLayout } from '@components/AppLayout'
import ProtectedRoute from '@components/ProtectedRoutes/ProtectedRoutes'
import PersonListPage from '@features/person/pages/PersonListPage/PersonListPage'
import PersonInfoPage from './pages/PersonInfoPage/pages/PersonInfoPage'

export const personRoutes = {
  path: 'people',
  element: (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
  children: [
    { path: '/', element: <ProtectedRoute Component={PersonListPage} /> },
    { path: '/:id', element: <ProtectedRoute Component={PersonInfoPage} /> },
  ],
}
