import { AxiosInstance } from 'axios'
import { Client } from '@client/Client'
import { plainToClass } from 'class-transformer'
import { PlanetModel } from '@model/Planet/PlanetModel'
import { PlanetsModel } from '@model/Planet/PlanetsModel'
import { ResidentModel } from '@model/Resident/ResidentModel'

export class PlanetClientActions {
  constructor(private client: AxiosInstance, private clientClass: Client) {}

  async getPlanetList(page: number) {
    const response = await this.client.get(`/planets/?page=${page}`)
    return plainToClass(PlanetsModel, { planets: response.data.results })
  }

  async getPlanet(id: string) {
    const response = await this.client.get(`/planets/${id}`)
    const PlanetResidentsIds: string[] = response.data.residents.map(
      residentURL => residentURL.split('/')[5]
    )

    const residentsPromises = [] as Promise<ResidentModel>[]

    PlanetResidentsIds.forEach(residentId =>
      residentsPromises.push(this.clientClass.resident.getResident(residentId))
    )

    const residentsResult = await Promise.all(residentsPromises)

    return plainToClass(PlanetModel, {
      ...response.data,
      residents: residentsResult,
    })
  }
}
