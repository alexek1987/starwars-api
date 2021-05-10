import React from 'react'
import { InputFieldProps } from '@components/form/InputField/interface'
import styles from './index.module.scss'
import { withInputField } from './withInputField'

const InputField = ({ name, label, ...props }: InputFieldProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <input autoComplete='off' id={name} {...props} />
    </div>
  )
}

export default withInputField(InputField)
