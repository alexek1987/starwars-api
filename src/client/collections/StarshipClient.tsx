import { AxiosInstance } from 'axios'
import { plainToClass } from 'class-transformer'
import { StarshipModel } from '@model/Starship/StarshipModel'

export class StarshipClientActions {
  constructor(private client: AxiosInstance) {}

  async getStarship(id: string) {
    const response = await this.client.get(`/starships/${id}`)

    return plainToClass(StarshipModel, response.data)
  }
}
