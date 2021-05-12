import { Type } from 'class-transformer'
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

  @Type(() => StarshipModel)
  starships: StarshipModel[]

  url: string

  @Type(() => VehicleModel)
  vehicles: VehicleModel[]

  @Type(() => StarshipModel)
  primary_starship: StarshipModel
}