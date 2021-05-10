import { Expose, Type } from 'class-transformer'
import { PersonModel } from '@model/Person/PersonModel'

export class PeopleModel {
  @Expose({ name: 'results' })
  @Type(() => PersonModel)
  results: PersonModel[]
}
