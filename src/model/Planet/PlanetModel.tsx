import { ResidentModel } from '@model/Resident/ResidentModel'
import { Type } from 'class-transformer'

export class PlanetModel {
  name: string

  rotation_period: string

  orbital_period: string

  diameter: string

  climate: string

  gravity: string

  terrain: string

  population: string

  surface_water: string

  url: string

  edited: string

  created: string

  @Type(() => ResidentModel)
  residents: ResidentModel[]
}
