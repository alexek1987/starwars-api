import cx from 'classnames'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '@components/buttons/PrimaryButton'
import { EmailIcon } from '@components/Icons/Icons'
import logo from '@assets/images/logo.png'
import styles from './index.module.scss'

export function HomePage() {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' />
      </div>
      <div className={styles.title}>Starwars API</div>
      {/* <div className={cx(styles.contract, 'animate-bounce')}>
        <EmailIcon className='text-blue-800' />
        Contract me via <span>Ford@Sennalabs.com</span>
      </div> */}
      <PrimaryButton title=' Planets' onClick={() => navigate('/planets')} />
      <PrimaryButton title=' People' onClick={() => navigate('/people')} />
    </div>
  )
}
