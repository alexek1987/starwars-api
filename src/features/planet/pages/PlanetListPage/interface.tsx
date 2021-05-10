import { PlanetsModel } from '@model/Planet/PlanetsModel'

export type PlanetListPageProps = {
  data: PlanetsModel | undefined
  isLoading: boolean
}
