import { AxiosInstance } from 'axios'
import { plainToClass } from 'class-transformer'
import { PlanetsModel } from '@model/Planet/PlanetsModel'

export class PlanetClientActions {
  constructor(private client: AxiosInstance) {}

  async getPlanetList() {
    const response = await this.client.get(`/planets`)
    return plainToClass(PlanetsModel, response.data)
  }
}
