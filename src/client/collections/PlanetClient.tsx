import { AxiosInstance } from 'axios'
import { plainToClass } from 'class-transformer'
import { PlanetsModel } from '@model/Planet/PlanetsModel'

export class PlanetClientActions {
  constructor(private client: AxiosInstance) {}

  async getPlanetList(page: number) {
    const response = await this.client.get(`/planets/?page=${page}`)
    return plainToClass(PlanetsModel, response.data)
  }
}
