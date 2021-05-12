import { AxiosInstance } from 'axios'
import { plainToClass } from 'class-transformer'
import { PersonModel } from '@model/Person/PersonModel'
import { Client } from '@client/Client'
import { StarshipModel } from '@model/Starship/StarshipModel'
import { VehicleModel } from '@model/Vehicle/VehicleModel'
import { PeopleModel } from '@model/Person/PeopleModel'

export class PersonClientActions {
  constructor(private client: AxiosInstance, private clientClass: Client) {}

  async getPersonList(page: number) {
    const response = await this.client.get(`/people/?page=${page}`)
    return plainToClass(PeopleModel, { people: response.data.results })
  }

  async getPerson(id: string) {
    const response = await this.client.get(`/people/${id}`)
    const PersonStarshipsIds: string[] = response.data.starships.map(
      starshipURL => starshipURL.split('/')[5]
    )
    const PersonVehicleIds: string[] = response.data.vehicles.map(
      vehiclesURL => vehiclesURL.split('/')[5]
    )
    const starShipsPromises = [] as Promise<StarshipModel>[]
    const vehiclePromises = [] as Promise<VehicleModel>[]

    PersonStarshipsIds.forEach(starShipId =>
      starShipsPromises.push(this.clientClass.starship.getStarship(starShipId))
    )

    PersonVehicleIds.forEach(vehicleId =>
      vehiclePromises.push(this.clientClass.vehicle.getVehicle(vehicleId))
    )

    const starShipsResult = await Promise.all(starShipsPromises)

    const vehiclePromisesResult = await Promise.all(vehiclePromises)

    return plainToClass(PersonModel, {
      ...response.data,
      starships: starShipsResult,
      vehicles: vehiclePromisesResult,
    })
  }
}
