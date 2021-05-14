import { useRef } from 'react'
import { Form, Formik } from 'formik'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@contexts/AuthContext'
import PrimaryButton from '@components/buttons/PrimaryButton'
import InputField from '@components/form/InputField/InputField'
import { emailValidator } from '@functions/validator'
import Swal from 'sweetalert2'
import styles from './index.module.scss'

const Login = () => {
  const emailRef = useRef<any>(null)
  const pwRef = useRef<any>(null)

  const { isLoggedIn, login } = useAuth()

  const submitHandler = () => {
    const isEmailVerified = emailValidator(emailRef.current.value)
    if (isEmailVerified && pwRef.current.value) {
      login(emailRef.current.value, pwRef.current.value)
    } else if (!pwRef.current.value) {
      // Swal.fire({
      //   title: <p>Provide a valid Email</p>,
      //   footer: 'Copyright 2018',
      //   didOpen: () => {
      //     // `MySwal` is a subclass of `Swal`
      //     //   with all the same instance & static methods
      //     Swal.clickConfirm()
      //   },
      // })
      alert('You need to provide a password')
    } else if (!isEmailVerified) {
      alert('You need to provide a valid email!')
    }
  }

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
      />
      <PrimaryButton title='Login' onClick={submitHandler} />
    </div>
  )
}

export default Login
