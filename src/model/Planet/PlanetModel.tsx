import { Expose } from 'class-transformer'

export class PlanetModel {
  @Expose({ name: 'name' })
  name: string

  @Expose({ name: 'terrain' })
  terrain: string

  @Expose({ name: 'climate' })
  climate: string

  @Expose({ name: 'population' })
  population: string
}
