import cx from 'classnames'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '@components/buttons/PrimaryButton'
import logo from '@assets/images/logo.png'
import styles from './index.module.scss'

export function HomePage() {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' />
      </div>
      <div className={styles.title}>Starwars Mini-project</div>
      <div className='flex'>
        <PrimaryButton
          title=' Planets Page'
          onClick={() => navigate('/planets')}
        />
        <PrimaryButton
          title='People Page'
          onClick={() => navigate('/people')}
        />
      </div>
    </div>
  )
}
