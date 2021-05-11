import { AxiosInstance } from 'axios'
import { plainToClass } from 'class-transformer'
import { VehicleModel } from '@model/Vehicle/VehicleModel'

export class VehicleClientActions {
  constructor(private client: AxiosInstance) {}

  async getVehicle(id: string) {
    const response = await this.client.get(`/vehicles/${id}`)

    return plainToClass(VehicleModel, response.data)
  }
}
