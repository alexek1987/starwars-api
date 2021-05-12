import React, { useState } from 'react'
import { PersonListPageProps } from '@features/person/pages/PersonListPage/interface'
import { useAppClient } from '@client/useAppClient'
import { useQuery } from 'react-query'

const withPersonList = (Component: React.FC<PersonListPageProps>) => {
  function Hoc() {
    const appClient = useAppClient()
    const [page, setPage] = useState(1)
    const { data, isLoading } = useQuery(['get-person-list', page], () =>
      appClient?.person.getPersonList(page)
    )
    const newProps = {
      data,
      setPage,
      isLoading,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withPersonList }
