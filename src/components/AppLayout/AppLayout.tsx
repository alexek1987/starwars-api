import { FunctionComponentType } from '@interfaces/common/FunctionComponentType'

import styles from './index.module.scss'

export function AppLayout({ children }: FunctionComponentType) {
  return (
    <div className={styles.container}>
      <div className={styles.body}>{children}</div>
    </div>
  )
}
