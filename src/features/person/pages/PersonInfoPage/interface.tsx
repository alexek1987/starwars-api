import { PersonInfoModel } from '@model/Person/PersonInfoModel'

export type PersonInfoProps = {
  name: string
  gender: string
  hair_color: string
  starships: string
  vehicles: string
  handleStarshipChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleVehicleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  sliceUrl: () => string
}

export type Iship = {
  name: string
}

export type Ivehicle = {
  name: string
}
