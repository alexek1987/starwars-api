import { useAuth } from '@contexts/AuthContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ Component }) {
  const { isLoggedIn } = useAuth()

  if (isLoggedIn) {
    return <Component />
  }
  return <Navigate to='/login' />
}

export default ProtectedRoute
