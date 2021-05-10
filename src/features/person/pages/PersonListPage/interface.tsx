import { PeopleModel } from '@model/Person/PeopleModel'

export type PersonListPageProps = {
  data: PeopleModel | undefined
  isLoading: boolean
}
