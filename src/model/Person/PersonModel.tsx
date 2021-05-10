import { Expose } from 'class-transformer'

export class PersonModel {
  @Expose({ name: 'name' })
  name: string

  @Expose({ name: 'gender' })
  gender: string

  @Expose({ name: 'height' })
  height: string

  @Expose({ name: 'isFav' })
  isFav: string

  @Expose({ name: 'starships' })
  starships: string

  // @Type(() => Starship)
  // starships: Starship[]
}
