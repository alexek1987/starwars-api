import { FieldInputProps } from 'formik'

export type InputFieldAcceptProps = {
  name: string
  type: string
  label: string
}

export interface InputFieldProps extends FieldInputProps<string> {
  label: string
}
