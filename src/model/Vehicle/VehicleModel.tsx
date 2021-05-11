import { Expose } from 'class-transformer'

export class VehicleModel {
  @Expose({ name: 'name' })
  name: string

  @Expose({ name: 'model' })
  model: string
}
