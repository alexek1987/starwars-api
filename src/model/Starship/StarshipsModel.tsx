import { Expose, Type } from 'class-transformer'
import { StarshipModel } from '@model/Starship/StarshipModel'

export class StarshipsModel {
  @Expose({ name: 'results' })
  @Type(() => StarshipModel)
  results: StarshipModel[]
}
