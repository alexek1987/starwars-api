import { PersonModel } from '@model/Person/PersonModel'

export type PersonInfoProps = {
  data: PersonModel
  isLoading: boolean
  handleOnSubmit: (formValue: any) => void
  initialValues: any
}

export type Iship = {
  name: string
}

export type Ivehicle = {
  name: string
}
