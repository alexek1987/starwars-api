import { Outlet } from 'react-router-dom'
import { AppLayout } from '@components/AppLayout'
import PersonListPage from '@features/person/pages/PersonListPage/PersonListPage'

export const personRoutes = {
  path: 'people',
  element: (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
  children: [{ path: '/', element: <PersonListPage /> }],
}
