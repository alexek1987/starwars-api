import { Expose } from 'class-transformer'

export class PersonInfoModel {
  @Expose({ name: 'name' })
  name: string

  @Expose({ name: 'gender' })
  gender: string

  @Expose({ name: 'height' })
  height: string

  @Expose({ name: 'url' })
  url: string

  @Expose({ name: 'starships' })
  starships: string

  @Expose({ name: 'vehicles' })
  vehicles: string

  sliceUrl() {
    this.url.slice(-3)
  }
}
