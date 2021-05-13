import { PlanetModel } from '@model/Planet/PlanetModel'

export type PlanetInfoProps = {
  data: PlanetModel
  isLoading: boolean
  handleOnSubmit: (formValue: any) => void
  initialValues: any
}
