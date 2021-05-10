import { useAppClient } from '@client/useAppClient'
import { CredentialType } from '@client/interface'
import { useNavigate } from 'react-router-dom'
import { LoginPageProps } from '@features/authentication/pages/LoginPage/interface'

const withLoginPage = (Component: React.FC<LoginPageProps>) => {
  function Hoc() {
    const client = useAppClient()
    const navigate = useNavigate()
    const handleLogin = async (loginParams: CredentialType) => {
      // await client?.auth.signIn(loginParams)
      navigate('/book')
    }
    const initialValues = {
      email: '',
      password: '',
    }
    const newProps = { handleLogin, initialValues }
    return <Component {...newProps} />
  }
  Hoc.displayName = `withLoginPage(${
    Component.displayName ?? Component.name ?? 'Component'
  })`
  return Hoc
}

export { withLoginPage }
