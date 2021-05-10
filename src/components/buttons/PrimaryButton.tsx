import { ButtonInterfaceProps } from '@components/buttons/interface'
import styles from './index.module.scss'

const PrimaryButton = ({ title, ...props }: ButtonInterfaceProps) => (
  <button type='submit' className={styles.container} {...props}>
    {title}
  </button>
)

export default PrimaryButton
