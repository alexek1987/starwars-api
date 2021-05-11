import { Expose, Transform } from 'class-transformer'

export class PersonModel {
  @Expose({ name: 'name' })
  name: string

  @Expose({ name: 'favVehicle' })
  favVehicle: string

  @Expose({ name: 'favStarship' })
  favStarship: string

  @Expose({ name: 'url' })
  url: string
}
