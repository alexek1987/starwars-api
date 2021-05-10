import { StarshipsModel } from '@model/Starship/StarshipsModel'

export type StarshipListPageProps = {
  data: StarshipsModel | undefined
  isLoading: boolean
}
