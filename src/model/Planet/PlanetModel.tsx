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

  private _favorite_person: string

  get favorite_person() {
    if (!this._favorite_person) {
      this._favorite_person = this.residents[0].name
    }
    return this._favorite_person
  }

  set favorite_person(value: string) {
    this._favorite_person = value
  }
}
