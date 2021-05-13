import { Expose, Type } from 'class-transformer'
import { ResidentModel } from '@model/Resident/ResidentModel'

export class ResidentsModel {
  @Expose({ name: 'results' })
  @Type(() => ResidentModel)
  results: ResidentModel[]
}
