import { Expose } from 'class-transformer'

export class FilmModel {
  @Expose({ name: 'name' })
  name: string

  @Expose({ name: 'url' })
  url: string
}
