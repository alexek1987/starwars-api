import { PlanetsModel } from '@model/Planet/PlanetsModel'

export type PlanetListPageProps = {
  setPage: (setStateAction: any) => void
  page: number
  data: PlanetsModel | undefined
  isLoading: boolean
}
