import { Form, Formik } from 'formik'
import PrimaryButton from '@components/buttons/PrimaryButton'
import { withLoginPage } from '@features/authentication/pages/LoginPage/withLoginPage'
import { LoginPageProps } from '@features/authentication/pages/LoginPage/interface'
import InputField from '@components/form/InputField/InputField'
import styles from './index.module.scss'

const LoginPage = ({ handleLogin, initialValues }: LoginPageProps) => (
  <div className={styles.container}>
    <Formik initialValues={initialValues} onSubmit={handleLogin}>
      {() => (
        <Form>
          <div className={styles.login}>
            <InputField type='text' name='email' label='Email' />
          </div>
          <div className={styles.password}>
            <InputField type='password' name='password' label='Password' />
          </div>
          <PrimaryButton title='Login' />
        </Form>
      )}
    </Formik>
  </div>
)

export default withLoginPage(LoginPage)
