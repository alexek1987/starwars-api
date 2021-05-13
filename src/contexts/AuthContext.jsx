import { createContext, useContext, useState } from 'react'
import { auth } from '../firebase'

// init context
const AuthContext = createContext()

// export the consumer
export function useAuth() {
  return useContext(AuthContext)
}

// export the provider (handle all the logic here)
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  const login = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        setUserData(userCredential.user)
        setIsLoggedIn(true)
      })
      .catch(error => {
        console.error(error.message)
      })
  }

  const logout = () => {
    setUserData(null)
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  )
}
