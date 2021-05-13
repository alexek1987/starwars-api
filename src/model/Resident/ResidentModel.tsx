import { Expose } from 'class-transformer'

export class ResidentModel {
  @Expose({ name: 'name' })
  name: string

  @Expose({ name: 'url' })
  url: string
}
