import React, { useState } from 'react'
import { PlanetListPageProps } from '@features/planet/pages/PlanetListPage/interface'
import { useAppClient } from '@client/useAppClient'
import { useQuery } from 'react-query'

const withPlanetList = (Component: React.FC<PlanetListPageProps>) => {
  function Hoc() {
    const appClient = useAppClient()
    const [page, setPage] = useState<number>(1)

    const { data, isLoading } = useQuery(['get-planet-list', page], () =>
      appClient?.planet.getPlanetList(page)
    )
    const newProps = {
      data,
      setPage,
      page,
      isLoading,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withPlanetList }
