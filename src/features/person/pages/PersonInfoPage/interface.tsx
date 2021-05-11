import { PeopleModel } from '@model/Person/PeopleModel'

export type PersonInfoProps = {
  data: PeopleModel | undefined
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
