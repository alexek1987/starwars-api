import { Expose, Type } from 'class-transformer'
import { PlanetModel } from '@model/Planet/PlanetModel'

export class PlanetsModel {
  @Expose({ name: 'results' })
  @Type(() => PlanetModel)
  results: PlanetModel[]

  @Expose({ name: 'setPage' })
  setPage: number
}
