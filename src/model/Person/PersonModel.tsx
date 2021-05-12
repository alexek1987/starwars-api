import { Type, Transform } from 'class-transformer'
import { StarshipModel } from '@model/Starship/StarshipModel'
import { VehicleModel } from '@model/Vehicle/VehicleModel'

export class PersonModel {
  birth_year: string

  created: string

  edited: string

  eye_color: string

  gender: string

  hair_color: string

  height: string

  mass: string

  name: string

  skin_color: string

  url: string

  @Type(() => StarshipModel)
  starships: StarshipModel[]

  @Type(() => VehicleModel)
  vehicles: VehicleModel[]

  private _primary_vehicle: string

  get primary_vehicle() {
    if (!this._primary_vehicle) {
      this._primary_vehicle = this.vehicles[0].name
    }
    return this._primary_vehicle
  }

  set primary_vehicle(value: string) {
    this._primary_vehicle = value
  }

  @Transform(({ obj }) => obj.starships[0], { toClassOnly: true })
  primary_starship: StarshipModel

  // @Transform(({ obj }) => obj.vehicles[0], { toClassOnly: true })
  // primary_vehicle: VehicleModel
}
