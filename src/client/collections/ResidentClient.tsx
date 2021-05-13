import { AxiosInstance } from 'axios'
import { plainToClass } from 'class-transformer'
import { ResidentModel } from '@model/Resident/ResidentModel'

export class ResidentClientActions {
  constructor(private client: AxiosInstance) {}

  async getResident(id: string) {
    const response = await this.client.get(`/people/${id}`)

    return plainToClass(ResidentModel, response.data)
  }
}
