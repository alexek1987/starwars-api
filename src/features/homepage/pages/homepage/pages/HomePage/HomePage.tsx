import cx from 'classnames'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '@components/buttons/PrimaryButton'
import logo from '@assets/images/logo.png'
import { StarIcon } from '@components/Icons/Icons'
import styles from './index.module.scss'

export function HomePage() {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' />
      </div>

      <div className={cx(styles.contract, 'animate-bounce')}>
        <StarIcon height='200px' width='100px' className='text-yellow-300' />
        <span>StarWars Mini-project</span>
      </div>

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
