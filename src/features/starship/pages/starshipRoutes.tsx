import { Outlet } from 'react-router-dom'
import { AppLayout } from '@components/AppLayout'
import StarshipListPage from '@features/starship/pages/StarshipListPage/StarshipListPage'

export const starshipRoutes = {
  path: 'starships',
  element: (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
  // children: [{ path: '/', element: <StarshipListPage /> }],
}
