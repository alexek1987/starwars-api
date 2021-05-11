import { PersonListPageProps } from '@features/person/pages/PersonListPage/interface'
import { useAppClient } from '@client/useAppClient'
import { useQuery } from 'react-query'

const withPersonList = (Component: React.FC<PersonListPageProps>) => {
  function Hoc() {
    const appClient = useAppClient()

    const { data, isLoading } = useQuery('get-person-list', () =>
      appClient?.person.getPersonList()
    )
    const newProps = {
      data,
      isLoading,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withPersonList }
