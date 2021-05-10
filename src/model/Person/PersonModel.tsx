import { Expose } from 'class-transformer'

export class PersonModel {
  @Expose({ name: 'name' })
  name: string

  @Expose({ name: 'gender' })
  gender: string

  @Expose({ name: 'height' })
  height: string

  // @Type(() => Starship)
  // starships: Starship[]
}
