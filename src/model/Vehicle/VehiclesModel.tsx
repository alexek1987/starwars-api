import { Expose, Type } from 'class-transformer'
import { VehicleModel } from '@model/Vehicle/VehicleModel'

export class VehiclesModel {
  @Expose({ name: 'results' })
  @Type(() => VehicleModel)
  results: VehicleModel[]
}
