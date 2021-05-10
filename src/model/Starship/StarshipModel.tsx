import { Expose } from 'class-transformer'

export class StarshipModel {
  @Expose({ name: 'name' })
  name: string

  @Expose({ name: 'starships' })
  starships: string

  @Expose({ name: 'url' })
  url: string
}
