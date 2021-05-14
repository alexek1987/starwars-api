import { useAuth } from '@contexts/AuthContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ Component }) {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    alert('You need to login to view this page!')
    return <Navigate to='/login' />
  }
  return <Component />
}

export default ProtectedRoute
