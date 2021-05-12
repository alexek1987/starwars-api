import { PeopleModel } from '@model/Person/PeopleModel'

export type PersonListPageProps = {
  setPage: (setStateAction: any) => void

  data: PeopleModel | undefined
  isLoading: boolean
}
