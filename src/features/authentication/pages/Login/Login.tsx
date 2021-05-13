import { useRef } from 'react'
import { Form, Formik } from 'formik'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@contexts/AuthContext'
import PrimaryButton from '@components/buttons/PrimaryButton'
import InputField from '@components/form/InputField/InputField'
import styles from './index.module.scss'

const Login = () => {
  const emailRef = useRef<any>(null)
  const pwRef = useRef<any>(null)

  const { isLoggedIn, login } = useAuth()

  if (isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <div className='flex flex-col'>
      <label
        className='mb-2 uppercase font-bold text-lg text-grey-darkest'
        htmlFor='email'
      >
        Email
      </label>
      <input
        ref={emailRef}
        className='border py-2 px-3 text-grey-darkest'
        type='email'
        name='email'
        id='email'
      />
      <label
        className='mb-2 uppercase font-bold text-lg text-grey-darkest'
        htmlFor='password'
      >
        Password
      </label>
      <input
        ref={pwRef}
        className='border py-2 px-3 text-grey-darkest'
        type='password'
        name='password'
      />
      <PrimaryButton
        title='Login'
        onClick={() => login(emailRef.current.value, pwRef.current.value)}
      />
    </div>
  )
}

export default Login
