import ProtectedRoute from '@components/ProtectedRoutes/ProtectedRoutes'
import Login from '@features/authentication/pages/Login/Login'
import { Outlet } from 'react-router-dom'
import { AppLayout } from '@components/AppLayout'
import { HomePage } from './pages/homepage/pages/HomePage'

export const homepageRoutes = {
  path: '',
  element: (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
  children: [
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <Login /> },
  ],
}
