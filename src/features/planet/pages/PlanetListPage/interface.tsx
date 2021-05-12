import { PlanetsModel } from '@model/Planet/PlanetsModel'

export type PlanetListPageProps = {
  setPage: (setStateAction: any) => void
  data: PlanetsModel | undefined
  isLoading: boolean
}
