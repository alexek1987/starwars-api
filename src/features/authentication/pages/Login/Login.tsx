import { useRef, useState } from 'react'
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
    <div className={styles.container}>
      <div className='flex flex-col'>
        <input
          className='border py-2 px-3 text-grey-darkest'
          ref={emailRef}
          type='input'
          placeholder='Email'
        />
        <input
          className='border py-2 px-3 text-grey-darkest'
          ref={pwRef}
          type='password'
          placeholder='Password'
        />
        {/* <InputField type='input' name='input' label='YES' /> */}
        <PrimaryButton
          title='Login'
          onClick={() => login(emailRef.current.value, pwRef.current.value)}
        />
      </div>
    </div>
  )
}

export default Login
