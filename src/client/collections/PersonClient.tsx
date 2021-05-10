import { AxiosInstance } from 'axios'
import { plainToClass } from 'class-transformer'
import { PeopleModel } from '@model/Person/PeopleModel'

export class PersonClientActions {
  constructor(private client: AxiosInstance) {}

  async getPersonList() {
    const response = await this.client.get(`/people`)
    return plainToClass(PeopleModel, response.data)
  }
}
