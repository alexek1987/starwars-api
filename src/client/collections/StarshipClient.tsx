import { AxiosInstance } from 'axios'
import { plainToClass } from 'class-transformer'
import { StarshipsModel } from '@model/Starship/StarshipsModel'

export class StarshipClientActions {
  constructor(private client: AxiosInstance) {}

  async getStarshipList() {
    const response = await this.client.get(`/people`)

    // for (let i = 0; i < response.data.results.length; i += 1) {
    //   console.log(response.data.results[i])
    // }
    // console.log(response.data.results[0].starships)

    return plainToClass(StarshipsModel, response.data)
  }
}
