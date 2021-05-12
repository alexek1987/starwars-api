import { PeopleModel } from '@model/Person/PeopleModel'

export type PersonListPageProps = {
  setPage: (setStateAction: any) => void
  page: number
  data: PeopleModel | undefined
  isLoading: boolean
}
