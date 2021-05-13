import { Expose, Type } from 'class-transformer'
import { FilmModel } from '@model/Film/FilmModel'

export class FilmsModel {
  @Expose({ name: 'results' })
  @Type(() => FilmModel)
  results: FilmModel[]
}
